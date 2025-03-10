import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {styles} from './styles';
import Header from '../../components/header/Header';
import {useTranslation} from 'react-i18next';
import HomeCard from '../../components/homeCard/HomeCard';
import {ROUTES} from '../../constants/constant';

const DisabilityStakeholder = ({navigation}: any) => {
  const {t, i18n} = useTranslation();
  //   const font = globalFont();
  const isRtl = ['ur'].includes(i18n.language);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        heading={t('disability_information')}
        goBack={() => navigation.goBack()}
      />
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={{marginTop: 10}}>
            <HomeCard
              isRtl={isRtl}
              marginBottom={10}
              heading={t('federal')}
              linkOne={t('dpo')}
              linkOnePress={() =>
                navigation.navigate(ROUTES.GLOBAL_SCREEN, {
                  heading: 'federal',
                  name: 'dpo',
                })
              }
              linkTwo={t('ndma')}
              linkTwoPress={() =>
                navigation.navigate(ROUTES.GLOBAL_SCREEN, {
                  heading: 'federal',
                  name: 'ndma',
                })
              }
            />
            <HomeCard
              isRtl={isRtl}
              marginBottom={10}
              heading={t('punjab')}
              linkOne={t('dpo')}
              linkTwo={t('ndma')}
            />
            <HomeCard
              isRtl={isRtl}
              marginBottom={10}
              heading={t('sindh')}
              linkOne={t('dpo')}
              linkTwo={t('ndma')}
            />
            <HomeCard
              isRtl={isRtl}
              marginBottom={10}
              heading={t('khyber_pakhtunkhwa')}
              linkOne={t('dpo')}
              linkTwo={t('ndma')}
            />
            <HomeCard
              isRtl={isRtl}
              marginBottom={10}
              heading={t('balochistan')}
              linkOne={t('dpo')}
              linkTwo={t('ndma')}
            />
            <HomeCard
              isRtl={isRtl}
              marginBottom={10}
              heading={t('ak_gb')}
              linkOne={t('dpo')}
              linkTwo={t('ndma')}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default DisabilityStakeholder;
