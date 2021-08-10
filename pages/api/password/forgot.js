import nc from "next-connect";
import { forgotPassword } from "../../../controllers/auth.controller";
import { onError } from "../../../middlewares/error";
import { dbConnect } from "../../../utils/dbConnect";

const handler = nc({ onError });
dbConnect();

handler.post(forgotPassword);

export default handler;
