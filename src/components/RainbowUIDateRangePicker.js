import React, { useState } from 'react';
import { DatePicker } from 'react-rainbow-components';
import moment from 'moment';

const RainbowDatePicker = () => {
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [selectedDates, setSelectedDates] = useState(null);

  const handlePresetChange = (preset) => {
    setSelectedPreset(preset);
    setSelectedDates(null);
  };

  const handleDateChange = (date) => {
    setSelectedDates(date);
    setSelectedPreset(null);
  };

  const presetRanges = [
    {
      label: '3 Months',
      range: [moment().subtract(3, 'months').toDate(), moment().toDate()],
    },
    {
      label: '6 Months',
      range: [moment().subtract(6, 'months').toDate(), moment().toDate()],
    },
    {
      label: 'This Year',
      range: [moment().startOf('year').toDate(), moment().endOf('year').toDate()],
    },
    {
      label: 'Previous Year',
      range: [
        moment().subtract(1, 'year').startOf('year').toDate(),
        moment().subtract(1, 'year').endOf('year').toDate(),
      ],
    },
  ];

  const containerStyles = {
    maxWidth: 400,
    marginTop: 10,
  };

  return (
    <div style={{marginLeft:'10px'}}>
      <div>
      <h1>Rainbow Date Range Picker</h1>
        <span>Select Preset: </span>
        <select onChange={(e) => handlePresetChange(e.target.value)}>
          <option value="">Custom Range</option>
          {presetRanges.map((preset) => (
            <option key={preset.label} value={preset.label}>
              {preset.label}
            </option>
          ))}
        </select>
      </div>
      <div
        className="rainbow-align-content_center rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto"
        style={containerStyles}
      >

      <DatePicker
        id="datePicker-15"
        label="DatePicker Label"
        placeholder="Select range of dates"
        selectionType="range"
        formatStyle="large"
        variant="single"
        value={selectedPreset ? presetRanges.find((preset) => preset.label === selectedPreset).range : selectedDates}
        onChange={handleDateChange}
      />
      </div>
    </div>
  );
};

export default RainbowDatePicker;
