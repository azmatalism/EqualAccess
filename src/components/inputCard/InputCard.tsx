// import React from 'react';
// import {View, TextInput, Text} from 'react-native';
// import {styles} from './styles';
// import {globalFontNormal} from '../../constants/constant';
// import {useTheme} from '@react-navigation/native';

// const InputCard = ({
//   inputTitle,
//   placeholder,
//   value,
//   onChangeText,
//   height,
//   textAlignVertical,
//   multiline,
//   numberOfLines,
//   isRtl,
// }: any) => {
//   const normalFont = globalFontNormal();
//   const {colors} = useTheme();
//   return (
//     <View
//       style={[
//         styles.card,
//         {borderColor: colors.text},
//         isRtl ? {alignItems: 'flex-end'} : {alignItems: 'flex-start'},
//       ]}>
//       <Text
//         style={[
//           normalFont,
//           {textAlign: isRtl ? 'right' : 'left', width: '100%'},
//         ]}>
//         {inputTitle}
//       </Text>
//       <TextInput
//         style={[
//           normalFont,
//           {height: height ? height : null, textAlign: isRtl ? 'right' : 'left'},
//         ]}
//         placeholder={placeholder}
//         value={value}
//         onChangeText={onChangeText}
//         textAlignVertical={textAlignVertical}
//         multiline={multiline}
//         numberOfLines={numberOfLines}
//       />
//     </View>
//   );
// };

// export default InputCard;

import React from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import {styles} from './styles';
import {COLORS, globalFontNormal} from '../../constants/constant';
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
  const normalFont = globalFontNormal();
  const {colors} = useTheme();

  return (
    <View
      style={[
        styles.card,
        {borderColor: colors.text},
        isRtl ? dynamicStyles.rtlAlign : dynamicStyles.ltrAlign,
      ]}>
      <Text
        style={[
          normalFont,
          {textAlign: isRtl ? 'right' : 'left', width: '100%'},
        ]}
        accessibilityLabel={inputTitle}>
        {inputTitle}
      </Text>
      <TextInput
        style={[
          normalFont,
          {height: height ? height : 40, textAlign: isRtl ? 'right' : 'left'},
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

const dynamicStyles = StyleSheet.create({
  rtlAlign: {
    alignItems: 'flex-end',
    textAlign: 'right',
  },
  ltrAlign: {
    alignItems: 'flex-start',
    textAlign: 'left',
  },
});

export default InputCard;
