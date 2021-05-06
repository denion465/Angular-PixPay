import mongoose, { Schema, Document } from 'mongoose'

export interface PeopleInterface extends Document {
  name: string,
  lastName: string,
  age: number,
  cityUf: string,
  profission: string,
  wage: number,
}

const PeopleSchema: Schema = new Schema({
  name: { type: String, require: true },
  lastName: { type: String, require: true },
  age: { type: Number, require: true },
  cityUf: { type: String, require: true },
  profission: { type: String, require: true },
  wage: { type: Number, require: true },
},
{
  collection: 'Peoples'
});

export default mongoose.model<PeopleInterface>('People', PeopleSchema)
