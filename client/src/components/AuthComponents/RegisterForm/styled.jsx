import styled from 'styled-components'
import { LoginPageDevices } from '../../../lib/devices';

export const RegisterFormStyled = styled.div`
    @media ${LoginPageDevices.desktop} { 
        min-height: 85vh;
        min-width: 25vw;
        justify-content: center;
    }

    @media ${LoginPageDevices.mobile} {
        flex-direction: column;
        width: 100vw;
        min-height: 70vh;
        justify-content: flex-start;
    }
}`