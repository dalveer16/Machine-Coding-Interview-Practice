/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import Button from "../Component/Button";

const Countdown: React.FC = () => {
  const [flag, setFlag] = useState<boolean>(true);
  return (
    <div className="flex justify-center h-screen items-center">
      <div></div>
      <div>
        <Button>{flag ? "START" : "STOP"}</Button>
        <Button>RESET</Button>
      </div>
    </div>
  );
};

export default Countdown;
