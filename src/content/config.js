import { defineCollection, z } from "astro:content";
// z -> zod schema
const players = defineCollection ({
    schema: z.object({
        name: z.string(),
        position: z.string(),
        img: z.string(),
        minutesplayed: z.string(),
        shortbio: z.string(),
        transfermarket: z.string().url(),
    }),
})

export const collections = { players }