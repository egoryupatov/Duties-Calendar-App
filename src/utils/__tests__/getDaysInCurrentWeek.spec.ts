import { getDaysInCurrentWeek } from "../getDaysInCurrentWeek";

describe("number of days in current week", () => {
  test("return 11-17 for 2022-08-16", () => {
    const arr = [];

    for (let i = 11; i <= 17; i++) {
      arr.push(i);
    }

    const params = new Date(2022, 8, 16);

    expect(getDaysInCurrentWeek(params)).toEqual(arr);
  });

  test("return 25-30 for 2022-08-30", () => {
    const arr = [];

    for (let i = 25; i <= 30; i++) {
      arr.push(i);
    }

    const params = new Date(2022, 8, 30);

    expect(getDaysInCurrentWeek(params)).toEqual(arr);
  });
});
