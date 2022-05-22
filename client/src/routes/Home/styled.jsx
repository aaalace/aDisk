import styled from 'styled-components'
import { HomePageDevices } from '../../lib/devices';

import divsvg2 from '../../images/div2.svg'
import divsvg3 from '../../images/div3.svg'
import divsvg4 from '../../images/div4.svg'

const images = {
    2: [divsvg2],
    3: [divsvg3],
    4: [divsvg4]
}

export const HomeBlock = styled.div`

    @media ${HomePageDevices.desktop} { 
        width: 1000px;
        display: flex;
        align-items: center;
        justify-content: center;
        ${props => props.id === 1 ? 'height: 100vh;' : ''}
        ${props => props.id === 1 ? 'height: 100vh;' : ''}
        ${props => props.id === 2 ? 'padding: 40px 0 0 0;' : ''}
        ${props => props.id === 4 ? 'padding: 0 0 60px 0;' : ''}
    }

    @media ${HomePageDevices.tablet} {
        width: 650px;
        display: flex;
        align-items: center;
        justify-content: center;
        ${props => props.id === 1 ? 'margin: 64px 0 0 0;' : 'min-height: 50vh;'}
        ${props => props.id === 1 ? 'min-height: calc(100vh - 64px);' : 'min-height: 50vh;'}
        ${props => props.id === 2 ? 'padding: 40px 0 0 0;' : ''}
        ${props => props.id === 4 ? 'padding: 0 0 60px 0;' : ''}
    }

    @media ${HomePageDevices.mobile} {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 80%;
        ${props => props.id === 1 ? 'margin: 15vh 0 0 0;' : 'justify-content: center;'}
        ${props => props.id === 1 ? 'min-height: calc(100vh - 64px);' : 'min-height: 50vh;'}

    }
`

export const HomeBlockInfo = styled.div`

    @media ${HomePageDevices.desktop} {
        display: flex;
        width: 50%;
        height: 500px;
    }

    @media ${HomePageDevices.tablet} {
        display: flex;
        width: 50%;
        height: 350px;
    }

    @media ${HomePageDevices.mobile} {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
`

export const HomeBlockName = styled.div`

    @media ${HomePageDevices.desktop} {
        ${props => props.id === 1 ? 'font-size: 35px;' : 'font-size: 30px;'};
        ${props => props.id === 1 ? 'width: 100%;' : 'width: 75%;'};
        margin: 10px 0;
    }

    @media ${HomePageDevices.tablet} {
        ${props => props.id === 1 ? 'font-size: 38px;' : 'font-size: 25px;'};
        ${props => props.id === 1 ? 'width: 100%;' : 'width: 75%;'};
        margin: 10px 0;
    }

    @media ${HomePageDevices.mobile} {
        font-size: 38px;
        text-align: center;
    }
`

export const HomeBlockDescription = styled.div`

    @media ${HomePageDevices.desktop} {
        ${props => props.id === 1 ? 'font-size: 25px;' : 'font-size: 22px;'};
        ${props => props.id === 1 ? 'width: 100%;' : 'width: 75%;'};
        margin: 20px 0;
    }

    @media ${HomePageDevices.tablet} {
        ${props => props.id === 1 ? 'font-size: 22px;' : 'font-size: 18px;'};
        ${props => props.id === 1 ? 'width: 100%;' : 'width: 75%;'};
        margin: 20px 0;
    }

    @media ${HomePageDevices.mobile} {
        margin: 20px 0 0 0;
        font-size: 20px;
        text-align: center;
    }
`

export const HomeBlockButton = styled.div`

    @media ${HomePageDevices.desktop} {
        display: flex;
        ${props => props.id === 1 ? 'font-size: 25px;' : 'font-size: 22px;'};
        ${props => props.id === 1 ? 'width: 100%;' : 'width: 75%;'};
        margin: 10px 0;
        padding: 10px;
        box-shadow: rgba(80, 63, 205, 0.5) 7px 7px 10px;
    }

    @media ${HomePageDevices.tablet} {
        display: flex;
        ${props => props.id === 1 ? 'font-size: 25px;' : 'font-size: 22px;'};
        ${props => props.id === 1 ? 'width: 100%;' : 'width: 75%;'};
        margin: 10px 0;
        min-width: 200px;
        padding: 5px;
    }

    @media ${HomePageDevices.mobile} {
        display: none;
    }
`

export const HomeBlockImage = styled.div`

    @media ${HomePageDevices.desktop} {
        display: flex;
        width: 500px;
        height: 500px;
        background-image: url(${props => images[props.id][0]});
        margin: 20px 0;
    }

    @media ${HomePageDevices.tablet} {
        display: flex;
        width: 350px;
        height: 350px;
        background-image: url(${props => images[props.id][0]});
        margin: 20px 0;
    }
    @media ${HomePageDevices.mobile} {
        display: none;
    }
`