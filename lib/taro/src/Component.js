"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { View, Input, Text } from "@tarojs/components";

function MyComponent(props) {
  const [name, setName] = useState(() => "Alex");

  const [string, setString] = useState(() => 1);

  function a() {}

  useEffect(() => {
    console.log(state);
  }, []);

  return (
    <>
      <View>
        <Input
          className="input"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        Hello! I can run in React, Vue, Solid, or Liquid!
      </View>
      <style jsx>{`
        .input {
          color: red;
        }
      `}</style>
    </>
  );
}

export default MyComponent;
