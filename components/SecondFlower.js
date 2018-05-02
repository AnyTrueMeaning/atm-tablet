import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import CommonStyles from '../CommonStyles'

class SecondFlower extends Component {
  state = {
    flowerA: 'Orange Tulips',
    flowerB: 'Yellow Dahlias',
    flowerC: 'Blue Dahlias',
    selectedFlower: 'flowerA'
  }

  handleMore = () => {
    // random selections
  }

  handleAccept = () => {
    return this.props.navigation.navigate('Dessert', {
      firstFlower: this.props.navigation.state.firstFlower,
      secondFlower: this.state[this.state.selectedFlower]
    })
  }

  handleSelect = (flower) => {
    this.setState({selectedFlower: flower})
  }

  render () {
    return (
      <View style={CommonStyles.container}>
        <Text style={CommonStyles.h1}>Pick another bunch of flowers</Text>
        <View>
          <Button
            onPress={() => this.handleSelect('flowerA')}
            title={this.state.flowerA}
            />
          <Button
          onPress={() => this.handleSelect('flowerB')}
          title={this.state.flowerB}
            />
          <Button
          onPress={() => this.handleSelect('flowerC')}
          title={this.state.flowerC}
            />
        </View>
        <Text style={CommonStyles.h1}>Your choice: {this.state[this.state.selectedFlower]}</Text>
        <View>
          <Button
            onPress={this.handleMore}
            title="More Options"
            />
          <Button
            onPress={this.handleAccept}
            title="Accept"
            />
        </View>
      </View>

    )
  }
}

export default SecondFlower