import {fonts} from '@themes/fonts';
import {useThemeStore} from '@themes/useThemeStore';
import dayjs from 'dayjs';
import React from 'react';
import {Calendar} from 'react-native-calendars';

type Props = {
  date: Date;
  setDate: (date: Date) => void;
};

const Calendars = (props: Props) => {
  const {date, setDate} = props;

  const {colors} = useThemeStore();

  return (
    <Calendar
      initialDate={date}
      theme={{
        backgroundColor: colors.NEUTRAL,
        calendarBackground: colors.NEUTRAL,
        selectedDayBackgroundColor: colors.GRAY_900,
        selectedDayTextColor: colors.NEUTRAL,
        todayTextColor: colors.GRAY_900,
        dayTextColor: colors.GRAY_900,
        textDisabledColor: colors.TEXT_SECONDARY,
        textDayFontFamily: fonts.REGULAR,
        textMonthFontFamily: fonts.REGULAR,
        textMonthFontSize: 16,
        textDayFontSize: 16,
        arrowColor: colors.GRAY_900,
      }}
      onDayPress={(day: {
        dateString: string | number | Date | dayjs.Dayjs | null | undefined;
      }) => {
        setDate(dayjs(day.dateString).toDate());
      }}
    />
  );
};

export default Calendars;
