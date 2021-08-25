import { connectToDatabase } from "../../util/mongodb";
import withSession from "../../lib/session";

export default withSession(async (req, res) => {
  const { email } = req.body;

  const { db } = await connectToDatabase();
  const login = await db.collection("user").findOne({ email });

  const user = { isLoggedIn: true, login };

  req.session.set("user", user);
  await req.session.save();
  res.json(user);
});
