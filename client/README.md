# client

## init
```sh
npx create-react-app .
```

## dependencies
```sh
npm i axios
```

* [`axios`](https://www.npmjs.com/package/axios) : Promise based HTTP client for the browser and node.js

```ts
// GlobalState.js
async function getTransactions() {
  const res = await axios.get('/api/v1/transaction');
}

// package.json
{
 "proxy": "http://localhost:5000"
}
```
axios를 통해 proxy/uri => http://localhost:5000/api/v1/transaction 에서 data를 넘겨받아 res에 저장