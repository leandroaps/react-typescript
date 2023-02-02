import React, { useEffect, useRef, useState } from 'react';

const DummyComponent: React.FC = () => {
  const ref = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  return (
    <>
      <input
        type="text"
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="form-control"
      />
      <p>{value}</p>
    </>
  );
};

export default DummyComponent;
