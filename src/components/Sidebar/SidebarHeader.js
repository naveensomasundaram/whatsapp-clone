import React from 'react'
import { IconButton,Avatar  } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import testImage from '../../images/46328.jpg';

function SidebarHeader({photoURL, displayName}) {
    
    return (
        <div className="sidebar__header">   
            <Avatar src={photoURL}  alt="User"/>
            {/* <div className="sidebar__headerInfo">
                <h3>{displayName}</h3>
            </div> */}
            <div className="sidebar__headerRight">  
                <IconButton>
                    <DonutLargeIcon/>
                </IconButton>

                <IconButton>
                    <ChatIcon/>
                </IconButton>

                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default SidebarHeader
