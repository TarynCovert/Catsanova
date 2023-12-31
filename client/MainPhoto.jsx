import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import axios from 'axios';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import IconScroll from './IconScroll';

export default function MainPhoto({
  cat,
  newCat,
  image,
  photos,
  index,
  horiscope,
  icon,
  count,
  setCount,
  setShowCount,
  setIndex,
  setNewCat,
  setShowInfo,
  setShowMain,
  setMessages,
}) {
  const [getMessages, setGetMessages] = useState(true);
  const [length, setLength] = useState(false);

  useEffect(() => {
    if (photos.length > 1) {
      setLength(true);
    } else {
      setLength(false);
    }
  }, [photos]);

  useEffect(() => {
    axios.get('http://localhost:3001/messages')
      .then((response) => {
        setMessages(response.data);
      })
      .catch(() => {});
  }, [getMessages, setMessages]);

  const newCatButton = () => {
    if (newCat === true) {
      setNewCat(false);
    } else {
      setNewCat(true);
    }
  };

  const likeCatButton = () => {
    setCount(count + 1);
    setShowCount(true);
    const data = {
      message: 'Hey Taryn! Thanks for liking my profile! If you want to learn more about me, visit this link:',
      url: cat.url,
      catId: cat.cats_id,
      photo: cat.photos[0],
    };
    axios.post('http://localhost:3001/post', data)
      .then(() => {
        if (getMessages) {
          setGetMessages(false);
        } else {
          setGetMessages(true);
        }
      })
      .catch(() => {});
    if (newCat === true) {
      setNewCat(false);
    } else {
      setNewCat(true);
    }
  };

  const dislikeCatButton = () => {
    if (newCat === true) {
      setNewCat(false);
    } else {
      setNewCat(true);
    }
  };

  const changeInfoView = () => {
    setShowInfo(true);
    setShowMain(false);
  };

  const changeIndex = (e) => {
    const x = e.nativeEvent.locationX;
    const y = e.nativeEvent.locationY;

    if (x > 260 && y < 335 && index < photos.length - 1) {
      setIndex(index + 1);
    }
    if (x < 140 && y < 335 && index !== 0) {
      setIndex(index - 1);
    }
  };

  return (
    <View>
      {length ? <IconScroll photos={photos} index={index} /> : null}
      <TouchableWithoutFeedback onPress={changeIndex}>
        <Image
          style={{ width: 380, left: -2, height: 490 }}
          source={{ url: image }}
        />
      </TouchableWithoutFeedback>
      <View style={styles.background} />
      <Text style={styles.name}>{cat.name}</Text>
      <MaterialCommunityIcons name={icon} color="white" style={styles.horiscopeIcon} />
      <Text style={styles.horiscope}>{horiscope}</Text>
      <Text style={styles.age}>Age: {cat.age}</Text>
      <TouchableOpacity
        onPress={changeInfoView}
        style={{
          position: 'absolute',
          left: 340,
          top: 395,
          alignItems: 'center',
          justifyContent: 'center',
          width: 25,
          height: 25,
          backgroundColor: '#fff',
          borderRadius: 25,
          zIndex: 5,
        }}
      >
        <FontAwesome name="arrow-up" size={15} color="#060606" />
      </TouchableOpacity>
      <View
        style={styles.buttonBox}
      >
        <TouchableOpacity
          onPress={dislikeCatButton}
          style={{
            borderWidth: 1.5,
            borderColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 50,
            borderRadius: 50,
          }}
        >
          <FontAwesome name="close" size={35} color="red" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={newCatButton}
          style={{
            borderWidth: 1.5,
            borderColor: '#00BFFF',
            alignItems: 'center',
            justifyContent: 'center',
            top: 2,
            width: 45,
            height: 45,
            borderRadius: 30,
          }}
        >
          <FontAwesome name="arrow-right" size={30} color="#00BFFF" style={styles.leftArrow} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={likeCatButton}
          style={{
            borderWidth: 1.5,
            borderColor: 'aquamarine',
            alignItems: 'center',
            justifyContent: 'center',
            width: 50,
            height: 50,
            borderRadius: 50,
          }}
        >
          <FontAwesome name="heart" size={27} color="aquamarine" style={styles.heart} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonBox: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 425,
    height: 60,
    width: 380,
    gap: 50,
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
  background: {
    position: 'absolute',
    top: 350,
    height: 140,
    width: 480,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
    height: 25,
    top: 407,
    left: 38,
    fontSize: 16,
    zIndex: 2,
  },
  horiscopeIcon: {
    position: 'absolute',
    top: 407,
    left: 14,
    fontSize: 20,
    backgroundColor: '#BF40BF',
    fontWeight: '900',
    zIndex: 2,
    borderRadius: 10,
  },
  leftArrow: {
    left: 1,
    top: -1,
  },
  heart: {
    top: 1,
  },
});
