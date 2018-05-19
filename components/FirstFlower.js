import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import CommonStyles from '../CommonStyles'

class FirstFlower extends Component {

  constructor (props) {
    super(props)

    this.state = Object.assign({selectedFlower: 'flowerA'}, this.newFlowers(props))
  }

  newFlowers (props) {
    console.log('props', props)
    const poems = props.screenProps.database()
    const row1 = poems[Math.floor(Math.random() * poems.length)]
    const row2 = poems[Math.floor(Math.random() * poems.length)]
    const row3 = poems[Math.floor(Math.random() * poems.length)]

    return {
      flowerA: [row1[0], row1[1]],
      flowerB: [row2[0], row2[1]],
      flowerC: [row3[0], row3[1]]
    }
  }

  handleMore = () => {
    const flowers = this.newFlowers(this.props)
    console.log(flowers)
    this.setState(flowers)
  }

  handleAccept = () => {
    return this.props.navigation.navigate('SecondFlower', {firstFlower: this.state[this.state.selectedFlower]})
  }

  handleSelect = (flower) => {
    this.setState({selectedFlower: flower})
  }

  render () {
    return (
      <View style={CommonStyles.container}>
        <Text style={CommonStyles.h1}>Pick a bunch of flowers</Text>
        <View>
          <Button
            onPress={() => this.handleSelect('flowerA')}
            title={`${this.state.flowerA[1]} ${this.state.flowerA[0]}`}
            />
          <Button
          onPress={() => this.handleSelect('flowerB')}
          title={`${this.state.flowerB[1]} ${this.state.flowerB[0]}`}
            />
          <Button
          onPress={() => this.handleSelect('flowerC')}
          title={`${this.state.flowerC[1]} ${this.state.flowerC[0]}`}
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

export default FirstFlower