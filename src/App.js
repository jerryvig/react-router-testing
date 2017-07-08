import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter
} from 'react-router-dom'
import PropTypes from 'prop-types'
import logo from './logo.svg';
import './App.css';


class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}

class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>{this.props.match.params.topicName}</h3>
      </div>
    );
  }
}

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Setting would go here.</h2>
      </div>
    );
  }
}

class Topics extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${this.props.match.url}/rendering`}>
              Rendering with React
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/components`}>
             Components
            </Link>
          </li>
          <li>
            <Link to={`${this.props.match.url}/props-v-state`}>
              Props v. State
            </Link>
          </li>
        </ul>

        <Route path={`${this.props.match.url}/:topicName`} component={Topic}/>
        <Route exact path={this.props.match.url} render={() => (
          <h3>Please select a topic.</h3>
        )}/>
      </div>
    );
  }
}

class App extends Component  {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/topics">Topics</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>

          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/topics" component={Topics}></Route>
          <Route path="/settings" component={Settings}></Route>
        </div>
      </Router>
    );
  }
};

class Child extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <h3>ID: <a href={`http://${this.props.match.params.id}.com`} target="blank">{this.props.match.params.id}</a></h3>
      </div>
    );
  }
}

class ParamsExample extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <h2>Accounts</h2>
          <ul>
            <li><Link to="/youtube">YouTube</Link></li>
            <li><Link to="/vimeo">Vimeo</Link></li>
            <li><Link to="/dailymotion">Dailymotion</Link></li>
            <li><Link to="/truveo">Truveo</Link></li>
            <li><Link to="/break">Break.com</Link></li>
            <li><Link to="/liveleak">Liveleak</Link></li>
            <li><Link to="/twitch">Twitch</Link></li>
          </ul>
          <Route path="/:id" component={Child}></Route>
        </div>
      </Router>
    );
  }
}

class HomeII extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
}

class AboutII extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}

class OldSchoolMenuLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
       <Route path={this.props.to} exact={this.props.activeOnlyWhenExact} children={({ match }) => (
          <div className={match ? 'active' : ''}>
            {match ? '> ' : ''}<Link to={this.props.to}>{this.props.label}</Link>
          </div>
        )}></Route>
    )
  }
}

class CustomLinkExample extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <OldSchoolMenuLink to="/" label="Home"/>
          <OldSchoolMenuLink to="/about" label="About"/>
          <hr/>
          <Route exact path="/" component={HomeII}></Route>
          <Route path="/home" component={HomeII}></Route>
          <Route path="/about" component={AboutII}></Route>
        </div>
      </Router>
    );
  }
}

class HomeIII extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <p>
        A <code>&lt;Switch></code> renders the
        first child <code>&lt;Route></code> that
        matches. A <code>&lt;Route></code> with
        no <code>path</code> always matches.
      </p>
    );
  }
}

class WillMatch extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <h3>This matches!</h3>
    )
  }
}

class NoMatch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h3>No match found for { this.props.location.pathname }.</h3>
    );
  }
}

class NoMatchExample extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/old-match">Old match gets redirected</Link></li>
            <li><Link to="/matches">This will match</Link></li>
            <li><Link to="also/does/not/match">No match gets redirected</Link></li>
          </ul>
          <Switch>
            <Route path="/" exact component={HomeIII}></Route>
            <Route path="/matches" component={WillMatch}></Route>
            <Redirect from="/old-match" to="/matches"></Redirect>
            <Redirect from="/home" to="/"></Redirect>
            <Route component={NoMatch}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}



class SidebarExample extends Component {
  constructor() {
    super();

    this.routes = [
      { path: '/',
        exact: true,
        sidebar: () => { return (<div>home!</div>); },
        main: () => { return (<h2>Home</h2>); }
      },
      { path: '/bubblegum',
        sidebar: () => { return (<div>bubblegum!</div>); },
        main: () => { return (<h2>Bubblegum</h2>); }
      },
      { path: '/shoelaces',
        sidebar: () => { return (<div>shoelaces!</div>); },
        main: () => { return (<h2>Shoelaces</h2>); }
      },
      {
        'path': undefined,
        'sidebar': () => ( <div>No match found!</div> ),
        'main': () => ( <div>No match found!</div> )
      }
    ];
  }

  render() {
    return (
      <Router>
         <div style={{ display: 'flex' }}>
          <div style={{
            padding: '10px',
            width: '40%',
            background: '#f0f0f0'
          }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/bubblegum">Bubblegum</Link></li>
              <li><Link to="/shoelaces">Shoelaces</Link></li>
              <li><Link to="/wontmatchanything">Will not match anything</Link></li>
            </ul>
          
            <Switch>
              {this.routes.map((route, index) => {
                return (
                  <Route key={index} path={route.path} exact={route.exact} component={route.sidebar}></Route>
                )
              })}
            </Switch>
          </div>

          <div style={{ flex: 1, padding: '10px' }}>
            <Switch>
              {this.routes.map((route, index) => {
                return (
                  <Route key={index} path={route.path} exact={route.exact} component={route.main}></Route>
                );
              })}
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

var fakeAuth = {
  isAuthenticated: false
};

fakeAuth.authenticate = function(cb) {
  this.isAuthenticated = true;
  setTimeout(cb, 500);
};

fakeAuth.signout = function(cb) {
  this.isAuthenticated = false;
  setTimeout(cb, 500);
};

class AuthButton extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  render() {
    const { match, location, history } = this.props;

    if (fakeAuth.isAuthenticated) {
      return (
        <p>
          Welcome! <button onClick={() => {
            fakeAuth.signout(() => history.push('/'))
          }}>Sign out</button>
        </p>
      );
    } else {
      return (
        <p>You are not logged in!</p>
      );
    }
  }
}

const AuthButtonWithRouter = withRouter(AuthButton);

class PrivateRoute extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      if (fakeAuth.isAuthenticated) {
        var Component = this.props.component;
        return (
          <Route {...this.props} render={ (props) => <Component {...this.props}></Component> }/>
        );
      } else {
        return (
          <Route path={ this.props.path } render={ (props) => <Redirect to={{ pathname: '/login', state: { from: this.props.location } }}></Redirect> }/>
        )
      }
  }
}

class Public extends Component {
  render() {
    return (
      <h3>Public</h3>
    )
  }
}

class Protected extends Component {
  render() {
    return (
      <h3>Protected</h3>
    )
  }
}

class Login extends Component {
  state = {
    redirectToReferer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true })
    })
  };

  render() {
    var from = this.props.location.state.from || { pathname: '/' };
    const { redirectToReferrer } = this.state
    
    if (redirectToReferrer) {
      return (
        <Redirect to={from}/>
      )
    }
    
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}.</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

class AuthExample extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router>
        <div>
          <AuthButtonWithRouter></AuthButtonWithRouter>
          <ul>
            <li><Link to="/public">Public Page</Link></li>
            <li><Link to="/protected">Protected Page</Link></li>
          </ul>
          <Route path="/public" component={Public}/>
          <Route path="/login" component={Login}/>
          <PrivateRoute path="/protected" component={Protected}/>
        </div>
      </Router>
    );
  }
}

const PEEPS = [
  {id: 0, name: 'Denise', friends: [1, 2, 3]},
  {id: 1, name: 'Ashley', friends: [2, 0]},
  {id: 2, name: 'Elly', friends: [0, 1]},
  {id: 3, name: 'Fluvia', friends: [0, 1]},
];

const find = (id) => PEEPS.find((p) => p.id == id)

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const person = find(this.props.match.params.id);

    return (
      <div>
        <h3>{person.name}’s friends</h3>
        <ul>
          {person.friends.map(id => (
              <li key={id}>
                <Link to={`${this.props.match.url}/${id}`}>
                  {find(id).name}
                </Link>
              </li>
            )
          )}
        </ul>
        <Route path={`${this.props.match.url}/:id`} component={Person}/>
      </div>
    )
  }
}

class RecursiveExample extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Person match={{ params: { id: 0 }, url: '' }}/>
      </Router>
    )
  }
}

const styles = {};

styles.fill = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

styles.content = {
    ...styles.fill,
    top: '40px',
    textAlign: 'center'
};

styles.nav = {
    padding: 0,
    margin: 0,
    position: 'absolute',
    top: 0,
    height: '40px',
    width: '100%',
    display: 'flex'
};

styles.navItem = {
    textAlign: 'center',
    flex: 1,
    listStyleType: 'none',
    padding: '10px'
};

styles.hsl  = {
    ...styles.fill,
    color: 'white',
    paddingTop: '20px',
    fontSize: '30px'
};

class NavLink extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <li style={styles.navItem}>
          <Link {...this.props} style={{ color: 'inherit' }}/>
        </li>
    );
  }
}

class HSL extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <div style={{
            ...styles.fill,
            ...styles.hsl,
            background: `hsl(${this.props.match.params.h}, ${this.props.match.params.s}%, ${this.props.match.params.l}%)`
        }}>hsl({this.props.match.params.h}, {this.props.match.params.s}%, {this.props.match.params.l}%)</div>
    );
  }
}

class AnimationExample extends Component {
  constructor() {
    super();
    this.state= {};
  }

  render() {
    return (
       <Router>
         <Route render={({ location }) => (
           <div style={styles.fill}>
             <Route exact path="/" render={() => (
                 <Redirect to="/10/90/50"/>
             )}/>

             <ul style={styles.nav}>
               <NavLink to="/10/90/50">Red</NavLink>
               <NavLink to="/120/100/40">Green</NavLink>
               <NavLink to="/200/100/40">Blue</NavLink>
               <NavLink to="/310/100/50">Pink</NavLink>
             </ul>
             <div style={styles.content}>
               <CSSTransitionGroup
                   transitionName="fade"
                   transitionEnterTimeout={1000}
                   transitionLeaveTimeout={1000}>
                 <Route location={location}
                      key={location.key}
                      path="/:h/:s/:l"
                      component={HSL}/>
               </CSSTransitionGroup>
             </div>
           </div>
           )}>
         </Route>
       </Router>
    )
  }
}

//export default App;
//export default ParamsExample;
//export default CustomLinkExample;
//export default NoMatchExample;
//export default SidebarExample;
//export default AuthExample;
export default AnimationExample;
//export default RecursiveExample;
