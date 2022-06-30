---
title: Operators
description: How to use operators in your code.
---

ReCTs supported binary operators (in order of priority) are:

```
*, /
+, -, %
=, !=, >, <, >=, <=, >>, <<
&, &&
|, ||, ^
```

ReCTs supported unary operators are:

```
+, -, !, ~
```

## Editors

ReCT supports the following Variable-Editors:

```
++, --
<-+, <--, <-*, <-/
```

## Ternary Operator

The Ternary Operator can be seen as a shortened If Statement that picks a value based on a Condition
A Ternary Operation in ReCT is structured in a similar way to the C# Ternary Operation:

```
condition ? aValue : anotherValue
```

An actual example of this might look something like this:

```
var DayNightText <- isDay = true ? "It is daytime!" : "Seems to be nighttime"
```

## Is Operator

The Is Operator exists to check if an Instance of an Abstract Class is of a certain Inheriting Classes type.
For example: Image you have an Array of type "someAbstractClass" that holds instances of both "someInheritingClass" and "someOtherInheritingClass" the Is Operator is how you can tell them apart:

```
var instances <- make someAbstractClass array(100);

from (i <- 0) to instances->GetLength() - 1
{
  if (instances[i] is someInheritingClass)
    // do something
  else if (instances[i] is someOtherInheritingClass)
    // do something else
}
```