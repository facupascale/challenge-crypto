import { useNavigation as useNavigationRN } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RoutesParamList } from '@types';

const useNavigation = () => {
  const { navigate } = useNavigationRN<StackNavigationProp<RoutesParamList>>();
  return { navigate };
};

export { useNavigation };
