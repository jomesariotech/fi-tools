import app from "./app";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("==================================");
    console.log("🚀 Fi Tools");
    console.log(`🌐 Listening on port ${PORT}`);
    console.log("==================================");
});
