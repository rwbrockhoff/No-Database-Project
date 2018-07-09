let toDoListArray = [];

module.exports = {
    //--------------------------//

    create: (req, res) => {
    toDoListArray.push(req.body.listValue)

    res.status(200).send(toDoListArray);
    },

//--------------------------//

    read: (req, res) => {


    res.status(200).send(toDoListArray);
     },

//--------------------------//

    update: (req, res) => {

    let actualIndex = req.body.index;
    toDoListArray.splice(actualIndex, 1, req.body.listValue)
    res.status(200).send(toDoListArray);
    },

//--------------------------//

    delete: (req, res) => {
    let actualDeleteIndex = req.body.index;
    
    toDoListArray.splice(actualDeleteIndex, 1)
    res.status(200).send(toDoListArray);
    
    },

    createweather: (req, res) => {
        res.status(200).send(console.log('weather get request success'));
    },

    updatePriority: (req, res) => {
        res.status(200).send(console.log('Update priority'));
    }
}

