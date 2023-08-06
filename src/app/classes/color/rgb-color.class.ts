import { Color } from './color.class';

export type RgbColorType = string;

export class RgbColor extends Color {
  private readonly initialValue: RgbColorType;


  constructor(value: RgbColorType) {
    super();
    this.initialValue = value;
  }

  getHexValue(): string {
    const hexValue = this.initialValue
      .replace(/[^\d,]/g, '')
      .split(',')
      .map(colorItem => parseInt(colorItem, 16))
      .join();

    return `#${hexValue}`;
  }
}

