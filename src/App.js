import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header';
import SwipeButtons from './components/SwipeButtons';
import TinderCards from './components/TinderCard'
import Chats from './components/Chats'
import ChatScreen from './components/ChatScreen'

function App() {
  return (
    <div className="App">
        
      <Router>
        
        <Switch>
          <Route exact path="/">
            <Header /> 
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route exact path="/chats">
            <Header backButton="/"/> 
            <Chats />
          </Route>
          <Route exact path="/chats/:person">
            <Header backButton="/chats"/> 
            <ChatScreen />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
