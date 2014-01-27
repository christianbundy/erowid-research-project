# Erowid Research Project

A research project analyzing the  [experiences](http://www.erowid.org/experiences/exp_front.shtml) available from [Erowid](https://en.wikipedia.org/wiki/Erowid) in the interest of harm reduction.

## Usage

[Unzip](https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man1/unzip.1.html) the [JSON](http://www.json.org/) archive, install [NPM](https://npmjs.org/) dependencies, and run it with [Node](http://nodejs.org/).

```sh
unzip erowid.json.zip
npm install
node main
```

Once you've got everything installed, you'll find everything that you need in [main.js](https://github.com/christianbundy/erowid-research-project/blob/master/main.js).

```js
// HEY, OVER HERE!
// The main function is what you'll be editing.
var main = function (item) {
  console.log("This item's ID is " + item.id + '!')
  return item;
}
```

## Contact

Please [open an issue](https://github.com/christianbundy/erowid-research-project/issues/new) if you have any questions, comments, or concerns. If you need to get a hold of me personally, I'm [@ChristianBundy](http://twitter.com/christianbundy) on Twitter, or you can email me at [me@christianbundy.com](mailto:me@christianbundy.com).

## Copyright

These experiences were downloaded from Erowid and are bound by their [copyright rules](http://www.erowid.org/general/about/about_copyrights.shtml).
