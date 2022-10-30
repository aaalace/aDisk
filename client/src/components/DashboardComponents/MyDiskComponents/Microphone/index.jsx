import React from 'react'
import './style.scss'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'

const Microphone = (props) => {
    const {
        transcript,
        listening,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    if(listening){
        props.setListenedText(transcript)
    }

    return (
        <button className={listening ? 'on-micro' : 'off-micro'} onClick={!listening ? SpeechRecognition.startListening : SpeechRecognition.stopListening}><FontAwesomeIcon className="icon" icon={faMicrophone}/></button>
    )
}

export default Microphone