import React, { Component, useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';

const ReactMarkdown = require('react-markdown');

export default class CourseDetail extends Component {
  
  
//   const courseInfo = (props) => {
//   const {match} = props;
//   const [course, setCourse] = useState({}); 
//   const history = useHistory();
//   const id = match.params.id;


  // fetches course data from API and sets courses in state
  fetchData = useEffect(() => {
    const { context } = this.props;
    const id = match.params.id;  
    context.data.api(`/courses/${id}`);
    
    // fetch(`http://localhost:5000/api/courses/${id}`)
    //   .then(res => {
    //     if (res.status === 500) {
    //       return history.push('/error');
    //     } else if (res.status === 404) {
    //         return history.push('/notfound');
    //     } else {
    //       return res.json();
    //     }})
    //   .then(data => setCourse(data))
    //   .catch(err => console.log(err))
    // history, 
      
  }, [id]);

  return (
    <div>
        <div className="actions--bar">
            <div className="bounds">
                <div className="grid-100">
                    <span>
                        <a className="button" href="/courses/update">Update Course</a>
                        <a className="button" href="/courses/:id" onClick={Data.deleteCourse(id)}>Delete Course</a>
                    </span>
                        <a className="button button-secondary" href="/courses">Return to List</a>
                </div>
            </div>
        </div>
        <div class="bounds course--detail">
          <div class="grid-66">
            <div class="course--header">
              <h4 class="course--label">Course</h4>
              <h3 class="course--title">{course.title}</h3>
              <p>By Joe Smith</p>
            </div>
            <div class="course--description">
              <p>{course.description}</p>
            </div>
          </div>
          <div class="grid-25 grid-right">
            <div class="course--stats">
              <ul class="course--stats--list">
                <li class="course--stats--list--item">
                  <h4>Estimated Time</h4>
                  <h3>{course.estimatedTime}</h3>
                </li>
                <li class="course--stats--list--item">
                  <h4>Materials Needed</h4>
                  <ul>
                    <ReactMarkdown source={course.materialsNeeded}/>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>    
  );
};





export default CourseDetail;