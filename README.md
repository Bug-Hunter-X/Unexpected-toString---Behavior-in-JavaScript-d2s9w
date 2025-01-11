# Unexpected toString() Behavior in JavaScript
This repository demonstrates a subtle bug in a JavaScript function that involves the `toString()` method and how it interacts with `NaN` values.  The function aims to convert various input types to strings, but it doesn't handle `NaN` gracefully, resulting in an unexpected output.

## Bug Description
The original function intends to provide a robust string conversion for different input types including `null`, `undefined`, numbers and objects. However, `NaN` is treated differently by the `toString()` method than the intended behavior. The bug manifests when the function receives `NaN` as input, returning `NaN` instead of a string representation like "NaN".

## Solution
The improved function directly handles the `NaN` case to provide the intended string representation of "NaN". This enhances the function's reliability when dealing with varied inputs.  The solution adds an explicit check for `isNaN(x)`, providing a more predictable outcome for all data types.