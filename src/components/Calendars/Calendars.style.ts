import {colors} from '@themes/colors';
import {fonts} from '@themes/fonts';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  themeCalendar: {
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
  },
});
