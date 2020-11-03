import React, { useState, useEffect } from "react";

export default function FunctionTimer() {
  const [seconds, setSecond] = useState(0);
  const [stop, setStop] = useState(false);

  const count = () => {
    setSecond((pervState) => pervState + 1);
  };

  useEffect(() => {
    let interval = null;
    if (stop) {
      interval = setInterval(() => count(), 1000);
    } else if (!stop && seconds !== 0) {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stop]);

  const handletoggle = () => {
    setStop(!stop);
  };

  const handleReset = () => {
    setSecond(0);
    setStop(false);
  };

  return (
    <React.Fragment>
      <h1>Functional Component</h1>
      <h3>Counting seconds : {seconds}</h3>
      <br />
      {/* eslint-disable-next-line */}
      <a
        className="waves-effect waves-light btn-small"
        onClick={() => handletoggle()}
      >
        <i className="material-icons right">{stop ? "pause" : "play_arrow"}</i>
        {stop ? "Pause" : "Start"}
      </a>
      <span style={{ paddingRight: 10 }} />
      {/* eslint-disable-next-line */}
      <a
        className="waves-effect waves-light btn-small"
        onClick={() => handleReset()}
      >
        <i className="material-icons right">replay</i>
        RESET
      </a>
    </React.Fragment>
  );
}
