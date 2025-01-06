import {
  I18nManager,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './styles';
import {
  BottomTab,
  globalFontNormal,
  globalContainer,
  Header,
  tabs,
  COLORS,
} from '../../constants/constant';
import {DrawerActions} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import InputCard from '../../components/inputCard/InputCard';
import YoutubeVideo from '../../components/youtubeVideo/YoutubeVideo';
import SoundCloudAudio from '../../components/soundCloudAudio/SoundCloudAudio';
import Button from '../../components/button/Button';

const Contact = ({navigation}: any) => {
  const {t} = useTranslation();
  const normalFont = globalFontNormal();
  const [activeTab, setActiveTab] = useState(3);
  const isRtl = I18nManager.isRTL;

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
    setActiveTab(3);
  }, [navigation]);

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
          <YoutubeVideo videoId="mQYqBVY7jy0" />
          <Text
            style={[
              normalFont,
              {marginVertical: 10, textAlign: isRtl ? 'right' : 'left'},
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
            btnTitleStyle={[normalFont, {color: COLORS.white}]}
          />
        </ScrollView>
      </KeyboardAvoidingView>

      <BottomTab
        tabs={tabs}
        activeTab={activeTab}
        onTabPress={handleTabPress}
        // onPress={}
      />
    </SafeAreaView>
  );
};

export default Contact;
