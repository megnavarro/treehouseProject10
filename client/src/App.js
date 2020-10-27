import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header';
import Courses from './components/Courses';
// import CourseDetail from './components/CourseDetail';
import withContext from './Context';

// const CourseDetailWithContext = withContext(CourseDetail);


export default () => (
  <Router>
    <div>
      <Header />

      <Switch>
        <Route exact path="/" component={ () => <Courses /> } />
        {/* <Route exact path="/courses/:id" render={(props) => <CourseDetailWithContext {...props} />}/> */}
      </Switch>
    </div>
  </Router>
);
