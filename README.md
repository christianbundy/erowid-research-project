# Erowid Research Project

A research project analyzing the  [experiences](http://www.erowid.org/experiences/exp_front.shtml) available from [Erowid](https://en.wikipedia.org/wiki/Erowid) in the interest of harm reduction.

## Usage

The files in the `json` should look something like this:

```json
{
 "id": 9001,
 "title": "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?",
 "date": {
  "submission": "2004-05-12T07:00:00.000Z",
  "experience": "2001-01-01T00:00:00.000Z"
 },
 "author": {
  "name": "Christian Bundy",
  "gender": "Male",
  "weight": 68
 },
 "dose": [
  {
   "time": "0",
   "administration": "smoked",
   "substance": "Javascript",
   "form": "code",
   "specific": "JSON"
  },
  {
   "time": "90",
   "administration": "oral",
   "substance": "HTML",
   "form": "tags"
  }
 ],
 "report": [
  "This is one paragraph.",
  "This is another!"
 ],
 "erowid": {
  "id": "9001",
  "citation": " Christian Bundy. \"Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like? - Opium (ID 9001)\". Erowid.org. Jan 1, 20016. erowid.org/exp/9001",
  "substance": "Javascript & HTML",
  "views": "0"
 }
}
```

To make batch edits to the JSON, install dependencies with `npm install`, edit `main.js`, and run `npm start`.

## Todo

It's always nice to add more properties (such as the `dose[i].amount.grams property`) for analysis, but the next big thing is writing an algorithm to find pattens in the sample data. Pull requests are *very* welcome!

## Copyright

These experiences were downloaded from Erowid and [should *always* have their citation attached](http://www.erowid.org/general/about/about_copyrights.shtml), which identifies both the author and Erowid as the source of the content. If you use information from this repository, please mention where you found it.

## Get in touch

I'm [@ChristianBundy](http://twitter.com/christianbundy) on Twitter, or you can email me at [me@christianbundy.com](mailto:me@christianbundy.com).
