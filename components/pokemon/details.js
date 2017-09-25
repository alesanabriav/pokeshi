import React from 'react';
import { StyleSheet } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Abilities from './abilities';
import Stats from './stats';

const styles = StyleSheet.create({
  tabs: {
    padding: 0,
    borderBottomColor: '#EF5350',
    borderBottomWidth: 2,
  },
});

const DetailsTabs = TabNavigator({
  Abilities: {
    screen: ({ screenProps }) => (<Abilities screenProps={screenProps} />),
  },
  Stats: {
    screen: ({ screenProps }) => (<Stats screenProps={screenProps} />),
  },
}, {
  tabBarOptions: {
    labelStyle: {
      elevation: 0,
      padding: 0,
      fontSize: 16,
    },
    tabStyle: { elevation: 0 },
    indicatorStyle: {
      backgroundColor: 'red',
    },
    activeBackgroundColor: '#EF5350',
    activeTintColor: '#FFF',
    style: styles.tabs,
  },
  initialRouteName: 'Abilities',
  backBehavior: 'none',
  tabBarPosition: 'top',
});


export default DetailsTabs;
