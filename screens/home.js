import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Pokemons from '../components/pokemons/list';

class Home extends Component {
  static navigationOptions = {
    title: 'Pokéshi',
  }

  render() {
    return (
      <View style={styles.container}>
        <Pokemons navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    backgroundColor: '#EF5350',
  },
});

export default Home;
