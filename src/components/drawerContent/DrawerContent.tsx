import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Language from '../modal/language/Language';
import {COLORS, globalFont, ICONS} from '../../constants/constant';
import Button from '../button/Button';
import {useAppContext} from '../../theme/AppContext';
import {useTheme} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const DrawerContent = (props: any) => {
  const {t} = useTranslation();
  const font = globalFont();
  const {colors} = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const {
    isDarkMode,
    fontSize,
    setIsDarkMode,
    increaseFontSize,
    decreaseFontSize,
  } = useAppContext();

  return (
    <DrawerContentScrollView {...props}>
      {/* Render default drawer items */}
      <DrawerItemList {...props} />

      {/* Language Button */}
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <ICONS
            iconFamily="ionicons"
            name="globe-outline"
            size={22}
            color={colors.text}
          />
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={[font, {marginLeft: 13}]}>{t('language')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Dark Mode Toggle */}
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <ICONS
            iconFamily="ionicons"
            name="moon"
            size={22}
            color={colors.text}
          />
          <Text style={[font, {marginLeft: 13}]}>{t('dark_mode')}</Text>
        </View>
        <Switch
          trackColor={{false: COLORS.lightBlue, true: COLORS.lightBlue}}
          thumbColor={COLORS.blue}
          ios_backgroundColor={COLORS.lightBlue}
          value={isDarkMode}
          onValueChange={() => setIsDarkMode(prev => !prev)}
        />
      </View>

      {/* Font Size Adjuster */}
      <View style={styles.container}>
        <View style={styles.labelContainer}>
          <ICONS
            iconFamily="material"
            name="font-download"
            size={22}
            color={colors.text}
          />
          <Text style={[font, {marginLeft: 13}]}>{t('font_size')}</Text>
        </View>
        <View style={styles.labelContainer}>
          <Button
            disabled={fontSize <= 14}
            btnCustomStyle={styles.btnCustomStyle}
            icon={true}
            iconFamily="feather"
            name="minus"
            size={22}
            iconColor={COLORS.white}
            onPress={decreaseFontSize}
          />

          <View style={{paddingHorizontal: 8}} />
          <Button
            disabled={fontSize >= 22}
            btnCustomStyle={styles.btnCustomStyle}
            icon={true}
            iconFamily="feather"
            name="plus"
            size={22}
            iconColor={COLORS.white}
            onPress={increaseFontSize}
          />
        </View>
      </View>

      {/* Language Modal */}
      <Language visible={modalVisible} onClose={() => setModalVisible(false)} />
    </DrawerContentScrollView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnCustomStyle: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
