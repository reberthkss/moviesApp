/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//APIKEY  AIzaSyCMugxM2VrfZdlZRyP5JqJMoLswAYBdVJg
//ID SEARCH  007825862373360425549:xuwhhzjbqxz

import React, {Component} from 'react';
import {
  ActivityIndicator,
  Button,
  View,
  Text,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';

const image = {
  uri: 'https://pbs.twimg.com/media/ETQWkoEXYAIqQEQ?format=jpg&name=900x900',
}

export default class App extends Component {
  state = {
    loading: true,
  };

  getData = async () => {
    let i;
    let res = await fetch('https://reactnative.dev/movies.json');
    let resJson = await res.json();
    let movies = await resJson.movies;
    this.setState({loading: true, movies: movies});
  };

  searchGoogle = async (target, pos) => {
    let i;
    var res = await fetch(
      `https://www.googleapis.com/customsearch/v1?searchType=image&key=AIzaSyCMugxM2VrfZdlZRyP5JqJMoLswAYBdVJg&cx=007825862373360425549:xuwhhzjbqxz&q=${target}`,
    );
    var resJson = await res.json();
    this.state.movies[pos].uri = resJson.items[0].image.thumbnailLink
    this.setState({loading:false,movies:this.state.movies})
    console.log(this.state.movies[pos])
  };

  componentDidMount(): void {
    let i;
    this.getData().then(() => {
      for (i = 0; i < this.state.movies.length; i++) {
        this.searchGoogle(this.state.movies[i].title, i);
      }
    })
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{flex: 1}}>
        <FlatList
            horizontal={true}
          data={this.state.movies}
          renderItem={({item}) =>
          <View style={{flex:1,flexDirection:'row'}}>
            <Image source={{uri:item.uri}} style={{width:75,height:75}}/>
          </View>}
        />
      </View>
    );
  }
}
