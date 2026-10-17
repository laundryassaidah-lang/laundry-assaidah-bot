const express = require("express");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    usaha: "Laundry Assaidah",
    status: "Server dasar aktif",
    whatsapp: "Belum terhubung"
  });
});

app.post("/perintah", (req, res) => {
  const pesan = String(req.body.pesan || "").trim();

  if (!pesan) {
    return res.status(400).json({
      berhasil: false,
      pesan: "Pesan tidak boleh kosong."
    });
  }

  res.json({
    berhasil: true,
    pesan: "Perintah diterima untuk simulasi.",
    catatan: pesan,
    status: "SIMULASI - belum disimpan"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server Laundry Assaidah berjalan.");
});
