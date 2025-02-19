import {create} from 'zustand';
import {storage} from '@utils/storageMMKV';
import {ColorSchemeName} from 'react-native';
import colors from './colors';
import useGeneralStore from '@store/generalStore';

type ThemeState = {
  theme: ColorSchemeName;
  colors: typeof colors.dark;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeState>(set => {
  const storedTheme = storage.getString(
    'THEME_STATE',
  ) as ColorSchemeName | null;
  const systemTheme = storedTheme || 'dark';

  return {
    theme: systemTheme,
    colors: colors[systemTheme],
    toggleTheme: () => {
      set(state => {
        const newTheme = state.theme === 'light' ? 'dark' : 'light';
        storage.set('THEME_STATE', newTheme);
        const setIsDarkMode = useGeneralStore.getState().setIsDarkMode;
        setIsDarkMode(state.theme === 'light' ? true : false);
        return {theme: newTheme, colors: colors[newTheme]};
      });
    },
  };
});
