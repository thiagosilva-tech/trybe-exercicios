const express = require('express');
const cacauTrybe = require('./cacauTrybe');
  
const app = express();
app.use(express.json());

app.get('/chocolates', async (req, res) => {
    const chocolates = await cacauTrybe.getAllChocolates();
    res.status(200).json({ chocolates }); 
});

// app.get('/chocolates/:id', (req, res) => {
//     const { id } = req.params;

//     const findChocolate = chocolates.find((chocolate) => chocolate.id === Number(id));

//     if (!findChocolate) {
//         return res.status(404).json({ message: 'Chocolate not found' });
//     }

//     res.status(200).json({ findChocolate });
// });

// app.get('/chocolates/brand/:brandId', (req, res) => {
//     const { brandId } = req.params;

//     const findBrand = chocolates.find((chocolate) => chocolate.brandId === Number(brandId));

//     if (!findBrand) {
//         return res.status(404).json({ message: 'Brand not found' });
//     }

//     res.status(200).json({ findBrand });
// });

module.exports = app;