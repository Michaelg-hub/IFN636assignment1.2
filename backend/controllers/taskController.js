//this function adds a task to the database.
const addTask = async(req, res) => {
    const {title, description} = req.body;

    try {
        const task = await Task.create({userId: req.user.id, title, description, deadline});
    }
}
