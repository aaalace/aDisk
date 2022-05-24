import styled from 'styled-components'
import { HomePageDevices } from '../../lib/devices';

export const LanguagueSelect = styled.div`

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