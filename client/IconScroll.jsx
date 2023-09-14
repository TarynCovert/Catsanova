import { View, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function IconScroll({
  index,
  photos,
}) {
  const [length1, setLength] = useState(0);

  useEffect(() => {
    if (photos.length > 0) {
      setLength(photos.length);
    } else {
      setLength(0);
    }
  }, [photos]);

  return (
    <View style={styles.box}>
      {Array.from({ length: length1 }).map(
        (_, i) => (
          <Icons
            i={i}
            key={i}
            index={index}
          />
        ),
      )}
    </View>
  );
}

function Icons({ index, i }) {
  return (
    <View>
      {(index === i)
        ? (
          <FontAwesome name="paw" size={30} color="#FD3A73" style={styles.iconSelected} />
        ) : (
          <FontAwesome name="paw" size={30} color="#778899" style={styles.icon} />
        )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    width: 340,
    justifyContent: 'center',
    flexDirection: 'row',
    zIndex: 3,
    gap: 25,
    left: 20,
    top: 10,
  },
  iconSelected: {
    transform: [{ rotate: '90 deg' }],
    opacity: 0.8,
  },
  icon: {
    transform: [{ rotate: '90 deg' }],
    opacity: 0.4,
  },
});
