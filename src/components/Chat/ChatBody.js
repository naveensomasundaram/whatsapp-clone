import { userInfo } from 'os';
import React from 'react'

function ChatBody(props) {
    // let dateString = new Date(message.timestamp?.toDate()).toUTCString().getDate();
    return (
        <div className="chat__body">
            {props.messages.map((message, index) => {
                let dateString = new Date(message.timestamp?.toDate()).toUTCString();
                let messageHours = new Date(dateString).getHours();
                let messageAMPM = (messageHours >= 12) ? "PM" : "AM";
                dateString = new Date(dateString).getHours() + ":" +new Date(dateString).getMinutes() + " " + messageAMPM;

                return (<p key={index} className={`chat__message ${message.name == props.user.displayName && 'chat__receiver'}`}>
                    <span className="chat__name">{message.name}</span>
                    {message.message}
                    <span className="chat__timestamp">
                        {dateString}
                    </span>
                </p>)
            })}
        </div>
    )
}

export default ChatBody
