---
title: Lambda
description: How to use lambdas in your code.
---

ReCTs Lambda is what you would also know as "Anonymous Functions" rather than Lambda Calculus. They are Functions that arent assigned to a symbol, but rather create an Object of type "action" that can be stored in Variables.

```
var someLambda <- lambda {
  ... function code ...
}
```

You can also convert an existing function into an action by using the "Action" statement:

```
var someAction <- Action(someFunction);
```

To run the Function you simply call the varibles ->Run() typefunction:

```
someLambda->Run();
someAction->Run();
```

(NOTE: Because Lambda functions exist in their own space they can only interact with global data)