# Monorepo Starter App

This is an example monorepo for a Next.js web application.

- [asdf](https://asdf-vm.com/)
- [pnpm](https://pnpm.io/)
- [Next.js](https://nextjs.org/)
- [Apollo Graphql](https://www.apollographql.com/)
- [Nx](https://nx.dev/)
- [Typescript](https://www.typescriptlang.org/)

## Getting Started

It is recommended that you have [asdf](https://asdf-vm.com/guide/getting-started.html#_2-download-asdf) installed before continuing.

Use asdf to install node and pnpm versions:

```zsh
asdf install
```

Install dependencies:

```zsh
pnpm install
```

Start the wep application:

```zsh
pnpm --filter ui dev
```

Open a browser to [localhost:3000](http://localhost:3000)

### Nx

To view the dependency graph, run:

```zsh
pnpm view-graph
```
