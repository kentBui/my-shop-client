import nc from "next-connect";
import { getProfile } from "../../controllers/auth.controller";
import { isAuthenticated, isUser } from "../../middlewares/auth";
import { onError } from "../../middlewares/error";

const handler = nc({ onError: onError });

handler.use(isUser);
handler.get(getProfile);

export default handler;
