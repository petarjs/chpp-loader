# Webpack Loader for Ћ плус плус

## Running the example

```sh
# install deps
npm i

# run webpack
./node_modules/.bin/webpack
```

## About

We define a local webpack loader (`chpp-loader.js`), which takes in the ћпп code and converts it to JS, outputing it to `dist/bundle.js`.

In `webpack.config.js` we define the entry point to be `./src/код.ћпп`. The idea is that that file would be like an `index.js` which can import other scripts.

## Known issues

It does compile but it does not run :D