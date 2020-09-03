readline - take line from our terminal

- execute when we press enter from the terminal

## step T1 :

```js
➜  websockets-streaming-example git:(master) ✗ node server.js
(node:85233) ExperimentalWarning: The ESM module loader is experimental.
Connect to port 3001
^C
```

## step T2 stream

```js
➜  websockets-streaming-example git:(master) ✗ MODE=stream NAME=Saurabh node client.js
(node:85237) ExperimentalWarning: The ESM module loader is experimental.
Chat Room: Welcome!
Saurabh: Hi Saurabh
Ram: Hi Saurabh
Ram: How Are your
Hey Ram
a
b
CharBot: 1
CharBot: 2
CharBot: 3
CharBot: 4
CharBot: 5
CharBot: 6
CharBot: 7
CharBot: 8
CharBot: 9
CharBot: 10
CharBot: 11
CharBot: 12
CharBot: 13
CharBot: 14
CharBot: 15
CharBot: 16
CharBot: 17
^C
➜  websockets-streaming-example git:(master) ✗
```

## step T3 - POLL

```js
➜  websockets-streaming-example git:(master) ✗ MODE=POLL NAME=Ram node client.js
(node:85361) ExperimentalWarning: The ESM module loader is experimental.
Chat Room: Welcome!
Saurabh: Hi Saurabh
Ram: Hi Saurabh
Ram: How Are your
Saurabh: Hey Ram
Saurabh: a
Saurabh: b
CharBot: 1
CharBot: 2
CharBot: 3
CharBot: 4
CharBot: 5
CharBot: 6
CharBot: 7
CharBot: 8
CharBot: 9
CharBot: 10
CharBot: 11
CharBot: 12
CharBot: 13
CharBot: 14
^C
➜  websockets-streaming-example git:(master) ✗
```

## Step T4 - us bots to show live updates

```js
➜  websockets-streaming-example git:(master)
(for i in `seq 1 1000`; do sleep 1; echo $i; done) | NAME=CharBot node client.js
```
