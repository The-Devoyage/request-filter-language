# @the-devoyage/request-filter-language

A validation and type library to structure the shape of a network request when dealing with filtering, searching, and pagination.

## RESTFUL, Typescript, and GraphQL Support

- Typescript Definitions for Type Safe Code
- Zod Schemas for Validation
- GraphQL Type Definitions and Scalars

## Field Filters

### Standardized Requests

Standardize how the client application can communicate with an API with Field Filters. Each filter allows you to specify how you want the API to filter the results.

```js
{
  name: StringFieldFilter;
  age: IntFieldFilter;
  status: BooleanFieldFilter;
  birthday: DateFieldFilter;
  friends: StringArrayFieldFilter;
}
```

### Search Options

Field filters provide a variety of properties to use when requesting data.

```js
{
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
      createdAt: new Date("November 11, 2020")
    }
  }
}
```

### Validation

All Field Filters can be validated using the provided Zod Schemas.

```js
import { StringFieldFilterSchema } from '@the-devoyage/request-filter-language';

const isValid = StringFieldFilterSchema.safeParse(myStringFieldFilter).success
```

Or Parse Field Filters From Any Object. If no filters are found RFL throws error.

```js
import { parseFieldFilters } from '@the-devoyage/request-filter-language';

const fieldFilters = parseFieldFilters(myObject);

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

