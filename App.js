// lol please delete this when RN and expo are updated again
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
])

// end lol

import React from 'react'
import { Text, View, Button } from 'react-native'
const Papa = require('papaparse')
import Expo from 'expo'
import AssetUtils from 'expo-asset-utils'

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

let POEM_CSV = [[]]
AssetUtils.resolveAsync(require('./assets/database.csv')).then(asset => {
  console.log(asset)
  fetch(asset.localUri)
    .then(x => x.text())
    .then(y => {
      POEM_CSV = Papa.parse(y).data
    })
  // Papa.parse(asset.localUri, {
  //   download: true,
  //   complete: (results) => console.log('results', results)
  // })
})
//const POEM_CSV = Papa.parse(require('./assets/database.csv')).data
// const POEM_CSV = Papa.parse(require('./assets/database.csv')).data

function database() {
  return POEM_CSV
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    return (
      <View
        style={CommonStyles.container}
        >
        <Text style={CommonStyles.h1}>Welcome to Project Any True Meaning</Text>
        <Text>Love is patient. Love is free. Love is infinite. We charge no fee</Text>
        <Button
          onPress={this._handlePress}
          title="Begin"
          />

      </View>
    )
  }

  _handlePress = () => {
    this.props.navigation.navigate('SamplePoem');
  }
}

const StackNav = StackNavigator({
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

export default class App extends React.Component {
  render () {
    return (
      <StackNav screenProps={{database: database}} />
    )
  }
}
