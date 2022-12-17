# @the-devoyage/request-filter-language

A library to help standardize the shape of network requests.

Poorly Shaped Request:
- It's hard to read.
- It's hard to predict the results.
- It's hard to remember how to write.
- It's not scalable.

```
req.body = {
  exact: true,
  isListElement: true,
  userFirstNameQuery: "Wednesd",
  lastNameUserQuery: "adams"
  userIsActive: true,
  userType: "admin",
  age: 16,
  age_prop: "greater",
  count: 20,
  skipCount: 25,
  limit: false,
  includeFriends: ["Bongo", "Oakley"]
  requireFriends: true
}
```

A Standardized Request:
- Predictable Shapes
- Predictable Keys
- Predictable Results 

```
req.body = {
  first_name: {
    string: "Wednesday",
    filterBy: "REGEX,
  },
  last_name: "Adams",
  active: {
    bool: true,
    operator: "AND"
  },
  type: {
      string: "nonPilgram",
      filterBy: "MATCH"
  },
  age: {
      int: 16,
      filterBy: "GT"
  },
  friends: {
      strings: ["Bongo", "Oakley"],
      operator: "OR"
  },
  config: {
    pagination: {
      limit: 15,
      cursor: new Date(),
      reverse: true
    }
  }
}
```

## RESTFUL, Typescript, and GraphQL Support

- Typescript Definitions for Type Safe Code
- Zod Schemas for Validation
- GraphQL Type Definitions and Scalars

## Features

### Standardized Requests

Standardize how the client application can communicate with an API. Each typed property allows you to specify how you want the API to filter the result.

```js
{
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
  } as StringFieldfilter,
  age: {
    int: 21,
    filterBy: "GT"
    operator: "OR"
  } as IntFieldFilter,
  status: {
    bool: true,
    filterBy: "EQ",
    groups: ["customName.and"]
    operator: "OR"
  } as BooleanFieldFilter,
  birthday: {
    date: new Date("01/07/2017")
    filterBy: "LT",
  }
  friends: {
    strings: ["Bongo", "Jedi", "Oakley", "Yellow"],
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

All Field Filters and Objects can be validated using provided Zod Schemas.

```js
import { StringFieldFilterSchema } from '@the-devoyage/request-filter-language';

const isValid = StringFieldFilterSchema.safeParse(myStringFieldFilter).success;
const IntFieldFilterSchema = IntFieldFilterSchema.parse(myIntFieldFilter); 
```

### Parse Filters

Parse Field Filters From Any Object.

```js
import { parseFieldFilters } from '@the-devoyage/request-filter-language';

const myObject = {
    name: stringFieldFilter,
    age: intFieldFilter,
    address: {
        lineOne: stringFieldFilter
      }
    customProp: notAFieldFilter // <-- CUSTOM PROPERTIES
    customPropz: [notAFieldFilter] // <-- CUSTOM PROPERTIES
  }

const fieldFilters = parseFieldFilters(myObject);
 
{
  name: stringFieldFilter,
  age: intFieldFilter,
  address: {
      lineOne: stringFieldFilter
  }
}
```

### Create Field Filters

Use the creator functions to easily create field filters.

```
import { fieldFilter } from "@the-devoyage/request-filter-language"

const req.body = {
    name: fieldFilter.string("nick"),
    email: fieldFilter.string({string: "nick", filterBy: "REGEX"})
    age: fieldFilter.int({int: 21, filterBy: "GT"})
    date: fieldFilter.date(new Date())
  }
```

## Setup

### Install

```bash
npm i @the-devoyage/request-filter-language
```

## API

### Create with Function

```
import { fieldFilter } from '@the-devoyage/request-filter-language'

const stringFieldFilter = fieldFilter.string({...})
const intFieldFilter = fieldFilter.int({...})
const booleanFieldFilter = fieldFilter.bool({...})
const dateFieldFilter = fieldFilter.date({...})
const stringArrayFieldFilter = stringFilter.strings({...})
```

### Field Filters

- String Field Filter
- String Array Field Filter
- Int Field Filter
- Boolean Field Filter
- Date Field Filter

| Field Filters          | Query Prop     | filterBy                             | operator    | groups |
|------------------------|----------------|--------------------------------------|-------------|--------|
| StringFieldFilter      | "string"       | "MATCH", "REGEX", "OBJECTID"         | "OR", "AND" | yes    |
| IntFieldFilter         | "int"          | "EQ", "NE", "GT", "LT", "GTE", "LTE" | "OR", "AND" | yes    |
| BooleanFieldFilter     | "bool"         | "EQ", "NE"                           | "OR", "AND" | yes    |
| DateFieldFilter        | "date"         | "EQ", "NE", "GT", "LT", "GTE", "LTE" | "OR", "AND" | yes    |
| StringArrayFieldFilter | "strings"      | "MATCH", "REGEX", "OBJECTID"         | "OR", "AND" | yes    |

Example: 
```
{
  string: "Lila",
  filterBy: "MATCH",
  operator: "OR",
  groups: ["name.and"]
}
```

**Typescript**

```js
import { 
  StringFieldFilter, 
  StringArrayFieldFilter, 
  IntFieldFilter, 
  BooleanFieldFilter, 
  DateFieldFilter 
} from "@the-devoyage/request-filter-languages";

const firstNameFilter: StringFieldFilter = {...};
const ageFilter: IntFieldFilter = {...}
```

**Zod Validations**

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

Check out the Zod documentation for more information on how to use the schema validations.

### Filter Config

Use the filter configuration object to specify global data such as pagination or historical shaping.

```js
import { filterConfig } from '@the-devoyage/request-filter-language'

const paginationFilters = filterConfig.pagination({...})
const historyFilters = filterConfig.history({...})
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
