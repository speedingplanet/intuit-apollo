import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

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
              {/* <Link to="somewhere">Some text</Link> */}
              Nothing here yet
            </li>
          </ul>
        </div>
        <div className="col">
          <Routes>{/* <Route path="something" element={<Something />} /> */}</Routes>
        </div>
      </div>
    </>
  );
};

export default ExperimentsRoot;
