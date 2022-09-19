import {getCurrentYearNumber} from "../getCurrentYearNumber";

describe('number of current year', () => {
    test('return 2022 for 2022', () => {

        const params = new Date()

        expect(getCurrentYearNumber(params)).toEqual("2022")
    })
})