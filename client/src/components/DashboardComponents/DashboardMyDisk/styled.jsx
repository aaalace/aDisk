import styled from 'styled-components'
import { HomePageDevices } from '../../../lib/devices';

import { options } from './formats-colors'

export const DashboardItemsContainerStyled = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-auto-flow: dense;
    width: 90%;

    @media ${HomePageDevices.desktop} {
        ${props => props.cnt < 5 ? 
            'grid-template-columns: repeat(auto-fit, minmax(200px, 200px))'
        : 
            'grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))'
        };
    }

    @media ${HomePageDevices.tablet} {
        ${props => props.cnt < 5 ? 
            'grid-template-columns: repeat(auto-fit, minmax(150px, 150px));'
        : 
            'grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));'
        };
    }

    @media ${HomePageDevices.mobile} {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 90vw;
    }
`

export const DashboardItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--item-bg);
    border-radius: 8px;
    cursor: pointer;
    max-width: 250px;

    &:hover {
        background: var(--item-bg);
    }

    @media ${HomePageDevices.desktop} {
        aspect-ratio: 1/1;
    }

    @media ${HomePageDevices.tablet} {
        aspect-ratio: 1/1;
    }

    @media ${HomePageDevices.mobile} {
        flex-direction: row;
        width: 100%;
        height: 50px;
        border: 0;
        border-radius: 0;
        max-width: 100%;
    }
`

export const DashboardFolderItemStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-conyent-center
    width: 100%;
    height: 100px;
    max-width: 100%;

    &:hover {
        background: var(--item-bg);
    }

`

export const DbItemPreviewStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 75%;
    border-radius: 8px 8px 0 0;
    color: ${props => props.format in options ? 'white' : 'var(--black_to_white)'};
    background-color: ${props => props.format in options ? options[props.format] : 'var(--profile-bg)'};
    border-bottom: 1px solid var(--item-bg);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    text-decoration: none;
    user-select: none;

    p {
        font-size:30px;
        overflow: hidden;
        max-width: 90%;
    }

    @media ${HomePageDevices.mobile} {
        min-width: 50px;
        max-width: 50px;
        height: 100%;
        border-radius: 4px;
        border-bottom: 0;
        border: 1px solid var(--item-bg);

        p {
            font-size: 16px;
            overflow: hidden;
            max-width: 90%;
        }
    }
`


export const DbFolderItemPreviewStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px 8px 0 0;
    color: ${props => props.format in options ? 'white' : 'var(--black_to_white)'};
    background-color: ${props => props.format in options ? options[props.format] : 'var(--profile-bg)'};
    border-bottom: 1px solid var(--item-bg);
    min-width: 50px;
    max-width: 50px;
    height: 50px;
    border-radius: 4px;
    border-bottom: 0;
    border: 1px solid var(--item-bg);
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    text-decoration: none;
    user-select: none;
    margin: 3px 0;

    p {
        font-size:16px;
        overflow: hidden;
        max-width: 90%;
    }
`


export const DbItemNameStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 15px;
    width: 100%;
    height: 25%;
    color: var(--black_to_white);
    border-radius: 0 0 8px 8px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;

    p {
        overflow: hidden;
        white-space: nowrap;
    }

    @media ${HomePageDevices.mobile} {
        height: 90%;
    }
`

export const DbFolderItemNameStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 5px 15px;
    width: 100%;
    height: 90%;
    color: var(--black_to_white);
    border-radius: 0 0 8px 8px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;

    p {
        overflow: hidden;
        white-space: nowrap;
    }
`

export const DbItemPreviewImgStyled = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 8px 8px 0 0;

    @media ${HomePageDevices.mobile} {
        border-radius: 4px;
    }
`