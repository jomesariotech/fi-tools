import express from "express";

const app = express();

// Middlewares globales
app.use(express.json());

// Health Check
app.get("/health", (_, res) => {
    res.json({
        status: "ok",
        service: "fi-tools",
        version: "0.1.0"
    });
});

export default app;
