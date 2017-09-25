import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { getOnePokemon } from '../../actions/pokemons';
import Loading from '../loading';
import DetailsTabs from './details';

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
   console.log(item.types);
   return (
     <View style={styles.container}>
       <View style={{ alignItems: 'center' }}>
         { item.sprites ?
           <ScrollView horizontal style={{ width: 200 }}>
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
       </View>
       <View style={styles.details}>
         <View style={styles.item}>
           <Text style={[styles.text, styles.title]}>Types: </Text>
           <Text style={styles.text}>{item.types && item.types.map(tp => `${tp.type.name} `)}</Text>
         </View>
         <View style={styles.item}>
           <Text style={[styles.text, styles.title]}>Name: </Text>
           <Text style={styles.text}>{item.name}</Text>
         </View>
         <View style={styles.item}>
           <Text style={[styles.text, styles.title]}>Height: </Text>
           <Text style={styles.text}>{item.height}</Text>
         </View>
         <View style={styles.item}>
           <Text style={[styles.text, styles.title]}>Experience: </Text>
           <Text style={styles.text}>{item.base_experience}</Text>
         </View>
       </View>
       <DetailsTabs screenProps={{ pokemon: item }} />

     </View>
   );
 }
}

const styles = StyleSheet.create({
  tabs: {
    backgroundColor: '#B2FF59',
    elevation: 0,
  },
  container: {
    flex: 1,
    alignItems: 'stretch',
  },
  details: {
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    paddingRight: 10,

  },
  title: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 16,
    color: '#21252B',
  },
});

const mapStateToProps = state => state.pokemons;

const mapDispatchToProps = {
  getOnePokemon,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
