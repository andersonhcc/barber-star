import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';


export interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}
