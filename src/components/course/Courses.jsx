import { useEffect, useState } from 'react';
import Course from './Course';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="w-3/4 grid grid-cols-3 gap-6 mb-20">
      {courses.map((course) => (
        <Course key={course.course_id} course={course}></Course>
      ))}
    </div>
  );
};

export default Courses;
