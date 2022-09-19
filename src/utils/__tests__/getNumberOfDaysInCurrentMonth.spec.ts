import {getNumberOfDaysInCurrentMonth} from "../getNumberOfDaysInCurrentMonth";

describe('number of days in current month', () => {
    test('return 30 for 2022-08', () => {

        const params = new Date(2022, 8)

        expect(getNumberOfDaysInCurrentMonth(params)).toEqual(30)
    })
})