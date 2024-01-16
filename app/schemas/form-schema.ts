import { z } from "zod"

export const formSchema = z.object({
    firstName: z.string({required_error: "The Name field is required"}).min(1, "The Name field is required"),
    lastName: z.string({required_error: "The Lastname field is required"}).min(1, "The Lastname field is required")
})

export type FormValues = z.infer<typeof formSchema>