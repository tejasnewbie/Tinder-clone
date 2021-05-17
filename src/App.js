import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Header from "./Header";
import PersonIcon from "@material-ui/icons/Person";
import "./App.css";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import ChatScreen from "./ChatScreen"
import TinderCard from "react-tinder-card";
import Chats from "./Chats"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:mimmi">
            <Header
              icon={<ArrowBackIcon className="header__icon" fontSize="large" />}
            />
            <ChatScreen/>
          
          </Route>
          <Route path="/chat">
            <Header
              icon={<ArrowBackIcon className="header__icon" fontSize="large" />}
            />
            <Chats/>
          </Route>
          <Route path="/">
            <Header
              icon={<PersonIcon className="header__icon" fontSize="large" />}
            />
            <TinderCards />
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
