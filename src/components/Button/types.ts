import { FontSize } from '../../type';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export interface IButton extends FontAwesomeIconProps {
    title: string;
    backgroundColor: string;
    fontSize: FontSize;
}