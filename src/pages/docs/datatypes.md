---
title: Data types
description: Work in progress
---

Datatypes exist to set the Type of Data you are / want to be working with.


Every Variable has a Datatype, which sets what kind of data it can store.

There are a lot of different Datatypes, for example String for text, or Int for whole numbers.

You can also convert between Datatypes by using a Cast.

---

## Any

"Any" just describes an Object.

It can be set to any of the other Datatypes, and can also be converted back to the Original by using a Cast.

When initializing a Variable as any, you will need to specify the Datatype or else it will automatically choose the literals actual type.

```
var any someObject <- "this is a string in an object var";
```

## Bool

Bool (short for boolean) is the simplest of all Datatypes.

It can only store 2 states, True of False, which are basically "On" or "Off".

Initializing a Variable as a Bool would look like this:

```
var someVar <- true;
```

## Int

Int (short for Integer) describes a whole number, without decimals.

An Integer can store a number that can reach from -2147483647 to 2147483647.

Initializing a Variable as an int would look like this:

```
var someInt <- 1;
```

## String

String describes a string of characters.

You can store any kind of text in it.

### GetLength()

GetLength() returns the String's length as an Int.

### Substring()

Substring() makes a Substring from the current String. It will start at the given starting index and go on for the given Length.

### Split()

Split() will Split the string at any points where the given splitter is at and return a String Array.

### Replace()

Replace() will replace all instances of the given string with the replacement and returns a new String instead of altering the existing one.

### At(index int)

At() will return the Character at the given position as a single character string.

## Float

Float (short for Floating-point Number) describes a number with a decimal point.

One thing to mention is Floating point jitter. It happens with big Float numbers, when there aren't enough Bits left for the part after the Decimal point, making it lose precision.

Initializing a Float Variable would look like this:

```
var someFloat <- 1.5;
```

## Byte

Byte describes a whole number that takes up 8 bits.

Its very similar to an int but it only ranges from 0 to 255, that also means it takes up less memory.

Initializing a Variable as a byte would look like this:

(Important! Because Int and Byte share the same literal type you will need to explicitely specify that you want the byte Datatype!)

```
var byte someByte <- 255;
```

### GetBit()

GetBit() returns the bit in the byte at the given position as an Int.

### SetBit()

SetBit() will set the bit in the byte at the given position to the given value.

## Array data types

Arrays are a datatype which can hold multiple instances of it's base type.

For example, a string Array can hold multiple strings.

The name of an ArrayType is always the base type + 'Arr', so in case of a string array it would be "stringArr".

You can create an Array like this:

```
var someArray <- make string array(5);
```

The number in parentheses is setting the Length of the array.

You can also create an Array by using an Array-Literal, like this:

```
var someArray <- make string array {"this", "is", "an", "array", "literal"};
```

To access an Array simply put the wanted index in square brackets behind it:

```
someArray[0]
```

### GetLength()

GetLength() returns the Array's length as an Int.

### Push()

Push() adds the given Object to the end of the Array.

### Pop()

Pop() returns the last element of the Array and removes it from the collection.

### At()

At() returns the element at the given index. This is just a different form of the classic [] access.