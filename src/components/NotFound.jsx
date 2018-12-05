import React from 'react';
import {Link} from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <h1>
      oops page not found 404...back to
      <Link to="/dashboard">Dashboard</Link>
    </h1>
  </div>
);

export default NotFoundPage;
