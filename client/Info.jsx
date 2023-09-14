import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  Linking,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import IconScroll from './IconScroll';

export default function Info({
  cat,
  newCat,
  photos,
  image,
  index,
  icon,
  horiscope,
  count,
  setCount,
  setShowCount,
  setIndex,
  setShowInfo,
  setNewCat,
  setShowMain,
}) {
  const [aboutMe, setAboutMe] = useState('');
  const [otherCats, setOtherCats] = useState('Yes!');
  const [showOtherCats, setShowOtherCats] = useState(true);
  const [otherDogs, setOtherDogs] = useState('I guess I can tolerate dogs in my home :)');
  const [showOtherDogs, setShowOtherDogs] = useState(true);
  const [children, setChildren] = useState('I love kids! :)');
  const [showChildren, setShowChildren] = useState(true);
  const [specialNeeds, setSpecialNeeds] = useState(null);
  const [showSpayed, setShowSpayed] = useState(true);
  const [showHouseTrained, setShowHouseTrained] = useState(true);
  const [spayed, setSpayed] = useState(true);
  const [houseTrained, setHouseTrained] = useState(true);
  const [length, setLength] = useState(false);

  const link = () => {
    Linking.openURL(cat.url);
  };

  useEffect(() => {
    if (photos.length > 1) {
      setLength(true);
    } else {
      setLength(false);
    }
  }, [photos]);

  useEffect(() => {
    const nameLower = cat.name.toLowerCase();
    const newName = nameLower.charAt(0).toUpperCase() + nameLower.slice(1);

    if (cat.spayed) {
      setShowSpayed(true);
      setSpayed('Yes');
    } else if (cat.spayed === null) {
      setShowSpayed(false);
    } else {
      setShowSpayed(true);
      setSpayed('No');
    }

    if (cat.housetrained) {
      setShowHouseTrained(true);
      setHouseTrained('Yes');
    } else if (cat.housetrained === null) {
      setShowHouseTrained(false);
    } else {
      setShowHouseTrained(true);
      setHouseTrained('No');
    }

    if (cat.othercats) {
      setOtherCats(true);
      setOtherCats('Yes!');
    } else if (cat.othercats === null) {
      setShowOtherCats(false);
    } else {
      setShowOtherCats(true);
      setOtherCats('No');
    }

    if (cat.otherdogs) {
      setOtherDogs(true);
      setOtherDogs('Yes!');
    } else if (cat.othercats === null) {
      setShowOtherDogs(false);
    } else {
      setShowOtherDogs(true);
      setOtherDogs('No way!');
    }

    if (cat.children) {
      setChildren(true);
      setChildren('I love kids!');
    } else if (cat.children === null) {
      setShowChildren(false);
    } else {
      setShowChildren(true);
      setChildren('Probably not for the best...');
    }

    if (cat.specialneeds) {
      setSpecialNeeds(true);
    } else {
      setSpecialNeeds(false);
    }

    if (cat.secondarybreed) {
      const message = `Hi, my name is ${newName}! I'm a ${cat.gender.toLowerCase()} ${cat.primarybreed} and ${cat.secondarybreed} mix, and I'm ${cat.size.toLowerCase()} sized, cute, and cuddly.`;
      setAboutMe(message);
    } else {
      const message = `Hi, my name is ${newName}! I'm a ${cat.gender.toLowerCase()} ${cat.primarybreed}, and I'm ${cat.size.toLowerCase()} sized, cute, and cuddly!`;
      setAboutMe(message);
    }
  }, [cat]);

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
        if (newCat === true) {
          setNewCat(false);
        } else {
          setNewCat(true);
        }
      })
      .catch(() => {});
  };

  const dislikeCatButton = () => {
    if (newCat === true) {
      setNewCat(false);
    } else {
      setNewCat(true);
    }
  };

  const changeInfoView = () => {
    setShowMain(true);
    setShowInfo(false);
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
    <View style={{ top: 20 }}>
      <ScrollView>
        {length ? <IconScroll photos={photos} index={index} /> : null}
        <TouchableWithoutFeedback onPress={changeIndex}>
          <Image
            style={{ width: 380, left: -2, height: 490 }}
            source={{ url: image }}
          />
        </TouchableWithoutFeedback>
        <View style={styles.general}>
          <Text style={styles.name}>{cat.name}</Text>
          <MaterialCommunityIcons name={icon} color="white" style={styles.horiscopeIcon} />
          <Text style={styles.horiscope}>{horiscope}</Text>
          <Text style={styles.list}>Age: {cat.age}</Text>
        </View>
        <View style={styles.aboutMe}>
          <Text style={styles.header}>About Me</Text>
          <Text style={styles.list}>{aboutMe}</Text>
        </View>
        <View style={styles.environment}>
          <Text style={styles.header}>I would like to live in an environment...</Text>
          {showOtherCats ? <Text style={styles.list}>{`\u2022 with other cats? ${otherCats}`} </Text> : null}
          {showOtherDogs ? <Text style={styles.list}>{`\u2022 with dogs? ${otherDogs}`} </Text> : null}
          {showChildren ? <Text style={styles.list}>{`\u2022 with children? ${children}`} </Text> : null}
        </View>
        <View style={styles.youKnow}>
          <Text style={styles.header}>You Should Know...</Text>
          {showHouseTrained ? <Text style={styles.list}>{`\u2022 Houstrained? ${houseTrained}`} </Text> : null}
          {showSpayed ? <Text style={styles.list}>{`\u2022 Spayed? ${spayed}`} </Text> : null}
          {specialNeeds ? <Text style={styles.list}>{'\u2022 Special Needs? Yes!'}</Text> : null}
        </View>
        <View style={styles.link}>
          <Text style={styles.header}>My Links</Text>
          <Text
            onPress={link}
            style={styles.linkText}
          >
            Adopt Me!
          </Text>
        </View>
        <TouchableOpacity
          onPress={changeInfoView}
          style={{
            position: 'absolute',
            left: 325,
            top: 460,
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            backgroundColor: '#FD3A73',
            borderRadius: 40,
          }}
        >
          <FontAwesome name="arrow-down" size={25} color="white" />
        </TouchableOpacity>
      </ScrollView>
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
    position: 'fixed',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: -150,
    height: 60,
    width: 380,
    gap: 50,
    zIndex: 3,
  },
  list: {
    width: 300,
    left: 15,
  },
  horiscope: {
    width: 300,
    top: -1,
    left: 39,
  },
  horiscopeIcon: {
    position: 'absolute',
    left: 14,
    top: 43,
    fontSize: 18,
    backgroundColor: '#BF40BF',
    fontWeight: '900',
    zIndex: 2,
    borderRadius: 10,
  },
  header: {
    left: 15,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },
  photo: {
    resizeMode: 'contain',
  },
  general: {
    marginBottom: 10,
    height: 80,
  },
  aboutMe: {
    height: 95,
    borderTopWidth: 0.4,
  },
  youKnow: {
    height: 100,
    borderTopWidth: 0.4,
  },
  environment: {
    height: 100,
    borderTopWidth: 0.4,
  },
  link: {
    height: 210,
    borderTopWidth: 0.4,
  },
  name: {
    color: 'black',
    marginBottom: 8,
    top: 5,
    left: 10,
    fontSize: 30,
    fontWeight: 'bold',
    zIndex: 2,
  },
  leftArrow: {
    left: 1,
    top: -1,
  },
  heart: {
    top: 1,
  },
  linkText: {
    textDecorationLine: 'underline',
    width: 75,
    left: 15,
  },
});
