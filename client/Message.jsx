import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import axios from 'axios';

export default function Message({
  message,
  count,
  setMessages,
  setShowCount,
  setCount,
}) {
  const link = () => {
    Linking.openURL(message.url);
  };

  const deleteMessage = () => {
    if (count > 1) {
      setCount(count - 1);
    } else if (count === 1) {
      setCount(0);
      setShowCount(false);
    }
    const info = {
      data: message,
    };
    axios.delete('http://localhost:3001/delete', info)
      .then((response) => {
        setMessages(response.data);
      })
      .catch(() => {
      });
  };

  return (
    <View
      style={styles.containerMessage}
    >
      <Image style={styles.thumb} source={{ url: message.photo }} />
      <View style={styles.textBox}>
        <Text>{message.message}</Text>
        <Text
          style={{ textDecorationLine: 'underline', top: 5, width: 75 }}
          onPress={link}
        >
          Adopt Me!
        </Text>
      </View>
      <TouchableOpacity
        onPress={deleteMessage}
        style={{
          position: 'absolute',
          width: 20,
          height: 20,
          top: 70,
          left: 330,
          zIndex: 2,
        }}
      >
        <FontAwesome name="trash" size={20} color="#FD3A73" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMessage: {
    flexDirection: 'row',
    width: 480,
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
    width: '58%',
    left: 10,
  },
});
