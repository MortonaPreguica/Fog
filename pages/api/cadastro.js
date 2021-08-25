import bcrypt from "bcrypt";
import { connectToDatabase } from "../../util/mongodb";

const Cadastro = async (req, res) => {
  const { name, password, email } = req.body;

  console.log(name);
  const { db } = await connectToDatabase();

  //check if email existed
  const asEmail = await db.collection("user").findOne({ email });

  if (asEmail) {
    res.status(403).send("The email is already been used");
    return;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await db
    .collection("user")
    .insertOne({ email, password: hashedPassword, name })
    .then(({ ops }) => ops[0]);

  res.json(user);
};

export default Cadastro;
