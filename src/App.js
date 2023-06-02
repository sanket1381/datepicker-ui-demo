import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import ANTDateRangePicker from './components/ANTDateRangePicker';
import CustomUIDateRangePicker from './components/CustomUIDateRangePicker';
import RainbowUIDateRangePicker from './components/RainbowUIDateRangePicker';


function App() {

  const navigate = useNavigate();

  const handlePageChange = (path) => {
    navigate(path);
  };

  return (
      <div>
        <nav>
        <h1>UPREVV : DATE PICKERS DEMO</h1>
        <ul className='navbar-list'>
          <li>
            <Link to="/ant-date-picker" onClick={() => handlePageChange('/ant-date-picker')}>
              ANT Date Picker
            </Link>
          </li>
          <li>
            <Link to="/custom-date-picker" onClick={() => handlePageChange('/custom-date-picker')}>
              Custom Date Picker
            </Link>
          </li>
          <li>
            <Link to="/rainbow-ui-date-picker" onClick={() => handlePageChange('/rainbow-ui-date-picker')}>
              Rainbow-UI Date Picker
            </Link>
          </li>
        </ul>
        </nav>

        <Routes>
          <Route path="/ant-date-picker" element={<ANTDateRangePicker />} />
          <Route path="/custom-date-picker" element={<CustomUIDateRangePicker />} />
          <Route path="/rainbow-ui-date-picker" element={<RainbowUIDateRangePicker />} />
        </Routes>

      </div>
    
  );
}

export default App;
