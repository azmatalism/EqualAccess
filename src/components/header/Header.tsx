import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, ICONS, shadow} from '../../constants/constant';
import {styles} from './styles';
import {useTheme} from '@react-navigation/native';
import {useAppContext} from '../../theme/AppContext';

const Header = ({heading, navigation, goBack}: any) => {
  const {fontSize} = useAppContext();
  const {colors} = useTheme();
  return (
    <View style={[styles.container, shadow, {backgroundColor: colors.card}]}>
      {goBack ? (
        <TouchableOpacity onPress={goBack}>
          <ICONS
            name="arrow-back"
            color={colors.text}
            size={22}
            iconFamily="ionicons"
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <ICONS
            name="menu-outline"
            color={colors.text}
            size={30}
            iconFamily="ionicons"
          />
        </TouchableOpacity>
      )}
      <Text
        style={[
          goBack ? {marginLeft: 30} : {marginLeft: 10},
          {
            fontSize,
            fontWeight: '500',
            color: colors.text,
          },
        ]}>
        {heading}
      </Text>
    </View>
  );
};
export default Header;
