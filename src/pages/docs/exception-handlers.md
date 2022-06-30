---
title: Exception handlers
description: How to use exception handlers in your code.
---

Exception handlers (also known as Try-Catch Blocks) are a way of failsafing code. If an error occours inside a Try Block, the program wont crash but simple skip to the Catch Block.
Heres an example for an Exception Handler:

```
try
{
  ... some code that might crash ...
}
catch
{
  ... code that will be run in case of a crash ...
}
```

These are especially useful when doing TCP Networking because the only way to detect a TCP Client or Server disconnecting is through an Exception being thrown.