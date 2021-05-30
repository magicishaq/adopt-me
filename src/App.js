import { render } from 'react-dom'
import {StrictMode, useState} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import SearchParams from './SearchParams'
import Details from './Details'
import Pet from './Pet'
import ThemeContext from './ThemeContext'


const App = () => {
  const theme = useState("darkblue")
    return (
      <ThemeContext.Provider value={theme}>
        <div>
           
            <Router>
            <header>
                <Link to="/" data-name="the heading">Adopt Me!</Link>
            </header>
                <Switch>
  <Route path="/details/:id">
    <Details />
  </Route>
  <Route path="/">
    <SearchParams />
  </Route>
  </Switch>
</Router>;
        </div>
        </ThemeContext.Provider>
        
    )
}

render(
   <StrictMode>
      <App />
    </StrictMode> ,
    document.getElementById("root")
  );