import React from 'react';
import {Key} from './Key.js';
import {KEY_TO_NOTE, NOTES, VALID_KEYS} from './constants.js'
import _ from 'lodash';
import './Piano.css';

class Piano extends React.Component{
    constructor(props){
        super(props);
        this.state={
            pressedKeys:[],
        };
    }
    playNote = (note) => {
        if (!_.isEmpty(note)) {
        const noteAudio = new Audio(document.getElementById(note).src);
        noteAudio.play();
        }
    }
    handleKeyDown = (event)=>{
        if(event.repeat){
            return;
        }
        const key = event.key;
        const updatedPressedKeys = [...this.state.pressedKeys];
        if (!updatedPressedKeys.includes(key) && VALID_KEYS.includes(key)){
            updatedPressedKeys.push(key);
        }
        this.setState({
            pressedKeys: updatedPressedKeys,
        });
        this.playNote(KEY_TO_NOTE[key]);
    }
    handleKeyUp = (event) => {
        const index = this.state.pressedKeys.indexOf(event.key);
        if (index > -1) {
        this.setState(state => ({
            pressedKeys: state.pressedKeys.splice(index, 1)
        }));
        }
    }
    
    componentDidMount = () =>{
        window.addEventListener('keydown', this.handleKeyDown);
        window.addEventListener('keyup', this.handleKeyUp);
    }
    render(){
        const keys = _.map(NOTES, (note,index)=>{
            return(
                <Key
                key={index}
                note={note}
                pressedKeys={this.state.pressedKeys}
                />
                );
        });

        const audioFiles = _.map(NOTES, (note, index) => {
            return (
            <audio
                id={note}
                key={index}
                src={`../../notes/${note}.WAV`}
            />
            );
        });
        
        return(
            <div className='container'>

                <div className='logo'>
                    <h1>SeBASStiaN</h1>
                </div>
                <div className='piano'>
                    {keys}
                </div>
                <div>
                {audioFiles}
                </div>
                <div className='move-thought'>
                    <div className='thought'><h2>Hi Sebastian! Your dad loves you so much that he made you this app ,so you can learn piano notes! I hope you become my little rockstar!</h2></div>
                </div>
                <div className='fish'></div>
            </div>

        )

        
    }
}
export {Piano};