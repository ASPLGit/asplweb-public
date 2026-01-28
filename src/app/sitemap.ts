import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aplombsoft.com",
      lastModified: new Date(),
    },
    {
      url: "https://aplombsoft.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://aplombsoft.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://aplombsoft.com/contact",
      lastModified: new Date(),
    },
  ];
}
