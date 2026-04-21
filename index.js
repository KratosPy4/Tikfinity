const express = require("express");
const { Rcon } = require("rcon-client");

const app = express();
app.use(express.json());

const rconConfig = {
  host: "TU_HOST_ATERNOS",
  port: 25575,
  password: "TU_PASSWORD"
};

app.post("/tikfinity", async (req, res) => {
  const event = req.body;

  try {
    const rcon = await Rcon.connect(rconConfig);

    if (event.type === "gift") {
      await rcon.send("summon zombie");
    }

    if (event.type === "follow") {
      await rcon.send("give @p diamond 3");
    }

    rcon.end();
  } catch (err) {
    console.log(err);
  }

  res.sendStatus(200);
});

app.listen(process.env.PORT || 3000);
