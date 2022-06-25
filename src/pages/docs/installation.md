---
title: Installation
description: Simple guide on how to get started with ReCT.
---

Quasi sapiente voluptates aut minima non doloribus similique quisquam. In quo expedita ipsum nostrum corrupti incidunt. Et aut eligendi ea perferendis.

---

## Getting started on Windows

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.

### Using the package

On Windows, RCTC can be installed and updated using the ReCTManager tool.

```cmd
ReCTManager.exe install <directory>
```

Updates can be installed by running ReCTManager in the install directory:

```cmd
RectManager.exe update
```

(you can find more info by running ReCTManager with the -h flag)

---

## Getting started on Arch

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.

### Really easy!

On Arch, RCTC can be installed and updated from the AUR using, for example, pamac.

```cmd
pamac build rctc
```

---

## Getting started on Debian

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur.

### From Git

On Debian, RCTC can be installed from the MPR. At the time of writing this there isnt a fully featured MPR helper yet but you can install the package manually.

```git
git clone https://mpr.hunterwittenborn.com/rctc.git
```

In the cloned directory, run makedeb:

```cmd
makedeb -s
```

And then finally, install the package using dpkg:

```cmd
dpkg -i <package file>
```