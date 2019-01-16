import express from 'express';
const app = express()
const port = process.env.PORT || 1605;

app.get('/', (req, res) => {
    res.send("https://external-preview.redd.it/ssPoxixHAT2jSesPJuKP8hcSZIcICVUqx5MB6zTzH_w.jpg?width=1023&auto=webp&s=69320328fde8b1b9aa4e31a7b8451f5843cd8e41")
})

app.get("/cat", function (req, res) {
    res.status(200).send({ message: 'Welcome to our restful API' });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})
