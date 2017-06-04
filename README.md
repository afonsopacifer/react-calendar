# React Calendar

>

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
	|   ├── tests/
	|   ├── stories/
	|   ├── components/
	|   |   ├── atoms/
	|   |   └── molecules/
	|   ├── assets/
	|   |   ├── icons/
	|   |   └── styles/
	|   |       ├── atoms/
	|   |       └── molecules/
	|   ├── CalendarApp.js
	|   └── index.js
	├── package.json
	├── .editorconfig
	└── .gitignore

## Code Style Guide

### CSS

The basic code style guide used is the [Afonso Pacifer Code Style Guide](https://github.com/afonsopacifer/code-style-guide/blob/master/css/CSS.md).<br>
The CSS are organized in components based in [Atomic Design]() philosophy using [CSS modules](). The components code are organized with [BEM]() pattern.

## Tasks available

*Development Environment:*

- `$ npm start` - Start the development environment.

*Code Quality:*

- <s>`$ npm run format`</s> -
- `$ npm run format:css` - Auto format all CSS files, following the [CSS Style Guide]().
- <s>`$ npm run lint`</s> -
- `$ npm run lint:css` - Run CSS Lint.
- <s>`$ npm run lint:js`</s> - Run CSS Lint.

*Tests:*

- `$ npm test` - Run unit test.

*Docs:*

- `$ npm run start-storybook` - Start the UI docs environment.
- `$ npm run build-storybook` - Build all UI docs.
- <s>`$ npm run deploy-storybook`</s> -

*Deploy:*

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
