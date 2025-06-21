import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        toast({
          title: 'Login realizado com sucesso!',
          description: 'Bem-vindo de volta ao CommercialAI Pro.',
        });
        navigate('/dashboard');
      } else {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: `${window.location.origin}/dashboard`,
            data: {
              first_name: firstName,
              last_name: lastName,
              company_name: companyName,
            },
          },
        });
        if (error) throw error;
        if (data.user) {
          const { error: profileError } = await supabase
            .from('profiles')
            .insert({
              id: data.user.id,
              first_name: firstName,
              last_name: lastName,
              company_name: companyName,
              industry: 'Marketing Digital',
              plan_type: 'free',
              onboarding_completed: true,
            });
          if (profileError) {
            console.error('Erro ao criar perfil:', profileError);
          }
        }
        toast({
          title: 'Conta criada com sucesso!',
          description: 'Verifique seu email para confirmar sua conta.',
        });
      }
    } catch (error: any) {
      toast({
        title: 'Erro na autenticação',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/dashboard`,
        },
      });
      if (error) throw error;
    } catch (error: any) {
      toast({
        title: 'Erro no login com Google',
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-purple-600 dark:text-purple-400 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">CommercialAI Pro</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            {isLogin ? 'Entre na sua conta' : 'Crie sua conta gratuita'}
          </p>
        </div>
        {/* Seção de Teste - Botão para credenciais de teste */}
        <Card className="mb-4 bg-yellow-50 border-yellow-200 dark:bg-yellow-900 dark:border-yellow-700">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <User className="h-5 w-5 text-yellow-600 mr-2" />
                <div>
                  <p className="text-sm font-medium text-yellow-800 dark:text-yellow-200">Usuário de Teste</p>
                  <p className="text-xs text-yellow-600 dark:text-yellow-300">jonasdev3@hotmail.com</p>
                  <p className="text-xs text-yellow-600 dark:text-yellow-300">Senha: javf21jonas</p>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setEmail('jonasdev3@hotmail.com');
                  setPassword('javf21jonas');
                  setIsLogin(true);
                }}
                className="border-yellow-300 text-yellow-700 hover:bg-yellow-100 dark:border-yellow-600 dark:text-yellow-200 dark:hover:bg-yellow-800"
              >
                Usar Teste
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">
              {isLogin ? 'Fazer Login' : 'Criar Conta'}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button
              onClick={handleGoogleAuth}
              variant="outline"
              className="w-full"
              disabled={loading}
            >
              Entrar com Google
            </Button>
            <form onSubmit={handleAuth} className="space-y-4">
              {!isLogin && (
                <>
                  <Input
                    placeholder="Nome"
                    value={firstName}
                    onChange={e => setFirstName(e.target.value)}
                    required
                  />
                  <Input
                    placeholder="Sobrenome"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                    required
                  />
                  <Input
                    placeholder="Empresa"
                    value={companyName}
                    onChange={e => setCompanyName(e.target.value)}
                    required
                  />
                </>
              )}
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Senha"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white" disabled={loading}>
                {isLogin ? 'Entrar' : 'Criar Conta'}
              </Button>
            </form>
            <div className="text-center mt-4">
              <button
                type="button"
                className="text-sm text-purple-600 hover:underline dark:text-purple-400"
                onClick={() => setIsLogin(!isLogin)}
              >
                {isLogin ? 'Não tem conta? Crie uma!' : 'Já tem conta? Faça login!'}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
