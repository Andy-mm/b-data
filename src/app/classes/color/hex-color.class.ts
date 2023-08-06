import { Color } from './color.class';

export type HexColorType = string;

export class HexColor extends Color {
  private readonly initialValue: HexColorType;

  constructor(value: HexColorType) {
    super();
    this.initialValue = value;
  }

  getHexValue(): string {
    return this.initialValue;
  }




}
