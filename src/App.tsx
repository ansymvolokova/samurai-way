import React from 'react';
import './App.css';
import {Header} from "./components/ Header/Header";
import {NavBar} from "./components/Nav/Nav";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {Dialogs, dialogsDataObjectType, messageDataObjectType} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {stateType} from "./redux/state";

type AppPropsType = {
   appState: stateType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content">
                    <Route path="/dialogs" render={() => <Dialogs state={props.appState.messagesPage}/>}/>
                    <Route path="/profile" render={()=><Profile state = {props.appState.profilePage}/>}/>
                    <Route path="/news" render={()=><News/>}/>
                    <Route path="/music" render={()=><Music/>}/>
                    <Route path="/settings" render={()=><Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
