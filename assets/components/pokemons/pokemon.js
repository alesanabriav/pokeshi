import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { getOnePokemon } from '../../actions/pokemons';
import Loading from '../loading';

class Abilities extends Component {
  static navigationOptions = {
    tabBarLabel: 'Abilities',
  };

  render() {
    const { pokemon } = this.props;

    return (
      <View>
        {Array.isArray(pokemon.abilities) && pokemon.abilities.map((item, i) => (
          <Text key={i}>{item.ability.name}</Text>
        ))}
      </View>
    );
  }
}

class Stats extends Component {
  static navigationOptions = {
    tabBarLabel: 'Stats',
  };

  render() {
    const { pokemon } = this.props;

    return (
      <View>
        {Array.isArray(pokemon.stats) && pokemon.stats.map((item, i) => (
          <Text key={i}>{item.stat.name}</Text>
        ))}
      </View>
    );
  }
}


const Details = TabNavigator({
  Abilities: {
    screen: ({ screenProps }) => (
      <Abilities {...screenProps} />
    ),
  },
  Stats: {
    screen: ({ screenProps }) => (
      <Stats {...screenProps} />
    ),
  },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});


class Pokemon extends Component {
  componentDidMount() {
    this.getPokemon();
  }

 getPokemon = () => {
   const { params } = this.props.navigation.state;
   this.props.getOnePokemon(params.url);
 }

 render() {
   const { item, loading } = this.props;
   if (loading) return (<Loading />);

   return (
     <View style={styles.container}>
       { item.sprites ?
         <ScrollView horizontal>
           {item.sprites.front_default ?
             <Image source={{ uri: item.sprites.front_default, width: 100, height: 100 }} />
             : <View /> }
           {item.sprites.back_default ?
             <Image source={{ uri: item.sprites.back_default, width: 100, height: 100 }} />
             : <View /> }
           {item.sprites.front_female ?
             <Image source={{ uri: item.sprites.front_female, width: 100, height: 100 }} />
             : <View /> }
           {item.sprites.back_female ?
             <Image source={{ uri: item.sprites.back_female, width: 100, height: 100 }} />
             : <View /> }
         </ScrollView>
         : <View /> }
       <Text style={styles.item}>{item.name}</Text>
       <Text style={styles.item}>{item.height}</Text>
       <Details screenProps={{ pokemon: item }} />
     </View>
   );
 }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  item: {
    fontSize: 22,
    color: '#21252B',
  },
  imagesContainer: {
    flex: 1,
    flexDirection: 'row',
    width: 200,
    height: 200,
  },
});

const mapStateToProps = state => state.pokemons;

const mapDispatchToProps = {
  getOnePokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
