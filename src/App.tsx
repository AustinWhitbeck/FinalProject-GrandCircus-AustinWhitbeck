import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import CharacterSelect from './Components/CharacterSelect/CharacterSelect';
import Header from './Components/Header/Header';

import StartScreen from './Components/StartScreen/StartScreen';
import { ItemContextProvider } from './ContextProviders/ClassListContext';

function App() {
  return (
      <Router>
        <Header/>
          <Switch>
              <Route path="/" exact>
                  <StartScreen/>
              </Route>

              <Route path="/CharacterSelect" exact>
                  <ItemContextProvider>
                    <CharacterSelect/>
                  </ItemContextProvider>
              </Route>
          </Switch> 
      </Router>
  );
}

export default App;
