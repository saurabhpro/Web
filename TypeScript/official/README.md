The idea way to run this ts program is to 
1. `command + shift + p` -> choose  `tasks: run tasks`
2. this will take `tasks.json` and compile a .js for your ts file
3. make an html and use that js for your browser.

This is only for your testing without server type codes, else browesersync is there for you.


# Relative vs. Non-relative module imports

Module imports are resolved differently based on whether the module reference is relative or non-relative.

A relative import is one that starts with /, ./ or ../. Some examples include:
```ts
import Entry from "./components/Entry";
import { DefaultHeaders } from "../constants/http";
import "/mod";
```
Any other import is considered non-relative. Some examples include:
```ts
import * as $ from "jquery";
import { Component } from "@angular/core";
```
A relative import is resolved relative to the importing file and cannot resolve to an ambient module declaration. You should use relative imports for your own modules that are guaranteed to maintain their relative location at runtime.

A non-relative import can be resolved relative to `baseUrl`, or through path mapping, which we’ll cover below. They can also resolve to ambient module declarations. Use non-relative paths when importing any of your external dependencies.

