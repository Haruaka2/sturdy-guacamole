// File that determines the API routes avaliable
// Initalization
const TaskModel = require('../models/task');
const ListModel = require('../models/list');
const PalModel = require('../models/palette');

const express = require('express');
const router = express.Router();

// GET Requests
router.get('/task', async (req, res) => {
    try {
        const taskResults = TaskModel.find();
        res.json(taskResults);
    } catch(error) {
        res.status(400).json({ msg: error.message })
    }
});
router.get('/list', async (req, res) => {
    try {
        const listResults = ListModel.find();
        res.json(listResults);
    } catch(error) {
        res.status(400).json({ msg: error.message })
    }
});
router.get('/palette', async (req, res) => {
    try {
        const palResults = PalModel.find();
        res.json(palResults);
    } catch(error) {
        res.status(400).json({ msg: error.message })
    }
});


// POST [Add] Requests
router.post('/task/add', async (req, res) => {
    const taskData = new TaskModel({
        taskName: req.body.taskName,
        isCompleted: req.body.isCompleted
    });

    try {
        const savedData = await taskData.save();
        res.status(200).json(savedData);
    } catch(error) {
        res.status(400).json({ msg: error.message })
    }
});
router.post('/list/add', async (req, res) => {
    const listData = new ListModel({
        focus: req.body.focus,
        isMain: req.body.isMain,
        tasks: req.body.tasks
    });

    try {
        const savedData = await listData.save();
        res.status(200).json(savedData);
    } catch(error) {
        res.status(400).json({ msg: error.message })
    }
})

// POST [Edit] Requests
router.patch("/task/update/:id", async (req, res) => {
    try {
        const taskId = req.params.id;
        const updatedTask = req.body;
        const options = { new: true };

        const result = await TaskModel.findByIdAndUpdate(taskId, updatedTask, options);
        res.send(result);
    } catch {
        res.status(400).json({ msg: error.message });
    }
})
router.patch("/list/update/:id", async (req, res) => {
    try {
        const listId = req.params.id;
        const updatedList = req.body;
        const options = { new: true };

        const result = await TaskModel.findByIdAndUpdate(listId, updatedList, options);
        res.send(result);
    } catch {
        res.status(400).json({ msg: error.message });
    }
})

// POST [Delete] Requests
router.delete("/task/delete/:id", async (req, res) => {
    try {
        const taskId = req.params.id;
        const data = await TaskModel.findByIdAndDelete(taskId);
        res.send(`Document with ${data.taskName} has been deleted..`)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
router.delete("/list/delete/:id", async (req, res) => {
    try {
        const listId = req.params.id;
        const data = await ListModel.findByIdAndDelete(listId);
        res.send(`Document with ${data.focus} has been deleted..`)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})




// Export Closing
module.exports = router;