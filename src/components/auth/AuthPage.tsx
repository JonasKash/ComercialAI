<<<<<<< HEAD

=======
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
import React, { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
<<<<<<< HEAD
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4

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
<<<<<<< HEAD
=======
  const navigate = useNavigate();
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4

  const handleTestLogin = () => {
    setEmail('teste@commercialai.com');
    setPassword('teste123');
    setIsLogin(true);
  };

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
          title: "Login realizado com sucesso!",
          description: "Bem-vindo de volta ao CommercialAI Pro.",
        });
<<<<<<< HEAD
=======
        navigate('/dashboard');
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
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
            }
          }
        });

        if (error) throw error;

        // Criar perfil do usuário
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
              onboarding_completed: true
            });

          if (profileError) {
            console.error('Erro ao criar perfil:', profileError);
          }
        }

        toast({
          title: "Conta criada com sucesso!",
          description: "Verifique seu email para confirmar sua conta.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Erro na autenticação",
        description: error.message,
        variant: "destructive",
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
          redirectTo: `${window.location.origin}/dashboard`
        }
      });

      if (error) throw error;
    } catch (error: any) {
      toast({
        title: "Erro no login com Google",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-8 w-8 text-purple-600 mr-2" />
            <h1 className="text-2xl font-bold text-gray-900">CommercialAI Pro</h1>
          </div>
          <p className="text-gray-600">
            {isLogin ? 'Entre na sua conta' : 'Crie sua conta gratuita'}
          </p>
        </div>

<<<<<<< HEAD
        {/* Seção de Teste - Botão para credenciais de teste */}
=======
        {/* Seção de Teste - Botão para credencial de teste Jonas */}
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
        <Card className="mb-4 bg-yellow-50 border-yellow-200">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <User className="h-5 w-5 text-yellow-600 mr-2" />
                <div>
<<<<<<< HEAD
                  <p className="text-sm font-medium text-yellow-800">Usuário de Teste</p>
                  <p className="text-xs text-yellow-600">teste@commercialai.com</p>
=======
                  <p className="text-sm font-medium text-yellow-800">Jonas Dev</p>
                  <p className="text-xs text-yellow-600">jonasdev3@hotmail.com</p>
                  <p className="text-xs text-yellow-600">Senha: javf21jonas</p>
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
<<<<<<< HEAD
                onClick={handleTestLogin}
                className="border-yellow-300 text-yellow-700 hover:bg-yellow-100"
              >
                Usar Teste
=======
                onClick={() => {
                  setEmail('jonasdev3@hotmail.com');
                  setPassword('javf21jonas');
                  setIsLogin(true);
                }}
                className="border-yellow-300 text-yellow-700 hover:bg-yellow-100"
              >
                Usar Jonas
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
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
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continuar com Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">Ou</span>
              </div>
            </div>

            <form onSubmit={handleAuth} className="space-y-4">
              {!isLogin && (
                <>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input
                        type="text"
                        placeholder="Nome"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required={!isLogin}
                      />
                    </div>
                    <div>
                      <Input
                        type="text"
                        placeholder="Sobrenome"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required={!isLogin}
                      />
                    </div>
                  </div>
                  <Input
                    type="text"
                    placeholder="Nome da Empresa"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </>
              )}

              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 h-4 w-4 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>

              <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={loading}>
                {loading ? 'Processando...' : (isLogin ? 'Entrar' : 'Criar Conta')}
              </Button>
            </form>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsLogin(!isLogin)}
                className="text-sm text-purple-600 hover:text-purple-700"
              >
                {isLogin ? 'Não tem conta? Criar uma' : 'Já tem conta? Fazer login'}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
