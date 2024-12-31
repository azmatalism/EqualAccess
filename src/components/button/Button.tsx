import {Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ICONS} from '../../constants/constant';

const {height, width} = Dimensions.get('window');
const Button = ({
  title,
  onPress,
  customTitleStyle,
  btnCustomStyle,
  icon,
  name,
  iconFamily,
  size,
  iconColor,
  disabled,
}: any) => {
  return (
    <TouchableOpacity
      onPress={disabled ? null : onPress}
      activeOpacity={disabled ? 1 : 0.4}
      style={[styles.button, btnCustomStyle, disabled && styles.disabled]}>
      {icon ? (
        <ICONS
          name={name}
          iconFamily={iconFamily}
          size={size}
          color={iconColor}
        />
      ) : (
        <Text style={[styles.titleText, customTitleStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
