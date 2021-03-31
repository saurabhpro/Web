## Starting the docker command
```ps
docker run --name ejabberd -p 5222:5222 ejabberd/ecs
```
This will basically spin you docker image


```js
2021-03-18 04:04:09.031227+00:00 [info] (<0.921.0>) Accepted connection [::ffff:172.17.0.1]:58520 -> [::ffff:172.17.0.2]:5222
2021-03-18 04:04:09.107501+00:00 [info] (tls|<0.921.0>) Accepted c2s DIGEST-MD5 authentication for admin@localhost by mnesia backend from ::ffff:172.17.0.1
2021-03-18 04:04:09.121959+00:00 [info] (tls|<0.921.0>) Opened c2s session for admin@localhost/119019659338260859401954
2021-03-18 04:05:02.427675+00:00 [info] (<0.927.0>) Accepted connection [::ffff:172.17.0.1]:58524 -> [::ffff:172.17.0.2]:5222
2021-03-18 04:05:02.459330+00:00 [info] (tls|<0.927.0>) Accepted c2s DIGEST-MD5 authentication for saurabh@localhost by mnesia backend from ::ffff:172.17.0.1
2021-03-18 04:05:02.462955+00:00 [info] (tls|<0.927.0>) Opened c2s session for saurabh@localhost/124190827935839205372018
2021-03-18 04:06:16.592091+00:00 [info] (tls|<0.921.0>)

// as soon as you end the terminal ctrl+c
Closing c2s session for admin@localhost/119019659338260859401954: Connection failed: connection closed
2021-03-18 04:11:27.500159+00:00 [info] (tls|<0.927.0>) Closing c2s session for saurabh@localhost/124190827935839205372018: Connection failed: connection closed

```

## Step 1 - Register your user
Then you need to register your users - for simplicitiy we are using same server port to communicate

```ps
docker exec -it ejabberd bin/ejabberdctl register admin localhost password


docker exec -it ejabberd bin/ejabberdctl register saurabh localhost password
```

## Step 2 - start the admin client 
```js
saurabh.kumar@C02D70TBMD6N xmpp % node index.js
Hay you are online
connected as admin
```

## Step 3 - start your personal client
```js
saurabh.kumar@C02D70TBMD6N xmpp % node saurabh.js       Hey you are online! 
Connected as saurabh
```

## Step 4 - You starts sending messages to Admin
```js
saurabh.kumar@C02D70TBMD6N xmpp % node index.js
Hay you are online
connected as admin
Got a message~ hi! 1616040302448 from saurabh@localhost/124190827935839205372018
Got a message~ hi! 1616040307451 from saurabh@localhost/124190827935839205372018
Got a message~ hi! 1616040312454 from saurabh@localhost/124190827935839205372018
```