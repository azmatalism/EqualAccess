import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {tabs} from '../../constants/arrays';
import {styles} from './styles';
import {BottomTab, Header} from '../../constants';
import {DrawerActions, useTheme} from '@react-navigation/native';
import {useAppContext} from '../../theme/AppContext';

function Home({navigation}: any) {
  const {fontSize} = useAppContext();
  const {colors} = useTheme();
  const [activeTab, setActiveTab] = useState(0);

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
      setActiveTab(0);
    };
    activeHomeTab();
  }, [navigation, activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      <Header heading={'Dashboard'} navigation={navigation} />
      <View style={styles.container}>
        <Text style={{fontSize, color: colors.text, fontWeight: '500'}}>
          Home!
        </Text>
      </View>
      <BottomTab
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
    </SafeAreaView>
  );
}

export default Home;
