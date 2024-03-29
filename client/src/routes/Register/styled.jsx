import styled from 'styled-components'
import { LoginPageDevices } from '../../lib/devices';

export const RegisterPage = styled.div`
    @media ${LoginPageDevices.desktop} { 
        align-items: center;
    }

    @media ${LoginPageDevices.mobile} {
    }
}`

export const RegisterContainer = styled.div`
    @media ${LoginPageDevices.desktop} { 
        flex-direction: row;
    }

    @media ${LoginPageDevices.mobile} {
        flex-direction: column;
    }
}`