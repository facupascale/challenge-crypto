import { TextInput } from 'react-native';

interface SearchComponentProps {
  onChangeText: (text: string) => void;
}

const SearchComponent = ({ onChangeText }: SearchComponentProps) => {
  return (
    <TextInput
      placeholder="Search"
      onChangeText={onChangeText}
      style={{
        width: '50%',
        alignSelf: 'center',
        paddingLeft: 15,
        height: 40,
        backgroundColor: '#ddd',
        borderRadius: 10,
        color: 'black',
      }}
    />
  );
};

export { SearchComponent };
