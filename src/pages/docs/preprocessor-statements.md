---
title: Preprocessor Statements
description: How to use preprocessor statements in your code
---

Preprocessor Statements (originally called "IDE Flags") are things the Compiler takes care of before doing the actual compilation.
Things like:

- attach other files with ```#attach("")```
- copy files to the output directory with ```#copy("")```
- copy folders to the output directory with ```#copyFolder("")```

(NOTE: If the path given in ```#copy``` or ```#copyFolder``` is not rooted it will use the /Packages directory as a root. ```#copy``` and ```#copyFolder``` also support using the current working directory by using the ```$CWD``` placeholder like this ```#copy("$CWD/path/to/file")```)