import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import {useTranslation} from 'react-i18next';
import {COLORS, ICONS, shadow} from '../../constants/constant';
import {useTheme} from '@react-navigation/native';

const BottomTab = ({tabs, activeTab, onTabPress, disable}: any) => {
  const {t} = useTranslation();
  const {colors} = useTheme();
  return (
    <View style={[styles.tabContainer, shadow, {backgroundColor: colors.card}]}>
      {tabs.map((tab: any, index: any) => (
        <View key={index}>
          <TouchableOpacity
            disabled={disable}
            style={[
              styles.tabItem,
              activeTab === index
                ? {borderTopColor: COLORS.blue, borderTopWidth: 2.5}
                : null,
            ]}
            onPress={() => {
              onTabPress(index);
            }}>
            <ICONS
              iconFamily={'ionicons'}
              name={tab.icon}
              size={24}
              color={activeTab === index ? COLORS.blue : colors.text}
            />

            <View>
              {activeTab === index ? (
                <Text style={styles.tabActiveText}>{t(tab.label)}</Text>
              ) : (
                <Text style={[styles.tabInActiveText, [{color: colors.text}]]}>
                  {t(tab.label)}
                </Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default BottomTab;
