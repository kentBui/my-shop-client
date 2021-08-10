import nc from "next-connect";
import { resetPassword } from "../../../../controllers/auth.controller";
import { onError } from "../../../../middlewares/error";
import { dbConnect } from "../../../../utils/dbConnect";

const handler = nc({ onError });
dbConnect();

handler.post(resetPassword);

export default handler;
