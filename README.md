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

> [`isObj(<*>)`](#isObj) - Checks if parameter passed is an object literal

```javascript
const obj = { foo: 'bar' }
const notObj = 42

isObj(obj) // -> true
isObj(notObj) // -> false
```

### keys

> [`keys(<Object>)`](#keys) - Retruns array of keys from object

```javascript
const obj = { foo: 'bar', fizz: 'buzz' }

keys(obj) // -> [ 'foo', 'fizz' ]
```

### toPairs

> [`toPairs(<Object>)`](#toPairs) - Converts object to array of key-value pair arrays

```javascript
const obj = { foo: 'bar', fizz: 'buzz' }

toPairs(obj) // -> [ [ 'foo', 'bar' ], [ 'fizz', 'buzz' ] ]
```

### fromPairs

> [`fromPairs(<Array>)`](#fromPairs) - Converts array of key-value pairs to object

```javascript
const pairs = [ [ 'foo', 'bar' ], [ 'fizz', 'buzz' ] ]

fromPairs(pairs) // -> { foo: 'bar', fizz: 'buzz' }
```

### get

> [`get(<String>)`](#get) - Gets a value using standard or dot-notated key

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

> [`set(Obj<Object>, Key<String>, Value<*>)`](#set) - Sets a value using standard or dot-notated key

```javascript
const obj = {}

set(obj, 'foo.bar', 'fizz') // obj = { foo: { bar: 'fizz' } }
```

### flatten

> [`flatten(<Object>)`](#flatten) - Flattens object to dot-notated key-value object

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

> [`expand(<Object>)`](#expand) - Expands a flattened, dot-notated object to nested object

```javascript
const flatObj = { foo: 'bar', 'fizz.buzz': 'bizz' }

expand(flatObj) // -> { foo: 'bar', fizz: { buzz: 'bizz' } }
```

### redact

> [`redact(Obj<Object>, <Object{keys<Array>, values<Array>}>`](#redact) - Redacts keys or values on an object literal

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

### merge

> [`merge(...<Object>)`](#merge) - Performs a deep merge on object parameter(s)

```javascript
const objOne = { foo: 'bar' }
const objTwo = { fizz: { buzz: 'fizz' } }

merge(objOne, objTwo) // -> { foo: 'bar', fizz: { buzz: 'fizz' } }
```
