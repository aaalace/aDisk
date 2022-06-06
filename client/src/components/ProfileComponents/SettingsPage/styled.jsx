import styled from 'styled-components'
import { HomePageDevices } from '../../../lib/devices';


export const SettingsContainer = styled.div`

    @media ${HomePageDevices.desktop} {
        align-items: flex-start;
        width: calc(100vw - 300px);
        margin-left: 300px;
    }

    @media ${HomePageDevices.tablet} {
        align-items: flex-start;
        width: calc(100vw - 200px);
        margin-left: 200px;
    }

    @media ${HomePageDevices.mobile} {
        align-items: center;
        width 100vw;
    }
`

export const SettingsHeader = styled.div`

    @media ${HomePageDevices.desktop} {
    }

    @media ${HomePageDevices.tablet} {
    }

    @media ${HomePageDevices.mobile} {
        padding-top: 20px;
        justify-content: center;
        width 100vw;
    }
`

export const SettingsBlock = styled.div`

    @media ${HomePageDevices.desktop} {
    }

    @media ${HomePageDevices.tablet} {
    }

    @media ${HomePageDevices.mobile} {
        justify-content: center;
        width 100vw;
    }
`