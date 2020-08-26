# BetOnMyLife

##  Steps

### bed
- [x] fb projects and real time databases
- [x] data-service module + skeleton svc
- [x] swagger init
- [x] skeleton controllers
- [x] global validation pipe
- [x] user entity + svc + controller
- [x] base entity svc
- [x] exclude passwd through class-transformer
- [x] service n
- [x] connected data
- [ ] embedded data
- [ ] authentication
- [ ] supertest
- [ ] unit test
- [ ] authorization
---
- [ ] delete refactor soft delete
- [ ] .env + validation (joi)
- [ ] axios unwrap operator
- [ ] robust error handling
- [ ] filter deleted entities
- [ ] configurable data relations + queryable
- [ ] abstract controller

### fed
- [x] primeng init + registration screen build
- [x] nx + lazy loading skeleton setup
- [x] webpack bundle analyzer 
- [x] registration dumb cmp
- [ ] ngxs init
- [ ] transloco init
- [ ] build: skeleton, login, profile, ch list, ch add, ch details, bets

# topics to discuss
## common
* rest conventions / queryable / __ui driven api__ - see below for spec
* api spec how / code generation - default manual, IF swagger geneartion is useful then we will start  
* mock data generation for api / example data
    * mock response in notimplemented stubs
    * api spec mock data
* testing - mainly integration 
* codebase language / shortening - angol, no shortening  
* security - elvárások majd jönnek, addig józan ész
 
## bed
* dto reuse - much dto such wow
* feature module vs data layer - data module, 0 feature module
* module system - on demand
* serialization and exclude - mehet
* url in string / or no / - no /
* fn param list vs object - object is recommended
* level of abstraction - rest orm (nestjsx/crud for rest) - no black magic
* perf - default express, fastify if we have a good reason

## fed
* i18n - transloco, module name prefix in keys
* ngrx vs ngxs vs akita - ngxs
* config - runtime vs compile time - dontcare
* reactive form + 0 form builder
* onpush/perf
* sfc - nope
* granular module import - no shared, explicit import in every module
* smart and dumb components - let's do this (0 service)
* feature css - nope
* nx workspace + libs + modules
    - core - alap svc
    - feature-* (components, containers, services, store, etc)
    - ui-* // dumb cmp modulok
    - util-*
* accessibility: semantic html, többi ha jön az igény

## bed
### url schema
    driven by ui urls and screens
     
### response format
```
    {
        error: {},
        data: {}
    }
```
    
    
```
    /users/id - nincs ilyen id - 200 
    /uers/id - nincs ilyen controller - 404
```
    
```
    /challenges/list
    { 
        error: [
            {
                "path": [ 0, "authorPictureUrl" ],
                "type: "service_unavailable"
                "message": "User service is unavailable"
            },
            {
                "path": [ 1, "totalPot" ],
                "type: "data_not_found",
                "message": "no challange with this id"
            }
            {
                "path": [ 1, "authorPictureUrl" ],
                "type": "service_unavailable",
                "message": "User service is unavailable"
            },        
        ],
        data: [
            {
                id: "1234",
                authorPictureUrl: null, // user service is unavailable
                name: "marathon",
                description: "alma",
                totalPot: 42
            }, 
            {
                id: "567",
                authorPictureUrl: null, // user service is unavailable
                name: "marathon",
                description: "alma",
                totalPot: null // potservice is unavailable
            } 
        ]
    }
```
    
    
```
    /challenges/list
    { 
        error: "no challenges",
        data: null
    }
```

### query 
* NOT: embedded data or field selector
* yep: sort, filter, pagination

