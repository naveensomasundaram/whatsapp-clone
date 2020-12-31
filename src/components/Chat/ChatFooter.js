import React, {useState} from 'react'
import { IconButton  } from '@material-ui/core';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function ChatFooter(props) {

    const [input, setInput] = useState('');

    const sendMessage = (event) => {
        event.preventDefault();
        setInput("");
        props.sendMessage(input);
    }

    return (
        <div className="chat__footer">
            <IconButton>
                <InsertEmoticonIcon/>
            </IconButton>
            <form>
                <input type="text" className="text" value={input} placeholder="Type a message" onChange={(event) => setInput(event.target.value)}/>
                <button type="submit" onClick={(event) => sendMessage(event)}>Send a message</button>
            </form>
            <IconButton>
                <MicIcon/>
            </IconButton>
        </div>
    )
}

export default ChatFooter
