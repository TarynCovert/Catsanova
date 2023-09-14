// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MainPhoto from './client/MainPhoto';
import MessagesList from './client/MessagesList';
import Info from './client/Info';

export default function App() {
  const [cat, setCat] = useState({});
  const [newCat, setNewCat] = useState(false);
  const [showMain, setShowMain] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [showMes, setShowMes] = useState(false);
  const [messages, setMessages] = useState([]);
  const [count, setCount] = useState(0);
  const [photos, setPhotos] = useState([]);
  const [image, setImage] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:3001/cat')
      .then((response) => {
        setCat(response.data);
        setIndex(0);
        setPhotos(response.data.photos);
        setImage(response.data.photos[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newCat]);

  useEffect(() => {
    axios.get('http://localhost:3001/messages')
      .then((response) => {
        setMessages(response.data);
        setCount(response.data.length);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const time = Math.random(6000) + 4000;
    setTimeout(() => { setCount(messages.length); }, time);
  }, [messages]);

  useEffect(() => {
    setImage(photos[index]);
  }, [index, photos]);

  const changeMesView = () => {
    setShowMain(false);
    setShowMes(true);
  };

  return (
    <View>
      {showMain ? (
        <View
          style={styles.container}
        >
          <View style={styles.nav}>
            <FontAwesome name="paw" size={30} color="#FD3A73" />
            <Text style={styles.navText}>Catsanova</Text>
            <FontAwesome name="cog" size={30} style={{ position: 'absolute', left: 245 }} color="grey" />
          </View>
          <MainPhoto
            cat={cat}
            newCat={newCat}
            photos={photos}
            image={image}
            index={index}
            setIndex={setIndex}
            setNewCat={setNewCat}
            setMessages={setMessages}
            setShowInfo={setShowInfo}
            setShowMain={setShowMain}
          />
          <View style={styles.bottomNav}>
            <TouchableOpacity
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
            >
              <FontAwesome name="paw" size={38} color="#FD3A73" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={changeMesView}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 50,
                height: 50,
                borderRadius: 50,
              }}
            >
              <FontAwesome name="inbox" size={38} color="grey" />
            </TouchableOpacity>
          </View>
          <Text style={styles.count}>{count}</Text>
        </View>
      ) : null }
      {showMes ? (
        <MessagesList
          messages={messages}
          setMessages={setMessages}
          setShowMain={setShowMain}
          setShowMes={setShowMes}
        />
      ) : null}
      {showInfo ? (
        <Info
          cat={cat}
          newCat={newCat}
          photos={photos}
          image={image}
          index={index}
          setIndex={setIndex}
          setNewCat={setNewCat}
          setShowMain={setShowMain}
          setShowInfo={setShowInfo}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  nav: {
    flexDirection: 'row',
    height: '15%',
    top: '12%',
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
  count: {
    position: 'absolute',
    top: 606,
    left: 245,
    fontWeight: '800',
    color: '#FD3A73',
  },
  bottomNav: {
    flexDirection: 'row',
    gap: 50,
    top: 17.5,
  },
});
