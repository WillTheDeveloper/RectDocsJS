---
title: Classes
description: AAAAAAAAAA
---

Classes are a way of structuring your Code in an Object Oriented style. They can contain Functions and Variables, and can either be Dynamic, Static or Abstract.

A Class Declaration could look like this:

```
class someClass {..}
```

Public Variables in Classes need to be declared as global statements (not in any function), heres an example:

```
class someClass
{
  set myPublicVar <- 0;
  set string anotherPublicVar;
}
```

## Constructors

Constructors are Functions that get run when the Object is created.

A Constructor could look like this:

```
function Constructor()
{
  ... code that will be run on creation ...
}
```

To create an object using the Constructor, use the 'make' statement:

```
var myObj <- make someClass(arguments);
```

## Static classes

Classes can be made static by adding the 'set' Keyword when declaring the class:

```
set class someClass { ... }
```

### Accessing a Static Class

You can access a Static Class the same way you would Access an object.

But instead of a Variable, you use a Class name:

```
Class -> function();
```

## Included classes

By default, all Classes made in a Script are seperate from the Main class.
If you want a class to be nested inside the Main class just use the "inc" keyword.

```
inc class someNestedClass { ... }
```

This also works for static classes.

```
set inc class someStaticNestedClass { ... }
```

This is useful for creating Custom Packages in ReCT when you want to include Classes in your Package.

## Serializable classes

Classes can be made Serializable with the "ser" keyword. Serializable classes are useful when interfacing with other dotnet applications.
Being serializable allows an instance of a class to be easely turned into binary information to be sent or stored.

```
ser class SerializableClass { ... }
```

## Abstract classes

Abstract Classes can be seen as a kind of blueprint that other Classes can be created from. Abstract Classes themselves cant be instantiated.
An Abstract Class can be created with the "abs" keyword:

```
abs class AnAbstractClass { ... }
```

Like any other Class, Abstract Classes can also have Constructors and Variables.
Abstract Classes get a lot more interesting when considering Virtual Functions and Virtual Variables that can be overwritten by Inherating Classes.

## Inheriting classes

Inheriting Classes are Classes that use an Abstract Class as a "blueprint". A Class can inherit from an Abstract class by including the name of the Abstract Class after the classname in parenthesis.
Heres an example:

```
class someInheritingClass (someAbstractClass) { ... }
```

Virtual Functions and Variables registered in the base-class will automatically be available in this Class as well, they are also able to be overwritten.

### Sidenote: Constructors

If youre using Constructors in your Classes you will have to call your base-class' Constructor inside your Constructor. This can be done with the "base" statement. And should (preferably) be done as the first action inside the Constructor.

```
abs class someAbstractClass
{
  function Constructor() { ... }
}

class someInheritingClass (someAbstractClass)
{
  function Constructor()
  {
    base();
    ..
  }
}
```

### Overwrting virtual functions

Now finally we get to the cool part: overwriting! Overwriting in ReCT is super simple, just use the "ovr" keyword like in this example:

```
abs class someAbstractClass
{
  virt set someVariable <- "some Value";
  virt set function someFunction() { ... }
}

class someInheritingClass (someAbstractClass)
{
  ovr set someVariable <- "some different Value";
  ovr set function someFunction { ... different code ... }
}
```