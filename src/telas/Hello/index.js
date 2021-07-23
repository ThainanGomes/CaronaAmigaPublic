import React from 'react';
import { Container, LoadingIcon } from './style';

import CirculosSvg from '../../assets/Icons/Circulos/circulos.svg';

export default () => {
    return (
        <Container>
            <CirculosSvg />
            <LoadingIcon size="large" color="#565656"/>
        </Container>
    )
}