import { useState } from 'react';

export default function Home() {
  const [imageUrl, setImageUrl] = useState('');
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);

  const handleSubmit = async () => {
    setLoading(true);
    setVideoUrl(null);

    try {
      const res = await fetch('/api/generate-video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageUrl, prompt }),
      });

      const data = await res.json();
      // Aqui é só simulação. Você pode colocar um vídeo temporário até integrar a IA real.
      setVideoUrl('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4');
    } catch (err) {
      console.error('Erro ao gerar vídeo:', err);
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: 'auto' }}>
      <h1>FelipeVerse AI 🎥</h1>
      <input
        type="text"
        placeholder="Cole aqui a URL da imagem (por enquanto)"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        style={{ width: '100%', padding: 10, marginBottom: 10 }}
      />
      <textarea
        placeholder="Digite seu prompt sem restrições..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: '100%', padding: 10, height: 100, marginBottom: 10 }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          width: '100%',
          fontWeight: 'bold',
        }}
      >
        Gerar vídeo com IA
      </button>

      {loading && <p style={{ marginTop: 20 }}>Gerando vídeo, por favor aguarde...</p>}
      {videoUrl && (
        <video controls style={{ marginTop: 20, width: '100%' }}>
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
