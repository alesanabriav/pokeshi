import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Abilities extends Component {
  static navigationOptions = {
    tabBarLabel: 'Abilities',
  };

  render() {
    const { screenProps } = this.props;
    const { pokemon } = screenProps;

    return (
      <View style={styles.container}>
        {Array.isArray(pokemon.abilities) && pokemon.abilities.map(item => (
          <View style={styles.text} key={item.ability.name}>
            <Text style={styles.title}>{item.ability.name}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  row: {
    flexDirection: 'row',
  },
  text: {
    paddingBottom: 20,
  },
  title: {
    fontWeight: 'bold',
  },
});

export default Abilities;
