//numeric enum 
var requestType;
(function (requestType) {
    requestType[requestType["readData"] = 0] = "readData";
    requestType[requestType["deleteData"] = 1] = "deleteData";
})(requestType || (requestType = {}));
// console.log(requestType);
// console.log(requestType.deleteData);
// console.log(requestType["deleteData"]);
//string enum 
var requestType2;
(function (requestType2) {
    requestType2["readData"] = "hello";
    requestType2["deleteData"] = "world";
})(requestType2 || (requestType2 = {}));
// console.log(requestType2);
// console.log(requestType2.deleteData);
//hetergenous enum 
var requestType3;
(function (requestType3) {
    requestType3[requestType3["id"] = 101] = "id";
    requestType3["name"] = "Tamzid";
})(requestType3 || (requestType3 = {}));
// console.log(requestType3);
// console.log(requestType3.id);
// console.log(requestType3.name);
