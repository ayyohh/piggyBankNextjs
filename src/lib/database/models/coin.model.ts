import { Document, Schema, model, models } from "mongoose";

export interface ICoin extends Document {
  _id: string;
  coin: string;
  purchases: { _id: string, }
  owner: { _id: string, firstName: string, lastName: string }
}

const CoinSchema = new Schema({
  coin: { type: String, required: true },
  purchases: { type: Schema.Types.ObjectId, ref: 'Purchases' },
  owner: { type: Schema.Types.ObjectId, ref: 'User' },
})

const Coin = models.Coin || model('Coin', CoinSchema);

export default Coin;