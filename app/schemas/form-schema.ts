import { z } from "zod"

export const formSchema = z.object({
    firstName: z.string().min(1, "The Name field is required"),
    lastName: z.string().min(1, "The Lastname field is required")
})

export type FormValues = z.infer<typeof formSchema>