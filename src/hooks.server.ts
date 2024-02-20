import { dbConnect } from "$lib/services/db";
import type { Handle } from "@sveltejs/kit";

await dbConnect();

export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  return response;
};
