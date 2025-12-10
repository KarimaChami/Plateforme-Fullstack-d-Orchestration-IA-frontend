'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sparkles, Lock, User } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });

  const handleLogin = async () => {
    setLoading(true);
    const res = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginData)
    });

    if (!res.ok) {
      alert('Login failed');
      setLoading(false);
      return;
    }

    const data = await res.json();
    localStorage.setItem('token', data.access_token);

    router.push('/analyze');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-pink-900 flex items-center justify-center">
      <div className="bg-white/10 p-8 rounded-3xl w-full max-w-md">
        <div className="flex justify-center mb-6">
          <Sparkles className="text-white w-8 h-8" />
        </div>

        <input
          placeholder="Username"
          value={loginData.username}
          onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
          className="w-full mb-4 p-4 rounded-xl bg-white/10 text-white"
        />

        <input
          type="password"
          placeholder="Password"
          value={loginData.password}
          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
          className="w-full mb-6 p-4 rounded-xl bg-white/10 text-white"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-gradient-to-r from-orange-400 to-pink-500 py-4 rounded-xl text-white"
        >
          {loading ? 'Connexion...' : 'Se connecter'}
        </button>

        <p className="text-center mt-6 text-purple-200">
          Pas de compte ?{' '}
          <button onClick={() => router.push('/register')} className="text-orange-400">
            S’inscrire
          </button>
        </p>
      </div>
    </div>
  );
}
