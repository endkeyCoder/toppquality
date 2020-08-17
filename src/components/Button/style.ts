import styled from 'styled-components';
import { media, withTheme } from '../../style';

export const ButtonContainer = withTheme(styled.button`
   padding: 1em;
   border-radius: 5px;
   font-size: 1em;
   background-color: ${props => props.backgroundColor};
   font-size: ${props => props.theme.font[props.fontSize]};
   color: #fff;
   border-color: #075e54;
   text-shadow: 1px 1px 2px #000;
   margin: 0.5em;
   
`);
