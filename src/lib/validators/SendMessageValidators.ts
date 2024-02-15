import { z } from "zod";

//Data expected in the POST body
export const SendMessageValidator = z.object({
    fileId: z.string(),
    message: z.string()
})