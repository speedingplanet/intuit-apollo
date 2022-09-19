import { Outlet, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import NavBarItem from './components/NavBarItem';
import DemosRoot from './demos/DemosRoot';
import ExperimentsRoot from './experiments/ExperimentsRoot';
import Home from './Home';
import NoMatch from './NoMatch';
import StudentsRoot from './students/StudentsRoot';

const App = () => {
  return (
    <main className="container">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="demos/*" element={<DemosRoot />} />
          <Route path="students/*" element={<StudentsRoot />} />
          <Route path="experiments/*" element={<ExperimentsRoot />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </main>
  );
};

function Layout() {
  return (
    <>
      <section className="row mb-2">
        <div className="col">
          <NavBar>
            <NavBarItem to="/" end>
              Home
            </NavBarItem>
            <NavBarItem to="/demos">Demos</NavBarItem>
            <NavBarItem to="/experiments">Experiments</NavBarItem>
            <NavBarItem to="/students">Students</NavBarItem>
            <NavBarItem to="/classes">Classes</NavBarItem>
            <NavBarItem to="/courses">Courses</NavBarItem>
          </NavBar>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default App;
