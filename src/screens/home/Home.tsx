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
  IMGS,
  ROUTES,
  tabs,
} from '../../constants/constant';
import {DrawerActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import SoundCloudAudio from '../../components/soundCloudAudio/SoundCloudAudio';
import HomeCard from '../../components/homeCard/HomeCard';

function Home({navigation}: any) {
  const {t, i18n} = useTranslation();
  const font = globalFont();
  const isRtl = ['ur'].includes(i18n.language);
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
      <Header heading={t('dashboard')} navigation={navigation} />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <SoundCloudAudio trackUrl="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/406749579&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          <HomeCard
            image={IMGS.homeHumanitarian}
            isRtl={isRtl}
            heading={t('humanitarian_assistance')}
            Touchable
            onPress={() => navigation.navigate(ROUTES.HUMANITARIAN_DRAWER)}
          />
          <HomeCard
            image={IMGS.homeHumanitarian}
            isRtl={isRtl}
            heading={t('service')}
            Touchable
            onPress={() => navigation.navigate(ROUTES.SERVICES_DRAWER)}
          />
          <HomeCard
            image={IMGS.homeHumanitarian}
            isRtl={isRtl}
            heading={t('policies_laws')}
            Touchable
            onPress={() => navigation.navigate(ROUTES.POLICIES_DRAWER)}
          />
          <HomeCard
            image={IMGS.homeHumanitarian}
            isRtl={isRtl}
            heading={t('disability_information')}
            Touchable
            onPress={() => navigation.navigate(ROUTES.DISABILITY_STAKEHOLDER)}
          />
          <HomeCard
            image={IMGS.homeHumanitarian}
            isRtl={isRtl}
            heading={t('covid_19')}
            Touchable
            onPress={() => navigation.navigate(ROUTES.COVID_DRAWER)}
          />
          <HomeCard
            image={IMGS.homeHumanitarian}
            isRtl={isRtl}
            heading={t('news_updates')}
            Touchable
            onPress={() => navigation.navigate(ROUTES.NEWS_DRAWER)}
          />
          <HomeCard
            image={IMGS.homeHumanitarian}
            isRtl={isRtl}
            heading={t('contact_us')}
            Touchable
            onPress={() => navigation.navigate(ROUTES.CONTACT_DRAWER)}
          />
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

export default Home;
