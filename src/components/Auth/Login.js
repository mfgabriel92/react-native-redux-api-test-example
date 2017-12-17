import React, { Component } from 'react'
import { Button, ScrollView, Text, TextInput, View } from 'react-native'
import styles from '../../../src/styles/styles'

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    this.state = {
      title: 'Lorem',
      body: 'Lorem ipsum dolor sit amet',
      userId: 99,
      postResult: ''
    }
  }

  componentWillMount() {
    this.props.testGET()
  }

  componentWillReceiveProps(nextProps, oldProps) {
    if (nextProps.api.post.data) {
      this.setState({
        postResult: JSON.stringify(nextProps.api.post.data)
      })
    }
  }

  showApiTestResult = () => {
    const { get } = this.props.api

    if (!get) {
      return <Text>Loading...</Text>
    }

    return get.map((r) => {
      return (
        <Text key={r.id}>
          {r.name}
        </Text>
      )
    })
  }

  submitTestPost = () => {
    const { title, body, userId } = this.state

    this.props.testPOST({
      title,
      body,
      userId
    })
  }

  render() {
    return (
      <View style={{paddingTop: Expo.Constants.statusBarHeight}}>
        <Text style={styles.auth.text}>GET</Text>
        <ScrollView>
          {this.showApiTestResult()}
        </ScrollView>

        <Text style={styles.auth.text}>POST</Text>
        <ScrollView style={{marginTop: 25}}>
          <TextInput onChangeText={e => this.setState({ title: e })} value={this.state.title}/>
          <TextInput onChangeText={e => this.setState({ body: e })} value={this.state.body}/>
          <Button
            onPress={this.submitTestPost}
            title="POST"
          />
        </ScrollView>
        <Text>{this.state.postResult}</Text>
      </View>
    )
  }
}