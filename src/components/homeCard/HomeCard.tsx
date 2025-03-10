import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  globalContainer,
  globalFont,
  headingStyle,
  shadow,
} from '../../constants/global';
import {useTheme} from '@react-navigation/native';
import {COLORS} from '../../constants/constant';
import {useAppContext} from '../../theme/AppContext';

const HomeCard = ({
  isRtl = false,
  Touchable,
  onPress,
  height,
  marginBottom,
  image,
  heading,
  linkOne,
  linkTwo,
  linkOnePress,
  linkTwoPress,
}: any) => {
  const normalFont = globalFont();
  const headingFont = headingStyle();
  const {colors} = useTheme();
  const {fontStyles} = useAppContext();
  const ComponentContainer: any = Touchable ? TouchableOpacity : View;
  return (
    <ComponentContainer
      activeOpacity={0.8}
      onPress={onPress}
      style={[
        styles.card,
        shadow,
        {height: height ? height : null},
        {backgroundColor: colors.card, borderColor: colors.card},
        isRtl ? styles.rightAligned : styles.leftAligned,
      ]}>
      {image ? <Image source={image} style={styles.banner} /> : null}

      <View style={styles.textContainer}>
        {heading ? (
          <Text
            style={[
              headingFont,
              {
                textAlign: isRtl ? 'right' : 'left',
                writingDirection: isRtl ? 'rtl' : 'ltr',
                width: '100%',
              },
              {marginBottom: marginBottom ? marginBottom : null},
            ]}>
            {heading}
          </Text>
        ) : null}
        {linkOne ? (
          <TouchableOpacity activeOpacity={0.5} onPress={linkOnePress}>
            <Text
              style={[
                fontStyles.regular,
                {
                  textAlign: isRtl ? 'right' : 'left',
                  writingDirection: isRtl ? 'rtl' : 'ltr',
                  width: '100%',
                  borderBottomWidth: 1,
                  color: COLORS.blue,
                  borderBottomColor: COLORS.blue,
                },
              ]}>
              {linkOne}
            </Text>
          </TouchableOpacity>
        ) : null}
        {linkTwo ? (
          <TouchableOpacity activeOpacity={0.5} onPress={linkTwoPress}>
            <Text
              style={[
                fontStyles.regular,
                {
                  textAlign: isRtl ? 'right' : 'left',
                  writingDirection: isRtl ? 'rtl' : 'ltr',
                  width: '100%',
                  borderBottomWidth: 1,
                  color: COLORS.blue,
                  borderBottomColor: COLORS.blue,
                },
              ]}>
              {linkTwo}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </ComponentContainer>
  );
};

export default HomeCard;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  banner: {
    width: '100%',
    height: 300,
    padding: 10,
    resizeMode: 'cover',
  },
  textContainer: {
    marginVertical: 8,
  },
  rightAligned: {
    alignItems: 'flex-end',
  },
  leftAligned: {
    alignItems: 'flex-start',
  },
});
