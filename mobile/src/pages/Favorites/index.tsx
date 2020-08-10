<<<<<<< HEAD
import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
=======
import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../components/PageHeader';
>>>>>>> 8fdc8f533c63e71c65c50c680d998ec2e62b32a5

import styles from './styles';

function Favorites() {
<<<<<<< HEAD
  const [favorites, setFavorites] = useState([]);

  function loadFavorites() {
    AsyncStorage.getItem('favorites').then(response => {
      if (response) {
        const favoritedTeachers = JSON.parse(response);

        setFavorites(favoritedTeachers);
      }
    });
  }

  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();
    }, [])
  )

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos"/>

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited
            />
          )
        })}
      </ScrollView>
=======
  return(
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos"/>
>>>>>>> 8fdc8f533c63e71c65c50c680d998ec2e62b32a5
    </View>
  );
}

export default Favorites;
