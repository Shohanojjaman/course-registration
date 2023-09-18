import Cart from './components/Cart';
import Header from './components/Header';
import Courses from './components/course/Courses';

function App() {
  return (
    <>
      <Header></Header>
      <main className="container mx-auto max-sm:px-5 flex gap-6">
        <Courses></Courses>
        <Cart></Cart>
      </main>
    </>
  );
}

export default App;
