Base adresse nationale autocomplete box (React)
======================

 > React component to autocomplete addresses using the [Base adresses nationale (BAN)  API](http://adresse.data.gouv.fr/api/).


Requirements
------------

This widget is written in ECMA 2015.

* Node
* NPM
* Chrome (to run the test)

Install
-------

```bash
cd path/to/your/project
npm install ban-autocomplete-react --save
```

Setup
-----

#### Simple script reference

```html
<body>
  <div>
    <script src="./node_modules/ban-autocomplete-react/src/client/public/bundle.js" type="text/javascript"></script>
  </div>
</body>
```

See an example in [index.html](src/client/index.html).


#### Webpack

```js
import AutocompleteBan from 'ban-autocomplete-react';
//If you have a div#widget-container to show the widget
render(<AutocompleteBan/>, document.getElementById('widget-container'));
```

See an example in [index.jsx](src/client/app/index.jsx).

Development
-----------

Rebuild the component every time the sources change :

```
npm run dev
```

Build the component :

```
npm run build
```

Run the integration test :

```
npm run dev
npm run test
```
