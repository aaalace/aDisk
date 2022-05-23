import styled from 'styled-components'
import { LoginPageDevices } from '../../lib/devices';

export const CarouselContainer = styled.div`
    @media ${LoginPageDevices.desktop} { 
        display: flex;
        width: 45vw;
        min-height: 85vh;
        border-radius: 0 10px 10px 0;
    }

    @media ${LoginPageDevices.mobile} {
        display: flex;
        width: 100vw;
        height: 30vh;
    }
}`

export const CarouselDescription = styled.div`
    @media ${LoginPageDevices.desktop} { 
        display: flex;
    }

    @media ${LoginPageDevices.mobile} {
        display: none;
    }
}`