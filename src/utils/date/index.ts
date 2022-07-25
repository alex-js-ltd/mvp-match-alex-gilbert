import { Moment } from 'moment';
import moment from 'moment';

export const formatDate = (date: Moment) => {
  return moment(date).format('YYYY-MM-DD');
};
