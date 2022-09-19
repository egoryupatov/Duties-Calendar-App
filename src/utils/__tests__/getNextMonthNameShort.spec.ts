import {getNextMonthNameShort} from "../getNextMonthNameShort";

describe('the name of the next month in short form', () => {
    test('return Oct for 2022-8', () => {

        const params = new Date (2022, 8)
        expect(getNextMonthNameShort(params)).toEqual('Oct')
    })
})