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
- [ ] i18n endpoint
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
* rest conventions
  * plural vs single (service, controller, path)
  * id in payload or path or both
  * object or array return type for collections
  * empty responses and data format
  * response format (error, data)
  * embedded data
* api spec how
* mock data generation for api / example data
* batch / embedded / over and underfetch
* security 
* testing
* shortening

## bed
* upsert dto or create and update?
* feature module vs data layer
* serialization and exclude
* codebase language 
* url in string / or no /
* fn param list vs object
* level of abstraction - rest orm (nestjsx/crud for rest)
* perf
* fed-bff dto, dps dto
* config svc
* module system

## fed
* ngrx vs ngxs vs akita
* primeng, angular material or custom
* css variable + templating
* smart and dumb components
* nx workspace + libs + modules 
* granular module import
* config - runtime vs compile time
* reactive or template driven form  (fb?)
* accessibility
* theming
* onpush/perf
