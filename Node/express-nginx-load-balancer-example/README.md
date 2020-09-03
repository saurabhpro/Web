nginx by default uses Round Robin, ww use Weighted round robin


PORT=3000 node index.js
PORT=3001 node index.js

➜  express-nginx-load-balancer-example git:(master) ✗ nginx -c /Users/saurabhkumar/GitHub/Web/Node/express-nginx-load-balancer-example/nginx.conf 
➜  express-nginx-load-balancer-example git:(master) ✗ curl localhost:8081/hello 

Hello Saurabh%  

if you curl the same request multiple times, the result is

T1
```
➜  express-nginx-load-balancer-example git:(master) ✗ PORT=3000 node index.js
(node:53005) ExperimentalWarning: The ESM module loader is experimental.
This is my server at 3000
{
  sk_system_desgin_tutorials: 'true',
  host: 'nodejs-backend',
  connection: 'close',
  'user-agent': 'curl/7.64.1',
  accept: '*/*'
}
{
  sk_system_desgin_tutorials: 'true',
  host: 'nodejs-backend',
  connection: 'close',
  'user-agent': 'curl/7.64.1',
  accept: '*/*'
}
{
  sk_system_desgin_tutorials: 'true',
  host: 'nodejs-backend',
  connection: 'close',
  'user-agent': 'curl/7.64.1',
  accept: '*/*'
}
{
  sk_system_desgin_tutorials: 'true',
  host: 'nodejs-backend',
  connection: 'close',
  'user-agent': 'curl/7.64.1',
  accept: '*/*'
}
{
  sk_system_desgin_tutorials: 'true',
  host: 'nodejs-backend',
  connection: 'close',
  'user-agent': 'curl/7.64.1',
  accept: '*/*'
}
```

T2
```
➜  express-nginx-reverse-proxy-example git:(master) ✗ PORT=3001 node index.js
(node:53017) ExperimentalWarning: The ESM module loader is experimental.
This is my server at 3001
{
  sk_system_desgin_tutorials: 'true',
  host: 'nodejs-backend',
  connection: 'close',
  'user-agent': 'curl/7.64.1',
  accept: '*/*'
}
{
  sk_system_desgin_tutorials: 'true',
  host: 'nodejs-backend',
  connection: 'close',
  'user-agent': 'curl/7.64.1',
  accept: '*/*'
}
```