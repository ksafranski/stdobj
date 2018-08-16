# STDOBJ

Fast, small, dependency-free lib for common work with object literals.

## Installation

```
yarn add stdobj
# ...or...
npm i stdobj
```

## Usage

`stdobj` provides a number of methods which can be destructured and used
in code. Below is a list of the supported methods:

* [`isObj`](#isobj) - Checks if parameter passed is an object literal
* [`keys`](#keys) - Retruns array of keys from object
* [`toPairs`](#topairs) - Converts object to array of key-value pair arrays
* [`fromPairs`](#frompairs) - Converts array of key-value pairs to object
* [`get`](#get) - Gets a value using standard or dot-notated key
* [`set`](#set) - Sets a value using standard or dot-notated key
* [`flatten`](#flatten) - Flattens object to dot-notated key-value object
* [`expand`](#expand) - Expands a flattened, dot-notated object to nested object
* [`redact`](#redact) - Redacts keys or values on an object literal
* [`merge`](#merge) - Performs a deep merge on object parameter(s)

### isObj

> [`isObj(<*>)`](https://github.com/Fluidbyte/stdobj/blob/master/lib/isObj.js) - Checks if parameter passed is an object literal

```javascript
const obj = { foo: 'bar' }
const notObj = 42

isObj(obj) // -> true
isObj(notObj) // -> false
```

### keys

> [`keys(<Object>)`](https://github.com/Fluidbyte/stdobj/blob/master/lib/keys.js) - Retruns array of keys from object

```javascript
const obj = { foo: 'bar', fizz: 'buzz' }

keys(obj) // -> [ 'foo', 'fizz' ]
```

### toPairs

> [`toPairs(<Object>)`](https://github.com/Fluidbyte/stdobj/blob/master/lib/toPairs.js) - Converts object to array of key-value pair arrays

```javascript
const obj = { foo: 'bar', fizz: 'buzz' }

toPairs(obj) // -> [ [ 'foo', 'bar' ], [ 'fizz', 'buzz' ] ]
```

### fromPairs

> [`fromPairs(<Array>)`](https://github.com/Fluidbyte/stdobj/blob/master/lib/fromPairs.js) - Converts array of key-value pairs to object

```javascript
const pairs = [ [ 'foo', 'bar' ], [ 'fizz', 'buzz' ] ]

fromPairs(pairs) // -> { foo: 'bar', fizz: 'buzz' }
```

### get

> [`get(<String>)`](https://github.com/Fluidbyte/stdobj/blob/master/lib/get.js) - Gets a value using standard or dot-notated key

```javascript
const obj = {
  foo: 'bar',
  fizz: {
    buzz: 'bizz'
  }
}

get('foo') // -> 'bar'
get('fizz.buzz') // -> 'bizz'
```

### set

> [`set(Obj<Object>, Key<String>, Value<*>)`](https://github.com/Fluidbyte/stdobj/blob/master/lib/set.js) - Sets a value using standard or dot-notated key

```javascript
const obj = {}

set(obj, 'foo.bar', 'fizz') // obj = { foo: { bar: 'fizz' } }
```

### flatten

> [`flatten(<Object>)`](https://github.com/Fluidbyte/stdobj/blob/master/lib/flatten.js) - Flattens object to dot-notated key-value object

```javascript
const obj = {
  foo: 'bar',
  fizz: {
    buzz: 'bizz'
  }
}

flatten(obj) // -> { foo: 'bar', 'fizz.buzz': 'bizz' }
```

### expand

> [`expand(<Object>)`](https://github.com/Fluidbyte/stdobj/blob/master/lib/expand.js) - Expands a flattened, dot-notated object to nested object

```javascript
const flatObj = { foo: 'bar', 'fizz.buzz': 'bizz' }

expand(flatObj) // -> { foo: 'bar', fizz: { buzz: 'bizz' } }
```

### redact

> [`redact(Obj<Object>, <Object{keys<Array>, values<Array>}>`](https://github.com/Fluidbyte/stdobj/blob/master/lib/redact.js) - Redacts keys or values on an object literal

```javascript
const obj = {
  foo: 'bar',
  quz: 'baz',
  fizz: {
    buzz: 'fizz',
    bizz: 'fuzz'
  }
}

redact(obj, { keys: [ 'fizz.bizz' ], values: [ 'baz' ] }) // -> { foo: 'bar', fizz: { buzz: 'fizz' } }
```

_Note: for arrays, you can specify the index explicity: `foo.bar[1]...` or specify
that all keys be affected during redaction with `n`; `foo.bar[n]...`. This is useful for 
picking off properties of object nested in arrays_

### merge

> [`merge(...<Object>)`](https://github.com/Fluidbyte/stdobj/blob/master/lib/merge.js) - Performs a deep merge on object parameter(s)

```javascript
const objOne = { foo: 'bar' }
const objTwo = { fizz: { buzz: 'fizz' } }

merge(objOne, objTwo) // -> { foo: 'bar', fizz: { buzz: 'fizz' } }
```
