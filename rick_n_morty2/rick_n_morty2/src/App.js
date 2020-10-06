import React from "react";
import CharacterList from "./components/CharacterList"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <main>
      
          <Router>
          <Switch>
      <Route path="/character" component={CharacterList} />
      <CharacterList/>
         </Switch>
         </Router>
     
     
    </main>
  );
}
// {id, name, air_date, episode, characters, url, created}