# @the-devoyage/request-filter-language

A validation, creation, and type library to structure the shape of network requests when dealing with filtering, searching, and pagination.

## RESTFUL, Typescript, and GraphQL Support

- Typescript Definitions for Type Safe Code
- Zod Schemas for Validation
- GraphQL Type Definitions and Scalars

## What is Request Filter Language?

### Standardized Requests

Standardize how the client application can communicate with an API. Each typed property allows you to specify how you want the API to filter the result.

```js
req.body = {
  name: StringFieldFilter;
  age: IntFieldFilter;
  status: BooleanFieldFilter;
  birthday: DateFieldFilter;
  friends: StringArrayFieldFilter;
  filterConfig: FilterConfig;
}
```

### Field Filters

Field filters provide a variety of properties to use when requesting data.

```js
req.body = {
  name: {
    string: "Jo",
    filterBy: "REGEX",
    groups: ["customName.and"],
    operator: "AND"
  },
  age: {
    int: 21,
    filterBy: "GT"
    operator: "OR"
  },
  status: {
    bool: true,
    filterBy: "EQ",
    groups: ["customName.and"]
    operator: "OR"
  }
}
```

### Filter Configuration

The `FilterConfig` object allows the client to adjust global options for the request.

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
```

### Validation

All Field Filters can be validated using provided Zod Schemas.

```js
import { StringFieldFilterSchema } from '@the-devoyage/request-filter-language';

const isValid = StringFieldFilterSchema.safeParse(myStringFieldFilter).success;
```

### Parse Filters

Parse Field Filters From Any Object. If no filters are found then the library throws an error.

```js
import { parseFieldFilters } from '@the-devoyage/request-filter-language';

const fieldFilters = parseFieldFilters(myObject);

```

### Create Field Filters

Use the creator functions to easily create field filters.

```
import { fieldFilter } from "@the-devoyage/request-filter-language"

const req.body = {
    name: fieldFilter.string("nick"),
    email: fieldFilter.string({string: "nick", filterBy: "REGEX"})
    age: fieldFilter.int({int: 21, filterBy: "GT"})
  }
```

## Setup

### Install

```bash
npm i @the-devoyage/request-filter-language
```

### Validate Incoming Requests

```js
import { parseFieldFilters } from '@the-devoyage/request-filter-language'

const route = (req, res) => {
  const fieldFilters = parseFieldFilters(req.body);

  // Use Mongo Filter Generator to convert the filters to Mongoose Filters.
  // Use SQL Query Generator to convert the filters to a Sequelize Query.
  // Build your own library to use the filters.
}
```

## API

### Field Filters

- String Field Filter

```ts
const stringFieldFilter = fieldFilter.string({});
```

- String Array Field Filter
- Int Field Filter
- Boolean Field Filter
- Date Field Filter

**Importing Types**

```js
import { 
  StringFieldFilter, 
  StringArrayFieldFilter, 
  IntFieldFilter, 
  BooleanFieldFilter, 
  DateFieldFilter 
} from "@the-devoyage/request-filter-languages";

const firstNameFilter: StringFieldFilter = {...};
```

**Validations**

```js
import { 
  StringFieldFilterSchema, 
  StringArrayFieldFilterSchema, 
  IntFieldFilterSchema. 
  BooleanFieldFilterSchema, 
  DateFieldFilterSchema 
} from "@the-devoyage/request-filter-languages";

const isValid = IntFieldFilterSchema.safeParse({...}).success;
const fieldFilter = DateFieldFilterSchema.parse({...});
```

Check out Zod for more information on how to use the schema validations.

### Filter Config

Use the filter configuration object to specify global data such as pagination or historical shaping.

```js
const req.body = {
    ...fieldFilters,
    filterConfig: {
        pagination: {...},
        history: {...}
      }
  }
```

**Pagination**

Specify options to control the amount and order of results.

```js
const pagination = {
  limit: 16,
  reverse: true,
  createdAt: new Date()
  }
```
