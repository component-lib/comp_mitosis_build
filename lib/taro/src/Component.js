"use client";
import * as React from "react";
import { useState } from "react";
import { View, Input, Text } from "@tarojs/components";

function MyComponent(props) {
  const [name, setName] = useState(() => "Alex");

  return (
    <>
      <View>
        <Input
          className="input"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
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
