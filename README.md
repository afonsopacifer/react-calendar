# React Calendar

> The calendar for developers.

## How we write our code

#### Markup and Behavior with React ecosystem

> **PS:** The Initial scaffolding started with ejected [React Create App](https://github.com/facebookincubator/create-react-app) structure.

React components are based on the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) philosophy. The entire UI test and the Style Guide are developed in the [Storybook](https://github.com/storybooks/storybook).<br>
We use the [Afonso Pacifer's JS Code Style Guide](https://github.com/afonsopacifer/code-style-guide/blob/master/js/JS.md) with [ESLint](http://eslint.org/) for validate the style and code quality.<br>
All unit tests are created with [Jest](https://facebook.github.io/jest/) and some libs like [enzyme](https://github.com/airbnb/enzyme), [Chai](http://chaijs.com/) etc..

#### Architecture

Simple [Flux](http://facebook.github.io/flux/) implementation with [Redux](http://redux.js.org/).

#### Offline support

All static files are cached with [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) and client side database is [IndexedDB](https://www.w3.org/TR/IndexedDB/) with [Dexie.js](http://dexie.org/) abstractions.


#### Style with vanilla CSS

We use the [Afonso Pacifer's CSS Code Style Guide](https://github.com/afonsopacifer/code-style-guide/blob/master/css/CSS.md) with [CSScomb](http://csscomb.com/) self-formatting. CSS is organized into components based on the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) philosophy using [CSS modules](https://github.com/css-modules/css-modules) and organized internally with [BEM](http://getbem.com/naming/) pattern.


## Run the project locally

**1 -** Clone the project and install the dependencies:

```sh
$ git clone https://github.com/afonsopacifer/react-calendar.git
$ cd react-calendar
$ npm install
```

**2 -** Start development mode:

```sh
$ npm start
```

## Atomic folder structure

	.
	├── README.md
	├── CONTRIBUTING.md
	├── LICENSE.md
	├── config/
	├── scripts/
	├── public/
	├── src/
	|   ├── assets/
	|   |   ├── icons/
	|   |   └── styles/
	|   |       ├── atoms/
	|   |       └── molecules/
	|   ├── tests/
	|   ├── stories/
	|   ├── components/
	|   |   ├── atoms/
	|   |   └── molecules/
	|   ├── CalendarApp.js
	|   └── index.js
	├── .eslintrc.json
	├── .csslintrc
	├── .csscomb.json
	├── .editorconfig
	├── .gitignore
	└── package.json

## Tasks available

> **PS:** We use [Husky](https://github.com/typicode/husky) to avoid mistakes.

- `$ npm start` - Start the development environment.
- `$ npm run lint:js` - Run CSS Lint following the [Afonso Pacifer's CSS Code Style Guide](https://github.com/afonsopacifer/code-style-guide/blob/master/css/CSS.md).
- `$ npm run lint:css` - Run CSS Lint.
- `$ npm run format:css` - Auto format all CSS files following the [Afonso Pacifer's JS Code Style Guide](https://github.com/afonsopacifer/code-style-guide/blob/master/js/JS.md).
- `$ npm test` - Run unit test.
- `$ npm run start-storybook` - Start the UI docs/test environment.
- `$ npm run build-storybook` - Build all UI docs/test.
- <s>`$ npm run deploy-storybook` - Deploy storybook for gh-pages.</s>
- `$ npm run build` - Build for production.
- <s>`$ npm run deploy` - Deploy App for gh-pages.</s>

## Contributing

Find on our [issues](https://github.com/afonsopacifer/react-calendar/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/afonsopacifer/react-calendar/blob/master/CONTRIBUTING.md).

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## History

See [Releases](https://github.com/afonsopacifer/react-calendar/releases) for detailed changelog.

## License

[MIT License](https://github.com/afonsopacifer/react-calendar/blob/master/LICENSE.md) © [Afonso Pacifer](http://afonsopacifer.github.io/)
