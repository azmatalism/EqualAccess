import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';

const Table = ({
  index,
  organization,
  contactPerson,
  phone,
  email,
  city,
}: any) => {
  return (
    <View>
      <View style={styles.headerRow}>
        <Text style={[styles.cell, styles.smallCell]}>Sr. No.</Text>
        <Text style={[styles.cell, styles.largeCell]}>Organization</Text>
        <Text style={[styles.cell, styles.mediumCell]}>Contact Person</Text>
        <Text style={[styles.cell, styles.mediumCell]}>Phone</Text>
        <Text style={[styles.cell, styles.mediumCell]}>Email</Text>
        <Text style={[styles.cell, styles.mediumCell]}>City</Text>
      </View>
      <View style={styles.row}>
        <Text style={[styles.cell, styles.smallCell]}>{index}</Text>
        <Text style={[styles.cell, styles.largeCell]}>{organization}</Text>
        <Text style={[styles.cell, styles.mediumCell]}>{contactPerson}</Text>
        <Text style={[styles.cell, styles.mediumCell]}>{phone}</Text>
        <Text style={[styles.cell, styles.mediumCell]}>{email}</Text>
        <Text style={[styles.cell, styles.mediumCell]}>{city}</Text>
      </View>
    </View>
  );
};

export default Table;
