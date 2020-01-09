import React from 'react';
import {View, Text, Image, StyleSheet, SafeAreaView} from 'react-native';

const Header = props => {
  return (
    <View>
      <SafeAreaView style={styles.container}>
        <Image
          source={require('../../assets/video-camera.png')}
          style={styles.logo}
        />
        <View style={styles.right}>{props.children}</View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
  container: {
    paddingLeft: 20,
    flexDirection: 'row',
  },
  right: {
    color: 'green',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Header;
