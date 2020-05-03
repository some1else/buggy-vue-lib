# buggy-vue-lib

Demo of an issue when using a built Vue library

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

The first and sometimes second run will cause an error and fail. The project will compile and run successfully after and running the command again a few times. In case of `yarn serve`, the failed build has to be exited with ^C before trying again. 

