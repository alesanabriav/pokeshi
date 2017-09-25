import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { getAllPokemons } from '../../actions/pokemons';
import Loading from '../loading';
import Item from './item';

class PokemonList extends Component {
  state = {
    page: 0,
  }

  componentDidMount() {
    this.props.getAllPokemons();
  }

  getPokemons = () => {
    // console.log('end');
    this.props.getAllPokemons(this.props.next);
  }

  keyExtractor = (item, index) => index

  openPokemon = (pokemon) => {
    this.props.navigation.navigate('Pokemon', pokemon);
  }

  render() {
    const { items, loading } = this.props;


    return (
      <View>
        <FlatList
          onEndReachedThreshold={0}
          onEndReached={this.getPokemons}
          data={items}
          renderItem={({ item }) => (
            <Item pokemon={item} onPress={this.openPokemon} />
          )}
          keyExtractor={this.keyExtractor}
        />

      </View>
    );
  }
}

const mapDispatchToProps = {
  getAllPokemons,
};

const mapStateToProps = state => state.pokemons;

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
