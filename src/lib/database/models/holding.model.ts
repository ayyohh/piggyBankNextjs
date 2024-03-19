import { Schema, model, models } from "mongoose";

const HoldingSchema = new Schema({
  
  coin: { type: String, required: true, unique: true },
  numberHolding: { type: String, required: true, unique: true },
  //priceBoughtAt


})

const Holding = models.Holding || model('Holding', HoldingSchema);

export default Holding;