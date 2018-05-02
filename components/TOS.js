import React, { Component } from 'react'
import { Text, Button, View } from 'react-native'
import CommonStyles from '../CommonStyles'

class TOS extends Component {
  handleDecline = () => {
    return this.props.navigation.popToTop()
  }

  handleAccept = () => {
    return this.props.navigation.navigate('FirstFlower')
  }

  render () {
    return (
      <View style={CommonStyles.container}>
        <Text style={CommonStyles.h1}>ATM Terms of Service</Text>
        <Text>

        </Text>
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

export default TOS