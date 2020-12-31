import react, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import './styles/App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import {useStateValue} from './StateProvider';

function App() {

    // const [user, setUser] = useState(null);
    const [{user}, dispatch] = useStateValue();

    return (<div className="app">
        <div className="app__body"> 
            {!user ? (<Login/>) : (
                <Router>
                    <Sidebar/>
                    <Switch>                    
                        <Route path="/rooms/:roomId">
                            <Chat/>
                        </Route>
                        <Route path="/">
                                {/*  Shows Empty Page instead of chats*/}
                        </Route>
                    </Switch>
                </Router>
            )}            
        </div>
    </div>)
}   

export default App;