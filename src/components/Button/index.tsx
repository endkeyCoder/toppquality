import React, { FunctionComponent, MouseEvent } from 'react';
import { withEffects } from '../../lib/effects'
import { IButton } from './types';
import { ButtonContainer } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ButtonComponent: FunctionComponent<IButton> = props => {
    const { title = "Um botão", fontSize = "standard", backgroundColor = "#f5f5f5" } = props;
    const handleClick = (evt: MouseEvent) => {
        evt.preventDefault();
        window.open(`https://wa.me/5515997692009?text=Olá, gostaria de saber mais sobre o produto!`.replace(' ', '%20'))
    }
    return (
        <div>
            <ButtonContainer fontSize={fontSize} backgroundColor={backgroundColor} onClick={handleClick}>
                {title}
            </ButtonContainer>
            <FontAwesomeIcon icon={['fab', 'apple']} />
        </div>

    )
}


export const Button = withEffects(ButtonComponent);