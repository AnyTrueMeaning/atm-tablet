import React from 'react'
import { Text, View } from 'react-native'

import { StackNavigator } from 'react-navigation'
import SamplePoem from './components/SamplePoem'
import TOS from './components/TOS'
import FirstFlower from './components/FirstFlower'
import SecondFlower from './components/SecondFlower'
import Dessert from './components/Dessert'
import Action from './components/Action'
import ShowPoem from './components/Action'
import CallToAction from './components/CallToAction'

import CommonStyles from './CommonStyles'

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View
        style={CommonStyles.container}
        onPress={this._handlePress}
        >
        <Text style={CommonStyles.h1}>HomeScreen!</Text>
      </View>
    )
  }

  _handlePress = () => {
    this.props.navigation.navigate('SamplePoem');
  }
}

export default StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  SamplePoem: {
    screen: SamplePoem,
  },
  TOS: {
    screen: TOS,
  },
  FirstFlower: {
    screen: FirstFlower,
  },
  SecondFlower: {
    screen: SecondFlower,
  },
  Dessert: {
    screen: Dessert,
  },
  Action: {
    screen: Action,
  },
  ShowPoem: {
    screen: ShowPoem,
  },
  CallToAction: {
    screen: CallToAction
  }
})