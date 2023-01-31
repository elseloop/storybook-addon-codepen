import { ADDON_ID, TOOL_ID } from "../constants";
import { addons, types } from "@storybook/addons";

import { STORY_CHANGED } from '@storybook/core-events';
import { Tool } from "../Tool";

// Register the addon
addons.register(ADDON_ID, () => {
  // Register the tool
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Codepen Addon",
    match: ({ viewMode }) => viewMode === "story",
    render: Tool,
  });
});