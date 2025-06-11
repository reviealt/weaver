functions by topic:

-> project-creation
fn saveToCurrentProject(folder_name: &str) {}
fn createNewProject(project_name: &str) {}
fn autosaveInInterval() {}

--> database-modeling
fn createNewEntity() {}
fn editEntity() {}
fn deleteEntity() {}

---
fn createNewAttribute() {}
fn editAttribute() {}
fn deleteAttribute() {}

---
fn createNewRelation() {}
fn editRelation() {}
fn deleteRelation() {}

--> rendering
fn renderEntity() {}
fn addNewEntityButton() {}


## TODO
 * what to do:
 *
 * I need a clear design (probably similar to dbdesigner)
 * a way to convert the current entities, attributes and relations into SQL
 * save that into a file and check for inconsistencies
 * probably have postgre in mind while converting

### interfaces

trait Entity {}
trait Attribute {}
trait Relation {}

## frontend

-> SIDEBAR: add new objects/change current object attributes
