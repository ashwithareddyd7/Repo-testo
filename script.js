const API_KEY = "AIzaSyCF_ZZIe4JHgruVTW_eeHuZhA7OzfJLlV0";
const summarizeBtn = document.getElementById("summarizeBtn");
const inputText = document.getElementById("inputText");
const summaryText = document.getElementById("summaryText");

summarizeBtn.addEventListener("click", async () => {
  const text = inputText.value.trim();
  if (!text) {
    alert("Please enter text to summarize!");
    return;
  }

  summaryText.textContent = "⏳ Summarizing... please wait.";

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: "Summarize the following text:\n\n" + text }]
            }
          ]
        })
      }
    );

    const data = await response.json();
    console.log("Gemini API Response:", data);

    // ✅ Correctly extract the summary text
    let summary = "No summary found.";
    if (
      data &&
      data.candidates &&
      data.candidates[0] &&
      data.candidates[0].content &&
      data.candidates[0].content.parts &&
      data.candidates[0].content.parts[0].text
    ) {
      summary = data.candidates[0].content.parts[0].text;
    }

    summaryText.textContent = summary;
  } catch (error) {
    console.error("Error:", error);
    summaryText.textContent = "❌ Error summarizing text.";
  }
});
