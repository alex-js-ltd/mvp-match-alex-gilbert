import { FC, useState } from 'react';

import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

import { Wrapper } from './styles';

import { useDispatch } from 'react-redux';
import { DATE_ACTION_TYPES } from '../../store/date/date.type';

import moment from 'moment';

const Date: FC<{
  startDate: null | string;
  endDate: null | string;
}> = ({ startDate, endDate }) => {
  const [focusedInput, setFocusedInput] = useState<any>(null);

  const dispatch = useDispatch();

  return (
    <Wrapper>
      <DateRangePicker
        startDate={moment(startDate, 'YYYY-MM-DD')}
        startDateId='tata-start-date'
        endDate={moment(endDate, 'YYYY-MM-DD')}
        endDateId='tata-end-date'
        onDatesChange={({ startDate, endDate }) =>
          dispatch({
            type: DATE_ACTION_TYPES.SET_DATES,
            payload: { startDate, endDate },
          })
        }
        focusedInput={focusedInput}
        onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
        isOutsideRange={(day) => moment().diff(day) < 0}
      />
    </Wrapper>
  );
};

export default Date;
