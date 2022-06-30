---
title: Threading
description: Do epic things with threads.
---

Threading can be used to do multiple Things simultaneously.
To Create a Thread, just use the Thread statement:

```
var thread <- Thread(someFunctionName);
```

To start a Thread, just call it's StartThread function:
```
thread -> StartThread();
```

To kill a Thread, you can call it's KillThread function:

```
thread -> KillThread();
```

Please keep in mind that when you kill a Thread you can't restart it.