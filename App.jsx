import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
  const [showCount, setShowCount] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [image, setImage] = useState(0);
  const [index, setIndex] = useState(0);
  const [icon, setIcon] = useState('zodiac-cancer');
  const [horiscope, setHoriscope] = useState('');

  const preloadImages = (imageUrls) => {
    imageUrls.forEach((url) => {
      Image.prefetch(url);
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/cat');
        setCat(response.data);
        const cat1 = response.data;

        setCat(cat1);
        setPhotos(cat1.photos);
        setIndex(0);
        setImage(cat1.photos[0]);
        setShowMain(true);
        setShowInfo(false);

        preloadImages(cat1.photos);

        const horoscopeArr = ['Aries', 'Capricorn', 'Taurus', 'Leo', 'Pisces', 'Cancer', 'Gemini', 'Virgo', 'Leo', 'Sagittarius', 'Aquarius', 'Scorpio', 'Libra'];
        const value = horoscopeArr[Math.floor(Math.random() * horoscopeArr.length)];
        setHoriscope(value);
        const lower = value.toLowerCase();
        setIcon(`zodiac-${lower}`);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [newCat]);

  useEffect(() => {
    axios.get('http://localhost:3001/messages')
      .then((response) => {
        setMessages(response.data);
        setCount(response.data.length);
        if (response.data.length > 0) {
          setShowCount(true);
        } else {
          setShowCount(false);
        }
      })
      .catch(() => {});
  }, []);

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
            <MaterialCommunityIcons name="cat" size={30} color="#FD3A73" />
            <Text style={styles.navText}>Catsanova</Text>
            <FontAwesome name="cog" size={30} style={{ position: 'absolute', left: 245 }} color="grey" />
          </View>
          <MainPhoto
            cat={cat}
            newCat={newCat}
            photos={photos}
            image={image}
            index={index}
            horiscope={horiscope}
            icon={icon}
            count={count}
            setShowCount={setShowCount}
            setCount={setCount}
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
              <MaterialCommunityIcons name="cat" size={38} color="#FD3A73" />
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
          {showCount ? <Text style={styles.count}>{count}</Text> : null}
        </View>
      ) : null }
      {showMes ? (
        <MessagesList
          messages={messages}
          count={count}
          setShowCount={setShowCount}
          setCount={setCount}
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
          icon={icon}
          horiscope={horiscope}
          count={count}
          setShowCount={setShowCount}
          setCount={setCount}
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
    top: -3,
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
