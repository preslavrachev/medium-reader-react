import Image from './Image';

class Virtuals {

  private _previewImage?: Image;
  private _subtitle: string;

  public get previewImage(): Image {
    return this._previewImage;
  }

  public set previewImage(previewImage: Image) {
    this._previewImage = previewImage;
  }

  public get subtitle(): string {
    return this._subtitle;
  }

  public set subtitle(subtitle: string) {
    this._subtitle = subtitle;
  }
}

export default class ArticleBasicinfo {

  private _title: string;
  private _virtuals: Virtuals;

  public get title(): string {
    return this._title;
  }

  public set title(title: string) {
    this._title = title;
  }

  get virtuals(): Virtuals {
    return this._virtuals;
  }
  set virtuals(value: Virtuals) {
    this._virtuals = value;
  }
}