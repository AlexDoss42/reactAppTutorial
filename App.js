import React, { Component } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  
  render() {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, width: '80%', backgroundColor: 'white'}}>
        <Text style = {{color: 'red', fontWeight: 'bold'}}>The dopest To Do list EVER!!!</Text>
      </View>

      <TextInput
        style={{height: 40}}
        placeholder="Type here!"
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />

      <Button 
        onPress={() => {
          Alert.alert('You tapped the button!');
        }}
        title="Press Me"
        color='black'
      />
      <View style={{flex: 3, width: '80%', backgroundColor: 'purple'}}>
        <Text style = {{color: 'blue'}}>Step 1: get this bread</Text>
        <Text style = {{color: 'blue'}}>Step 2: obtain this grain</Text>
        <Text style = {{color: 'blue'}}>Step 3: YEET THIS WHEAT!</Text>
      </View>

        
    </View>

  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: '#bada55',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
