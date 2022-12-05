import { DateTime } from '../../node_modules/luxon/src/luxon.js';

const getDateAndTime = () => {
  const date = DateTime.now();
  return date.toLocaleString(DateTime.DATETIME_MED);
};

export default getDateAndTime;