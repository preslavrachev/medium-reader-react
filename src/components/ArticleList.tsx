import React, { Component } from 'react';

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
  }

  // _fetchLatestArticles(): Promise<> {

  // }

  render() {
    return <this.props.Presenter articles={this.state.articles} />
  }
}