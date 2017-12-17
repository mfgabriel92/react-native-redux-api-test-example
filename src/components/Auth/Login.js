import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from '../../../src/styles/styles'

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }

  componentWillMount() {
    this.props.testApi()
  }

  showApiTestResult = () => {
    const { api } = this.props

    if (!api) {
      return <Text>Loading...</Text>
    }

    return api.map((r) => {
      return (
        <Text key={r.id}>
          {r.name}
        </Text>
      )
    })
  }

  render() {
    return (
      <View style={{paddingTop: Expo.Constants.statusBarHeight}}>
        <Text style={styles.auth.text}>Login</Text>
        <ScrollView>
          {this.showApiTestResult()}
        </ScrollView>
      </View>
    )
  }
}