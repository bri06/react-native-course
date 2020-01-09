import React, {Component} from 'react';

import {Text} from 'react-native';

import Home from './src/views/home/Home.container';

export default class App extends Component {
  render() {
    return (
      <Home>
        <Text>Header</Text>
        <Text>Search</Text>
        <Text>Category</Text>
        <Text>Suggestions</Text>
      </Home>
    );
  }
}
