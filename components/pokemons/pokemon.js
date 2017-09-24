import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { getOnePokemon } from '../../actions/pokemons';
import Loading from '../loading';

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
   console.log(item, loading);
   if (loading) return (<Loading />);

   return (
     <View style={styles.container}>
       { item.sprites ?
         <ScrollView horizontal>
           {item.sprites.front_default ? <Image source={{ uri: item.sprites.front_default, width: 100, height: 100 }} /> : <View /> }
           {item.sprites.back_default ? <Image source={{ uri: item.sprites.back_default, width: 100, height: 100 }} /> : <View /> }
           {item.sprites.front_female ? <Image source={{ uri: item.sprites.front_female, width: 100, height: 100 }} /> : <View /> }
           {item.sprites.back_female ? <Image source={{ uri: item.sprites.back_female, width: 100, height: 100 }} /> : <View /> }
         </ScrollView>
         : <View /> }
       <Text style={styles.item}>{item.name}</Text>
       <Text style={styles.item}>{item.height}</Text>
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
