import { z } from "zod";

export const createClientSchema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    address: z.string(),
    phone: z.string(),
    dni: z.string(),
  })
  .strict();
export const updateClientSchema = createClientSchema.partial();

export const createPetSchema = z.object({
  name: z.string().min(2),
  birthday: z.date(),
  breed: z.string(),
  species: z.string(),
  gender: z.enum(["MALE", "FEMALE"]),
  ownerId: z.number(),
});
export const updatePetSchema = createPetSchema.partial();


export type CreatePetDto = z.infer<typeof createPetSchema>;
export type UpdatePetDto = z.infer<typeof updatePetSchema>;
export interface Pets extends CreatePetDto {
  id: number
}


export type CreateClientDto = z.infer<typeof createClientSchema>;
export type UpdateClientDto = z.infer<typeof updateClientSchema>;
export interface Client extends CreateClientDto {
  id: number;
}
export interface ClientWhitPets extends Client {
  pets: Pets[];
}
