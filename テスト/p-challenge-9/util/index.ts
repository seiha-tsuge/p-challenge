import axios from 'axios';

const getRandomInt = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max));
};

export class DatabaseMock {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public save(_: number[]): void {
    // memo: 課題のために、あえて時々saveが失敗するようにしている
    if (getRandomInt(10) < 2) {
      throw new Error('fail!');
    }
  }
}

export class RandomDataApiClient {
  public async getName(): Promise<any> {
    const { data } = await axios.get(
      'https://random-data-api.com/api/name/random_name'
    );
    return data;
  }
}
