import styled from 'styled-components'
import { HomePageDevices } from '../../lib/devices';


export const DashboardMainStyled = styled.div`

    @media ${HomePageDevices.desktop} {
        width: calc(100vw - 350px);
        margin-left: 300px;
        margin-bottom: 50px;
    }

    @media ${HomePageDevices.tablet} {
        width: calc(100vw - 250px);
        margin-left: 200px;
        margin-bottom: 50px;
    }

    @media ${HomePageDevices.mobile} {
        display: none;
    }
`