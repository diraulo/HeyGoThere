function(doc) {
  if(doc.type && doc.type == "user"){
     emit(doc.id,doc)
  }
  
}
