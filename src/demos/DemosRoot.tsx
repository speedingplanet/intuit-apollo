import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import AddMovie from './AddMovie';
import LazyQueries from './LazyQueries';
import QueryByYear from './QueryByYear';
import QueryByYearCache from './QueryByYearCache';
import QueryOne from './QueryOne';

const DemosRoot = () => (
  <>
    <div className="row">
      <div className="col">
        <h2>Demos</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-2">
        <ul className="list-unstyled">
          <li>
            <Link to="query-one">Query one value</Link>
          </li>
          <li>
            <Link to="query-by-year">Query by year</Link>
          </li>
          <li>
            <Link to="query-by-year-cache">Query by year (caching)</Link>
          </li>
          <li>
            <Link to="lazy-queries">Lazy Queries</Link>
          </li>
          <li>
            <Link to="add-movie">Add a movie</Link>
          </li>
        </ul>
      </div>
      <div className="col">
        <Routes>
          <Route path="query-one" element={<QueryOne />} />
          <Route path="query-by-year" element={<QueryByYear />} />
          <Route path="query-by-year-cache" element={<QueryByYearCache />} />
          <Route path="lazy-queries" element={<LazyQueries />} />
          <Route path="add-movie" element={<AddMovie />} />
        </Routes>
      </div>
    </div>
  </>
);

export default DemosRoot;
