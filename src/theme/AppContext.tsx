import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface FontStyles {
  regular: {fontSize: number; fontWeight: 400};
  medium: {fontSize: number; fontWeight: 500};
  bold: {fontSize: number; fontWeight: 700};
  heavy: {fontSize: number; fontWeight: 900};
}

interface AppContextType {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  fontSize: number;
  fontStyles: FontStyles;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  // Start with `null` to avoid overwriting
  const [fontSize, setFontSize] = useState<number | null>(null);

  // console.log('Initial fontSize:', fontSize);

  // Generate font styles dynamically based on fontSize
  const fontStyles: FontStyles = useMemo(() => {
    // Default to 16 if fontSize is not yet loaded
    const baseFontSize = fontSize || 16;
    return {
      regular: {fontSize: baseFontSize, fontWeight: 400},
      medium: {fontSize: baseFontSize + 2, fontWeight: 500},
      bold: {fontSize: baseFontSize + 4, fontWeight: 700},
      heavy: {fontSize: baseFontSize + 8, fontWeight: 900},
    };
  }, [fontSize]);

  // Font size handlers
  const increaseFontSize = () =>
    setFontSize(prev => Math.min((prev || 16) + 2, 22)); // Max size limit
  const decreaseFontSize = () =>
    setFontSize(prev => Math.max((prev || 16) - 2, 14)); // Min size limit

  // Load preferences on mount
  useEffect(() => {
    const loadPreferences = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('theme');
        const savedFontSize = await AsyncStorage.getItem('fontSize');

        // console.log('Saved theme:', savedTheme);
        // console.log('Saved fontSize:', savedFontSize);

        if (savedTheme) setIsDarkMode(savedTheme === 'dark');
        if (savedFontSize) {
          const parsedFontSize = parseInt(savedFontSize, 10);
          // console.log('Parsed fontSize:', parsedFontSize);
          setFontSize(parsedFontSize);
        } else {
          setFontSize(16); // Default value if nothing is saved
        }
      } catch (error) {
        console.error('Error loading preferences:', error);
        setFontSize(16); // Fallback to default in case of error
      }
    };

    loadPreferences();
  }, []);

  // Save theme preference whenever it changes
  useEffect(() => {
    AsyncStorage.setItem('theme', isDarkMode ? 'dark' : 'light')
      // .then(() => console.log('Theme saved successfully'))
      .catch(error => console.error('Error saving theme:', error));
  }, [isDarkMode]);

  // Save font size preference whenever it changes
  useEffect(() => {
    if (fontSize !== null) {
      AsyncStorage.setItem('fontSize', fontSize.toString())
        // .then(() => console.log('Font size saved successfully:', fontSize))
        .catch(error => console.error('Error saving font size:', error));
    }
  }, [fontSize]);

  const value = useMemo(
    () => ({
      isDarkMode,
      setIsDarkMode,
      fontSize: fontSize || 16, // Default to 16 if fontSize is not yet loaded
      fontStyles,
      increaseFontSize,
      decreaseFontSize,
    }),
    [isDarkMode, fontSize, fontStyles],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
