import mongoose from "mongoose";
import faker from "faker";
import Field from "./models/field.js";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

for (let i = 0; i < 10; i++) {
  const field = new Field({
    name: `${faker.animal.type()} field`,
    cost: Math.floor(Math.random() * 5),
    createdAt: Date.now(),
    rating: Math.floor(Math.random() * 5),
    location: {
      lat: faker.address.latitude(),
      lng: faker.address.longitude(),
    },
  });

  field.save().then((fieldRef) => {
    console.log(`${fieldRef.name} saved successfully`);
  });
}
