import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, FlatList } from 'react-native';

class PokemonItem extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    this.props.onPress(this.props.pokemon);
  }

  render() {
    const { pokemon } = this.props;

    return (
      <TouchableHighlight underlayColor="rgba(0,0,0, 0.1)" onPress={this.handlePress}>
        <Text style={styles.item}>{pokemon.name}</Text>
      </TouchableHighlight>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 2,
    color: '#FFF',
    backgroundColor: 'rgba(0,0,0,.1)',
    textAlign: 'center',
  },
});


export default PokemonItem;
