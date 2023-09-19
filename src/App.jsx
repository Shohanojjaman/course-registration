import { useState } from 'react';
import Header from './components/Header';
import Carts from './components/cart/Carts';
import Courses from './components/course/Courses';

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleAddToCart = (course) => {
    setSelectedCourses([...selectedCourses, course]);
  };

  return (
    <>
      <Header></Header>
      <main className="container mx-auto max-sm:px-5 flex gap-6">
        <Courses handleAddToCart={handleAddToCart}></Courses>
        <Carts selectedCourses={selectedCourses}></Carts>
      </main>
    </>
  );
}

export default App;
