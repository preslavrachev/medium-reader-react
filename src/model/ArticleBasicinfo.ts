import Image from './Image';

class Virtuals {

  private _previewImage?: Image;

  public get previewImage(): Image {
    return this._previewImage;
  }

  public set previewImage(previewImage: Image) {
    this._previewImage = previewImage;
  }
}

export default class ArticleBasicinfo {

  private _title: string;
  private _virtuals: Virtuals;

  public get title(): string {
    return this._title;
  }

  public set title(value: string) {
    this._title = title;
  }

  get virtuals(): Virtuals {
    return this.__virtuals;
  }
  set virtuals(value: Virtuals) {
    this.__virtuals = value;
  }
}