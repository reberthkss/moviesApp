import React, {Component} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
const style = StyleSheet.create({
  greet: {
    color: '#701111',
  },
});
class Hello extends Component {
  componentDidMount() {
    setInterval(() => this.setState(prev => ({isShow: !prev.isShow})), 1000);
  }

  state = {
    isShow: true,
  }

  render() {
    if(!this.state.isShow){
      return null
    }
    return (
      <View>
        <Text style={style.greet}>Hello {this.props.name} !</Text>
      </View>
    );
  }
}
export default Hello;
