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
import SoundCloudAudio from '../../components/soundCloudAudio/SoundCloudAudio';

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
      <KeyboardAvoidingView
        style={globalContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <SoundCloudAudio trackUrl="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/406749579&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
        </ScrollView>
      </KeyboardAvoidingView>
      <BottomTab
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
    </SafeAreaView>
  );
}

export default PoliciesLaw;
