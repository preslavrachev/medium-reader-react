import React, { Component } from 'react';

interface Props {
  Presenter: () => Component<any, any>;
}

interface State {
  articles: Array<string>;
}

export default class ArticleList extends Component<Props, State> {
  constructor(props?:Props) {
    super(props);
    this.state = {
      articles: ['Title 1', 'Title 2']
    }
  }

  // _fetchLatestArticles(): Promise<> {

  // }

  render() {
    return <this.props.Presenter articles={this.state.articles} />
  }
}