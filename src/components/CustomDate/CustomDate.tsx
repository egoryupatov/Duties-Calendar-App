import React from 'react';
import {CustomDateRowStyled, CustomDateStyled} from "./CustomDate.styled";
import {Button} from "../../styles/general.styled";

interface CustomDateContainerProps {
    onSubmit: () => void
    handleYearChange: any
    handleMonthChange: any
    years: number []
    month: number []
}

export const CustomDate: React.FC<CustomDateContainerProps> = (props) => {

    return (




        <CustomDateStyled>

            <CustomDateRowStyled>
                <div>
                    <label>Select a year:</label>
                </div>

                <div>
                    <select onChange={props.handleYearChange} name="years">
                        {props.years.map((year:number) => (
                            <option value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
            </CustomDateRowStyled>

            <CustomDateRowStyled>
                <div>
                    <label>Select a month:</label>
                </div>

                <div>
                    <select onChange={props.handleMonthChange} name="month">
                        {props.month.map((month:number) => (
                            <option value={month}>
                                {month}
                            </option>
                        ))}
                    </select>
                </div>
            </CustomDateRowStyled>

            <Button onClick={props.onSubmit}>Submit</Button>
        </CustomDateStyled>

    );
};