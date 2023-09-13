import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
} from 'react-native';

export default function Message({ message }) {
  const [image, setImage] = useState(message.photo);
  const link = () => {
    Linking.openURL(message.url);
  };
  return (
    <View
      style={styles.containerMessage}
    >
      <Image style={styles.thumb} source={{ url: image }} />
      <View style={styles.textBox}>
        <Text>{message.message}</Text>
        <Text
          style={{ textDecorationLine: 'underline', top: 5 }}
          onPress={link}>Adopt Me!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMessage: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10,
    borderBottomWidth: 1,
  },
  thumb: {
    width: 70,
    height: 70,
    borderRadius: 50,
    left: 10,
  },
  textBox: {
    width: '68%',
    left: 10,
  },
});
