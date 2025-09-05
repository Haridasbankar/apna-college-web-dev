const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const todolist = require("./models/list.js");

const app = express();

// ✅ Middleware
app.use(express.urlencoded({ extended: true })); // handle form submissions
app.use(express.json()); // handle JSON
app.use(methodOverride("_method")); // override methods (PUT/DELETE)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// ✅ MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/todolist")
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

// ======================== ROUTES ========================

// Home → Show all lists
app.get("/alllist", async (req, res) => {
    try {
        const alllist = await todolist.find({});
        console.log(alllist);
        res.render("index.ejs", { alllist });
    } catch (err) {
        res.status(500).send("Error fetching lists");
    }
});

// New list form
app.get("/alllist/new", (req, res) => {
    res.render("new.ejs");
});

// Create list
app.post("/alllist", async (req, res) => {
    try {
        const { title, description } = req.body;
        await new todolist({ title, description }).save();
        res.redirect("/alllist");
    } catch (err) {
        res.status(500).send("Error creating list");
    }
});

// Show single list
app.get("/alllist/:id", async (req, res) => {
    try {
        const list = await todolist.findById(req.params.id);
        if (!list) return res.status(404).send("List not found");
        res.render("show.ejs", { list });
    } catch (err) {
        res.status(500).send("Error fetching list");
    }
});

// Edit form
app.get("/alllist/:id/edit", async (req, res) => {
    try {
        const list = await todolist.findById(req.params.id);
        if (!list) return res.status(404).send("List not found");
        res.render("edit.ejs", { list });
    } catch (err) {
        res.status(500).send("Error loading edit form");
    }
});

// Update list
app.put("/alllist/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        console.log(req.body);

        const updatedList = await todolist.findByIdAndUpdate(
            id, { title, description }, { new: true, runValidators: true }
        );

        if (!updatedList) return res.status(404).send("List not found");

        res.redirect(`/alllist/${id}`); // redirect to updated detail page
    } catch (err) {
        console.error("Error updating item:", err);
        res.status(500).send("Error updating list");
    }
});


// Delete list
app.delete("/alllist/:id", async (req, res) => {
    try {
        const deletedList = await todolist.findByIdAndDelete(req.params.id);
        if (!deletedList) return res.status(404).send("List not found");
        res.redirect("/alllist");
    } catch (err) {
        res.status(500).send("Error deleting list");
    }
});

// ======================== SERVER ========================
app.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
});
