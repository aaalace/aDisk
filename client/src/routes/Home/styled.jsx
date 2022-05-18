import styled from 'styled-components'
import { HomePageDevices } from '../../devices';
import abiltyHome from '../../images/abilityHome.svg'
import docsHome from '../../images/docsHome.jpg'
import findHome from '../../images/findHome.jpg'
import docHome from '../../images/2docHome.svg'

const images = {
    1: abiltyHome,
    2: docsHome,
    3: docHome,
    4: findHome
}

export const HomeBlock = styled.div`

    @media ${HomePageDevices.desktop} { 
        width: 65%;
        min-width: 1000px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media ${HomePageDevices.tablet} {
        width: 80%;
        min-width: 670px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media ${HomePageDevices.mobile} {
        width: 90%;
    }
`

export const HomeBlockInfo = styled.div`

    @media ${HomePageDevices.desktop} {
        display: flex;
        width: 60%;
        padding: ${props => props.id % 2 === 0 ? '40px' : ''}
    }

    @media ${HomePageDevices.tablet} {
        display: flex;
        width: 50%;
        padding: ${props => props.id % 2 === 0 ? '30px' : ''}
    }

    @media ${HomePageDevices.mobile} {
        display: flex;
    }
`

export const HomeBlockName = styled.div`

    @media ${HomePageDevices.desktop} {
        font-size: 30px;
        margin: 10px 0;
        width: 70%;
    }

    @media ${HomePageDevices.tablet} {
        font-size: 25px;
        margin: 10px 0;
    }

    @media ${HomePageDevices.mobile} 
        margin: 8px 0
    }
`


export const HomeBlockDescription = styled.div`

    @media ${HomePageDevices.desktop} {
        font-size: 20px;
        margin: 10px 0;
        width: 70%;
    }

    @media ${HomePageDevices.tablet} {
        font-size: 20px;
        margin: 10px 0;
    }

    @media ${HomePageDevices.mobile} {
        margin: 8px 0
    }
`

export const HomeBlockButton = styled.div`

    @media ${HomePageDevices.desktop} {
        display: flex;
        width: 70%;
        margin: 30px 0;
        padding: 10px
    }

    @media ${HomePageDevices.tablet} {
        display: flex;
        width: 100%;
        min-width: 200px;
        margin: 30px 0;
        padding: 10px
    }

    @media ${HomePageDevices.mobile} {
        display: none;
    }
`

export const HomeBlockImage = styled.div`

    @media ${HomePageDevices.desktop} {
        display: flex;
        width: 600px;
        height: 500px;
        background-image: url(${props => images[props.id]});
    }

    @media ${HomePageDevices.tablet} {
        display: flex;
        width: 300px;
        height: 300px;
        background-image: url(${props => images[props.id]});
    }

    @media ${HomePageDevices.mobile} {
        display: none
    }
`