---
title: Accessing objects
description: How to access objects in your code.
---

You can Access public Functions and Variables inside objects by using "->".
(You can also access Datatype Typefunctions)

If you want to Access a Variable, you can do something like this:

```
someString->GetLength()
```

This also works for expressions and Array items, here are a few examples:

```
"a string" + "some other"->GetLength()
someStringArray[0]->GetLength()
```