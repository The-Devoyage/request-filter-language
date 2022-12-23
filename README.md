# @the-devoyage/request-filter-language

A library to help standardize the shape of network requests for both API and Client Side development.

```
import { fieldFilter } from "@the-devoyage/request-filter-language";

const user = getUsers({
  first_name: new fieldFilter.string("Wednesday")
    .filterBy("MATCH")
    .run(),
  last_name: new fieldFilter.string("Adams")
    .filterBy("REGEX")
    .run(),
  active: new fieldFilter.bool(true)
    .operator("AND")
    .run(),
  age: new fieldFilter.int(16)
    .filterBy("GT")
    .operator("OR")
    .run(),
  friends: new fieldFilter.strings(["Bongo", "Oakley"])
    .operator("OR")
    .run(),
  birthday: new fieldFilter.date(new Date("December 18 2004"))
    .run()
});
```

## RESTFUL, Typescript, and GraphQL Support

- Helper Create Functions
- Typescript Definition
- Zod Schemas for Validation
- GraphQL Type Definitions


## Features

### Standardized Requests

Standardize how the client application can communicate with an API. Field Filters provide standardized options to shape the network request.

```js
{
  first_name: StringFieldFilter;
  last_name: StringFieldFilter;
  active: BooleanFieldFilter;
  age: IntFieldFilter;
  birthday: DateFieldFilter;
  friends: StringArrayFieldFilter;
}
```

### Field Filters

Field filters provide a variety of properties to use when requesting data. They can be manually written or created using chained methods.

```js
import { fieldFilter } from "@the-devoyage/request-filter-language";

req.body = {

  first_name: {
    string: "Jo",
    filterBy: "REGEX",
    groups: ["customName.and"],
    operator: "AND"
  } as StringFieldfilter,

  last_name: new fieldFilter.string("Schmo")
    .filterBy("REGEX")
    .run(),

}
```

### Filter Configuration

The `FilterConfig` object allows the client to adjust global options for the request such as pagination.

```js
{
  filterConfig: {
    pagination: {
      limit: 20,
      reverse: true,
      createdAt: new Date("November 11, 2022")
    }
  }
}

// OR

{
  filterConfig: {
      pagination: new Pagination()
        .limit(20)
        .reverse(true)
        .createdAt(new Date("November 11 2022"))
        .run()
  }
}
```

### Validation

All Field Filters and Objects can be validated using provided Zod Schemas. The create methods automatically validate on the `run` method.

```js
import { StringFieldFilterSchema } from "@the-devoyage/request-filter-language";

const isValid = StringFieldFilterSchema.safeParse(myStringFieldFilter).success;
const IntFieldFilterSchema = IntFieldFilterSchema.parse(myIntFieldFilter);
```

## Setup

1. Login to the GitHub Registry with your GitHub account.

```
npm login --registry=https://npm.pkg.github.com
```

Be sure to use a GitHub PAT with the correct scopes (package registry) when logging in.

2. In the root of the target project, add the following to the `.npmrc` file to tell this package where to be downloaded from. Create the file if it does not exist.

```
@the-devoyage:registry=https://npm.pkg.github.com
```

3. Install with node package manager.

```bash
npm i @the-devoyage/request-filter-language
```

## API

### Create Functions 

Use the create functions to easily create field filters and other configuration objects.

```js
import { fieldFilter, filterConfig } from '@the-devoyage/request-filter-language'

const stringFieldFilter = new fieldFilter.string().filterBy().operator().groups().run();
const pagination = new filterConfig.pagination().limit().reverse().run();
```

**Field Filter**

| fieldFilter                    | methods                                                                                                                    |
|--------------------------------|----------------------------------------------------------------------------------------------------------------------------|
| string(str: string)            | filterBy(StringFilterByOptions), operator(OperatorOptions), groups(GroupName[]), run()                                     |
| int(i: number)                 | filterBy(IntFilterByOptions), operator(OperatorOptions), groups(GroupName[]), run()                                        |
| bool(b: boolean)               | filterBy(BooleanFilterByOptions), operator(OperatorOptions), groups(GroupName[]), run()                                    |
| date(d: Date)                  | filterBy(DateFilterByOptions), operator(OperatorOptions), groups(GroupName[]), run()                                       |
| strings(strings: string[])     | filterBy(StringFilterByOptions), operator(OperatorOptions), groups(GroupName[]), arrayOptions(ArrayFilterByOptions), run() |

**Filter Config**

| filterConfig | methods                                                         |
| -------------|-----------------------------------------------------------------|
| pagination   | limit(number), reverse(boolean), dateKey(string), run()         | 
| history      | interval(HistoryFilterIntervalEnum), intervalKey(string), run() |

**The Run Method**

The run method should be invoked last to return the validated object.

If invalid, a Zod error object is returned with description.


### Field Filters

- String Field Filter
- String Array Field Filter
- Int Field Filter
- Boolean Field Filter
- Date Field Filter

| Field Filters          | Query Prop | filterBy                             | operator    | groups |
| ---------------------- | ---------- | ------------------------------------ | ----------- | ------ |
| StringFieldFilter      | "string"   | "MATCH", "REGEX", "OBJECTID"         | "OR", "AND" | yes    |
| IntFieldFilter         | "int"      | "EQ", "NE", "GT", "LT", "GTE", "LTE" | "OR", "AND" | yes    |
| BooleanFieldFilter     | "bool"     | "EQ", "NE"                           | "OR", "AND" | yes    |
| DateFieldFilter        | "date"     | "EQ", "NE", "GT", "LT", "GTE", "LTE" | "OR", "AND" | yes    |
| StringArrayFieldFilter | "strings"  | "MATCH", "REGEX", "OBJECTID"         | "OR", "AND" | yes    |

Example:

```js
{
  string: "Lila",
  filterBy: "MATCH",
  operator: "OR",
  groups: ["name.and"]
}
```
### Filter Configuration

Use the filter configuration object to specify global data such as pagination.

```js
import { filterConfig } from '@the-devoyage/request-filter-language'

const paginationFilters = new filterConfig.pagination(...).limit(...).run()
const historyFilters = new filterConfig.history().interval(...).intervalKey(...).run()
```

TypeScript

```js
import { FilterConfig } from '@the-devoyage/request-filter-language'

const filterConfig: FilterConfig = {...}
```

**Pagination**

Specify options to control the amount and order of results.

```js
const pagination = {
  limit: 16,
  reverse: true,
  dateCursor: new Date()
  dateKey: "createdAt"
}
```

**History**

In the case that you want to organize data in historical intervals, the history object allows for customization of such options. This can also be used to organize sql groupings. 

```js
// Find all and group by year and month. 
const history = {
  interval: ["YEAR", "MONTH"] as HistoryFilterIntervalEnum[],
  interval_key: "createdAt" 
}
```

### Validators and Typescript

Validators are created with Zod Schemas. In addition, typescript types are also exported.

```js
import {
  IntFieldFilterSchema, // Zod Validation Schema
  DateFieldFilterSchema, // Zod Validation Schema
  IntFieldFilter, // TypeScript Type
  DateFieldFilter // TypeScript Type
} from "@the-devoyage/request-filter-languages";

const isValid = IntFieldFilterSchema.safeParse({...}).success;
const fieldFilter = DateFieldFilterSchema.parse({...});
```

### Parse Field Filters

Parses an object for field filters. Returns an array of field filters with the object location.

```js
import { parseFieldFilters, fieldFilter } from '@the-devoyage/request-filter-language';

const myObject = {
    name: new fieldFilter.string("Oak"),
    age: new fieldFilter.int(4),
    address: {
        lineOne: new fieldFilter.string("101 Tree Lane") 
      }
    customProp: {...} // <-- CUSTOM PROPERTIES
    customProps: [{...}, {...}] // <-- CUSTOM PROPERTIES
  }

const fieldFilters: {fieldFilter: FieldFilter, location: string}[] = parseFieldFilters(myObject);

/**
* Returns an array of field filters and thier location relative to the root of the object.
* 
* [
*   { fieldFilter: { string: "Oak" }, location: "name" },
*   { fieldFilter: { int: 4 }, location: "age" }, 
*   { fieldFilter: { string: "101 Tree Lane" } location: "address.lineOne" }
* ]
**/
```


### Return Types

This library also provides typings, validators, and create functions for suggested return types. 

```js
// Typescript
import { Stats, HistoricStats, HistoricStatsId } from '@the-devoyage/request-filter-language'

// Validators
import { StatsSchema, HistoricStatsSchema, HistoricStatsIdSchema } from "@the-devoyage/request-filter-language"

// Create
import { StatsReturn } from '@the-devoyage/request-filter-language'
```

### GraphQL Support

All typings are also exported as GraphQL Types.

```js
import { GraphQL } from '@the-devoyage/request-filter-language'
import { ApolloServer } from "@apollo/server"

// Add all the type defs to your schema
const server = new ApolloServer({
    typeDefs: [GraphQL.typeDefs]
});

// Pick and Choose
const { StringFieldFilter, IntFieldFilter, OperatorFieldConfigEnum } = GraphQL;
```
