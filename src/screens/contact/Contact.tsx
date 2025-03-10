import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import {styles} from './styles';
import {
  BottomTab,
  normalStyle,
  globalContainer,
  Header,
  tabs,
  COLORS,
} from '../../constants/constant';
import {DrawerActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import InputCard from '../../components/inputCard/InputCard';
import SoundCloudAudio from '../../components/soundCloudAudio/SoundCloudAudio';
import Button from '../../components/button/Button';

const Contact = ({navigation}: any) => {
  const {t, i18n} = useTranslation();
  const normalStyleFont = normalStyle();
  const [activeTab, setActiveTab] = useState(3);
  const isRtl = ['ur'].includes(i18n.language);

  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleTabPress = (index: number) => {
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
      setActiveTab(3);
    };
    activeHomeTab();
  }, [navigation, activeTab]);

  return (
    <SafeAreaView style={styles.container}>
      <Header heading={t('contact_us')} navigation={navigation} />

      <KeyboardAvoidingView
        style={globalContainer}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <SoundCloudAudio trackUrl="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/406749579&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true" />
          <Text
            style={[
              normalStyleFont,
              {
                marginVertical: 10,
                textAlign: isRtl ? 'right' : 'left',
                writingDirection: isRtl ? 'rtl' : 'ltr',
              },
            ]}>
            {t('contact_us_form')}
          </Text>
          <InputCard
            inputTitle={t('contact_us_subject')}
            value={subject}
            onChangeText={setSubject}
            multiline
            numberOfLines={2}
            isRtl={isRtl}
          />
          <InputCard
            inputTitle={t('contact_us_message')}
            height={120}
            textAlignVertical="top"
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={6}
            isRtl={isRtl}
          />
          <Button
            title={t('contact_us_btn_submit')}
            btnTitleStyle={[normalStyleFont, {color: COLORS.white}]}
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
};

export default Contact;
