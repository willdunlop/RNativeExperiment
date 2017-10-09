
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import TextComponent from './text';

export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Constructor works'
    };

    this._pressed = this._pressed.bind(this)
  }

  _pressed() {
    // console.log('What can I say... shit was pressed');
    this.setState({ text: 'State updated like a king' });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._pressed}>
          <Text>Yo wuddup {this.state.text}</Text>
          <TextComponent value={'text val'}/>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#dc84ff',
  }
});
