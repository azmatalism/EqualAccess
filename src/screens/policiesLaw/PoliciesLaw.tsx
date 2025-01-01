import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {BottomTab, globalFont, Header, tabs} from '../../constants/constant';
import {DrawerActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

function PoliciesLaw({navigation}: any) {
  const {t} = useTranslation();
  const font = globalFont();
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
      <Header heading={t('policies_laws')} navigation={navigation} />
      <View style={styles.container}>
        <Text style={font}>{t('policies_laws')}</Text>
      </View>
      <BottomTab
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
    </SafeAreaView>
  );
}

export default PoliciesLaw;
