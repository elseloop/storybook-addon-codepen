import addons, { useEffect } from "@storybook/addons";

import { ADDON_ID } from "./constants";
import React from 'react';
import { STORY_ARGS_UPDATED } from '@storybook/core-events';
import { useAddonState } from "@storybook/client-api";

export const emptyState = {
  title: "",
  html: "",
  css: ""
};

export const withCodepenData = (storyFn, context) => {
  const channel = addons.getChannel();
  const [codepenData, setState] = useAddonState(ADDON_ID, emptyState);

  const getData = () => {
    const rootElement = document.getElementById('root');
    // get story title to use as name of pen
    const storyTitle = `${context.title}/${context.name}`;
    // get story HTML to use for pen HTML
    const storyHTML = rootElement.innerHTML;
    // get story CSS to use for pen CSS
    const storyCSS = Array.from(document.getElementsByTagName('style')).map(style => style.innerHTML).join('');
    // prep data for Codepen
    // replacing double quotes with HTML entities to avoid breaking JSON
    const data = JSON.stringify({
        title: storyTitle,
        html: storyHTML,
        css: storyCSS,
      }).replace(/"/g, "&quot;").replace(/'/g, "&apos;");

    return data;
  };


  useEffect(() => {
    // listen for arg changes and update data accordingly
    channel.on(STORY_ARGS_UPDATED, () => {
      setState(getData());
    });
  }, []);

  useEffect(() => {
    // set initial data
    setState(getData());

    return () => {
      // reset data when story unmounts
      setState(emptyState);
    }
  }, []);

  return storyFn();
};