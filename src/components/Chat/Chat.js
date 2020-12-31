import React, { useState, useEffect } from 'react'
import '../../styles/Chat.css';
import ChatHeader from './ChatHeader';
import ChatBody from './ChatBody';
import ChatFooter from './ChatFooter';
import { useParams } from  'react-router-dom';
import {db, auth} from '../../firebase';
import {useStateValue} from '../../StateProvider';
import firebase from 'firebase';

function Chat() {

    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);
    const [{user}, dispatch] = useStateValue();

    const sendMessage = (input) => {
        db.collection("rooms").doc(roomId).collection("messages").add({
            "message":input,
            "name":user.displayName, 
            "timestamp" : firebase.firestore.FieldValue.serverTimestamp()
        });
    }

    useEffect(() => {
        if(roomId) {
            db.collection("rooms").doc(roomId).onSnapshot((snapshot) => (
                setRoomName(snapshot.data().name)
            ));

            db.collection("rooms").doc(roomId).collection("messages").onSnapshot((messageSnapshot) => {
                let messageList = messageSnapshot.docs.map(doc => doc.data());
                setMessages(messageList);                
            });
            
        }
    }, [roomId])
    
    return (
        <div className="chat">
            <ChatHeader roomName={roomName} roomId={roomId} messages={messages}/>
            <ChatBody messages={messages} user={user}/>
            <ChatFooter sendMessage={sendMessage}/>
        </div>
    )
}

export default Chat
