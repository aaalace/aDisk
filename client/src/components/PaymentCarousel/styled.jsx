import styled from 'styled-components'
import { HomePageDevices } from '../../lib/devices';

export const PaymentCarouselStyled = styled.div`

    @media ${HomePageDevices.desktop} {
        display: flex;
    }

    @media ${HomePageDevices.tablet} {
        display: flex;
    }

    @media ${HomePageDevices.mobile} {
        display: flex;
        align-items: center;
    }
`

export const PaymentCarouselBlockStyled = styled.div`

    @media ${HomePageDevices.desktop} {
        width: 800px;
    }

    @media ${HomePageDevices.tablet} {
        width: 700px;
    }

    @media ${HomePageDevices.mobile} {
        flex-direction: column;
        width: 70vw
    }
`

export const ADPLUSstyled = styled.div`

    @media ${HomePageDevices.desktop} {
        width: 300px;
    }

    @media ${HomePageDevices.tablet} {
        width: 300px;
    }

    @media ${HomePageDevices.mobile} {
        margin-top: 40px;
        width: 100%;
    }
`

export const Standardstyled = styled.div`

    @media ${HomePageDevices.desktop} {
        margin-top: 40px;
        width: 300px;
    }

    @media ${HomePageDevices.tablet} {
        margin-top: 40px;
        width: 300px;
    }

    @media ${HomePageDevices.mobile} {
        margin-top: 40px;
        margin-bottom: 150px;
        width: 100%;
    }
`