readline - take line from our terminal

- execute when we press enter from the terminal

## step T1 :

```js
➜  websockets-pub-sub-example  git:(master) ✗ node server.js
(node:85233) ExperimentalWarning: The ESM module loader is experimental.
Connect to port 3001
^C
```

## step T2,T3,T4 - Add subscribers

```js
// T1
➜  websockets-pub-sub-example git:(master) ✗ TOPIC_ID=STOCK_PRICES node subscriber.js

// T2
➜  websockets-pub-sub-example git:(master) ✗ TOPIC_ID=STOCK_PRICES node subscriber.js

// T3
➜  websockets-pub-sub-example git:(master) ✗ TOPIC_ID=NEWS_ALERTS node subscriber.js
```

## step T5 - Run Publisher

```js
➜  websockets-pub-sub-example git:(master) ✗
(for i in `seq 1 1000`; do sleep 1; echo New Stock Prices $i; done) | NAME=ZERODHA_STOCK_BROKER TOPIC_ID=STOCK_PRICES node publisher.js
```

Note that T4 won't recieve anything as we are only publishing to a certain topic

```js
➜  websockets-pub-sub-example git:(master) ✗
(for i in `seq 1 100`; do sleep 1; echo New Stock Prices $i; done) | NAME=ZERODHA_ALERTS TOPIC_ID=NEWS_ALERTS node publisher.js
```
