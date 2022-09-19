import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HelloCourse from './HelloCourse';

const ExperimentsRoot = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h2>Experiments</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <ul className="list-unstyled">
            <li>
              <Link to="hello-course">Hello Course</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <Routes>
            <Route path="hello-course" element={<HelloCourse />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default ExperimentsRoot;
