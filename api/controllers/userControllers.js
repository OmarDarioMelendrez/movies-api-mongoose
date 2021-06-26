const User = require("../models/User");
const bcrypt = require("bcrypt");
// get all users
const getAllUsers = async (req, res, next) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (err) {
		next(err);
	}
};
// get user by id
const getSigleUser = async (req, res, next) => {
	try {
		const users = await User.findById(req.params.id);
		res.json(users);
	} catch (err) {
		next(err);
	}
};
// create user
const createUser = async (req, res) => {
	try {
		let { username, firstName, lastName, email, password } = req.body;
		const saltRounds = 10;
		const passwordHash = await bcrypt.hash(password, saltRounds);
		user = await User.create({
			username,
			firstName,
			lastName,
			email,
			password: passwordHash,
		});

		res.status(201).json(user);
	} catch (err) {
		next(err);
	}
};

// update user
const updateUser = async (req, res) => {
	try {
		const { id } = req.params;
		let user = req.body;
		user._id = id;

		await User.updateOne(user);

		res.json(user);
	} catch (err) {
		next(err);
	}
};

const deleteUser = async (req, res) => {
	try {
		const { id } = req.params;
		await User.findByIdAndDelete(id);
		const result = {
			message: `User with id: ${id} deleted`,
		};
		res.json(result);
	} catch (err) {
		next(err);
	}
};

module.exports = {
	getAllUsers,
	getSigleUser,
	createUser,
	updateUser,
	deleteUser,
};
