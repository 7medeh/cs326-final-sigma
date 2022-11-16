const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();
const port = 3000;

app.use(express.json());
app.use('/', express.static('views'));

const users = [
	{
		email: 'jack@gmail.com',
		name: 'jack',
		password: '123456',
	},
	{
		email: 'alex@gmail.com',
		name: 'alex',
		password: '123456',
	}
];

const gameHistories = []

const rankings = [];
for (let i = 0; i < 10; i++) {
	rankings.push({
		avatar: faker.image.avatar(),
		name: faker.name.fullName(),
		rank: i+1
	})
}

for (let i = 0; i < 10; i++) {
	gameHistories.push({
		dateTime: faker.datatype.datetime(),
		address: faker.address.streetAddress(),
		adversary: faker.name.fullName(),
		score: faker.datatype.number({ max: 11 }) + ':' + faker.datatype.number({ max: 11 }),
		isFinish: faker.datatype.boolean(),
	});
}

// user signup
app.post('/signup', (req, res) => {
	const { email, name, password } = req.body;

	const matchedUser = users.find(user => user.email === email);
	if (matchedUser) {
		return res.json({ message: 'Email has been registered.' })
	}

	const newUser = {
		email,
		name,
		password,
	}

	users.push(newUser);

	res.json(newUser);
});

// user signin
app.post('/signin', (req, res) => {
	const { email, password } = req.body;

	const matchedUser = users.find(user => user.email === email);
	if (!matchedUser || matchedUser.password !== password) {
		return res.json({ message: 'Invalid email or password.' })
	}

	res.json(matchedUser);
});

// update user level
app.put('/:email', (req, res) => {
	const { email } = req.params;
	const { level } = req.body;

	const matchedUser = users.find(user => user.email === email);
	if (!matchedUser) {
		return res.json({ message: 'Email does not exist.' })
	}
	matchedUser.level = level

	res.json(matchedUser);
});

// Ranking list
app.get('/ranking', (req, res) => {
	res.json(rankings);
});

// game history list
app.get('/gameHistory', (req, res) => {
	res.json(gameHistories);
});


app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
});
