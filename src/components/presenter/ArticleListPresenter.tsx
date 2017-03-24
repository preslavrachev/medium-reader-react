import React, {
  Component, 
  ReactElement 
} from 'react';
import {
  ListView,
  ListViewDataSource,
  Text
} from 'react-native';

interface Props {
  articles: Array<string>
}

interface State {
  dataSource: ListViewDataSource;
}

export default class ArticleListPresenter extends Component<Props, State> {
  private ds:ListViewDataSource = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  constructor(props?:Props) {
    super(props);
    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.articles)
    }
  }

  render() {
    return <ListView dataSource={this.state.dataSource} renderRow={this.renderRow} />
  }

  renderRow(rowData:string): ReactElement<string> {
    return <Text>{rowData}</Text>
  }
}