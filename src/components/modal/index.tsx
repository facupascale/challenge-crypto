import { Modal as ModalRN, View, Text } from 'react-native';
import { styles } from './styles';

interface ModalProps {
  visible: boolean;
  onRequestClose: () => void;
  text: string;
}

const Modal = ({ visible, onRequestClose, text }: ModalProps) => {
  return (
    <ModalRN
      animationType="slide"
      transparent={true}
      visible={visible}
      style={{ flex: 1 }}
      onRequestClose={onRequestClose}
    >
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.buttonTitle}>{text}</Text>
        </View>
      </View>
    </ModalRN>
  );
};

export { Modal };
