---
title: Enums
description: How to use enums in your code.
---

Enums are a way of assigning meaning to Integers by giving them labels.
Heres an example for an Enum:

```
enum MyEnum
{
  anEnumMember,
  anotherEnumMember
}
```

You can also specifically set the Value of the labels:

```
enum MyOtherEnum
{
  anEnumMember <- 100,
  anotherEnumMember <- 200
}
```

These 2 styles can also be mixed:

```
enum MyOthererEnum
{
  anEnumMember,               // 0
  anotherEnumMember,          // 1
  yetAnotherEnumMember <- 20, // 20
  evenAnothererEnumMember,    // 21
}
```

To access an enum value, simply use a normal Object Access

```
MyEnum->anEnumMember
```

Just like Classes, Enums create their own Datatypes, meaning you can have an enum variable that stores an Enum state:

```
var MyEnum enumVar;
enumVar <- MyEnum->anEnumMember;
```