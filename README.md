## Chakra

```
"dependencies": {
  "@chakra-ui/react": "2.2.4"
}
```

- [VSCode autocomplete for theme props not working 6440](https://github.com/chakra-ui/chakra-ui/issues/6440)

```
"scripts": {
  "gen:theme-typings": "chakra-cli tokens --strict-component-types ./src/theme/index.ts", 
  "postinstall": "npm run gen:theme-typings",
},
"devDependencies": {
  "@chakra-ui/cli": "2.1.0"
}
```

- --strict-component-types => https://github.com/chakra-ui/chakra-ui/pull/5243

```
Chakra UI CLI  v2.1.4 by Chakra UI
Generate theme typings for autocomplete

✖ An error occurred
Could not find @chakra-ui/styled-system in node_modules. Please provide `--out` parameter.
```

- @chakra-ui/cli 2.1.4 error => "@chakra-ui/react": "2.2.4" 호환으로 2.1.0 down grade

- [Version Packages 배포 기다리는중](https://github.com/chakra-ui/chakra-ui/pull/6441)
