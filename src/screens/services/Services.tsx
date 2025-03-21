import {
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {
  BottomTab,
  globalContainer,
  globalFont,
  Header,
  tabs,
} from '../../constants/constant';
import {DrawerActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import YoutubeVideo from '../../components/youtubeVideo/YoutubeVideo';

const Services = ({navigation}: any) => {
  const {t} = useTranslation();
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
      <Header heading={t('service')} navigation={navigation} />
      <KeyboardAvoidingView
        style={globalContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <YoutubeVideo videoId="mQYqBVY7jy0" />
        </ScrollView>
      </KeyboardAvoidingView>
      <BottomTab
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
    </SafeAreaView>
  );
};

export default Services;
