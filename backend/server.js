require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 4000;
const VTEX_ACCOUNT = process.env.VTEX_ACCOUNT;
const VTEX_APP_KEY = process.env.VTEX_APP_KEY;
const VTEX_APP_TOKEN = process.env.VTEX_APP_TOKEN;

app.get('/api/order/:orderId', async (req, res) => {
  const { orderId } = req.params;

  try {
    const response = await axios.get(
      `https://${VTEX_ACCOUNT}.vtexcommercestable.com.br/api/oms/pvt/orders/${orderId}`,
      {
        headers: {
          'X-VTEX-API-AppKey': VTEX_APP_KEY,
          'X-VTEX-API-AppToken': VTEX_APP_TOKEN,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error('Error al obtener la orden:', error.message);
    res.status(500).json({ error: 'Error al obtener la orden' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
});
