import React from "react";
import { EngineersList } from "./EngineersList";

export default {
  title: "EngineersList",
  component: EngineersList,
};

export const Default = () => {
  return (
    <EngineersList
      weekScreenActive={false}
      numberOfDuties={[
        { name: "Alexander Petrov", days: 2 },
        { name: "Sergey Fedorov", days: 5 },
      ]}
    />
  );
};
