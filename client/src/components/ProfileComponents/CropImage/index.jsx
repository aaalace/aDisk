import React, { useState } from 'react'
import ReactCrop, { makeAspectCrop } from 'react-image-crop'
import 'react-image-crop/src/ReactCrop.scss'
import './style.scss'

export default function CropImage(props) {

    const [natHeight, setNatHeight] = useState(1)
    const [natWidth, setNatWidth] = useState(1)
    const [initHeight, setInitHeight] = useState(1)
    const [initWidth, setInitWidth] = useState(1)
    const [crop, setCrop] = useState(
        {
            unit: '%',
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    )

    function onImageLoad(e) {
        const target = e.target

        let orient = target.width
        if(target.width > target.height){
            orient = target.height
        }

        const cropInit = {
            unit: 'px',
            x: Math.floor(orient / 10),
            y: Math.floor(orient / 10),
            width: Math.floor(orient * 0.8),
            height: Math.floor(orient * 0.8),
        }

        setInitHeight(target.height)
        setInitWidth(target.width)
        setNatWidth(target.naturalWidth)
        setNatHeight(target.naturalHeight)
        setCrop(cropInit)
    }

    const onImageLoaded = image => {
        setCrop(
            makeAspectCrop(
                {
                    aspect: 1 / 1,
                },
                image.width / image.height
            ),
        )
    }

    const onCropComplete = async () => {

        crop.x *= (natWidth / initWidth)
        crop.y *= (natHeight / initHeight)
        crop.width *= (natWidth / initWidth)
        crop.height *= (natHeight / initHeight)

        props.sendNewAvatar({src: props.src.split(',')[1], crop: crop})
    }

    const onCropCancel = () => {
        props.sendNewAvatar({src: null})
    }

    const onCropChange = crop => {
        setCrop(crop)
    }

    return (
        <>
            {props.src && (
                <>
                    <div className='crop-container'>
                        <div className='data-container-bg' onClick={onCropCancel}/>
                        <div className='data-container'>
                            <ReactCrop
                                style={{width: '300px', border: '1px solid var(--black_to_white)', background: 'transparent'}}
                                crop={crop}
                                aspect={1 / 1}
                                onImageLoaded={onImageLoaded}
                                onChange={onCropChange}
                            >
                                <img alt='' src={props.src} onLoad={onImageLoad}></img>
                            </ReactCrop>
                            <div className='btns-container'>
                                <button className='send' onClick={onCropComplete}>OK</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
