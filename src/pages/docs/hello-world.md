---
title: Hello world
description: Small example project!
---

Basic little program to get started with ReCT.

---

"Hello World" is the standard, first thing, you do in every language when starting out.
So let's take a look at how it works in ReCT.

We want to Print something to the Console, so for that we will need the Sys Package.
You can add it by doing:

```
package sys;
```

For convenience, you can also Use a package. I am going to do that here:

```
Print("Hello World!");
```

And there we go! That is our Hello World program! We can spice it up by having our user Type in something, so let's make the program ask for their name and then tell them Hello.
We can get User Input by using the Input Function that is also inside the Sys Package, and store it inside a Variable:

```
package sys; use sys;

Print("Whats your name?");
var name <- Input();
Print("Hello " + name + "!");
```