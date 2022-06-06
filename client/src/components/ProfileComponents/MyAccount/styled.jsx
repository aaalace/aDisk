import styled from 'styled-components'
import { HomePageDevices } from '../../../lib/devices';


export const MyAccountView = styled.div`

    @media ${HomePageDevices.desktop} {
        width: calc(100vw - 380px);
        margin-left: 300px;
    }

    @media ${HomePageDevices.tablet} {
        width: calc(100vw - 240px);
        margin-left: 200px;
    }

    @media ${HomePageDevices.mobile} {
        display: none;
    }
`


export const MyAccountHeader = styled.div`

    @media ${HomePageDevices.desktop} {
        width: 100%;
    }

    @media ${HomePageDevices.tablet} {
        width: 100%;
    }

    @media ${HomePageDevices.mobile} {
        display: none;
    }
`

export const HeaderDataContainer = styled.div`

    @media ${HomePageDevices.desktop} {
        width: calc(100vw - 480px);
    }

    @media ${HomePageDevices.tablet} {
        width: calc(100vw - 380px);
    }

    @media ${HomePageDevices.mobile} {
        display: none;
    }
`

export const MyAccountData = styled.div`

    @media ${HomePageDevices.desktop} {
        width: calc(100vw - 480px);
    }

    @media ${HomePageDevices.tablet} {
        width: calc(100vw - 380px);
    }

    @media ${HomePageDevices.mobile} {
        display: none;
    }
`