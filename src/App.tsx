import React, { useEffect, useRef, useState } from 'react';

const DummyComponent: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<any>("");

  const changeValues = (target: string) => {
    setValue(target);
    localStorage.setItem("typed", target);
  };

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  useEffect(() => {
    setValue(localStorage.getItem("typed"));
  }, []);

  return (
    <>
      <h1>Simple React Type and Read with Typescript</h1>
      <input
        type="text"
        ref={ref}
        value={value}
        onChange={(e) => changeValues(e.target.value)}
        className="form-control"
      />
      <div className={value ? "alert alert-info mt-5" : "d-none"}>
        <h2>You typed:</h2>
        <p>{value}</p>
      </div>
    </>
  );
};

export default DummyComponent;
