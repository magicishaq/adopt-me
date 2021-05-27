import { render } from 'react-dom'
import {StrictMode} from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import SearchParams from './SearchParams'
import Details from './Details'
import Pet from './Pet'


const App = () => {
    return (
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
    )
}

render(
    <StrictMode>
      <App />
    </StrictMode>,
    document.getElementById("root")
  );