import nc from "next-connect";
import { getAllUsers } from "../../../controllers/auth.controller";
import { dbConnect } from "../../../utils/dbConnect";
import { onError } from "../../../middlewares/error";

const handler = nc({ onError });

dbConnect();

handler.get(getAllUsers);

export default handler;
