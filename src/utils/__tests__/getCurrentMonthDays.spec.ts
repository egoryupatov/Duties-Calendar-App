import {getCurrentMonthDays} from "../getCurrentMonthDays";

describe('number of days in current month', () => {
    test('return 30 for 09-2022', () => {

        const params = new Date(2022, 8)
        const arr = []

        for (let i = 1; i <= 30; i ++) {
            arr.push(i)
        }

        expect(getCurrentMonthDays(params)).toEqual(arr)
    })
})