```
$ ls -al ~/.ssh
total 64
drwx------  10 saurabhkumar  staff   320 Apr  9 23:09 .
drwxr-xr-x+ 61 saurabhkumar  staff  1952 Sep 30 17:16 ..
-rw-r--r--@  1 saurabhkumar  staff   517 Apr  9 23:09 config
-rw-------   1 saurabhkumar  staff  1766 Mar 12  2017 github_rsa
-rw-r--r--   1 saurabhkumar  staff   403 Mar 12  2017 github_rsa.pub
-rw-r--r--   1 saurabhkumar  staff   803 Feb 12  2017 known_hosts
-rw-------   1 saurabhkumar  staff  3326 Apr  9 23:09 saurabhpro-Bitbucket
-rw-r--r--   1 saurabhkumar  staff   783 Apr  9 23:09 saurabhpro-Bitbucket.pub
-rw-------   1 saurabhkumar  staff  3326 Feb 12  2017 saurabhpro-GitHub
-rw-r--r--   1 saurabhkumar  staff   780 Feb 12  2017 saurabhpro-GitHub.pub
```


Saurabhs-MacBook-Air:5_express-basics saurabhkumar$ heroku keys:add
Could not find an existing SSH key at ~/.ssh/id_rsa.pub
? Would you like to generate a new one? Yes
Generating public/private rsa key pair.
Your identification has been saved in /Users/saurabhkumar/.ssh/id_rsa.
Your public key has been saved in /Users/saurabhkumar/.ssh/id_rsa.pub.
The key fingerprint is:
SHA256:VsbqBFrwsO0NYsSbVsCmUOfoSDO21DtpLAW5+dmoiJ0 saurabhkumar@Saurabhs-MacBook-Air.local
The key's randomart image is:
+---[RSA 2048]----+
| ooo*.           |
|..o=+*.  .       |
| B+==+*   +      |
|+=B.*= + +       |
|.ooB= . S        |
|  o+.. +         |
|o...    .        |
|o.E              |
|                 |
+----[SHA256]-----+
Uploading /Users/saurabhkumar/.ssh/id_rsa.pub SSH key... done
Saurabhs-MacBook-Air:5_express-basics saurabhkumar$ ls -al ~/.ssh
total 80
drwx------  12 saurabhkumar  staff   384  1 Oct 12:40 .
drwxr-xr-x+ 62 saurabhkumar  staff  1984  1 Oct 12:37 ..
-rw-r--r--@  1 saurabhkumar  staff   517  9 Apr 23:09 config
-rw-------   1 saurabhkumar  staff  1766 12 Mar  2017 github_rsa
-rw-r--r--   1 saurabhkumar  staff   403 12 Mar  2017 github_rsa.pub
-rw-------   1 saurabhkumar  staff  1675  1 Oct 12:40 id_rsa
-rw-r--r--   1 saurabhkumar  staff   421  1 Oct 12:40 id_rsa.pub
-rw-r--r--   1 saurabhkumar  staff   803 12 Feb  2017 known_hosts
-rw-------   1 saurabhkumar  staff  3326  9 Apr 23:09 saurabhpro-Bitbucket
-rw-r--r--   1 saurabhkumar  staff   783  9 Apr 23:09 saurabhpro-Bitbucket.pub
-rw-------   1 saurabhkumar  staff  3326 12 Feb  2017 saurabhpro-GitHub
-rw-r--r--   1 saurabhkumar  staff   780 12 Feb  2017 saurabhpro-GitHub.pub
Saurabhs-MacBook-Air:5_express-basics saurabhkumar$ eval "$(ssh agent -s)"
You must specify a subsystem to invoke.
usage: ssh [-1246AaCfGgKkMNnqsTtVvXxYy] [-b bind_address] [-c cipher_spec]
           [-D [bind_address:]port] [-E log_file] [-e escape_char]
           [-F configfile] [-I pkcs11] [-i identity_file]
           [-J [user@]host[:port]] [-L address] [-l login_name] [-m mac_spec]
           [-O ctl_cmd] [-o option] [-p port] [-Q query_option] [-R address]
           [-S ctl_path] [-W host:port] [-w local_tun[:remote_tun]]
           [user@]hostname [command]
Saurabhs-MacBook-Air:5_express-basics saurabhkumar$ eval "$(ssh-agent -s)"
Agent pid 60525
Saurabhs-MacBook-Air:5_express-basics saurabhkumar$ ssh-add ~/.ssh/id_rsa
Identity added: /Users/saurabhkumar/.ssh/id_rsa (/Users/saurabhkumar/.ssh/id_rsa)
Saurabhs-MacBook-Air:5_express-basics saurabhkumar$ pbcopy < ~/.ssh/id_rsa.pub
Saurabhs-MacBook-Air:5_express-basics saurabhkumar$ ssh -T git@github.com
Hi saurabhpro! You've successfully authenticated, but GitHub does not provide shell access.
Saurabhs-MacBook-Air:5_express-basics saurabhkumar$ heroku keys

Saurabhs-MacBook-Air:5_express-basics saurabhkumar$ ssh -v git@heroku.com
OpenSSH_7.5p1, LibreSSL 2.5.4
debug1: Reading configuration data /Users/saurabhkumar/.ssh/config
debug1: Reading configuration data /etc/ssh/ssh_config
debug1: /etc/ssh/ssh_config line 52: Applying options for *
debug1: Connecting to heroku.com [50.19.85.154] port 22.
debug1: Connection established.
debug1: identity file /Users/saurabhkumar/.ssh/id_rsa type 1
debug1: key_load_public: No such file or directory
debug1: identity file /Users/saurabhkumar/.ssh/id_rsa-cert type -1
debug1: key_load_public: No such file or directory
debug1: identity file /Users/saurabhkumar/.ssh/id_dsa type -1
debug1: key_load_public: No such file or directory
debug1: identity file /Users/saurabhkumar/.ssh/id_dsa-cert type -1
debug1: key_load_public: No such file or directory
debug1: identity file /Users/saurabhkumar/.ssh/id_ecdsa type -1
debug1: key_load_public: No such file or directory
debug1: identity file /Users/saurabhkumar/.ssh/id_ecdsa-cert type -1
debug1: key_load_public: No such file or directory
debug1: identity file /Users/saurabhkumar/.ssh/id_ed25519 type -1
debug1: key_load_public: No such file or directory
debug1: identity file /Users/saurabhkumar/.ssh/id_ed25519-cert type -1
debug1: Enabling compatibility mode for protocol 2.0
debug1: Local version string SSH-2.0-OpenSSH_7.5
debug1: Remote protocol version 2.0, remote software version endosome
debug1: no match: endosome
debug1: Authenticating to heroku.com:22 as 'git'
debug1: SSH2_MSG_KEXINIT sent
debug1: SSH2_MSG_KEXINIT received
debug1: kex: algorithm: curve25519-sha256@libssh.org
debug1: kex: host key algorithm: ssh-rsa
debug1: kex: server->client cipher: aes128-ctr MAC: hmac-sha2-256-etm@openssh.com compression: none
debug1: kex: client->server cipher: aes128-ctr MAC: hmac-sha2-256-etm@openssh.com compression: none
debug1: expecting SSH2_MSG_KEX_ECDH_REPLY
debug1: Server host key: ssh-rsa SHA256:8tF0wX2WquK45aGKs/Bh1dKmBXH08vxUe0VCJJWOA/o
The authenticity of host 'heroku.com (50.19.85.154)' can't be established.
RSA key fingerprint is SHA256:8tF0wX2WquK45aGKs/Bh1dKmBXH08vxUe0VCJJWOA/o.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'heroku.com,50.19.85.154' (RSA) to the list of known hosts.
debug1: rekey after 4294967296 blocks
debug1: SSH2_MSG_NEWKEYS sent
debug1: expecting SSH2_MSG_NEWKEYS
debug1: SSH2_MSG_NEWKEYS received
debug1: rekey after 4294967296 blocks
debug1: SSH2_MSG_SERVICE_ACCEPT received
debug1: Authentications that can continue: publickey
debug1: Next authentication method: publickey
debug1: Offering RSA public key: /Users/saurabhkumar/.ssh/id_rsa
debug1: Server accepts key: pkalg ssh-rsa blen 279
debug1: Authentication succeeded (publickey).
Authenticated to heroku.com ([50.19.85.154]:22).
debug1: channel 0: new [client-session]
debug1: Entering interactive session.
debug1: pledge: network
debug1: Sending environment.
debug1: Sending env LANG = en_GB.UTF-8
PTY allocation request failed on channel 0
shell request failed on channel 0
Saurabhs-MacBook-Air:5_express-basics saurabhkumar$
        new file:   node_modules/source-map/build/prefix-utils.jsm