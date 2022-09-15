import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {WeekScreen} from "./screens/WeekScreen/WeekScreen";
import {useAppSelector} from "./store/hooks";
import {selectCurrentDate} from "./store/dutiesSlice";
import {MonthScreen} from "./screens/MonthScreen/MonthScreen";

function App() {

    const selectDate = useAppSelector(selectCurrentDate)
    const url = `/month/${selectDate.getFullYear()}/${selectDate.getMonth()}/${selectDate.getDate()}`

    console.log('Дата в селекторе: ' + selectDate.getDate())

    return (

        <Routes>
            <Route path="/month/:year/:month/:day" element={<MonthScreen />}/>
            <Route path="/week/:year/:month/:day" element={<WeekScreen />}/>
            <Route path="*" element={<Navigate to={url} />}/>
        </Routes>
    );
}

export default App;