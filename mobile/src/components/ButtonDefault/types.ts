import { TouchableOpacityProps } from 'react-native';


export interface PropsButton extends TouchableOpacityProps{
  marginTop?: number;
  backgroundColor?: string;
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
  width?: number;
  height?: number;
  fontSize?: number;
  fontColor?: string;
}