import express from 'express';

import Todo from "../models/Todo.js";

const router = express.Router();


router.get("/", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
})

router.post("/", async (req, res) => {  // ✅ Correct: (req, res)
    console.log("DEBUG req.body:", req.body); // ✅ Add this for confirmation

    const { text } = req.body;
    const newTodo = new Todo({ text });
    await newTodo.save();
    res.status(201).json(newTodo);
});


router.delete("/:id", async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id); // Delete by ID
    res.json({ message: "Todo deleted" }); // Send confirmation
});

export default router;