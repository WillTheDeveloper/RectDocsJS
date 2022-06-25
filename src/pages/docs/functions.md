---
title: Functions
description: Create all the functions you want.
---

Functions are a way to block off code and re-use it.

Functions can have Parameters and can also return objects.

---

## Basic principal

Declaring a Function could look like this:

```
function someFunc() { ... }
```

To add Parameters, you can just put them inside the parentheses and specify a Datatype:

```
function someFunc(someParam string, someOtherParam int) { ... }
```

To specify a return Type, just add a Datatype after the parentheses:

```
function someFunc() string { ... }
```

{% callout title="ReCT v2.2 changes" %}
Since ReCT v2.2 the Type-Arrow (->) is no longer required but is still accepted meaning both these ways are valid:

```
function newWay(someParam string) int { ... }
```

```
function oldWay(someParam -> string) -> int { ... }
```

{% /callout %}

## Calling a function

Calling a Function is pretty easy.

Just write the Function's name and some parentheses after it, and if you have Parameters set you will have to put them in there.

```
someFunc()
someFuncWithParams("this is an parameter", 123)
```

## Static function

When the Class the Function is in is static, the Function will automatically be static as well.

## Public functions

You can make a Function public, by adding the 'set' keyword when declaring it:

```
set function globalFunction () { ... }
```

If you want to access a Function from another Class, it needs to be public!

## Virtual functions

Virtual Functions are Functions that can be defined in Abstract Classes and can be overwritten in Inheriting Classes.
A Functions can be made virtual by using the "virt" keyword.

```
virt function someVirtualFunction() { ... }
```

You can find more info on overwriting on the Inheriting Classes Docs Article.