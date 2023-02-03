![story-pen](https://user-images.githubusercontent.com/1466832/216483536-990da991-6fde-4242-8fae-c33017fa8b11.png)

# Storybook Addon Codepen

Open a pen on Codepen with the click of a button, pre-filled with your story’s HTML and CSS.

![sb-addon-cp](https://user-images.githubusercontent.com/1466832/216485955-229d615f-67aa-4c81-ad0e-eb5bf1ae66cf.gif)

## Installation
In the root directory of your Storybook project, run either

```bash
npm i -D storybook-addon-codepen
```

or

```bash
yarn add storybook-addon-codepen
```
Then, add the following to your `.storybook/main.js` file:

```js
export default {
  addons: ['storybook-addon-codepen'],
};
```

## Assumptions & Limitations

This addon was built for those times you would like to share the contents of a single story, either to seek help or to create a minimal use case, but are unable to share the full Storybook for whatever reason. Rather than copying and pasting somewhere else, the addon will pull the full story title, rendered HTML, and the contents of any defined `<style>` tags from your story and use them to prefill a new pen on Codepen.

- Does not require a Codepen account to use.
- Changing `args` passed to the story, either through the Controls panel, URL parameters, or other means, will be reflected correctly in the resulting pen provided they happen before opening the pen. (If they occur after, a new pen will need to be opened to see the changes.)
- JavaScript is intentionally not included in what is sent to Codepen. Because Storybook supports so many tools that require large framework bundles when not minified (as they likely would be in development), and because JavaScript required for a single component might be spread among multiple bundles in the preview iframe, making it difficult to pick and choose effectively, this addon chooses to leave out the JavaScript when opening a pen. If your story requires interactive JavaScript, you will need to move it into the pen manually.
