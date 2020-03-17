import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';

export default class MainScreen extends Component {
  render() {
    let img = {
      uri: this.props.url,
    };
    return (
      <View>
          <Image source={img} style={{width:100,height:100,flex:3}}/>
      </View>
    );
  }
}
