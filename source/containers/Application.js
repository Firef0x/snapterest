/**
 *
 * Created by F on 2017/4/20.
 */

import React from 'react';
import Stream from './Stream';
import Collection from './Collection';
import 'bootstrap/dist/css/bootstrap.min.css';

const Application = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-4 text-center">
        <Stream />
      </div>
      <div className="col-md-8">
        <Collection />
      </div>
    </div>
  </div>
);

export default Application;
