
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class TextComponent extends React.Component {
  render() {
    return(
      <View>
        <Text>{this.props.value}</Text>
      </View>
    );
  }
}
