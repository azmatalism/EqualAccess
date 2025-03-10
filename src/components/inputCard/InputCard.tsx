import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {styles} from './styles';
import {COLORS, normalStyle} from '../../constants/constant';
import {useTheme} from '@react-navigation/native';

const InputCard = ({
  inputTitle,
  placeholder,
  value,
  onChangeText,
  height,
  textAlignVertical,
  multiline,
  numberOfLines,
  isRtl = false,
}: any) => {
  const normalStyleFont = normalStyle();
  const {colors} = useTheme();

  return (
    <View
      style={[
        styles.card,
        {borderColor: colors.border},
        isRtl ? styles.rightAligned : styles.leftAligned,
      ]}>
      <Text
        style={[
          normalStyleFont,
          {
            textAlign: isRtl ? 'right' : 'left',
            writingDirection: isRtl ? 'rtl' : 'ltr',
            width: '100%',
          },
        ]}
        accessibilityLabel={inputTitle}>
        {inputTitle}
      </Text>
      <TextInput
        style={[
          normalStyleFont,
          {
            height: height || 40,
            textAlign: isRtl ? 'right' : 'left',
            writingDirection: isRtl ? 'rtl' : 'ltr',
          },
        ]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        accessibilityLabel={placeholder}
        value={value}
        onChangeText={onChangeText}
        textAlignVertical={textAlignVertical}
        multiline={multiline}
        numberOfLines={numberOfLines}
      />
    </View>
  );
};

export default InputCard;
