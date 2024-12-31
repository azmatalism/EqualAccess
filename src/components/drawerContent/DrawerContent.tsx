import React, {useContext, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Switch} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import Language from '../modal/language/Language';
import {COLORS, ICONS} from '../../constants';
import Button from '../button/Button';
import {useAppContext} from '../../theme/AppContext';
import {useTheme} from '@react-navigation/native';

const DrawerContent = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  // const {isDarkMode, setIsDarkMode} = useAppContext();
  // const [fontSize, setFontSize] = useState(14);
  // const {colors} = useTheme();
  // const increaseFontSize = () => {

  // };

  // const decreaseFontSize = () => {

  // };
  const {
    isDarkMode,
    setIsDarkMode,
    fontSize,
    increaseFontSize,
    decreaseFontSize,
  } = useAppContext();
  const {colors} = useTheme();

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
            <Text
              style={{
                fontSize,
                color: colors.text,
                marginLeft: 13,
                fontWeight: '500',
              }}>
              Language
            </Text>
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
          <Text
            style={{
              fontSize,
              color: colors.text,
              marginLeft: 13,
              fontWeight: '500',
            }}>
            Dark Mode
          </Text>
        </View>
        <Switch
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
          <Text
            style={{
              fontSize,
              color: colors.text,
              marginLeft: 13,
              fontWeight: '500',
            }}>
            Font Size
          </Text>
        </View>
        <View style={styles.fontSizeControls}>
          <Button
            btnCustomStyle={styles.btnCustomStyle}
            icon={true}
            iconFamily="feather"
            name="minus"
            size={22}
            iconColor={COLORS.white}
            onPress={decreaseFontSize}
          />
          {/* <Text style={styles.fontSizeText}>{fontSize}</Text> */}
          <View style={styles.fontSizeText} />
          <Button
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
  labelText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 13,
  },
  fontSizeControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fontSizeText: {
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 10,
  },
  btnCustomStyle: {
    height: 30,
    width: 30,
    borderRadius: 5,
    backgroundColor: COLORS.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  customTitleStyle: {
    fontSize: 20,
  },
});
