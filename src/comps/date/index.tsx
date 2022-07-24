import React, { FC, useState } from 'react';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { Wrapper } from './styles';

const Date: FC<any> = () => {
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);
  const [focusedInput, setFocusedInput] = useState<any>(null);

  const handleDatesChange = ({ startDate, endDate }: any) => {
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <Wrapper>
      <DateRangePicker
        startDate={startDate}
        startDateId='tata-start-date'
        endDate={endDate}
        endDateId='tata-end-date'
        onDatesChange={handleDatesChange}
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
      />
    </Wrapper>
  );
};

export default Date;
