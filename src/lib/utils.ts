import ImageKit from "imagekit";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const privateKey = process.env.PRIVATE_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

if (!publicKey || !privateKey || !urlEndpoint) {
  throw new Error("Missing required ImageKit environment variables.");
}

export const imagekit = new ImageKit({
  publicKey,
  privateKey,
  urlEndpoint,
});
