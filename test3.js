import React, { Component } from "react";
import { View, Text } from "react-native";
class Test3 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Hello</Text>
      </View>
    );
  }
}
export default Test3;
