// array of object
const todo=[
    {
    id:1,
    title:"new Task M"
},
    {
        id: 2,
        title: "new Task E"
    },
    {
        id: 3,
        title: "new Task R"
    },
    {
        id: 4,
        title: "new Task N"
    }
]

//Display
console.log(todo)

// add into todo
const newTodoItem={id:5,title:"New MERN"};
todo.push(newTodoItem);
console.log(todo,"updateTodo")
// update todo

function updateTodoObject(myId,title){
    const updateobject = todo.map((item) => {
        return item.id === myId ? item.title = title : item;
    })
    console.log(updateobject)
    return updateobject;
}

updateTodoObject(5,"New Mern Stack joijoij")
// console.log(todo)
console.log("delete object")
function DeleteTodoObject(myId) {
    const deleteobject = todo.filter((item) => {
        return item.id !== myId 
    })
    console.log(deleteobject)
    return deleteobject;
}

DeleteTodoObject(5)

// for displaying only one value

console.log("delete object")
function DisplayingOneItem(myId) {
    const OneItem = todo.find((item) => {
        return item.id === myId
    })
    console.log(OneItem)
    return OneItem;
}

DisplayingOneItem(5)

