import { React } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Post from "./components/pages/Post";
import Contacts from "./components/pages/Contacts";
import {HomePage} from "./components/pages/Home";
import { PhotoPage } from "./components/pages/Photos";
import { Navigation } from "./components/Navigation";

import './App.css';

import LUKE_IMAGE from './assets/postPage/luke.jpg'
import VEGAS_IMAGE from './assets/postPage/vegas.jpg'
const ANAKIN_IMAGE = "https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg";
const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";


function App() {
  return (
    <div className="App">
      <header className="header">
      <Navigation />
      </header>
      <main>
        <Switch>
        <Route path="/cursor.edu-hw-react-router/" exact>
            <HomePage />
          </Route>
          <Route path="/cursor.edu-hw-react-router/posts">
            <Post author = {{
              name: "Anakin skywalker",
              photo: ANAKIN_IMAGE,
              nickname: "@dart_vader"
              }}
              content = "WTF? Who is Ray? Why she is Skywalker? Luke...?"
              image = {RAY_IMAGE}
              date = {"26 февр."}
              comment = {482}
              retweet = {146}
              like = {887}
            />
            <Post author = {{
              name: "Luke skywalker",
              photo: LUKE_IMAGE,
              nickname: "@last_jedi"
              }}
              content = "It happened in Vegas. I was young and drunk..."
              image = {VEGAS_IMAGE}
              date = {"27 февр."}
              comment = {555}
              retweet = {344}
              like = {999}
            />
          </Route>
          <Route path='/cursor.edu-hw-react-router/contacts'>
            <Contacts />
          </Route>
          <Route path='/cursor.edu-hw-react-router/photos'>
            <PhotoPage />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
