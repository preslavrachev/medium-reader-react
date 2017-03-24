import React, {
  Component, 
  ReactElement 
} from 'react';
import {
  ListView,
  ListViewDataSource,
  Text
} from 'react-native';

const ArticleListPresenter = ({ articles }: {articles: Array<string>}) => {
  const ds:ListViewDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const dataSource = ds.cloneWithRows(articles)

  function renderRow(rowData:string): ReactElement<string> {
    return <Text>{rowData}</Text>
  }

  return <ListView dataSource={dataSource} renderRow={renderRow} />
};

export default ArticleListPresenter;
