---
title: Packages
description: How you can use packages in your code.
---

Packages are .NET Assemblies that ReCT can read and use.
There are a lot of System Packages you can, use but it is also possible to make your own Packages in any .NET compatible language. (More about that Here)

---

## Adding a package

To add a Package to your Project, just use the 'package' statement
Adding a Package could look like this:

```
package sys;
```

Now that you have added a Package, you can access the things inside it by calling it's Namespace.
For example:

```
sys::Print("Hello World!");
```

## 'Use'-ing a package

By 'Use'-ing a package you don't need to call it's Namespace when accessing it. You can use a Package by using the 'use' statement as shown below.

```
package sys; use sys;
```

Now when we go back to the example from earlier, we dont have to call it's namespace:

```
Print("Hello World!");
```

## 'Alias'-ing a package

By aliasing a Package you are able to add another name for the same package. This is useful for packages with long inconvinient names. The reason you would do something like this instead of just "Use"-ing the package is to keep your project Organised.

As an example: a Package written by me with the slightly inconvinient name "DownloadPlusPlus".

```
package dll DownloadPlusPlus; alias DownloadPlusPlus dpp;
```

Now we can address the package by using our shortened name:

```
var dl <- make dpp::Downloader();
```

## Custom packages

Custom Packages can be made in any .NET compatible Language.
The Important thing is that the Module, Namespace and Class names need to be the same and, probably should be the Package name. Also, the class needs to be public and static.

{% callout title="This is not C# code!" %}
This is just for visualizing the Structure things need to be in!
{% /callout %}

The Structure of a package would look something like this:

```
module samplePackage
{
  namespace samplePackage
  {
    public static class samplePackage
    {
      //package code here
    }
  }
}
```

ReCT will read out Functions and Classes, as long as they are public (That also applies to functions and fields inside of classes), and ReCT will not read out Fields in the main Package class! If you want ReCT to be able to access them, you will need to use "{Get; Set}".

### Adding a custom package

To add a Custom Package, just use the 'package dll' statement followed by the Package's name. (Not filename!)

```
package dll samplePackage;
```

The syntax for 'Use'-ing a Custom Package is the same as for a normal Package.

## C. Packages in ReCT

You are actually able to create Custom Packages in ReCT itself.

You can set a Type (class) and Namespace name with the "type" and "namespace" statements. (NOTE: Just like in any other dotnet language are only public functions accessable from within rect.)

A package made in ReCT could look like this:
```
package sys; use sys;
type examplePack;
namespace examplePack;

set function testFunc()
{
  Print("Test Function");
}
```

When building make sure that the filetype is set to "Assembly (.dll)", and that the filename is the same as the type and namespace name!

If you want to also add Classes to your Package make sure that they are Included by using the "inc" Keyword.

```
inc class classInMyPackage { ... }
set inc class staticClassInMyPackage { ... }
```