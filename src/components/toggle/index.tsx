import { View, Text, Switch } from 'react-native';
import { styles } from './styles';

interface ToggleProps {
  title: string;
  value: boolean;
  onChangeValue: () => void;
}

const Toggle = ({ title, value, onChangeValue }: ToggleProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Switch
        value={value}
        trackColor={{ false: '#ddd', true: '#FFD700' }}
        thumbColor={'white'}
        ios_backgroundColor="#ddd"
        onValueChange={onChangeValue}
      />
    </View>
  );
};

export { Toggle };
