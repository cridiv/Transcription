const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

export const fetchImages = async (prompt) => {
  if (!prompt) {
    console.error("Prompt is required for image generation.");
    return [];
  }

  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "dall-e-3",
        prompt,
        n: 1,
        size: "1024x1024",
      }),
    });

    const data = await response.json();
    if (data.error) {
      throw new Error(data.error.message);
    }

    return data.data.map((img, index) => ({
      id: index + 1,
      imageUrl: img.url,
      date: new Date().toLocaleDateString(),
    }));
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

