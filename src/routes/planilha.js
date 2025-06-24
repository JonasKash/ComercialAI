import express from 'express';
import xlsx from 'xlsx';
import path from 'path';
import { fileURLToPath } from 'url';

const router = express.Router();

// Para resolver __dirname em ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
  try {
    // Caminho absoluto para a planilha
    const filePath = path.resolve(__dirname, '../../../BD/PlanilhaparaJonasFazerDashboard.xlsx');
    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const data = xlsx.utils.sheet_to_json(sheet);
    res.json({ data });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao ler a planilha', error: err.message });
  }
});

export default router; 