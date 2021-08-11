import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import CharacterSelect from './Components/CharacterSelect/CharacterSelect';
import Header from './Components/Header/Header';

import StartScreen from './Components/StartScreen/StartScreen';

function App() {
  return (
      <Router>
        <Header/>
          <Switch>
              <Route path="/" exact>
                  <StartScreen/>
              </Route>

              <Route path="/CharacterSelect" exact>
                  <CharacterSelect/>
              </Route>
          </Switch> 
      </Router>
  );
}

export default App;
