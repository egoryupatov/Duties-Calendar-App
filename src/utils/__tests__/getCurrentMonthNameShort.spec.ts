import {getCurrentMonthNameShort} from "../getCurrentMonthNameShort";

describe('short name of the current month', () => {
    test('return SEP for for 09-2022', () => {

        const params = new Date(2022, 8)

        expect(getCurrentMonthNameShort(params)).toEqual('Sep')

    })
})