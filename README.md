# storybook-reset-url-args

A storybook addon dump arguments to url and reloads the page

## Installation

Install the following npm module:

```sh
npm i --save-dev storybook-reset-url-args
```


Then, add following content to `.storybook/main.js`

```js
module.exports = {
  addons: ['storybook-reset-url-args']
};
```

When developing for a storybook, I had to manually remove all arguments in the url, for various reasons. If you have the same problem, welcome.
