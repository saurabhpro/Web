ngin x - read as engine x
https://www.linode.com/docs/web-servers/nginx/how-to-configure-nginx/


1. help = `nginx -h`
2. use custom config = `nginx -c /Users/saurabhkumar/GitHub/Web/Node/express-nginx-reverse-proxy-example/nginx.conf`
3. stop = `nginx -s stop`

with this what we are saying is that listen to the post 8081 and if the location (url) matches / then set a additional header (proof of concept) and forward the request to post 3001 which is our server

node index.js will start the nodejs server
example

STEP 1 :
```js
➜  express-nginx-reverse-proxy-example git:(master) ✗ node index.js
(node:75088) ExperimentalWarning: The ESM module loader is experimental.
This is my server at 3001
```

STEP 2: 
in a new terminal (T2)
`curl localhost:3001/hello`

immedietly T2 will show
`Hello, Saurabh`

And in T1
```js
{ host: 'localhost:3001', 'user-agent': 'curl/7.64.1', accept: '*/*' }
```

STEP 3: 
- start nginx
- run `curl localhost:8081/hello`
- it will print the modified header on T1
```js
{
  sk_system_desgin_tutorials: 'true',
  host: 'nodejs-backend',
  connection: 'close',
  'user-agent': 'curl/7.64.1',
  accept: '*/*'
}
```
- ps - i have no idea how to run the nginx so cant show :P
 - update - got to run it , super simple