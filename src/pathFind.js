function pathFind (path, object, i) {
  if(!i){
    i = 0;
  }
  if (path.length === i) {
    return object
  } 
  const foo = object[path[i]];
  return pathFind (path, foo, ++i)
}




module.exports = {pathFind}
