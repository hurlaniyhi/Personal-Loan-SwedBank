import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import modules from './route-module'

const AppRoutes = () => {
    
    return(
        <Router>
            <Switch>
                {modules.map(module => (
                    module.name === "Welcome" ?
                    <Route exact {...module.routeProps} key={module.name} /> :
                    <Route {...module.routeProps} key={module.name} />
                ))}
                <Redirect from="/:id" to="/" />
            </Switch>
        </Router>
    )
}
 

//==== For new version of react-router-dom ========
// Switch is replaced with Routes
//<Route exact path="/" element={<Home/>}/>  this is the way to use Route
//<Route path="*" element={<NotFound/>}/>  // redirect for invalid route
//"react-router-dom": "^6.0.2"

//npm install --save react-router-dom@5.2.0

export default AppRoutes