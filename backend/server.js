const express = require('express');
const app = express();
const cors = require('cors');
const mongose = require('mongoose');
const User = require('./models/user');
const fileUpload = require('express-fileupload');



mongose.connect('mongodb://127.0.0.1:27017/Challange', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Connected to database!');
}).catch(() => {
    console.log('Connection failed!');
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(fileUpload());
app.use(express.static('public'));

app.get('/api', (req, res) => {
    res.send('Hello from the backend!');
});

app.post('/api/users', async(req, res) => {
    console.log(req.body)
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        mobile: req.body.mobile,
        gender: req.body.gender,
        availableOn: req.body.availableOn,
        company: req.body.company,
        graduatedFrom: req.body.graduatedFrom,
    }

    await User.create(user);
    // await User.save()

    res.json({
        message: 'User created successfully!',
        ok: true
    });
});

app.post('/api/upload', async(req, res) => {

    console.log("req.files", req.files)
    const { file } = req.files;
    console.log("file", file)
    const fileName = file.name;
    console.log("fileName", fileName)
    const filePath = `public/${fileName}`;
    console.log("filePath", filePath)
        // if (!file) return res.sendStatus(400);
        // else {

    await file.mv(__dirname + '/upload/' + Math.random() * 10000 + file.name);
    res.sendStatus(200).json({
        message: 'File uploaded successfully!',
        ok: true,
        fileName: fileName,
    });
    // }
});

app.get('/api/users', async(req, res) => {
    const users = await User.find();
    console.log(users)
    res.json(users);
});


app.listen(4000, () => console.log('Listening on port 4000!'));