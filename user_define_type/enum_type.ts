//numeric enum 
enum requestType {
    readData,
    deleteData,
}

// console.log(requestType);
// console.log(requestType.deleteData);
// console.log(requestType["deleteData"]);

//string enum 
enum requestType2 {
    readData = "hello",
    deleteData = "world"
}

// console.log(requestType2);
// console.log(requestType2.deleteData);


//hetergenous enum 
enum requestType3{
    id = 101,
    name= "Tamzid"
}

// console.log(requestType3);
// console.log(requestType3.id);
// console.log(requestType3.name);