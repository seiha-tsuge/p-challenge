import { ValueObject } from './valueObject';

interface BirthDateProps {
  value: string;
}

export class BirthDate extends ValueObject<BirthDateProps> {
  constructor(props: BirthDateProps) {
    super(props);
  }

  public static create(birthDate: string): BirthDate {
    const nowDate = new Date();
    const _birthDate = new Date(birthDate);

    const thisYearsBirthday = new Date(nowDate.getFullYear(), _birthDate.getMonth(), _birthDate.getDate());
    const age =
      nowDate.getFullYear() - _birthDate.getFullYear() + (thisYearsBirthday.getTime() > nowDate.getTime() ? -1 : 0);

    if (20 > age) {
      throw new Error('Age is too low');
    } else {
      return new BirthDate({ value: birthDate });
    }
  }
}
