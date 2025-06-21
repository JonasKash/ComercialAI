<<<<<<< HEAD

=======
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, TrendingUp, Users, Zap, Brain, Target, BarChart3, MessageSquare } from "lucide-react";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">CommercialAI Pro</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">Recursos</a>
            <a href="#pricing" className="text-gray-600 hover:text-purple-600 transition-colors">Preços</a>
            <a href="#testimonials" className="text-gray-600 hover:text-purple-600 transition-colors">Cases</a>
<<<<<<< HEAD
            <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
              Login
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Começar Grátis
            </Button>
=======
            <Link to="/login">
              <Button variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50">
                Login
              </Button>
            </Link>
            <Link to="/login">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Começar Grátis
              </Button>
            </Link>
            <ThemeToggle />
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-6">
            🚀 Nova Era da Automação Comercial
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Automatize seu processo comercial com
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800"> IA</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Gere criativos profissionais, gerencie leads e otimize campanhas automaticamente. 
            Baseado em 25+ anos de experiência em vendas para empreendedores como você.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
<<<<<<< HEAD
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-4">
              <Zap className="w-5 h-5 mr-2" />
              Começar Grátis Agora
            </Button>
            <Button size="lg" variant="outline" className="border-purple-200 text-purple-700 hover:bg-purple-50 text-lg px-8 py-4">
              Ver Demonstração
            </Button>
=======
            <Link to="/login">
              <Button size="lg" className="bg-purple-600 text-white border border-purple-600 hover:bg-white hover:text-purple-700 hover:border-purple-600 text-lg px-8 py-4 transition-colors">
                <Zap className="w-5 h-5 mr-2" />
                Começar Grátis Agora
              </Button>
            </Link>
            <Link to="/login">
              <Button
                size="lg"
                className="bg-purple-600 text-white border border-purple-600 hover:bg-white hover:text-purple-700 hover:border-purple-600 text-lg px-8 py-4 transition-colors"
              >
                Ver Demonstração
              </Button>
            </Link>
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
          </div>
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              14 dias grátis
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Sem cartão de crédito
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
              Cancelamento fácil
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-700">10k+</div>
              <div className="text-gray-600">Empreendedores ativos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">85%</div>
              <div className="text-gray-600">Aumento em conversões</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">2.5M</div>
              <div className="text-gray-600">Criativos gerados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">R$50M</div>
              <div className="text-gray-600">Em vendas rastreadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tudo que você precisa para vender mais
            </h2>
            <p className="text-xl text-gray-600">
              Uma plataforma completa que combina IA, automação e estratégias comprovadas
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Criativos com IA</CardTitle>
                <CardDescription>
                  Gere textos, imagens e vídeos publicitários profissionais em segundos, 
                  personalizados para seu negócio
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>CRM Visual</CardTitle>
                <CardDescription>
                  Gerencie seus leads com interface Kanban intuitiva e automações 
                  inteligentes baseadas em IA
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Campanhas Automáticas</CardTitle>
                <CardDescription>
                  Publique e otimize campanhas no Facebook, Instagram e Google 
                  automaticamente com IA
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Analytics Avançado</CardTitle>
                <CardDescription>
                  Métricas em tempo real, ROI detalhado e insights de IA para 
                  otimizar suas vendas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Integrações Nativas</CardTitle>
                <CardDescription>
                  Conecte WhatsApp, Email, Stripe e outras ferramentas em um só lugar
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Academy Exclusiva</CardTitle>
                <CardDescription>
                  Aprenda estratégias comprovadas com nossa biblioteca de conteúdos 
                  e templates prontos
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Planos que crescem com seu negócio
            </h2>
            <p className="text-xl text-gray-600">
              Comece grátis e evolua conforme suas vendas aumentam
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Plano Gratuito */}
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-center">Gratuito</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold">R$0</span>
                  <span className="text-gray-500">/mês</span>
                </div>
                <CardDescription className="text-center">
                  Perfeito para começar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    1 usuário
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    10 criativos/mês
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    1.000 impressões
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    CRM básico (50 leads)
                  </li>
                </ul>
<<<<<<< HEAD
                <Button className="w-full" variant="outline">
                  Começar Grátis
=======
                <Button className="w-full" variant="outline" asChild>
                  <Link to="/login">Começar Grátis</Link>
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
                </Button>
              </CardContent>
            </Card>

            {/* Plano Growth */}
            <Card className="border-2 border-purple-500 relative">
              <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white">
                Mais Popular
              </Badge>
              <CardHeader>
                <CardTitle className="text-center">Growth</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold">R$49</span>
                  <span className="text-gray-500">/mês</span>
                </div>
                <CardDescription className="text-center">
                  Para empreendedores em crescimento
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    3 usuários
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    50 criativos/mês
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    5.000 impressões
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    CRM completo (500 leads)
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Integrações básicas
                  </li>
                </ul>
<<<<<<< HEAD
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
=======
                <Button className="w-full bg-purple-600 text-white border border-purple-600 hover:bg-white hover:text-purple-700 hover:border-purple-600 transition-colors">
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
                  Começar Teste Grátis
                </Button>
              </CardContent>
            </Card>

            {/* Plano Scale */}
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-center">Scale</CardTitle>
                <div className="text-center">
                  <span className="text-4xl font-bold">R$99</span>
                  <span className="text-gray-500">/mês</span>
                </div>
                <CardDescription className="text-center">
                  Para escalar seu negócio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    10 usuários
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Criativos ilimitados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    25.000 impressões
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Leads ilimitados
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Todas as integrações
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    API para desenvolvedores
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Começar Teste Grátis
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cases de sucesso reais
            </h2>
            <p className="text-xl text-gray-600">
              Veja como empreendedores estão transformando seus resultados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-100">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Aumentei meu faturamento em 180% nos primeiros 3 meses. 
                  A IA realmente entende meu negócio e cria criativos que convertem."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-semibold">MC</span>
                  </div>
                  <div>
                    <div className="font-semibold">Maria Castro</div>
                    <div className="text-sm text-gray-500">Consultora de Beleza</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Automatizou 90% do meu processo comercial. Agora foco apenas 
                  no que realmente importa: fechar negócios."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-semibold">RS</span>
                  </div>
                  <div>
                    <div className="font-semibold">Rafael Silva</div>
                    <div className="text-sm text-gray-500">Coach Executivo</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-100">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "ROI de 450% no primeiro mês. A plataforma paga por si só 
                  e ainda sobra muito lucro."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-semibold">AL</span>
                  </div>
                  <div>
                    <div className="font-semibold">Ana Lima</div>
                    <div className="text-sm text-gray-500">E-commerce Fashion</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-purple-800">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para revolucionar suas vendas?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Junte-se a milhares de empreendedores que já transformaram seus resultados 
            com automação comercial inteligente
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-50 text-lg px-8 py-4">
              <Zap className="w-5 h-5 mr-2" />
              Começar Grátis Agora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 text-lg px-8 py-4">
=======
            <Link to="/login">
              <Button
                size="lg"
                style={{ backgroundColor: "#7c3aed", color: "#fff", border: "none" }}
                className="text-lg px-8 py-4 hover:bg-purple-700 focus:bg-purple-700 active:bg-purple-800 transition-colors"
              >
                <Zap className="w-5 h-5 mr-2" />
                Começar Grátis Agora
              </Button>
            </Link>
            <Button
              size="lg"
              style={{ backgroundColor: "#7c3aed", color: "#fff", border: "none" }}
              className="text-lg px-8 py-4 hover:bg-purple-700 focus:bg-purple-700 active:bg-purple-800 transition-colors"
            >
>>>>>>> 0412e472e59cda104ff3c14cfe677a438d96a8b4
              Agendar Demonstração
            </Button>
          </div>
          <div className="mt-8 text-purple-200 text-sm">
            ✓ 14 dias grátis • ✓ Sem cartão de crédito • ✓ Suporte 24/7
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">CommercialAI Pro</span>
              </div>
              <p className="text-gray-400">
                Automação comercial inteligente para empreendedores que querem vender mais.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Produto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Recursos</li>
                <li>Preços</li>
                <li>Academy</li>
                <li>API</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Sobre</li>
                <li>Blog</li>
                <li>Carreiras</li>
                <li>Contato</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Central de Ajuda</li>
                <li>Status</li>
                <li>Comunidade</li>
                <li>Termos & Privacidade</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CommercialAI Pro. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
