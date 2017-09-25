import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Stats extends Component {
  static navigationOptions = {
    tabBarLabel: 'Stats',
  };

  render() {
    const { screenProps } = this.props;
    const { pokemon } = screenProps;

    return (
      <View style={styles.container}>
        {Array.isArray(pokemon.stats) && pokemon.stats.map(item => (
          <View style={[styles.row, styles.text]} key={item.stat.name}>
            <Text style={styles.title}>{item.stat.name}: </Text>
            <Text>{item.base_stat}</Text>
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


export default Stats;
