import React, {
  Component, 
  ReactElement 
} from 'react';
import {
  ListView,
  ListViewDataSource,
  Text
} from 'react-native';

import ArticleBasicInfo from '../../model/ArticleBasicInfo';
import ArticleItemPresenter from './ArticleItemPresenter';

const ArticleListPresenter = ({ articles }: {articles: Array<ArticleBasicInfo>}) => {
  const ds:ListViewDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
  const dataSource = ds.cloneWithRows(articles)

  function renderRow(rowData:ArticleBasicInfo): ReactElement<ArticleBasicInfo> {
    return <ArticleItemPresenter info={rowData}/>
  }

  return <ListView dataSource={dataSource} renderRow={renderRow} />
};

export default ArticleListPresenter;
