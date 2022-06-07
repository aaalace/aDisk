import styled from 'styled-components'
import { LoginPageDevices } from '../../lib/devices';

export const LoginPage = styled.div`
    @media ${LoginPageDevices.desktop} { 
        align-items: center;
    }

    @media ${LoginPageDevices.mobile} {
    }
}`


export const LoginContainer = styled.div`
    @media ${LoginPageDevices.desktop} { 
        flex-direction: row;
        align-items: center;
    }

    @media ${LoginPageDevices.mobile} {
        flex-direction: column;
    }
}`