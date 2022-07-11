---
title: Setting up a project
description: How to setup a project
---

The ReCT Compiler has built-in project support. They aren't necessary, but useful for bigger works and keeping them organized.

To make a new project, just open a terminal and type:

```shell
rctc create projectName
```

If you want it to create the project in a new directory just use the "-n" option:

```shell
rctc create projectName -n
```

And finally if you want rctc to generate some vscode task files as well just use the "-v" or "--vscode" option:

```shell
rctc create projectName -n --vscode
```

To run a project just use the "rctc run" command in the projects directory.

```shell
rctc run
```

## Compiling without a project

When coding in ReCT you sometimes dont want to use a project. In that case you can build your program the old fashioned way.
Call the rctc command followed by your source file and the "-s" and "-f" flags. The "-s" flag will auto-reference all standard Dotnet Assemblies, the "-f" flag will evaluate preprocessor statements like "#attach".

```shell
rctc ./sourcefile.rct -s -f
```

You can also set an output file. This is optional and by default it will just choose the source file's name with the ending ".dll".

```shell
rctc ./sourcefile.rct -s -f -o ./outputfile.dll
```

You can find more info on the Compilers help page when doing:

```shell
rctc -h
```