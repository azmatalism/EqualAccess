import {Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {ICONS} from '../../constants';

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
}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.4}
      style={[styles.button, btnCustomStyle]}>
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
