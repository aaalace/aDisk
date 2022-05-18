import styled from 'styled-components'
import { LoginPageDevices } from '../../devices'

export const LoginFormStyled = styled.div`
    @media ${LoginPageDevices.desktop} { 
        min-height: 85vh;
        min-width: 25vw;
        border-radius: 10px 0 0 10px
    }

    @media ${LoginPageDevices.mobile} {
        flex-direction: column;
        width: 100vw;
        height: 70vh
    }
}`