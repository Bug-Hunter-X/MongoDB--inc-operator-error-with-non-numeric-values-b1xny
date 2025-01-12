# MongoDB $inc Operator Error
This example demonstrates an error that can occur when using the `$inc` operator in MongoDB with non-numeric values. The `$inc` operator is used to increment a numeric field by a specified value.  If a non-numeric value is provided, MongoDB will throw an error.

## Bug
The provided Javascript code attempts to increment both numeric and non-numeric fields using the `$inc` operator.  This will result in an error because the `$inc` operator only accepts numeric values.

## Solution
The solution involves ensuring that only numeric fields are incremented using `$inc`. String values or other data types should be updated using other MongoDB operators like `$set`.