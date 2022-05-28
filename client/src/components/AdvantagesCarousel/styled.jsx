import styled from 'styled-components'
import { LoginPageDevices } from '../../lib/devices';

export const CarouselContainer = styled.div`
    @media ${LoginPageDevices.desktop} { 
        display: flex;
        width: 45vw;
        min-height: 85vh;
        background: var(--advantages_carousel_bg);
        object-fit: cover;
    }

    @media ${LoginPageDevices.mobile} {
        display: flex;
        width: 100vw;
        height: 200px;
        background: var(--advantages_carousel_mobile);
        background-size: 100vw 400px;
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