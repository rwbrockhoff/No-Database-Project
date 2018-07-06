let toDoListArray = [];

module.exports = {
    //--------------------------//

    create: (req, res) => {
    toDoListArray.push(req.listValue)

    res.status(200).send(console.log('jaguar says hello'));
    },

//--------------------------//

    read: (req, res) => {


    res.status(200).send(toDoListArray);
     },

//--------------------------//

    update: (req, res) => {


    res.status(200).send(toDoListArray);
    },

//--------------------------//

    delete: (req, res) => {


    res.status(200).send(toDoListArray);
    },
}