<<<<<<< HEAD
import React, { ReactNode } from 'react';
=======
import React from 'react';
>>>>>>> 8fdc8f533c63e71c65c50c680d998ec2e62b32a5
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';

interface PageHeaderProps {
  title: string;
<<<<<<< HEAD
  headerRight?: ReactNode;
}

const PageHeader:React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
=======
}

const PageHeader:React.FC<PageHeaderProps> = ({ title }) => {
>>>>>>> 8fdc8f533c63e71c65c50c680d998ec2e62b32a5
  const { navigate } = useNavigation();

  function handleGoBack() {
    navigate('Landing');
  }

  return(
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain"/>
        </BorderlessButton>

        <Image source={logoImg} resizeMode="contain"></Image>
      </View>

<<<<<<< HEAD
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>

        {headerRight}
      </View>
      
      {children}
=======
      <Text style={styles.title}>{title}</Text>
>>>>>>> 8fdc8f533c63e71c65c50c680d998ec2e62b32a5
    </View>
  );
}

export default PageHeader;
