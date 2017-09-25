import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PokemonItem from '../components/pokemons/pokemon';

class Pokemon extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
    headerStyle: styles.header,
    headerBackTitleStyle: styles.headerBackTitleStyle,
  })

  render() {
    return (
      <View style={styles.container}>
        <PokemonItem navigation={this.props.navigation} />
      </View>
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
