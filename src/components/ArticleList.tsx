import React, { Component } from 'react';
import SearchResultsPage from '../model/SearchResultsPage';

interface Props {
  Presenter: (articles:any) => JSX.Element;
}

interface State {
  articles: Array<string>;
}

export default class ArticleList extends Component<Props, State> {
  constructor(props?:Props) {
    super(props);
    this.state = {
      articles: ['Title 1', 'Title 2', 'Title 3', 'Title 4']
    }

    console.log('https://medium.com/top-stories?format=json');
    this._fetchLatestArticles()
      .then(result => {
        let postTitles = result.payload.value.posts.map(post => post.title);
        console.log(postTitles);
        this.setState({ articles: postTitles });
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