---
title: Variables
description: Just a lot of variables
---

## Variables

Variables are used to store Values for later use.

You can Initialize a Variable like this:

```
var variable <- "something";
```

The Variable made in the example is of Datatype String

If you are not explicitly setting the Datatype, ReCT will figure out itself what Datatype is needed.

You can set the Datatype yourself if you want, by doing:

```
var <datatype> someVar <- <something>
```

so in our Example from earlier it would look like this:

```
var string variable <- "something";
```

You can also create a Variable without initializing it like this:

```
var string myStringVariable;
```

The normal Base Datatypes will just be assigned their default value. Object Variables will be set to null.

## Global variables

If you create a Variable with the 'Var' Keyword, it can only be used in the function it was created.

If you want to use it in other functions, you have to use the 'set' Keyword.
So, making a global Variable would look like this:

```
set variable <- "this is a global var";
```

(the same Datatype setting applies here too)