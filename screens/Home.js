import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text,
  ImageBackground,

} from 'react-native';
export default class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      words: []
    }
    fetch("http://192.168.0.29:3000/words").then((response) => (response.json()))
    .then((response) => {
      console.log(response)
    this.setState({words: response});
    })
  }
  render () {
    return (
      this.state.words.map((data,i) => (
        <View key={i} style={styles.textContainer}>
        <Text style={styles.text}>{data["tr"]} </Text>
      </View>
      ))
    );
  }
}

const styles = StyleSheet.create ({
  
  textContainer: {
    backgroundColor: 'rgba(171, 184, 206, 0.3)',
    alignSelf: 'stretch',
    marginTop: 20,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30,
  },
  text: {
    textAlign: 'center',
    color : 'black',
  }
  
    });
    
