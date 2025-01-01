import {View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

const Icon = ({name, color, size, iconFamily}: any) => {
  return (
    <View>
      {iconFamily === 'fontAwesone6' ? (
        <FontAwesome6 name={name} size={size} color={color} />
      ) : iconFamily === 'ionicons' ? (
        <Ionicons name={name} size={size} color={color} />
      ) : iconFamily === 'Fontisto' ? (
        <Fontisto name={name} size={size} color={color} />
      ) : iconFamily === 'feather' ? (
        <Feather name={name} size={size} color={color} />
      ) : iconFamily === 'material' ? (
        <MaterialIcons name={name} size={size} color={color} />
      ) : iconFamily === 'antDesign' ? (
        <AntDesign name={name} size={size} color={color} />
      ) : iconFamily === 'entypo' ? (
        <Entypo name={name} size={size} color={color} />
      ) : (
        <MaterialCommunityIcons name={name} size={size} color={color} />
      )}
    </View>
  );
};

export default Icon;
