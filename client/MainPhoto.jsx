import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function MainPhoto({
  cat,
  newCat,
  setNewCat,
  setShowInfo,
  setShowMain,
}) {
  const [image, setImage] = useState('https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/68835848/1/?bust=1694484202&width=600');
  const [horiscope, setHoriscope] = useState('');

  useEffect(() => {
    if (Object.keys(cat).length > 0) {
      setImage(cat.photos[0]);
    }
    console.log(cat);
    const horiscopeArr = ['Aries', 'Capricorn', 'Taurus', 'Leo', 'Pisces', 'Cancer', 'Gemini', 'Virgo', 'Leo', 'Sagittarius', 'Aquarius', 'Scorpio', 'Libra'];
    const value = horiscopeArr[Math.floor(Math.random() * horiscopeArr.length)];
    setHoriscope(value);
  }, [cat]);

  const newCatButton = () => {
    if (newCat === true) {
      setNewCat(false);
    } else {
      setNewCat(true);
    }
  };

  const likeCatButton = () => {
    const data = {
      message: 'Hey Taryn! Thanks for liking my profile! If you want to learn more about me, visit this link:',
      url: cat.url,
      catId: cat.cats_id,
      photo: cat.photos[0],
    };
    axios.post('http://localhost:3001/post', data)
      .then(() => {})
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

  return (
    <View>
      <Image
        style={{ width: 380, height: 490 }}
        source={{ url: image }}
      />
      <Text style={styles.name}>{cat.name}</Text>
      <Text style={styles.horiscope}>Sign: {horiscope}</Text>
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
            // backgroundColor: '#fff',
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
            // backgroundColor: '#fff',
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
