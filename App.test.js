import React from "react";
import App from "./App";
import { create } from "react-test-renderer";
import { Text } from "react-native";

describe("App", () => {
  it("renders some text about ParkMe", () => {
    const wrapper = create(<App />);
    expect(wrapper.root.findByType(Text).props.children).toContain(
      "Is this ParkMe?"
    );
  });
});
