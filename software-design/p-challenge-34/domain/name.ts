import { ValueObject } from './valueObject';

interface NameProps {
  value: string;
}

export class Name extends ValueObject<NameProps> {
  constructor(props: NameProps) {
    super(props);
  }

  public static create(name: string): Name {
    if (name.length > 20) {
      throw new Error('Name is too long');
    } else {
      return new Name({ value: name });
    }
  }
}
