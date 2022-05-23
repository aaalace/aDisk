import styled from 'styled-components'
import { LoginPageDevices } from '../../lib/devices';

export const LoginContainer = styled.div`
    @media ${LoginPageDevices.desktop} { 
        flex-direction: row;
    }

    @media ${LoginPageDevices.mobile} {
        flex-direction: column;
    }
}`