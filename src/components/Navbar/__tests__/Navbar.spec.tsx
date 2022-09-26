import {Navbar} from "../Navbar";
import {NavbarProps} from "../Navbar";
import {render} from "@testing-library/react";


describe('Navbar', () => {

    let NavBarProps: NavbarProps;

    beforeEach(() => {

    NavBarProps = {
        weekScreenActive: false,
        numberOfDaysInCurrentMonth: 30,
        selectDate: new Date(2022, 8),
        currentMonthNameShort: "Sep",
        nextMonthNameShort: "Oct",
        currentYearNumber: "2022",
        switchToNextPeriod: jest.fn(),
        switchToPreviousPeriod: jest.fn(),
        prevMonth: jest.fn(),
        nextMonth: jest.fn(),
        nextWeek: jest.fn(),
        prevWeek: jest.fn(),
        goHome: jest.fn(),
        customDateDisplay: jest.fn(),
        switchToWeekDisplay: jest.fn(),
        switchToMonthDisplay: jest.fn(),
        switchStatsDisplay: jest.fn(),
        isCustomDateActive: false
    }

    })

    it('should render', () => {

        //NavBarProps.currentMonthNameShort = "Oct"

        render(<Navbar {...NavBarProps}/>)


    })
})