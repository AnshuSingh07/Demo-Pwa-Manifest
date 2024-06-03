import { MetadataRoute } from "next";

// Define the structure of the manifest
const myPromise = (): Promise<MetadataRoute.Manifest> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        name: "Bee",
        short_name: "bee_pwa",
        theme_color: "#ffffff",
        background_color: "#ffc0cb",
        display: "standalone",
        orientation: "any",
        scope: "/",
        start_url: "/demo-bee",
        icons: [
          { src: "/busy-bee-192.png", type: "image/png", sizes: "192x192" },
          { src: "/busy-bee-256.png", type: "image/png", sizes: "256x256" },
          { src: "/busy-bee-512.png", type: "image/png", sizes: "512x512" },
        ],
      });
    }, 200);
  });

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const response: MetadataRoute.Manifest = await myPromise();
  return response;
}
