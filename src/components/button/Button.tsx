import {Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ICONS} from '../../constants/constant';

const {height, width} = Dimensions.get('window');
const Button = ({
  title,
  onPress,
  btnTitleStyle,
  btnCustomStyle,
  icon,
  name,
  iconFamily,
  size,
  iconColor,
  disabled,
  marginVertical,
  marginHorizontal,
  margin,
}: any) => {
  return (
    <TouchableOpacity
      onPress={disabled ? null : onPress}
      activeOpacity={disabled ? 1 : 0.4}
      style={[
        styles.button,
        btnCustomStyle,
        {margin: margin ? margin : null},
        {marginVertical: marginVertical ? marginVertical : null},
        {marginHorizontal: marginHorizontal ? marginHorizontal : null},
        disabled && styles.disabled,
      ]}>
      {icon ? (
        <ICONS
          name={name}
          iconFamily={iconFamily}
          size={size}
          color={iconColor}
        />
      ) : (
        <Text style={[styles.titleText, btnTitleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
