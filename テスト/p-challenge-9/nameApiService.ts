import { RandomDataApiClient } from './util';

export class NameApiService {
  private MAX_LENGTH = 4;
  private randomDataApiClient: RandomDataApiClient = new RandomDataApiClient();
  public constructor() {}

  public async getFirstName(): Promise<string> {
    const response = await this.randomDataApiClient.getName();
    const firstName = response.first_name;

    if (firstName.length > this.MAX_LENGTH) {
      throw new Error('firstName is too long!');
    }

    return firstName;
  }
}
