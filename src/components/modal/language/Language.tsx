import {Modal, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {languageResources} from '../../../../services/i18n';
import {useTranslation} from 'react-i18next';
import i18next from '../../../../services/i18n';
import languagesList from '../../../../services/languagesList.json';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS, globalFont, ICONS} from '../../../constants/constant';
import Button from '../../button/Button';
import {useTheme} from '@react-navigation/native';
import {useAppContext} from '../../../theme/AppContext';

const Language = ({visible, onClose}: any) => {
  const {t} = useTranslation();
  const font = globalFont();
  const {colors} = useTheme();
  const {fontStyles} = useAppContext();
  const [selectedData, setSelectedData] = useState('english');
  // console.log('Default Language:==>', selectedData);

  const changeLng = async (lng: any, name: any) => {
    i18next.changeLanguage(lng);
    await AsyncStorage.setItem('settings.lang', lng);
    setSelectedData(name);
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={[styles.modalBackground, {backgroundColor: colors.card}]}>
          <View style={styles.modalView}>
            <Text style={[fontStyles.bold, {color: colors.text}]}>
              {t('language')}
            </Text>
            {Object.keys(languageResources).map(item => {
              const languageName =
                languagesList[item as keyof typeof languagesList].name;
              const isSelected = selectedData === languageName;
              return (
                <View style={styles.optionContainer} key={item}>
                  <View style={{width: '100%'}}>
                    <TouchableOpacity
                      onPress={() =>
                        changeLng(
                          item,
                          languagesList[item as keyof typeof languagesList]
                            .name,
                        )
                      }>
                      <Text style={[font, {textAlign: 'center'}]}>
                        {
                          languagesList[item as keyof typeof languagesList]
                            .nativeName
                        }
                      </Text>
                    </TouchableOpacity>
                    <View style={styles.divider} />
                  </View>

                  <View>
                    {isSelected && (
                      <ICONS
                        iconFamily="ionicons"
                        name="checkmark-circle"
                        size={22}
                        color={COLORS.blue}
                      />
                    )}
                  </View>
                </View>
              );
            })}
          </View>
          <Button
            margin={10}
            btnTitleStyle={[font, {color: COLORS.white}]}
            title={t('btn_close')}
            onPress={onClose}
          />
        </View>
      </View>
    </Modal>
  );
};

export default Language;
