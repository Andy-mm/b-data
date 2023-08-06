export abstract class Color {
  // abstract protected initialValue: string;
  getRgbaString(alpha: number): string {
    if (alpha > 1) alpha = 1;

    const [red, green, blue] = this.getRgb();

    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
  };

  getRgbString(): string {
    const [red, green, blue] = this.getRgb();

    return `rgb(${red}, ${green}, ${blue})`;
  };

  getRgb(): [number, number, number] {
    const [red, green, blue] = this.getHexValue()
      .replace(/#/, '')
      .match(/.{1,2}/g)
      ?.map(colorItem => parseInt(colorItem, 16)) ?? [0, 0, 0];

    return [red, green, blue];
  };

  abstract getHexValue(): string;
}
