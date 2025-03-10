import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import Table from '../../components/table/Table';
import {useTranslation} from 'react-i18next';
import {styles} from './styles';
import Header from '../../components/header/Header';

const data = [
  {
    id: '1',
    organization: 'Special Talent Exchange Program (STEP)',
    contactPerson: 'Muhammad Atif Sheik',
    phone: '0331-9562165',
    email: 'atif@step.org.pk',
    city: 'Islamabad',
  },
  {
    id: '2',
    organization: 'Disabled People Development Organization (DPDO)',
    contactPerson: 'Farah Ali Butt',
    phone: '0301-5316335',
    email: 'farah_bibi2001@yahoo.com',
    city: 'Islamabad',
  },
  {
    id: '3',
    organization: 'Sir Syed Deaf Association (SDF)',
    contactPerson: 'Mushtaq Butt',
    phone: '0336-5256826',
    email: 'ssdeaf@yahoo.com',
    city: 'Islamabad',
  },
  {
    id: '4',
    organization: 'National Forum of Women with Disabilities (NFWWD)',
    contactPerson: 'Abia Akram',
    phone: '0301-8503533',
    email: 'abia.m.ilc@gmail.com',
    city: 'Islamabad',
  },
  {
    id: '5',
    organization: 'Pakistan Foundation Fighting Blindness (PFFB)',
    contactPerson: 'Rabil Peer Zada',
    phone: '0332-6989654',
    email: 'rabil.pirzada89@gmail.com',
    city: 'Islamabad',
  },
  {
    id: '6',
    organization: 'Special Person Rehabilitate Independent and Game (SPRING)',
    contactPerson: 'Raja Imran Hussain',
    phone: '0333-3713517',
    email: 'rajaimranhussain1@gmail.com',
    city: 'Islamabad',
  },
  {
    id: '7',
    organization: 'SAAYA Association for Persons with Disabilities',
    contactPerson: 'Mian Asim Zafar',
    phone: '0321-4282739',
    email: 'saayassociation@hotmail.com',
    city: 'Islamabad',
  },
  {
    id: '8',
    organization: 'Strive Trust (Rehabilitation Center)',
    contactPerson: 'Yasir Khan',
    phone: '0300-5212452',
    email: 'yasirkhansh@yahoo.com',
    city: 'Islamabad',
  },
];

const GlobalScreen = ({navigation}: any) => {
  const {t, i18n} = useTranslation();
  //   const font = globalFont();
  const isRtl = ['ur'].includes(i18n.language);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        heading={t('disability_information')}
        goBack={() => navigation.goBack()}
      />
      <ScrollView style={{marginHorizontal: 20}} horizontal={true}>
        <Table
          index={'1'}
          organization={'Special Talent Exchange Program (STEP)'}
          contactPerson={'Muhammad Atif Sheik'}
          phone={'0331-9562165'}
          email={'atif@step.org.pk'}
          city={'Islamabad'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default GlobalScreen;
