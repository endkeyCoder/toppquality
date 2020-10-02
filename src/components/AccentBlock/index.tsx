import React, { FunctionComponent } from 'react';

import { withEffects } from '../../lib/effects';
import { AccentBlockContainer, Inner, Dash } from './style';
import { Props } from './type';
import { Button } from '../Button';

const AccentBlockComponent: FunctionComponent<Props> = props => {
    const { html, fontSize = 'large', button = '' } = props;
    
    return (
        <AccentBlockContainer fontSize={fontSize} {...props}>
            <Dash />
            <Inner dangerouslySetInnerHTML={{ __html: html }} />
            {
                !!button && (
                    <Button title="whatsapp" backgroundColor="#25d366"/>
                )
            }
            <Dash bottom />
        </AccentBlockContainer>
    );
};


export const AccentBlock = withEffects(AccentBlockComponent);
