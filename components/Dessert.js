import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import CommonStyles from '../CommonStyles'

class Dessert extends Component {
  state = {
    dessertA: 'Cake',
    dessertB: 'Ice Cream',
    dessertC: 'Ganache',
    selectedDessert: 'dessertA'
  }

  handleMore = () => {
    // random selections
  }

  handleAccept = () => {
    return this.props.navigation.navigate('Action', {
      firstFlower: this.props.navigation.state.firstFlower,
      secondFlower: this.props.navigation.state.selectedFlower,
      dessert: this.state[this.state.selectedDessert]
    })
  }

  handleSelect = (dessert) => {
    this.setState({selectedDessert: dessert})
  }

  render () {
    return (
      <View style={CommonStyles.container}>
        <Text style={CommonStyles.h1}>Pick a sweet dessert</Text>
        <View>
          <Button
            onPress={() => this.handleSelect('dessertA')}
            title={this.state.dessertA}
            />
          <Button
          onPress={() => this.handleSelect('dessertB')}
          title={this.state.dessertB}
            />
          <Button
          onPress={() => this.handleSelect('dessertC')}
          title={this.state.dessertC}
            />
        </View>
        <Text style={CommonStyles.h1}>Your choice: {this.state[this.state.selectedDessert]}</Text>
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

export default Dessert