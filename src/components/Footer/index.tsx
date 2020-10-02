import React, { FunctionComponent } from 'react';
import { Container, Info, NoWrap } from './style';

export const Footer: FunctionComponent<{}> = () => {
    return (
        <Container>
            <Info>
                <NoWrap>&copy; 2020</NoWrap>{' '}
                <NoWrap>
                    &laquo;Topp Quality&raquo;
                </NoWrap>
            </Info>
            <Info>Não usamos cookies :)</Info>
        </Container>
    );
};
