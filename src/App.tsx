import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "./store/hooks";
import { selectCurrentDate } from "./store/dutiesSlice";
import { PrivateRoutesGroup } from "./components/PrivateRoutesGroup";

function App() {
  const selectDate = useAppSelector(selectCurrentDate);
  const url = `/month/${selectDate.getFullYear()}/${selectDate.getMonth()}/${selectDate.getDate()}`;

  return (
    <Routes>
      <Route path="/month/*" element={<PrivateRoutesGroup />} />
      <Route path="/week/*" element={<PrivateRoutesGroup />} />
      <Route path="*" element={<Navigate to={url} />} />
    </Routes>
  );
}

export default App;
