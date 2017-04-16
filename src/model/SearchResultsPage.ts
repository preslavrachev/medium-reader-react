import ArticleBasicInfo from 'ArticleBasicInfo';

class Payload {
  private _value: PayloadValue;

  public get value() : PayloadValue {
    return this._value;
  }
  
}

class PayloadValue {
  private _posts: Array<ArticleBasicInfo>;

  public get posts(): Array<ArticleBasicInfo> {
    return this._posts;
  }
}

/**
 * SearchResultsPage
 */
export default class SearchResultsPage {
  private _success: boolean;
  private _payload: Payload;

  public get success(): boolean {
    return this._success;
  }

  public get payload(): Payload {
    return this._payload;
  }
}