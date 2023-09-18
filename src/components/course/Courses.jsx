import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="container mx-auto max-sm:px-5">
      <h3>Total course: {courses.length}</h3>
      
    </div>
  );
};

Courses.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default Courses;
