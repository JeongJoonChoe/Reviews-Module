# Project Name

> Recreation of Airbnb's Customer Reviews Module

## Related Projects

- https://github.com/airbnbers/Reviews-Module

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

### API Endpoints
---

#### Room Reviews

`GET` /rooms/reviews/recent

`GET` /rooms/reviews/relevant

`GET` /rooms/reviews/filter

`POST` /rooms/reviews/:review_id

`PUT` /rooms/reviews/:review_id

`DELETE` /rooms/reviews/:review_id

#### Parameters

| Name | Type | Description |
|------|------|-------------|
| Review Id | int | Id of review |


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
