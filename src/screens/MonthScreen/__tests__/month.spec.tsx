import {Month} from "../Month";
import {render, screen} from "@testing-library/react";
import {MonthContainerProps} from "../Month";
import {getCurrentMonthDays} from "../../../utils/getCurrentMonthDays";

describe("Month", () => {

    it('renders on a page', () => {

        const dutiesMap: MonthContainerProps["dutiesMap"] = {2: {dutyStartDate: "2022-09-02T12:00:00.000Z", engineer: {name: "Ivan Petrov", avatarImage: "qq"}}}

        const prevMonthDays = [1,2,3]
        const nextMonthDays = [1,2,3]
        const currentMonthDays = getCurrentMonthDays(new Date(2022, 8))

        render(<Month prevMonthDays={prevMonthDays} currentMonthDays={currentMonthDays} nextMonthDays={nextMonthDays} dutiesMap={dutiesMap}/>)

        expect(screen.getByText("Ivan Petrov")).toBeVisible()
        
    })
})