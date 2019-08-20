import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screen from './components/screen';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      temperature: '',
      weather: ''
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position => {
      this.fetchData(position.coords.latitude, position.coords.longitude);
    }));
  }
  fetchData(lat,lon){
    axios.get('http://api.openweathermap.org/data/2.5/weather',{
      params: {
        lat,
        lon,
        APPID: 'be2a72929f8cc40e4ec9004abacedce6',
        units: 'metric'
      }
    })
    .then(res => this.setState({
      isLoading: false,
      temperature: res.data.main.temp,
      weather: res.data.weather[0].main
    }));
  }
  render() { 
    if (this.state.isLoading)
      return(
        <View style={styles.loadContainer}>
          <Text style={styles.title}>Please wait a bit</Text>
        </View>
      );
    return (
      <View style={styles.mainContainer}>
        <Screen weather={this.state.weather} temperature={this.state.temperature} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loadContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 1
  },
  title:{
    fontSize: 30
  }
});
 
export default App;