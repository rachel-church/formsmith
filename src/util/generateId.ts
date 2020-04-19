import { nanoid } from 'nanoid';

/**
 * Generates a URL-friendly, unique string ID
 * Example: "V1StGXR8_Z5jdHi6B-myT"
 *
 * @param size Size of the ID. The default size is 21.
 * @returns A random string.
 */
export const generateId = nanoid;
