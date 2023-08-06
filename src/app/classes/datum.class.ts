import { DatumDto } from '../modules/data-presentation/model/interfaces/datum-dto.interface';
import { Color } from './color/color.class';
import { HexColor } from './color/hex-color.class';

export class Datum {
  id: string;
  int: number;
  float: number;
  /** The bridge to datum color */
  color: Color;
  child: { id: string; color: string };
  // private child: keyof Datum;

  constructor(dtoValue: DatumDto) {
    this.id = dtoValue.id;
    this.int = dtoValue.int;
    this.float = dtoValue.float;
    this.color = new HexColor(dtoValue.color);
    this.child = dtoValue.child;
  }
}
