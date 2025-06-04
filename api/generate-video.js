export default function handler(req, res) {
  if (req.method === 'POST') {
    const { imageUrl, prompt } = req.body;
    console.log('Recebido:', imageUrl, prompt);
    res.status(200).json({ message: 'Vídeo gerado com sucesso (simulado)' });
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
}
