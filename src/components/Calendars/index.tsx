import dayjs from 'dayjs';
import React from 'react';
import {Calendar} from 'react-native-calendars';
import {styles} from './Calendars.style';

type Props = {
  date: Date;
  setDate: (date: Date) => void;
};

const Calendars = (props: Props) => {
  const {date, setDate} = props;
  return (
    <Calendar
      initialDate={date}
      theme={styles.themeCalendar}
      onDayPress={(day: {
        dateString: string | number | Date | dayjs.Dayjs | null | undefined;
      }) => {
        setDate(dayjs(day.dateString).toDate());
      }}
    />
  );
};

export default Calendars;
