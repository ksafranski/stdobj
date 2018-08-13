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

* [`isObj`](#isObj) - Checks if parameter passed is an object literal
* [`keys`](#keys) - Retruns array of keys from object
* [`toPairs`](#toPairs) - Converts object to array of key-value pair arrays
* [`fromPairs`](#fromPairs) - Converts array of key-value pairs to object
* [`get`](#get) - Gets a value using standard or dot-notated key
* [`set`](#set) - Sets a value using standard or dot-notated key
* [`flatten`](#flatten) - Flattens object to dot-notated key-value object
* [`expand`](#expand) - Expands a flattened, dot-notated object to nested object
* [`redact`](#redact) - Redacts keys or values on an object literal
* [`merge`](#merge) - Performs a deep merge on object parameter(s)

### `isObj(<*>)` - Checks if parameter passed is an object literal

### `keys(<Object>)` - Retruns array of keys from object

### `toPairs(<Object>)` - Converts object to array of key-value pair arrays

### `fromPairs(<Array>)` - Converts array of key-value pairs to object

### `get(<String>)` - Gets a value using standard or dot-notated key

### `set(Obj<Object>, Key<String>, Value<*>)` - Sets a value using standard or dot-notated key

### `flatten(<Object>)` - Flattens object to dot-notated key-value object

### `expand(<Object>)` - Expands a flattened, dot-notated object to nested object

### `redact(Obj<Object>, <Object{keys<Array>, values<Array>}>` - Redacts keys or values on an object literal

### `merge(...<Object>)` - Performs a deep merge on object parameter(s)
