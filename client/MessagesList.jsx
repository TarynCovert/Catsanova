// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import Message from './Message';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function MessagesList({messages, setShowMain, setShowMes}) {
  const changeMesView = () => {
    setShowMain(true);
    setShowMes(false);
  };
  return (
    <View style={styles.containerMessages}>
      <View style={styles.nav}>
        <FontAwesome name="paw" size={30} color="#FD3A73" />
        <Text style={styles.navText}>Catsanova</Text>
      </View>
      <Text style={styles.msgText}>Messages</Text>
      <View style={styles.scroll}>
        <ScrollView>
          {messages.map(
            (message, i) => (
              <Message
                message={message}
                i={i}
              />
            ),
          )}
        </ScrollView>
      </View>
      <View style={styles.bottomNav}>
        <TouchableOpacity
          onPress={changeMesView}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 50,
            top: 5,
          }}
        >
          <FontAwesome name="paw" size={38} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 50,
            top: 5,
          }}
        >
          <FontAwesome name="inbox" size={38} color="#FD3A73" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMessages: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  nav: {
    flexDirection: 'row',
    height: 50,
    top: 2.5,
    gap: 5,
  },
  navText: {
    justifyContent: 'center',
    alignItems: 'center',
    top: -2,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FD3A73',
  },
  msgText: {
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',
    textDecorationLine: 'underline',
    fontSize: 22,
    fontWeight: '500',
    color: 'black',
  },
  scroll: {
    width: '100%',
    top: 17,
    height: 455,
  },
  bottomNav: {
    flexDirection: 'row',
    gap: 50,
    top: 28,
  },
});
