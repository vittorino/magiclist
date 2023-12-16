# magiclist

## About
This is a JS website that works as a local inventory for Magic: The Gathering cards. Currently it is built to support 4th edition only, but it can work with any edition by downloading the JSON list into the `/json` folder and JPGs into the `img/cards` folder.

## Instructions
Start python server inside magiclist folder:

```
$ cd magiclist/

$ python -m http.server
```

Open local collection on:

```
http://localhost:8000
```
The card IDs will be saved in a local storage cookie named _collections_.