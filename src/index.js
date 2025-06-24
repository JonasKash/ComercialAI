import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import planilhaRoutes from './routes/planilha.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/commercialai';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => console.error('Erro ao conectar MongoDB:', err));

app.get('/', (req, res) => {
  res.send('API CommercialAI Pro rodando!');
});

app.use('/api/auth', authRoutes);
app.use('/api/planilha', planilhaRoutes);

app.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`);
}); 