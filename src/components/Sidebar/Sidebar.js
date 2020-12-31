import React, {useState,useEffect} from 'react'
import '../../styles/Sidebar.css';
import SidebarHeader from './SidebarHeader';
import SidebarSearch from './SidebarSearch';
import SidebarChat from './SidebarChat';
import {db, auth} from '../../firebase';
import {useStateValue} from '../../StateProvider';

function Sidebar() {

    const [rooms, setRooms] = useState([]);
    const [{user}, dispatch] = useStateValue();    

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => {
            setRooms(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        });

        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <div className="sidebar">
            <SidebarHeader photoURL={user.photoURL} displayName={user.displayName}/>
            <SidebarSearch/>
            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
