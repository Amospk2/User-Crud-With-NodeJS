const express = require('express');
const UserModel = require('../src/database/models/user.model');
const app = express();
const port = "3000";

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'src/views');



app.get('/view/users', async (req, res) => {
    const users = await UserModel.find({});
    res.render("index.ejs", { users });
});


app.use((req, res, next) => {
    console.log(`Request type: ${req.method}`);
    console.log(`Content type: ${req.headers['content-type']}`);
    console.log(`Request type: ${new Date()}`);

    next();
});
app.get('/home', (req, res) => {
    res.contentType('application/html');
    res.status(200).send("<h1>Hello World Express</h1>");
});


app.get('/users', async (req, res) => {
    try {
        const users = await UserModel.find({});

        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message);

    }

});


app.get('/users/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const user = await UserModel.findById(id);
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);

    }
});

app.patch('/users/:id', async (req, res) => {

    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});


app.delete('/users/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const user = await UserModel.findByIdAndRemove(id);

        res.status(200).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.post('/users', async (req, res) => {
    try {
        const user = await UserModel.create(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});