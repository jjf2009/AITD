import express from "express";
import cors from "cors";
import path from "path";
import fetch from "node-fetch";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import twilio from "twilio";

dotenv.config();

const app = express();
const port = 3000;

// Enable JSON body parsing for POST requests
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Twilio client setup
const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

// CORS configuration
const corsOptions = {
  origin: ["http://localhost:5173"], // Allow frontend dev server
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

// Serve static files (frontend build or public)
app.use(express.static(path.join(__dirname, "../public")));

// 🌦️ Weather API route
app.get("/api/weather", async (req, res) => {
  const { lat, lon } = req.query;
  const apiKey = process.env.WEATHER_API_KEY;

  console.log("🔍 Weather API hit with lat:", lat, "lon:", lon);
  console.log("🗝️ WEATHER_API_KEY:", apiKey);

  const baseUrl = "https://api.openweathermap.org/data/2.5";

  const currentUrl = lat && lon
    ? `${baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    : `${baseUrl}/weather?q=Mapusa&appid=${apiKey}&units=metric`;

  const forecastUrl = lat && lon
    ? `${baseUrl}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    : `${baseUrl}/forecast?q=Mapusa&appid=${apiKey}&units=metric`;

  try {
    const [currentRes, forecastRes] = await Promise.all([
      fetch(currentUrl),
      fetch(forecastUrl),
    ]);

    const currentData = await currentRes.json();
    const forecastData = await forecastRes.json();

    if (currentData.cod !== 200 || forecastData.cod !== "200") {
      throw new Error("Invalid API Key or API limit exceeded.");
    }

    console.log("✅ Weather data fetched.");
    res.json({ current: currentData, forecast: forecastData });
  } catch (err) {
    console.error("❌ Failed to fetch weather:", err.message);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

// 📲 Twilio WhatsApp alert route
app.post("/notify-farmer", async (req, res) => {
  const { phone, alertType } = req.body;

  let messageBody = "";
  switch (alertType) {
    case "weather":
      messageBody = "🌦️ Weather Update: Rain expected tomorrow.";
      break;
    case "drought":
      messageBody = "🚨 Drought Alert: Prolonged dry period detected. Please conserve water.";
      break;
    case "fertilizer":
      messageBody = "🌾 Fertilizer Reminder: Time to fertilize your crops for a healthy yield!";
      break;
    default:
      messageBody = "📢 General Alert from AgriBot.";
  }

  try {
    const message = await client.messages.create({
      from: "whatsapp:+14155238886", // Twilio Sandbox WhatsApp number
      to: `whatsapp:${phone}`,
      body: messageBody,
    });

    console.log("✅ Message sent. SID:", message.sid);
    res.status(200).json({ success: true, sid: message.sid });
  } catch (error) {
    console.error("❌ Failed to send message:", error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
