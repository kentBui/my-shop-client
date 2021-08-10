import nc from "next-connect";
import { dbConnect } from "../../../utils/dbConnect";
import { onError } from "../../../middlewares/error";
import { registerUser } from "../../../controllers/auth.controller";

const handler = nc({ onError });

dbConnect();

handler.post(registerUser);

export default handler;
