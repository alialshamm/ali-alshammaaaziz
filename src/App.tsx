import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GeoLocationCheck from './components/GeolocationCheck'
import Home from './pages/Home';
import Registration from './pages/Registration'
import Confirmation from './pages/Confirmation'

const App = () => {
  return (
    <Fragment>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={
              <GeoLocationCheck>
                <Home />
              </GeoLocationCheck>
            } />
            <Route path="/register" element={
              <GeoLocationCheck>
                <Registration />
              </GeoLocationCheck>
            } />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </Router>
      </div>
    </Fragment>
  );
};
export default App;