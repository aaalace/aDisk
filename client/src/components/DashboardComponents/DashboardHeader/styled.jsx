import styled from 'styled-components'
import { HomePageDevices } from '../../../lib/devices';

export const DashboardHeaderStyled = styled.div`

    @media ${HomePageDevices.desktop} {
        display: flex;
        width: calc(100vw - 380px);
        margin-left: 300px;
    }

    @media ${HomePageDevices.tablet} {
        display: flex;
        width: calc(100vw - 240px);
        margin-left: 200px;
    }

    @media ${HomePageDevices.mobile} {
        display: none;
    }
`