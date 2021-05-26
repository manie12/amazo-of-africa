import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserInputError } from 'apollo-server';
import User from '../../Models/postModels.js';
import { validation, validationLogin } from '../../Utils/Validation.js';


const userResolvers = {


    Mutation: {
        async register(_, { registerInput: { username, email, password, confirmPassword } }) {
            const { errors, valid } = await validation(username, email, password, confirmPassword)

            if (!valid) {
                throw new UserInputError('errors', { errors });
            }

            const existingUser = await User.findOne({ username });


            if (existingUser) {
                throw new UserInputError("user email already exist", {
                    errors: {
                        email: "user email already exist"
                    }
                });

            }

            if (existingUser) {
                throw new UserInputError("user already exist", {
                    errors: {
                        username: "User already taken"
                    }
                });
            }

            const hashedpassword = await bcrypt.hash(password, 12);

            const result = new User({
                username, email, password: hashedpassword, createdAt: new Date().toISOString()

            });

            const res = await result.save();

            const token = jwt.sign({ id: res._id, email: res.email, username: res.username }, "test", { expiresIn: '1hr' });

            return {

                ...result._doc,
                username: res.username,
                email: res.email,
                id: res._id,
                token

            }
        },
        async login(_, { username, password }) {
            const { errors, valid } = validationLogin(username, password);
            if (!valid) {
                throw new UserInputError('errors', { errors });
            }

            const existingUser = await User.findOne({ username });

            if (!existingUser) {
                throw new UserInputError("user does not exist", {
                    errors: {
                        email: "user does not exist"
                    }
                });

            }

            if (existingUser.password) {
                const correctPassword = await bcrypt.compare(password, existingUser.password);

                if (!correctPassword) {
                    throw new UserInputError("password does not match", {
                        errors: {
                            email: "password does not match"
                        }
                    });

                }

            }

            const token = jwt.sign({ id: existingUser._id, username: existingUser.username }, "test", { expiresIn: "1hr" })

            return {

                ...existingUser._doc,
                username: existingUser.username,
                email: existingUser.email,
                id: existingUser._id,
                token

            }



        }




    }
}


export default userResolvers;
