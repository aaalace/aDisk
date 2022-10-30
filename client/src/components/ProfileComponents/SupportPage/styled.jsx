import styled from 'styled-components'
import { HomePageDevices } from '../../../lib/devices';


export const SupportContainer = styled.div`

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
        margin-top: 40px;
        padding-top: 70px;
    }
`

export const QuestionContainer = styled.div`

    @media ${HomePageDevices.desktop} {
        ${props => props.id % 2 === 0 ? 'margin-left: 30%;' : ';'}
        width: 40%;
    }

    @media ${HomePageDevices.tablet} {
        width: 70%;
    }

    @media ${HomePageDevices.mobile} {
        width 90%;
        margin-top: 50px;
    }
`