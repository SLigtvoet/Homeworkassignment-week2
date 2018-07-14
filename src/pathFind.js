function pathFind (path, object) {
  
  const foo = path[0]
  return object[foo]

}






const obj = {
    foo: "Hey"
  }
pathFind(["foo"], obj)


module.exports = {pathFind}
