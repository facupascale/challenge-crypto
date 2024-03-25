import { useEffect } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Icons } from '@constants';
import { useLogin } from '@hooks';
import { useAuthStore } from '@store';
import { Modal } from '@components';
import { styles } from './styles';

const Login = () => {
  const { login } = useLogin();
  const { setLoginError, loginError } = useAuthStore();

  useEffect(() => {
    if (loginError.length > 0) {
      setTimeout(() => {
        setLoginError('');
      }, 3000);
    }
  }, [loginError]);

  return (
    <SafeAreaView edges={['top']} style={styles.screen} testID="loginScreen">
      <Modal
        visible={loginError.length > 0}
        onRequestClose={() => setLoginError('')}
        text={loginError}
      />
      <TouchableOpacity onPress={() => login()} style={styles.button}>
        <Icons.GoogleIcon width={20} height={20} />
        <Text style={styles.buttonTitle}>Sign in with Google</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export { Login };
