# SPUN backend

Backend implementation made for SPUN. The project that let's you practice for the admition test of the National University of Colombia.

To clone this project:

```bash
git clone git@github.com:DaniDiazTech/SPUN-backend.git
cd SPUN-backnd
```

## Run the project

To run the project be sure to first have installed [NodeJS](https://nodejs.org/en/download/current).

Then run:

```bash
npm run dev
```

## Packages

This project uses TypeScript and runs over nodeJS.
Express is used as a web framework to create REST APIs.

- TypeScript
- Node & Express: Web framework.
- Ts-node-dev: Executes changes continously during development. Use script defined in package.json `dev`.

Project structure:

```bash
.
├── data-structures
├── package.json
├── package-lock.json
├── README.md
├── src
│   ├── configs
│   ├── controllers
│   ├── index.ts
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── types.d.ts
│   └── utils
├── test
└── tsconfig.json
```

- configs: Configuration files of the src directory. Defines constants.
- CLI: Console applications made for the app development.
- Controllers: Manage the logic of models (request and response)
- Middleware:
- Models: Models of the mongoDB database
- Routes: API interface, uses controllers.

Style:

- TypeScript style guidelines.
- Use of semicolon.
