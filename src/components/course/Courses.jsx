import { useEffect, useState } from 'react';
import Carts from '../cart/Carts';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);

  useEffect(() => {
    fetch('data.json')
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const handleAddToCart = (course) => {
    let credit = course.credit;
    const isExist = selectedCourses.find((item) => item.course_id == course.course_id);
    if (isExist) {
      alert('Already added!');
    } else {
      selectedCourses.forEach((item) => {
        credit += item.credit;
      });
      if (credit > 20) {
        return alert("Don't allow to add more then 20 Credit hour.");
      }
      setTotalPrice(totalPrice + course.price);
      setTotalCredit(credit);
      setRemainingCredit(remainingCredit - course.credit);
      setSelectedCourses([...selectedCourses, course]);
    }
  };
  console.log(totalCredit);

  return (
    <main className="container mx-auto max-sm:px-5 flex gap-6">
      <div className="w-3/4 grid grid-cols-3 gap-6 mb-20">
        {courses.map((course) => (
          <div key={course.course_id} className="p-4 bg-white rounded-lg space-y-4">
            <img className="w-full" src={course.cover} alt={`Image of ${course.title}`} />
            <h3 className="text-lg font-semibold text-heading">{course.title}</h3>
            <p className="text-body text-sm">{course.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex text-heading items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 1V23" stroke="#1C1B1B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M17 5H9.5C8.57174 5 7.6815 5.36875 7.02513 6.02513C6.36875 6.6815 6 7.57174 6 8.5C6 9.42826 6.36875 10.3185 7.02513 10.9749C7.6815 11.6313 8.57174 12 9.5 12H14.5C15.4283 12 16.3185 12.3687 16.9749 13.0251C17.6313 13.6815 18 14.5717 18 15.5C18 16.4283 17.6313 17.3185 16.9749 17.9749C16.3185 18.6313 15.4283 19 14.5 19H6"
                    stroke="#1C1B1B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-body">Price: {course.price}</p>
              </div>
              <div className="flex text-heading items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 6.042C10.3516 4.56336 8.2144 3.74694 6 3.75C4.948 3.75 3.938 3.93 3 4.262V18.512C3.96362 18.172 4.97816 17.9989 6 18C8.305 18 10.408 18.867 12 20.292M12 6.042C13.6483 4.56328 15.7856 3.74685 18 3.75C19.052 3.75 20.062 3.93 21 4.262V18.512C20.0364 18.172 19.0218 17.9989 18 18C15.7856 17.9969 13.6484 18.8134 12 20.292M12 6.042V20.292"
                    stroke="#1C1B1B"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-body">Credit: {course.credit}hr</p>
              </div>
            </div>
            <button onClick={() => handleAddToCart(course)} className="btn">
              Select
            </button>
          </div>
          // <Course key={course.course_id} course={course} handleAddToCart={handleAddToCart}></Course>
        ))}
      </div>
      <Carts
        selectedCourses={selectedCourses}
        totalPrice={totalPrice}
        setTotalCredit={totalCredit}
        remainingCredit={remainingCredit}></Carts>
    </main>
  );
};

export default Courses;
