import { ValueObject } from './valueObject';

interface BloodTypeProps {
  value: string;
}

export class BloodType extends ValueObject<BloodTypeProps> {
  constructor(props: BloodTypeProps) {
    super(props);
  }

  public static create(bloodType: string): BloodType {
    if (bloodType !== 'A' && bloodType !== 'B' && bloodType !== 'AB' && bloodType !== 'O') {
      throw new Error('BloodType is invalid');
    } else {
      return new BloodType({ value: bloodType });
    }
  }
}
