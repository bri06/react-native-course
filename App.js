import React, {Component} from 'react';

import {Text} from 'react-native';

import Home from './src/views/home/Home.container';
import Header from './src/components/header/Header.container';

export default class App extends Component {
  render() {
    return (
      <Home>
        <Header>
          <Text>Search</Text>
          <Text>Category</Text>
          <Text>Suggestions</Text>
        </Header>
      </Home>
    );
  }
}
