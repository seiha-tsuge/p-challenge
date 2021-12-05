import axios from 'axios';
import { NameApiService } from "../nameApiService";

jest.mock('axios');

describe('getFirstName', () => {
  test('APIから取得した文字列を返却', async () => {
    const resp = { data: { first_name: 'Dach' } };
    (axios.get as any).mockResolvedValue(resp);

    const nameApiService = new NameApiService;
    const result = await nameApiService.getFirstName()
    expect(result).toBe("Dach");
  });


  test('APIから取得した文字列の文字数が、MAX_LENGTHを超える場合は、例外を発生', async () => {
    const resp = { data: { first_name: 'Giovanni' } };
    (axios.get as any).mockResolvedValue(resp);

    const nameApiService = new NameApiService;
    const result = nameApiService.getFirstName();
    await expect(result).rejects.toThrow("firstName is too long!");
  });
});
