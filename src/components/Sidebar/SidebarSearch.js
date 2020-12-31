import React from 'react'
import { SearchOutlined  } from '@material-ui/icons';

function SidebarSearch() {
    return (
        <div className="sidebar__search">
            <div className="sidebar__searchcontainer">
                <SearchOutlined/>
                <input placeholder="Search or Start a new chat" type="text"/>
            </div>
        </div>
    )
}

export default SidebarSearch
