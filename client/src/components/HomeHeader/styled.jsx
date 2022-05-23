import styled from 'styled-components'
import { HomePageDevices } from '../../lib/devices';

export const HomeHeaderStyled = styled.div`

    @media ${HomePageDevices.desktop} { 
        ${props => props.scrolled ? 
            'border-bottom: 1px solid #44444430; z-index: 3; background-color: var(--home_header_background); transition-duration: .6s;'
        : 
            'padding: 30px 0 5px 0; background-color: transparent;'
        }
    }

    @media ${HomePageDevices.tablet} {
        ${props => props.scrolled ? 
            'border-bottom: 1px solid #44444430; z-index: 3; background-color: var(--home_header_background); transition-duration: .6s;'
        : 
            'padding: 30px 0 5px 0; background-color: transparent;'
        }
    }

    @media ${HomePageDevices.mobile} {
        ${props => props.scrolled ? 
            'border-bottom: 1px solid #44444430; z-index: 3; background-color: var(--home_header_background); transition-duration: .6s;'
        : 
            'padding: 30px 0 5px 0; background-color: transparent;'
        }
    }
`