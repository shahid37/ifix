import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import { WorkerDetails } from '../../components';
import { Header } from '../../components/common';
import { PINK, PEACH ,appColor, black, headerColor } from '../../constants/colors';
import { RUBIK_REGULAR } from '../../constants/fonts';

export default () => {
  const navigation = useNavigation();
  const route = useRoute();

  const leftIcon = (
    <Icon name="chevron-left" type="font-awesome-5" color="#000" size={20} />
  );
  const headerText = (
    <Image style={styles.headerLogo} source={require('../../assets/images/logga_ifix-logo.png')} />
  );

  return (
    <View style={styles.container}>
      <Header
        iconLeft={leftIcon}
        text={headerText}
        color={headerColor}
        leftPress={navigation.goBack}
      />
      <WorkerDetails worker={route.params.worker} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:appColor,
  },
  headerText: {
    color: PINK,
  },
  headerLogo: {
    width: 60,
    height: 18,
    resizeMode: "contain"
  }
  // headerText: {
  //   fontFamily: RUBIK_REGULAR,
  //   fontSize: 16,
  //   color:black,
  // },
});
