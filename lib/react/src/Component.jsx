"use client";
import * as React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

function MyComponent(props) {
  const [name, setName] = useState(() => "Alex");

  const [string, setString] = useState(() => 1);

  function a() {}

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <div>
      <Input
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      Hello! I can run in React, Vue, Solid, or Liquid!
    </div>
  );
}

const Input = styled.input`
  color: red;
`;

export default MyComponent;
