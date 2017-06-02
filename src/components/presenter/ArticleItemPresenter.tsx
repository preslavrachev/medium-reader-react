import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Card } from 'react-native-material-design';
import { MediumConstants } from '../../constants/MediumConstants';

import ArticleBasicInfo from '../../model/ArticleBasicInfo';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  }
});

const ArticleItemPresenter = ({info}: {info: ArticleBasicInfo}) => {
  const DEFAULT_IMAGE_URL = 'https://facebook.github.io/react/img/logo_og.png'
  const imageUrl = (info.virtuals && info.virtuals.previewImage) ?
    MediumConstants.MEDIUM_CDN_URL + info.virtuals.previewImage.imageId :
    DEFAULT_IMAGE_URL;

  return (
    <View>
      <Card>
        <Card.Media
            image={ <Image source={{uri: imageUrl}} /> }
            overlay
        />
        <Card.Body>
          <Text style={styles.title}>{info.title}</Text>
          <Text>{info.virtuals.subtitle}</Text>
        </Card.Body>
      </Card>
    </View>
  );
};

export default ArticleItemPresenter;