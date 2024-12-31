import {SafeAreaView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {tabs} from '../../constants/arrays';
import {BottomTab, Header} from '../../constants';
import {DrawerActions, useTheme} from '@react-navigation/native';
import {useAppContext} from '../../theme/AppContext';

const Services = ({navigation}: any) => {
  const {fontSize} = useAppContext();
  const {colors} = useTheme();
  const [activeTab, setActiveTab] = useState(1);

  const handleTabPress = (index: any) => {
    if (index === 4) {
      navigation.dispatch(DrawerActions.openDrawer());
    } else {
      const routeName = tabs[index]?.screen;
      if (routeName) {
        navigation.navigate(routeName);
      }
    }
    setActiveTab(index);
  };

  useEffect(() => {
    const activeHomeTab = () => {
      setActiveTab(1);
    };
    activeHomeTab();
  }, [navigation, activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      <Header heading={'Services'} navigation={navigation} />
      <View style={styles.container}>
        <Text style={{fontSize, color: colors.text, fontWeight: '500'}}>
          Services!
        </Text>
      </View>
      <BottomTab
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
    </SafeAreaView>
  );
};

export default Services;
