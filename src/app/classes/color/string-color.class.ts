import { Color } from './color.class';
import stc from 'string-to-color';

export type StringColorType = string;

export class HexColor extends Color {
  private readonly initialValue: StringColorType;

  get forcss(): string {
    return this.getHexValue();
  }

  constructor(value: StringColorType) {
    super();
    this.initialValue = value;
  }

  getHexValue(): string {
    return stc(this.initialValue);
  }
}
