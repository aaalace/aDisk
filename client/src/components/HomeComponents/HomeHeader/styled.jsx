import styled from 'styled-components'
import { HomePageDevices } from '../../../lib/devices';

export const HomeHeaderStyled = styled.div`

    @media ${HomePageDevices.desktop} { 
        ${props => props.scrolled ? 
            'z; z-index: 3; background-color: var(--home_header_background); transition-duration: .6s; backdrop-filter: blur(10px);'
        : 
            'padding: 30px 0 5px 0; background-color: transparent;'
        }
    }

    @media ${HomePageDevices.tablet} {
        ${props => props.scrolled ? 
            'border-bottom: 1px solid #44444430; z-index: 3; background-color: var(--home_header_background); transition-duration: .6s; backdrop-filter: blur(10px);'
        : 
            'padding: 30px 0 5px 0; background-color: transparent;'
        }
    }

    @media ${HomePageDevices.mobile} {
        ${props => props.scrolled ? 
            'border-bottom: 1px solid #44444430; z-index: 3; background-color: var(--home_header_background); transition-duration: .6s; backdrop-filter: blur(10px);'
        : 
            'padding: 30px 0 5px 0; background-color: transparent;'
        }
    }
`


export const HomeHeaderPayment = styled.button`

    @media ${HomePageDevices.desktop} { 
        ${props => props.scrolled ? 
            'color: var(--scrolled_pay);'
        : 
            'color: var(--non_scrolled_pay);'
        }
    }

    @media ${HomePageDevices.tablet} {
        ${props => props.scrolled ? 
            'color: var(--scrolled_pay);'
        : 
            'color: var(--non_scrolled_pay);'
        }
    }

    @media ${HomePageDevices.mobile} {
        ${props => props.scrolled ? 
            'color: var(--scrolled_pay);'
        : 
            'color: var(--non_scrolled_pay);'
        }
    }
`