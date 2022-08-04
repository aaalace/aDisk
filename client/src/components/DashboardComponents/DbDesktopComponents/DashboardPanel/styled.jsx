import styled from 'styled-components'
import { HomePageDevices } from '../../../../lib/devices';


export const DashboardPanelStyled = styled.div`

    @media ${HomePageDevices.desktop} {
        width: 300px;
    }

    @media ${HomePageDevices.tablet} {
        width: 200px;
    }

    @media ${HomePageDevices.mobile} {
        display: none;
    }
`