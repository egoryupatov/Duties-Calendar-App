import {getDaysInWeekOfNextMonth} from "../getDaysInWeekOfNextMonth";

describe('days in the week of the next month', () => {
    test('return [1] for 2022-08-27', () => {

const params = new Date(2022, 8, 27)

        expect(getDaysInWeekOfNextMonth(params)).toEqual([1])
    })
})