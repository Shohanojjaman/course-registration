import Header from './components/Header';
import Courses from './components/course/Courses';

function App() {
  return (
    <>
      <Header></Header>
      <main className="container mx-auto max-sm:px-5">
        <Courses></Courses>
      </main>
    </>
  );
}

export default App;
