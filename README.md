# Fixed

The issue is caused due to the library being linked into the example project for development purposes. The manual suggests [disabling resolve.symlinks](https://cli.vuejs.org/guide/troubleshooting.html#symbolic-links-in-node-modules), which fixed the issue. [See commit](https://github.com/some1else/buggy-vue-lib/commit/a65f9ca2f2c0b3e69158f90aa35d381721445bf6)

# buggy-vue-lib

Reproduction of an issue when using a built Vue library

## 1. Project setup

```
/tmp/buggy-vue-lib $ yarn install
```

## 2. Compile lib for production

```
/tmp/buggy-vue-lib $ yarn build
```

Creates `dist/buggyvuelib.umd.js`

## 3. Go to example project and install dependencies

```
/tmp/buggy-vue-lib $ cd example && yarn install
```

## 4. Try to serve or build the example project until success

```
/tmp/buggy-vue-lib/example $ yarn serve
```

or 

```
/tmp/buggy-vue-lib/example $ yarn build
```

The first and sometimes second run will cause an error and fail. The project will compile and run successfully after a few retries. In case of `yarn serve`, the failed build has to be exited with ^C before trying again. 

