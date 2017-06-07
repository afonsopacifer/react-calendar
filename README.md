# React Calendar

> The calendar for developers.

## How do we write our code?

#### Markup and Behavior with React ecosystem

> **PS:** The Initial scaffolding started with ejected [React Create App](https://github.com/facebookincubator/create-react-app) structure.

React components are based on the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) philosophy. The entire UI test and the Style Guide are developed in the [Storybook](https://github.com/storybooks/storybook).<br>
We use the [Afonso Pacifer's JS/JSX Code Style Guide](https://github.com/afonsopacifer/code-style-guide/blob/master/css/CSS.md) with [ESLint](http://eslint.org/) for validate the style and code quality.<br>
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
	├── .csslintrc
	├── .csscomb.json
	├── .editorconfig
	├── .gitignore
	└── package.json

## Tasks available

> **PS:** We use [Husky](https://github.com/typicode/husky) to avoid mistakes.

- `$ npm start` - Start the development environment.
- <s>`$ npm run format`</s> -
- `$ npm run format:css` - Auto format all CSS files, following the [CSS Style Guide]().
- <s>`$ npm run lint`</s> -
- `$ npm run lint:css` - Run CSS Lint.
- <s>`$ npm run lint:js`</s> - Run CSS Lint.
- `$ npm test` - Run unit test.
- `$ npm run start-storybook` - Start the UI docs environment.
- `$ npm run build-storybook` - Build all UI docs.
- <s>`$ npm run deploy-storybook`</s> -
- `$ npm run build` - Build for production.
- <s>`$ npm run deploy`</s> - Deploy for gh-pages.

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
