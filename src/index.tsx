/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle
} from 'react-native';
import ArticleList from './components/ArticleList';
import ArticleListPresenter from './components/presenter/ArticleListPresenter.js';

interface Props {

}

interface State {

}

export default class MediumReaderApp extends Component<Props, State> {
  //TODO: Consider retaining the instance for future reuse
  private ALPWrapper = (props?:any) => new ArticleListPresenter(props);

  render() {
    return (
      <View style={styles.container}>
        <ArticleList Presenter={this.ALPWrapper} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  } as ViewStyle,
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  } as TextStyle,
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  } as TextStyle,
});

