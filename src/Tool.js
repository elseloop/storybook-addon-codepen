import { ADDON_ID, CODEPEN_URL, TOOL_ID } from "./constants";

import { CodepenIcon } from "./components/CodepenIcon";
import { IconButton } from "@storybook/components";
import React from "react";
import {emptyState} from "./withCodepenData";
import { styled } from "@storybook/theming";
import { useAddonState } from "@storybook/api";

const Form = styled.form({
  height:"100%",
  left: 0,
  position: "absolute",
  top: 0,
  width: "100%",
  zIndex: 1,
});

const InputSubmit = styled.input({
  cursor: "pointer",
  height: "100%",
  left: 0,
  opacity: 0,
  position: "absolute",
  top: 0,
  transform: "translateX(0)",
  width: "100%",
  zIndex: 2,
});

export const Tool = () => {
  const [codepenData, setState] = useAddonState(ADDON_ID, emptyState);

  return (
    <IconButton
      key={TOOL_ID}
      title="Open story on Codepen"
      style={{ padding: 0, position: "relative", width: "28px" }}
    >
      <CodepenIcon />
      {/* submits to Codepen API; sits on top of icon for click events */}
      <Form action={CODEPEN_URL} method="POST" target="_blank">
        <input type="hidden" name="data" value={codepenData} />
        <InputSubmit type="submit" aria-label="Open story as a Pen on Codepen" />
      </Form>
    </IconButton>
  );
};
