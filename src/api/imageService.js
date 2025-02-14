const API_KEY = "your_openai_api_key"; // 🔴 Replace with your OpenAI API Key

export const fetchImages = async () => {
  try {
    const response = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        prompt: "a futuristic city skyline at sunset, cyberpunk style", // 🔴 Change prompt as needed
        n: 5, // Number of images
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
