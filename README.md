##  Note about the API Error

When testing the project, you might see an error like:

> "Failed to load resource: the server responded with a status of 404 (Not Found)"  
> or  
> "No summary found"

This happens because the Gemini API cannot be called directly from the browser or GitHub Pages.  
Google requires a **backend server** to handle the API key securely, so browser requests are blocked for security reasons.

The frontend part (HTML, CSS, JavaScript) is working correctly.  
Once connected to a Node.js or Replit backend, the summarization feature will work properly.
