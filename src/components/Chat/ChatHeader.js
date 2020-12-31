import React, {useState, useEffect} from 'react'
import { IconButton,Avatar  } from '@material-ui/core';
import { SearchOutlined  } from '@material-ui/icons';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function ChatHeader(props) {

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [props.roomId])

    return (
        <div className="chat__header"> 
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="chat__headerInfo">
                <h3>{props.roomName}</h3>
                {
                    props.messages.length > 1 ? (<p>Last seen{" "} {new Date(props.messages[props.messages.length-1]?.timestamp?.toDate()).toUTCString()}</p>) : (<p></p>)
                }
            </div>

            <div className="chat__headerRight">
                <IconButton>
                    <SearchOutlined/>
                </IconButton>
                <IconButton>
                    <AttachFileIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default ChatHeader
 