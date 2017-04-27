import React from 'react';

import {
  Text
} from 'react-native';

import ArticleBasicInfo from '../../model/ArticleBasicInfo';

const ArticleItemPresenter = ({info}: {info: ArticleBasicInfo}) => {
  return <Text>{info.title}</Text>;
};

export default ArticleItemPresenter;