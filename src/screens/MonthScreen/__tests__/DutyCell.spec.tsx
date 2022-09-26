import {DutyCell} from "../DutyCell";
import { render} from "@testing-library/react";

describe("DutyCell", () => {

    it("displays the date and engineer's name", () => {

        const view = render(<DutyCell day={2} text={'Alexander Petrov'}/>)

        // eslint-disable-next-line testing-library/prefer-screen-queries
        const day = view.getByTestId('day').textContent
        // eslint-disable-next-line testing-library/prefer-screen-queries
        const name = view.getByTestId('name').textContent

        expect(day).toEqual('2')
        expect(name).toEqual('Alexander Petrov')
    })

})