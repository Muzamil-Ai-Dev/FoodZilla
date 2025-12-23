const PEXELS_COLLECTIONS = {
  burger: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg",
  pizza: "https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg",
  sushi: "https://images.pexels.com/photos/2098085/pexels-photo-2098085.jpeg",
  restaurant: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg",
  user: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
  video_fallback: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
  dessert: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
  coffee: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
  asian: "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg",
  mexican: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
};

export type ImageCategory = keyof typeof PEXELS_COLLECTIONS;

export function getMockImage(category: ImageCategory): string {
  return PEXELS_COLLECTIONS[category];
}
