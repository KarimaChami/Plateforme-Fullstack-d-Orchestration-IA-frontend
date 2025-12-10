'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleRegister = async () => {
  if (data.password !== data.confirmPassword) return;

  const res = await fetch('http://localhost:8000/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: data.username,
      password: data.password
    })
  });

  if (res.ok) router.push('/login');

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 flex items-center justify-center">
      <div className="bg-white/10 p-8 rounded-3xl w-full max-w-md">
        <Sparkles className="mx-auto mb-6 text-white w-8 h-8" />

        <input
          placeholder="Username"
          value={data.username}
          onChange={(e) => setData({ ...data, username: e.target.value })}
          className="w-full mb-4 p-4 rounded-xl bg-white/10 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          className="w-full mb-4 p-4 rounded-xl bg-white/10 text-white"
        />

        <input
          type="password"
          placeholder="Confirm password"
          value={data.confirmPassword}
          onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
          className="w-full mb-6 p-4 rounded-xl bg-white/10 text-white"
        />

        <button
          onClick={handleRegister}
          disabled={loading}
          className="w-full bg-gradient-to-r from-orange-400 to-pink-500 py-4 rounded-xl text-white"
        >
          {loading ? 'Création...' : 'Créer compte'}
        </button>

        <p className="text-center mt-6 text-purple-200">
          Déjà un compte ?{' '}
          <button onClick={() => router.push('/login')} className="text-orange-400">
            Se connecter
          </button>
        </p>
      </div>
    </div>
  );
}
