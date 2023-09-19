import { useEffect, useState } from 'react';
import Course from './Course';
import PropTypes from 'prop-types'

const Courses = ({ handleAddToCart }) => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="w-3/4 grid grid-cols-3 gap-6 mb-20">
      {courses.map((course) => (
        <Course key={course.course_id} course={course} handleAddToCart={handleAddToCart}></Course>
      ))}
    </div>
  );
};
Courses.propTypes = {
  handleAddToCart: PropTypes.func
};

export default Courses;
