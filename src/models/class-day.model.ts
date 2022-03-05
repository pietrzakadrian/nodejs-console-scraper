export class ClassDay {
  private readonly _date?: string;
  private readonly _day: string;
  private readonly _from?: string;
  private readonly _to?: string;
  private readonly _subject: string;
  private readonly _type: string;
  private readonly _teacher: string;
  private readonly _classroom?: string;

  constructor(
    day: string,
    subject: string,
    type: string,
    teacher: string,
    from?: string,
    to?: string,
    date?: string,
    classroom?: string
  ) {
    this._day = day;
    this._subject = subject;
    this._type = type;
    this._teacher = teacher;
    this._from = from;
    this._to = to;
    this._date = date;
    this._classroom = classroom;
  }

  public get date(): string | undefined {
    return this._date;
  }

  public get day(): string {
    return this._day;
  }

  public get from(): string | undefined {
    return this._from;
  }

  public get to(): string | undefined {
    return this._to;
  }

  public get subject(): string {
    return this._subject;
  }

  public get type(): string {
    return this._type;
  }

  public get teacher(): string {
    return this._teacher;
  }

  public get classroom(): string | undefined {
    return this._classroom;
  }
}
