import React, { Component } from 'react'
import { Text, Button, View } from 'react-native'
import CommonStyles from '../CommonStyles'

class SamplePoem extends Component {
  handleDecline = () => {
    return this.props.navigation.popToTop()
  }

  handleAccept = () => {
    return this.props.navigation.navigate('TOS')
  }

  render () {
    return (
      <View style={CommonStyles.container}>
        <Text style={CommonStyles.h1}>Roses are red</Text>
        <Text style={CommonStyles.h1}>Violets are blue</Text>
        <Text style={CommonStyles.h1}>May we create</Text>
        <Text style={CommonStyles.h1}>poetry with you?</Text>
        <View>
          <Button
            onPress={this.handleDecline}
            title="Decline"
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

export default SamplePoem