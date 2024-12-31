import {FlatList, Modal, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import i18n, {languageResources} from '../../../../services/i18n';
import {useTranslation} from 'react-i18next';
import i18next from '../../../../services/i18n';
import languagesList from '../../../../services/languagesList.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../../../constants/constant';
import Button from '../../button/Button';

const Language = ({visible, onClose}: any) => {
  const {t} = useTranslation();
  const [selectedData, setSelectedData] = useState('english');

  const [label, setLabel] = useState('English');

  const changeLng = async (lng: any, name: any) => {
    i18next.changeLanguage(lng);
    await AsyncStorage.setItem('settings.lang', lng);
    setSelectedData(name);
    setLabel(name);
    onClose();
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalBackground}>
        <View style={styles.overlay}>
          <View style={styles.modalBackground}>
            <View style={styles.modalView}>
              <FlatList
                data={Object.keys(languageResources)}
                renderItem={({item}) => (
                  <TouchableOpacity
                    onPress={() =>
                      changeLng(
                        item,
                        languagesList[item as keyof typeof languagesList].name,
                      )
                    }>
                    <Text
                      style={{
                        color: COLORS.textColor,
                        padding: 5,
                        marginLeft: 10,
                      }}>
                      {
                        languagesList[item as keyof typeof languagesList]
                          .nativeName
                      }
                    </Text>
                  </TouchableOpacity>
                )}
              />
              <Button title="Close" onPress={onClose} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default Language;
