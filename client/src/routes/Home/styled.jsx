import styled from 'styled-components'
import { HomePageDevices } from '../../lib/devices';

import divsvg2 from '../../images/data_extraction.svg'
import divsvg3 from '../../images/memory_storage.svg'
import divsvg4 from '../../images/text_files.svg'

const images = {
    2: [divsvg2],
    3: [divsvg3],
    4: [divsvg4]
}


export const HomeBlockContainer = styled.div`

    @media ${HomePageDevices.desktop} { 
        ${props => props.id % 2 === 0 ? 
            'background: var(--home_background_even);' 
        : 
        props.id === 1 ? 
            'background: var(--home_background_main);' 
        : 'background: var(--home_background_odd);'
        };
    }

    @media ${HomePageDevices.tablet} {
        ${props => props.id % 2 === 0 ? 
            'background: var(--home_background_even);' 
        : 
        props.id === 1 ? 
            'background: var(--home_background_main);' 
        : 'background: var(--home_background_odd);'
        };
    }

    @media ${HomePageDevices.mobile} {
        ${props => props.id % 2 === 0 ? 
            'background: var(--home_background_even);' 
        : 
        props.id === 1 ? 
            'background: var(--home_background_main);' 
        : 'background: var(--home_background_odd);'
        };
    }
`

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
        ${props => props.id === 1 ? 'min-height: calc(100vh - 64px);' : 'margin: 20px 0 5vh 0;'}

    }
`

export const HomeBlockInfo = styled.div`

    @media ${HomePageDevices.desktop} {
        display: flex;
        width: 50%;
        height: 500px;
        ${props => props.id !== 1 ? 'color: var(--unscrolled_text);' : 'color: var(--black_to_white);'};
    }

    @media ${HomePageDevices.tablet} {
        display: flex;
        width: 50%;
        height: 350px;
        ${props => props.id !== 1 ? 'color: var(--unscrolled_text);' : 'color: var(--black_to_white);'};
    }

    @media ${HomePageDevices.mobile} {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-top: 20px;
        ${props => props.id !== 1 ? 'color: var(--unscrolled_text);' : 'color: var(--black_to_white);'};
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
        font-size: 28px;
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
        width: ${props => props.id % 2 === 0 ? '560px' : '680px'};
        height: ${props => props.id % 2 === 0 ? '600px' : '590px'};
        background-image: url(${props => images[props.id][0]});
        margin: 20px 0;
    }

    @media ${HomePageDevices.tablet} {
        display: flex;
        width: ${props => props.id % 2 === 0 ? '350px' : '400px'};
        height: ${props => props.id % 2 === 0 ? '380px' : '360px'};
        background-image: url(${props => images[props.id][0]});
        margin: 20px 0;
    }
    @media ${HomePageDevices.mobile} {
        display: flex;
        width: ${props => props.id % 2 === 0 ? '250px' : '300px'};
        height: ${props => props.id % 2 === 0 ? '280px' : '260px'};
        background-image: url(${props => images[props.id][0]});
        margin: 20px 0;
    }
`