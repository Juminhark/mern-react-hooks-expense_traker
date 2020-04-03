# mern-react-hooks-expense_traker

* **[`MERN tutorial`](https://github.com/Juminhark/mern-exercise_traker)**
* **[`react-hooks doc`](https://ko.reactjs.org/docs/hooks-intro.html)** 
* [`react-hooks_tutorial`](https://github.com/Juminhark/react-hooks_tutorial)

## tutorial 
* [`Traversy Media - server - MERN`](https://www.youtube.com/watch?v=KyWaXA_NvT0&t=245s)
* [`Traversy Media - client - react hooks`](https://www.youtube.com/watch?v=XuFDcZABiDQ&t=382s) 

## before

## 개발
* client
```sh
cd client
```
* server 현위치

# server

## init
```sh
npm init -y
```

## dependencies
```sh
npm i express dotenv mongoose colors morgan
```

* [`express`](https://www.npmjs.com/package/express)
* [`dotenv`](https://www.npmjs.com/package/dotenv)
* [`mongoose`](https://www.npmjs.com/package/mongoose)
* [`colors`](https://www.npmjs.com/package/colors)
* [`morgan`](https://www.npmjs.com/package/morgan) : HTTP request logger middleware for node.js

## devDependencies
```sh
npm i -D nodemon concurrently
```
* [`nodemon`](https://www.npmjs.com/package/nodemon)
* [`concurrently`](https://www.npmjs.com/package/concurrently) : Run commands concurrently

## 실행

```sh
# node server
npm start

# nodemon server
npm run server

# client start
# before / cd client / npm run build
npm client

# server, cilent concurrently start
npm run dev
```


## review
* 각 route의 실행코드를 controller에 정의하고 import하여 가독성 증가
* concurrently로 server, client 동시에 run