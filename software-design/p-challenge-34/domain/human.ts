import { Name } from './name';
import { BloodType } from './bloodType';
import { BirthDate } from './birthDate';

class Human {
  private id: string;
  private name: Name;
  private bloodType: BloodType;
  private birthDate: BirthDate;

  constructor(id: string, name: Name, bloodType: BloodType, birthDate: BirthDate) {
    this.id = id;
    this.name = name;
    this.bloodType = bloodType;
    this.birthDate = birthDate;
  }

  getAllProperties() {
    return {
      id: this.id,
      name: this.name,
      bloodType: this.bloodType,
      birthDate: this.birthDate,
    };
  }
}
