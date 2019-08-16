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
      tr: "hey",
      en: "hey",
    }
    fetch("http://192.168.0.29:3000/words").then((response) => (response.json()))
    .then((response) => {
      console.log(response)
      console.log(this.state)
      date = new Date();
    this.setState({tr: response["months"][date.getMonth()+1][date.getDate()]["tr"],en: response["months"][date.getMonth()+1][date.getDate()]["en"]});
    })
  }
  render () {
    return (
        <View style={styles.textContainer}>
        <Text style={styles.text}>{this.state.en} : {this.state.tr} </Text>
      </View>
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
    
