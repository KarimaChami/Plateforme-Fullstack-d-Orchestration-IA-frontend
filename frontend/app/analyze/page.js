'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Brain } from 'lucide-react';

export default function AnalyzePage() {
  const router = useRouter();

  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);

    const token = localStorage.getItem('token');

    const res = await fetch('http://localhost:8000/analyze', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ text }),
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  const logout = () => {
    localStorage.removeItem('token');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 text-white">
      <div className="flex justify-between p-6">
        <h1 className="font-bold">Hybrid-Analyzer</h1>
        <button onClick={logout}>Déconnexion</button>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-48 bg-white/10 rounded-xl p-4"
          placeholder="Collez votre texte ici..."
        />

        <button
          onClick={handleAnalyze}      
          disabled={loading || !text}
          className="mt-4 w-full bg-gradient-to-r from-orange-400 to-pink-500 py-4 rounded-xl"
        >
          {loading ? 'Analyse en cours...' : 'Analyser'}
        </button>

        {result && (
          <pre className="mt-6 bg-black/30 p-4 rounded-xl">
            {JSON.stringify(result, null, 2)}
          </pre>
        )}
      </div>
    </div>
  );
}
