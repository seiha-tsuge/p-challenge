import {
  asyncSumOfArray,
  asyncSumOfArraySometimesZero,
  getFirstNameThrowIfLong,
  sumOfArray,
} from "../functions";
import { NameApiService } from "../nameApiService";

jest.mock("../nameApiService");
const NameApiMock = NameApiService as jest.Mock;

describe("sumOfArray", () => {
  test("number型配列の合計を返却", () => {
    expect(sumOfArray([1, 1])).toBe(2);
  });

  test("空配列の場合は0を返却", () => {
    expect(sumOfArray([])).toBe(0);
  });
});

describe("asyncSumOfArray", () => {
  test("number型配列の合計を返却", () => {
    expect(asyncSumOfArray([1, 1])).resolves.toBe(2);
  });
});

describe("asyncSumOfArraySometimesZero", () => {
  test("number型配列の合計を返却", () => {
    const numbers = [1, 1];
    const dbMock = { save: jest.fn() };

    expect(asyncSumOfArraySometimesZero(numbers, dbMock)).resolves.toBe(2);

    {
      const mockCalls = dbMock.save.mock.calls;
      expect(mockCalls.length).toBe(1);
      expect(mockCalls[0][0]).toEqual(numbers);
    }
  });

  test("例外が発生した場合は0を返却", () => {
    const numbers = [1, 1];
    const dbMock = {
      save: jest.fn().mockImplementation(() => {
        throw new Error("fail!");
      }),
    };

    expect(asyncSumOfArraySometimesZero(numbers, dbMock)).resolves.toBe(0);
  });
});

describe("getFirstNameThrowIfLong", () => {
  NameApiMock.mockImplementationOnce(() => {
    return {
      getFirstName: () => {
        return "first";
      },
    };
  }).mockImplementationOnce(() => {
    return {
      getFirstName: () => {
        return "first";
      },
    };
  });

  test("APIから取得した文字列を返却", async () => {
    const nameApiService = new NameApiService();
    const result = await getFirstNameThrowIfLong(5, nameApiService);
    expect(result).toBe("first");
  });

  test("APIから取得した文字列の文字数が、第一引数で指定した数値を超える場合は、例外を発生", async () => {
    const nameApiService = new NameApiService();
    const result = getFirstNameThrowIfLong(4, nameApiService);
    await expect(result).rejects.toThrow("first_name too long");
  });
});
