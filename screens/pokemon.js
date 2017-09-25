import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PokemonItem from '../components/pokemon/pokemon';

class Pokemon extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
    headerStyle: styles.header,
    headerBackTitleStyle: styles.headerBackTitleStyle,
  })

  render() {
    return (
      <PokemonItem navigation={this.props.navigation} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EF5350',
  },
  header: {
    backgroundColor: '#EF5350',
  },
  headerBackTitleStyle: {
    color: '#F7FAFF',
  },
});

export default Pokemon;
