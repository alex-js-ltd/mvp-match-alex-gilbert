import { FC, useState, useEffect } from 'react';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { Moment } from 'moment';
import { Wrapper } from './styles';

import { useSelector, useDispatch } from 'react-redux';
import { DATE_ACTION_TYPES } from '../../store/date/date.type';

import { RootState } from '../../store/store';

const Date: FC = () => {
  // const [startDate, setStartDate] = useState<Moment | null>(null);
  // const [endDate, setEndDate] = useState<Moment | null>(null);
  const [focusedInput, setFocusedInput] = useState<any>(null);

  // const handleDatesChange = ({ startDate, endDate }: any) => {
  //   setStartDate(startDate);
  //   setEndDate(endDate);
  // };

  const dispatch = useDispatch();

  const startDate = useSelector((state: RootState) => state.date?.start);

  const endDate = useSelector((state: RootState) => state.date?.end);

  useEffect(() => {
    console.log(startDate);
  }, [startDate]);

  return (
    <Wrapper>
      <DateRangePicker
        startDate={startDate}
        startDateId='tata-start-date'
        endDate={endDate}
        endDateId='tata-end-date'
        onDatesChange={({ startDate, endDate }) =>
          dispatch({
            type: DATE_ACTION_TYPES.SET_DATES,
            payload: { startDate, endDate },
          })
        }
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
      />
    </Wrapper>
  );
};

export default Date;
