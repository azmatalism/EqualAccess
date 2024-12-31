import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '../../constants/constant';

const Gradient = ({style, children}: any) => {
  return (
    <LinearGradient
      colors={[
        COLORS.dimWhite,
        COLORS.dimWhite,
        COLORS.dimWhite,
        COLORS.dimWhite,
      ]}
      style={style}>
      {children}
    </LinearGradient>
  );
};

export default Gradient;
