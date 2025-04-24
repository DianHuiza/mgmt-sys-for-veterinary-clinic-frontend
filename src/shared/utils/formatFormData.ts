import { ZodSchema } from "zod";

export const formatFormData = <T>(
  data: FormData,
  zodSchema: ZodSchema<T>
): T => {
  const objectData = Object.fromEntries(data.entries());
  return zodSchema.parse(objectData) as T;
};
