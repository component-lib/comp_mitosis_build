import { onMount, useState, useStore } from "@builder.io/mitosis";

export default function MyComponent() {
  const [name, setName] = useState("Alex");
  const state = useStore({ string: 1 });

  onMount(() => {});

  function start() {}

  return (
    <div>
      <input
        css={{ color: "red" }}
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      Hello! I can run in React, Vue, Solid, or Liquid!
    </div>
  );
}
