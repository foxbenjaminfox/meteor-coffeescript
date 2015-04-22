# coffeescript

[CoffeeScript](http://coffeescript.org/) is a little language that
compiles into JavaScript. It provides a simple syntax without lots of
braces and parentheses.  The code compiles one-to-one into the
equivalent JS, and there is no interpretation at runtime.

CoffeeScript is supported on both the client and the server. Files
ending with `.coffee`, `.litcoffee`, or `.coffee.md` are automatically
compiled to JavaScript.

This is a fork of the core Meteor `coffeescript` package. As the per the [Meteor wiki](https://github.com/meteor/meteor/wiki/Contributing-to-Meteor#adding-new-packages-to-meteor):

> For historical reasons, some packages that really ought to be in Atmosphere are currently in core, like `less` and `coffeescript`.

The goal of this fork is to fix this problem by moving the `coffeescript` package out of core, allowing the community to build on it without having to go through the Meteor release cycle.

### Unwrapped helpers and events

Inspired by the `mquandalle:jade` package, `coffee:script` allows you to keep each template's events and helpers in their own files while avoiding boilerplate.

Just as `mquandalle:jade` let's you [define your templates unwrapped](https://github.com/mquandalle/meteor-jade#unwrapped-templates) using `.tpl.jade` files, `coffee:script` lets you do the same with events and helpers in `.events.coffee` and `.helpers.coffee` files, respectively.

Without this feature, you'd have to wrap your template's helpers and events in `Template.<name>.events ->` or `Template.<name>.helpers ->` blocks, thus repeating yourself and adding needless boilerplate to your code. But using `coffee:script`, if you save your helpers object in a file called `<name>.helpers.coffee`, that bit of boilerplate will be handled for you. This allows you to follow the "don't repeat yourself" (DRY) philosophy in the same way you may have gotten used to while using `mquandalle:jade`.

### Namespacing and CoffeeScript

Here's how CoffeeScript works with Meteor's namespacing.

* Per the usual CoffeeScript convention, CoffeeScript variables are
  file-scoped by default (visible only in the `.coffee` file where
  they are defined.)

* When writing a package, CoffeeScript-defined variables can be
  exported like any other variable (see [Writing
  Packages](#writingpackages)). Exporting a variable pulls it up to
  package scope, meaning that it will be visible to all of the code in
  your app or package (both `.js` and `.coffee` files).

* Package-scope variables declared in `.js` files are visible in any
  `.coffee` files in the same app or project.

* There is no way to make a package-scope variable from a `.coffee`
  file other than exporting it. We couldn't figure out a way to make
  this fit naturally inside the CoffeeScript language. If you want to
  use package-scope variables with CoffeeScript, one way is to make a
  short `.js` file that declares all of your package-scope
  variables. They can then be read, mutated, and extended in `.coffee`
  files.

* If you want to share variables between `.coffee` files in the same
  package, and don't want to separately declare them in a `.js` file,
  we have an experimental feature that you may like. An object called
  `share` is visible in CoffeeScript code and is shared across all
  `.coffee` files in the same package. So, you can write `share.foo`
  for a value that is shared between all CoffeeScript code in a
  package, but doesn't escape that package.

Heavy CoffeeScript users, please let us know how this arrangement
works for you, whether `share` is helpful for you, and anything else
you'd like to see changed.
