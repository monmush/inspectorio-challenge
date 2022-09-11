# Inspectorio Challenge

Simple React Typescript application which has

- A homepage with a list of hardcoded users
- Clicking on an username button will trigger the user detail drawer to be opened

## Setup
Create `.env` file at the root of the project and add this line:
```
VITE_API_BASE_URL=https://api.github.com
```

To start project at your local machine:
```
npm install && npm run dev 

// Or using yarn: 
yarn && yarn dev
```

## Technologies

- [ViteJS]('https://vitejs.dev')
- [Ant Design UI library]('https://ant.design')
- [Axios]('https://axios-http.com/docs/intro')

## What could be improved from here

- Research on Github API error message format to return better user-facing error messages
- Use LESS to override Ant Design styles for typography instead of "!important" flag
