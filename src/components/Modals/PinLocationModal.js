import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Overlay } from 'react-native-elements';

import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import { Button } from '../common';
import { RUBIK_REGULAR } from '../../constants/fonts';
import { WHITE, black, lightOrange } from '../../constants/colors';

const PinLocationModal = (props) => {
  const initialRegion = {
    latitude: 59.3402606,
    latitudeDelta: 0.004,
    longitude: 18.0661002,
    longitudeDelta: 0.004,
  };
  const { visible, closeModal, service_type } = props;

  return (
    <Overlay
      isVisible={visible ? visible : false}
      onBackdropPress={props.toggleOverlay}
      useNativeDriver={true}
      animationIn={props.animationIn}
      animationOut={props.animationOut}
      animationOutTiming={props.animationOutTiming}
      overlayStyle={styles.overlayStyle}
    >
      <View style={styles.content}>
        <MapView
          style={styles.wraper}
          initialRegion={initialRegion}
          region={initialRegion}
        >
          <Marker
            coordinate={{
              latitude: initialRegion.latitude,
              longitude: initialRegion.longitude,
            }}
          />
        </MapView>
        <Button
          text="Ok"
          onPress={closeModal}
          color={lightOrange}
          btnStyle={styles.btnStyle}
        />
      </View>
    </Overlay>
  );
};
export default PinLocationModal;

const styles = StyleSheet.create({
  overlayStyle: {
    backgroundColor: 'transparent',
    // borderTopRightRadius: 30,
    // borderTopLeftRadius: 30,
    // borderBottomRightRadius:30,
    // borderBottomLeftRadius: 30,
    marginLeft: 25,
    marginRight: 25,
    paddingLeft: 0,
    paddingBottom: 0,
    paddingTop: 0,
    paddingRight: 0,
  },
  wraper: {
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  content: {
    backgroundColor: WHITE,
    paddingTop: 30,
    width: wp(80),
    borderRadius: 30,
    height: hp(80),
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: 'center',
  },

  textStyle: {
    color: black,
    fontFamily: RUBIK_REGULAR,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    lineHeight: 30,
    textAlign: 'center',
  },
  btnStyle: {
    backgroundColor: lightOrange,
    width: wp(66),
    marginTop: hp(3),
    marginBottom: hp(3),
  },
  btn_Style: {
    backgroundColor: lightOrange,
    width: wp(60),
    marginTop: 0,
    marginBottom: hp(3),
  },
  textView: {
    marginTop: 10,
  },
  textViewBullet: {
    marginTop: 5,
  },
  smallText: {
    color: '#000',
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    lineHeight: 23,
  },
  smallTextBullet: {
    color: '#000',
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    fontWeight: 'bold',
  },
  smallTextItalic: {
    color: '#000',
    // fontFamily: RUBIK_MEDIUM_ITALIC,
    fontStyle: 'italic',
    fontSize: 14,
    fontWeight: 'bold',
  },
  smallTextHeading: {
    color: '#000',
    fontFamily: RUBIK_REGULAR,
    fontSize: 15,
    marginTop: 10,
    fontWeight: 'bold',
  },
});
