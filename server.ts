import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON and form data
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const formData = req.body;
    // VOOR TESTEN: Gebruik het e-mailadres van de gebruiker
    const CONTACT_EMAIL = "cblogisticsandtransportation@gmail.com"; 
    // const CONTACT_EMAIL = "contact@ellasdiensten.nl";

    try {
      // We use FormSubmit as a reliable backend delivery engine
      // This keeps the implementation robust without needing complex SMTP setup
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: formData._subject || "Nieuwe aanvraag via website",
          _template: "table",
          _captcha: "false",
        }),
      });

      const result = await response.json();

      if (response.ok) {
        res.status(200).json({ success: true, message: "Bericht succesvol verzonden" });
      } else {
        res.status(response.status).json({ success: false, message: result.message || "Fout bij verzenden" });
      }
    } catch (error) {
      console.error("Backend error:", error);
      res.status(500).json({ success: false, message: "Interne serverfout" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
