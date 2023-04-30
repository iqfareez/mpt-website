# MPT Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

Using Node 18.x

### Local Development

```
$ npm install
$ npm start
```

### Cloud Development

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/mptwaktusolat/mpt-website)

```
$ npm start -- --host 0.0.0.0
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

[![deploy live website](https://github.com/mptwaktusolat/mpt-website/actions/workflows/vercel-prod.yml/badge.svg)](https://github.com/mptwaktusolat/mpt-website/actions/workflows/vercel-prod.yml)

The site is deployed to [Vercel](https://vercel.com/dashboard).

Visit https://mywaktusolat.vercel.app