import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  const agora = new Date();

  res.json({
    date: agora.toLocaleDateString("pt-BR"),
    time: agora.toLocaleTimeString("pt-BR"),
    status: "API no Render em funcionamento!",
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`O servidor está rodando na porta: ${PORT}`),
);
