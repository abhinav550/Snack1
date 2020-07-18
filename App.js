import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Brownbutton extends Component{
render(){
  return(
  <Button color="brown" title="Click Here"></Button>
  );
}
}



export default class App extends Component {
  render() {
    return (
      <View>
      <Brownbutton></Brownbutton>
        <Text style={{marginTop:100,marginLeft:100}}>Hello World</Text>
        </View>
        
    );
  }
}