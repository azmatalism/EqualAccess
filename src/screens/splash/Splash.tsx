import {Image, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from './styles';
import {IMGS, ROUTES} from '../../constants';
import {useTheme} from '@react-navigation/native';

const Splash = ({navigation}: any) => {
  const {colors} = useTheme();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(ROUTES.HOME);
    }, 300);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={[styles.main, {backgroundColor: colors.background}]}>
      <Image style={styles.spLogo} source={IMGS.user} />
    </SafeAreaView>
  );
};

export default Splash;
