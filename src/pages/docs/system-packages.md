---
title: System packages
description: Add extra system packages to your application.
---

System Packages are Packages that are built into ReCT.

Some examples of these system Packages are sys and net.

---

## Sys

Include this Package with:

```
package sys;
```

#### Print()

Print will Write a message out to the Console, and go to the next line.

#### Write()

Write will Write a message out to the Console and will stay on the same line.

#### Input()

Will let the user type a line, and return it as a String.

#### InputKey()

Will let the user type a character and return it as a String.

#### InputAction()

Will let the user type a character, but without showing it in the console and return it as a String.

#### Read()

Will read from the raw console standard input stream character by character and return the char as an int.

#### Clear()

Clears all text from the Console.

#### Sleep()

Will pause the Thread for the given amount of Milliseconds.

#### Beep()

Plays the given Frequency for the given amount of Time, using the Console's beeper.

#### Char()

Will return the Character corresponding to the given ASCII code as a String.

#### Arg()

Will return the commandline argument at the given index as a string. (NOTE: the first argument is always the path of the executable)

#### Args()

Will return all commandline arguments as a string array.

#### SetSize()

SetSize will set the Size of the Console window to the given Width and Height. (Please note that the inputs are in Characters, not Pixels)

#### GetSizeX()

Will get the Width of the Console in Characters and return it as an Int.

#### GetSizeY()

Will get the Height of the Console in Characters and return it as an Int.

#### SetCursor()

Sets the Console's Cursor to the given Position.

#### GetCursorX()

Will get the X coordinate of the Console's Cursor.

#### GetCursorY()

Will get the Y coordinate of the Console's Cursor.

#### SetCursorVisible()

Sets the Console's Cursor visibility.

#### GetCursorVisible()

Gets the Console's Cursor visibility and returns it as a Bool.

#### SetConsoleForeground()

Sets the Console's Foreground color.

#### SetConsoleBackground()

Sets the Console's Background color.

#### Rect Colour table

Rect has 16 colours ranging from 0 to 15.

![Image](https://docs.rect.ml/static/images/colorTable.png)

#### LaunchApplication()

Will launch the application at the given path in a separate process.

#### LaunchApplicationWithArgs()

Will launch the application at the given path with the given arguments in a separate process. If the wait bool is set, the program will be paused until the process finishes.

#### LaunchApplicationWithOutput()

Will launch the application at the given path with the given arguments in a separate process and will wait until it is done, after that it returns the processes output as a string.
