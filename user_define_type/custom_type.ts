{
    // type user = { name: string, id: number, isStudent: boolean };

    // let users: user[];
    // users = [];
    // let user1:user ;
    // let user2: user;
    // user1 = { name: "tamzid", id: 101, isStudent: true };
    // user2 = { name: "molla", id: 111, isStudent: false };
    // users.push(user1, user2);

    // console.log(users);

    type requestType = "GET" | "POST";
    let getRequest: requestType;
    getRequest = "GET";
    console.log(getRequest);

    function handleRequest(requestType:requestType) {
        console.log(requestType);
    }
    handleRequest("GET")
}