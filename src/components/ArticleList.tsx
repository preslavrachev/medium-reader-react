import React, { Component } from 'react';
import ArticleBasicInfo from '../model/ArticleBasicInfo';
import SearchResultsPage from '../model/SearchResultsPage';

interface Props {
  Presenter: (articles:any) => JSX.Element;
}

interface State {
  articles: Array<ArticleBasicInfo>;
}

export default class ArticleList extends Component<Props, State> {
  constructor(props?:Props) {
    super(props);
    this.state = {
      articles: []
    };

    console.log('https://medium.com/top-stories?format=json');
    this._fetchLatestArticles()
      .then(result => {
        let posts = result.payload.value.posts;
        this.setState({ articles: posts });
      })
      .catch(err => {
        console.log(`ERROR: ${err}`)
      });
  }

  _fetchLatestArticles(): Promise<SearchResultsPage> {
    return fetch('https://medium.com/top-stories?format=json', {
      method: 'GET',
      body: null,
      headers: {
        accept: 'application/json'
      }
    })
    .then((response:Response) => response.text())
    .then((stringResponse:string) => JSON.parse(stringResponse.replace('])}while(1);</x>', '')) as SearchResultsPage);
  }

  render() {
    return <this.props.Presenter articles={this.state.articles} />
  }
}