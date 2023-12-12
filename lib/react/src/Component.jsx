"use client";
import * as React from "react";
import styled from "styled-components";
import { useState } from "react";

function MyComponent(props) {
  const [name, setName] = useState(() => "Alex");

  return (
    <div>
      <Input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
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
