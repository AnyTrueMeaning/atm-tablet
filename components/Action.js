import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import CommonStyles from '../CommonStyles'

class Action extends Component {
  state = {
    actionA: 'hold hands',
    actionB: 'have a soul-jerking conversation',
    actionC: 'engage in fact-finding',
    selectedAction: 'actionA'
  }

  handleMore = () => {
    // random selections
  }

  handleAccept = () => {
    const params = {
      firstFlower: this.props.navigation.state.firstFlower,
      secondFlower: this.props.navigation.state.secondFlower,
      dessert: this.props.navigation.state.dessert,
      action: this.state[this.state.selectedAction]
    }
    console.log('params', params)
    return this.props.navigation.navigate('ShowPoem', params)
  }

  handleSelect = (action) => {
    this.setState({selectedAction: action})
  }

  render () {
    return (
      <View style={CommonStyles.container}>
        <Text style={CommonStyles.h1}>Choose an action phrase</Text>
        <View>
          <Button
            onPress={() => this.handleSelect('actionA')}
            title={this.state.actionA}
            />
          <Button
          onPress={() => this.handleSelect('actionB')}
          title={this.state.actionB}
            />
          <Button
          onPress={() => this.handleSelect('actionC')}
          title={this.state.actionC}
            />
        </View>
        <Text style={CommonStyles.h1}>Your choice: {this.state[this.state.selectedAction]}</Text>
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

export default Action