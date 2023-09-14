import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Message from './Message';

export default function MessagesList({
  messages,
  count,
  setShowCount,
  setCount,
  setMessages,
  setShowMain,
  setShowMes,
}) {
  const changeMesView = () => {
    setShowMain(true);
    setShowMes(false);
  };
  return (
    <View style={styles.containerMessages}>
      <View style={styles.nav}>
        <MaterialCommunityIcons name="cat" size={30} color="#FD3A73" />
        <Text style={styles.navText}>Catsanova</Text>
        <FontAwesome name="cog" size={30} style={{ position: 'absolute', left: 245 }} color="grey" />
      </View>
      <Text style={styles.msgText}>Messages</Text>
      <View style={styles.scroll}>
        <ScrollView>
          {messages.map(
            (message, i) => (
              <Message
                message={message}
                count={count}
                setCount={setCount}
                setShowCount={setShowCount}
                setMessages={setMessages}
                key={i}
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
          <MaterialCommunityIcons name="cat" size={38} color="grey" />
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
    top: -3,
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

  buttonBox: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 430,
    height: 60,
    width: 380,
    gap: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  photo: {
    resizeMode: 'contain',
  },
  name: {
    position: 'absolute',
    color: 'white',
    top: 350,
    left: 10,
    fontSize: 30,
    fontWeight: 'bold',
    zIndex: 2,
  },
  age: {
    position: 'absolute',
    color: 'white',
    top: 385,
    left: 15,
    fontSize: 16,
    zIndex: 2,
  },
  horiscope: {
    position: 'absolute',
    color: 'white',
    top: 405,
    left: 15,
    fontSize: 16,
    zIndex: 2,
  },
  leftArrow: {
    left: 1,
    top: -1,
  },
  heart: {
    top: 1,
  },
});
