import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <ol style={{textAlign: 'left'}}>
            <li className="done">Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
            <li className="done">Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
            <li className="done">Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
            <li className="done">Pass the course ID to the "Course" page and output it there</li>
            <li className="done">Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
            <li className="done">Load the "Course" component as a nested component of "Courses"</li>
            <li className="done">Add a 404 error page and render it for any unknown routes</li>
            <li className="done">Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
          </ol>
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/" exact>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/users" exact>Users</NavLink>
                </li>
                <li>
                  <NavLink 
                    to={{
                      pathname:'/courses',
                      hash: '#submit',
                      search: '?quick-submit=true'
                    }}>Courses
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          <Switch>
            {/* this.state.auth ? <Route path="/new-post" component={asyncNewPost} /> : null */}
            <Route path="/users" component={Users} />
            <Route path="/courses" component={Courses} />
            <Route path="/" exact render={() => <h1>Home</h1>} />
            <Redirect from="/all-courses" to="/courses" />
            <Route render={() => <h1>Not found</h1>} />
            {/* <Redirect from="/" to="/posts" /> */}
            {/* <Route render={() => <h1>Not found</h1>} /> */}
            {/* <Route path="/" component={Posts} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
