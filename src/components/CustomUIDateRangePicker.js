import React, { useState } from 'react';
import { DateRangePicker } from '@wojtekmaj/react-daterange-picker';
import '@wojtekmaj/react-daterange-picker/dist/DateRangePicker.css';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';

export default function CustomUIDateRangePicker () {
    const [dateRange, setDateRange] = useState([null, null]);
    const [selectedPreset, setSelectedPreset] = useState(null);
  
    const handleDateChange = (range) => {
      setDateRange(range);
    };
  
    const handlePresetChange = (preset) => {
      setSelectedPreset(preset);
      setDateRange(getPresetRange(preset));
    };
  
    const getPresetRange = (preset) => {
      switch (preset) {
        case '3 Months':
          return [moment().subtract(3, 'months').toDate(), new Date()];
        case '6 Months':
          return [moment().subtract(6, 'months').toDate(), new Date()];
        case 'This Year':
          return [moment().startOf('year').toDate(), moment().endOf('year').toDate()];
        case 'Previous Year':
          return [
            moment().subtract(1, 'year').startOf('year').toDate(),
            moment().subtract(1, 'year').endOf('year').toDate(),
          ];
        default:
          return [null, null];
      }
    };
  
    const presetRanges = ['3 Months', '6 Months', 'This Year', 'Previous Year'];
  
    return (
      <div style={{marginLeft:'10px'}}>
        <h1>Wojtekmaj / react-date-picker</h1>
        <div style={{marginBottom:'10px'}}>
          <span>Select Preset: </span>
          <select onChange={(e) => handlePresetChange(e.target.value)}>
            <option value="">Custom Range</option>
            {presetRanges.map((preset) => (
              <option key={preset} value={preset}>
                {preset}
              </option>
            ))}
          </select>
        </div>
        <DateRangePicker value={dateRange} onChange={handleDateChange} />
      </div>
    );
}


// function MyComponent() {
  
// }

// export default MyComponent;
