
import mongoose, { Schema, Document } from 'mongoose';


interface ITodo extends Document {
    description: string;
    completed: boolean;
}

const TodoSchema: Schema = new Schema({
    description: { type: String, required: true },
    completed: { type: Boolean, required: true },
});

const Todo = mongoose.model<ITodo>('Person', TodoSchema);

export default Todo;