import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { WeekScreen } from "./screens/WeekScreen/WeekScreen";
import { useAppSelector } from "./store/hooks";
import { selectCurrentDate } from "./store/dutiesSlice";
import { PrivateRoutesGroup } from "./components/PrivateRoutesGroup";

function App() {
  const selectDate = useAppSelector(selectCurrentDate);
  const url = `/month/${selectDate.getFullYear()}/${selectDate.getMonth()}/${selectDate.getDate()}`;

  return (
    <Routes>
      <Route path="/month/*" element={<PrivateRoutesGroup />} />
      <Route path="/week/:year/:month/:day" element={<WeekScreen />} />
      <Route path="*" element={<Navigate to={url} />} />
    </Routes>
  );
}

export default App;
