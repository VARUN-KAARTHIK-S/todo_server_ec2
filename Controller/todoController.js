import todoCollection from "../Model/todoModel.js";

export const addTodo = async (req, res) => {
    try {
        const data = new todoCollection(req.body)
        await data.save()
        res.status(201).json({ mess: "data has stored" })
    }
    catch (err) {
        res.status(500).json({ message: err })

    }
}

export const getTodo = async (req, res) => {
    try {
        const data = await todoCollection.find();
        res.json(data)
        res.status(201).json({ mess: "data has been got" })
    }
    catch (err) {
        res.status(500).json({ message: err })
    }
}
export const updateTodo = async (req, res) => {
    try {
        const data = await todoCollection.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(data)
    }
    catch (err) {
        res.status(400).json({ message: err })
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const data = await todoCollection.findByIdAndDelete(req.params.id)
        res.status(200).json({ mess: 'todo  has been deleted' })
    }
    catch (err) {
        res.status(500).json({ message: err })
    }
}