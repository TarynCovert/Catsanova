import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faX, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import MainPhoto from './MainPhoto';

export default function Info({cat, setShowInfo, setNewCat}) {

  const arrowDown = () => {
    setShowInfo(true);
  };

  return (
    <View>
    </View>
  );
}

const styles = StyleSheet.create({

});
