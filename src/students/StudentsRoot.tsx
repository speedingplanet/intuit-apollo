import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import LabOne from './LabOne';
import LabTwo from './LabTwo';

const StudentsRoot = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <h2>Students</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-2">
          <ul className="list-unstyled">
            <li>
              <Link to="lab-one">First Lab: Query all students</Link>
            </li>
            <li>
              <Link to="lab-two">Second Lab: Sort students</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <Routes>
            <Route path="lab-one" element={<LabOne />} />
            <Route path="lab-two" element={<LabTwo />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default StudentsRoot;
