import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { Card } from 'react-native-material-design';

import ArticleBasicInfo from '../../model/ArticleBasicInfo';

const ArticleItemPresenter = ({info}: {info: ArticleBasicInfo}) => {
  return (
    <View>
      <Card>
        <Card.Body>
          <Text>{info.title}</Text>
        </Card.Body>
      </Card>
    </View>
  );
};

export default ArticleItemPresenter;