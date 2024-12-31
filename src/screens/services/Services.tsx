import {SafeAreaView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {BottomTab, globalFont, Header, tabs} from '../../constants/constant';
import {DrawerActions} from '@react-navigation/native';

const Services = ({navigation}: any) => {
  const font = globalFont();
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
        <Text style={font}>Services!</Text>
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
