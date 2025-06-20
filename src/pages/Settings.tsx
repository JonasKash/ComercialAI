import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Palette, 
  Globe, 
  Download,
  Upload,
  Trash2,
  Save,
  Eye,
  EyeOff
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useThemeCustom } from '@/hooks/use-theme';
import Sidebar from '@/components/dashboard/Sidebar';
import TopHeader from '@/components/dashboard/TopHeader';
import AuthWrapper from '@/components/auth/AuthWrapper';

const Settings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'profile');
  const [showPassword, setShowPassword] = useState(false);
  const [sidebarExpanded, setSidebarExpanded] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { theme, setThemeMode, mounted } = useThemeCustom();

  const tabs = [
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'security', label: 'Segurança', icon: Shield },
    { id: 'plans', label: 'Planos', icon: CreditCard },
    { id: 'appearance', label: 'Aparência', icon: Palette },
    { id: 'integrations', label: 'Integrações', icon: Globe },
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setSearchParams({ tab: tabId });
  };

  const handleSave = () => {
    toast({
      title: "Configurações salvas",
      description: "Suas configurações foram atualizadas com sucesso.",
    });
  };

  const handleThemeChange = (newTheme: string) => {
    setThemeMode(newTheme as 'light' | 'dark' | 'system');
    toast({
      title: "Tema alterado",
      description: `Tema alterado para ${newTheme === 'system' ? 'sistema' : newTheme === 'dark' ? 'escuro' : 'claro'}.`,
    });
  };

  const renderProfileTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Informações Pessoais</CardTitle>
          <CardDescription>
            Atualize suas informações pessoais e de contato
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Nome</Label>
              <Input id="firstName" defaultValue="João" />
            </div>
            <div>
              <Label htmlFor="lastName">Sobrenome</Label>
              <Input id="lastName" defaultValue="Silva" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="joao.silva@email.com" />
          </div>
          <div>
            <Label htmlFor="company">Empresa</Label>
            <Input id="company" defaultValue="Minha Empresa" />
          </div>
          <div>
            <Label htmlFor="phone">Telefone</Label>
            <Input id="phone" defaultValue="(11) 99999-9999" />
          </div>
          <div>
            <Label htmlFor="bio">Biografia</Label>
            <Textarea 
              id="bio" 
              placeholder="Conte um pouco sobre você..."
              defaultValue="Profissional de marketing digital com foco em campanhas de performance."
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Alterar Senha</CardTitle>
          <CardDescription>
            Mantenha sua conta segura com uma senha forte
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="currentPassword">Senha Atual</Label>
            <div className="relative">
              <Input 
                id="currentPassword" 
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha atual"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
            </div>
          </div>
          <div>
            <Label htmlFor="newPassword">Nova Senha</Label>
            <Input 
              id="newPassword" 
              type="password"
              placeholder="Digite sua nova senha"
            />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirmar Nova Senha</Label>
            <Input 
              id="confirmPassword" 
              type="password"
              placeholder="Confirme sua nova senha"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderNotificationsTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Notificações por Email</CardTitle>
          <CardDescription>
            Configure quais notificações você deseja receber por email
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Novas campanhas</Label>
              <p className="text-sm text-gray-500">Receba notificações quando novas campanhas forem criadas</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <Label>Relatórios de performance</Label>
              <p className="text-sm text-gray-500">Receba relatórios semanais de performance</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <Label>Atualizações do sistema</Label>
              <p className="text-sm text-gray-500">Receba notificações sobre novas funcionalidades</p>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <Label>Promoções e ofertas</Label>
              <p className="text-sm text-gray-500">Receba ofertas especiais e promoções</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notificações Push</CardTitle>
          <CardDescription>
            Configure notificações em tempo real no navegador
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label>Alertas de campanha</Label>
              <p className="text-sm text-gray-500">Receba alertas quando campanhas precisarem de atenção</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <Label>Mensagens da equipe</Label>
              <p className="text-sm text-gray-500">Receba notificações de mensagens da equipe</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const renderSecurityTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Autenticação de Dois Fatores</CardTitle>
          <CardDescription>
            Adicione uma camada extra de segurança à sua conta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div>
              <Label>2FA Ativado</Label>
              <p className="text-sm text-gray-500">Requer código adicional para fazer login</p>
            </div>
            <Switch />
          </div>
          <Button className="mt-4" variant="outline">
            Configurar 2FA
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sessões Ativas</CardTitle>
          <CardDescription>
            Gerencie dispositivos conectados à sua conta
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">Chrome - Windows</p>
              <p className="text-sm text-gray-500">Ativo agora • São Paulo, Brasil</p>
            </div>
            <Badge variant="secondary">Atual</Badge>
          </div>
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">Safari - iPhone</p>
              <p className="text-sm text-gray-500">Último acesso: há 2 dias</p>
            </div>
            <Button variant="outline" size="sm">
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Exportar Dados</CardTitle>
          <CardDescription>
            Faça download de todos os seus dados
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Exportar Dados
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const renderPlansTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Plano Atual</CardTitle>
          <CardDescription>
            Gerencie sua assinatura e planos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h3 className="font-semibold">Plano Gratuito</h3>
              <p className="text-sm text-gray-500">R$ 0/mês</p>
            </div>
            <Button onClick={() => navigate('/plans')}>
              Fazer Upgrade
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Histórico de Faturas</CardTitle>
          <CardDescription>
            Visualize suas faturas anteriores
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Nenhuma fatura encontrada.</p>
        </CardContent>
      </Card>
    </div>
  );

  const renderAppearanceTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Tema</CardTitle>
          <CardDescription>
            Escolha como o CommercialAI Pro deve aparecer
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Modo de Tema</Label>
            <Select 
              value={mounted ? theme : 'system'} 
              onValueChange={handleThemeChange}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Claro</SelectItem>
                <SelectItem value="dark">Escuro</SelectItem>
                <SelectItem value="system">Sistema</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>Cor Primária</Label>
            <Select defaultValue="purple">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="purple">Roxo</SelectItem>
                <SelectItem value="blue">Azul</SelectItem>
                <SelectItem value="green">Verde</SelectItem>
                <SelectItem value="red">Vermelho</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Densidade da Interface</CardTitle>
          <CardDescription>
            Ajuste o espaçamento dos elementos da interface
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Select defaultValue="comfortable">
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="compact">Compacto</SelectItem>
              <SelectItem value="comfortable">Confortável</SelectItem>
              <SelectItem value="spacious">Espaçoso</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>
    </div>
  );

  const renderIntegrationsTab = () => (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Integrações Conectadas</CardTitle>
          <CardDescription>
            Gerencie suas integrações com outras ferramentas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-blue-600 font-semibold">G</span>
              </div>
              <div>
                <p className="font-medium">Google Analytics</p>
                <p className="text-sm text-gray-500">Conectado</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Desconectar
            </Button>
          </div>
          
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                <span className="text-green-600 font-semibold">F</span>
              </div>
              <div>
                <p className="font-medium">Facebook Ads</p>
                <p className="text-sm text-gray-500">Conectado</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Desconectar
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Adicionar Integração</CardTitle>
          <CardDescription>
            Conecte novas ferramentas ao seu workspace
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Conectar Nova Integração
          </Button>
        </CardContent>
      </Card>
  </div>
);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfileTab();
      case 'notifications':
        return renderNotificationsTab();
      case 'security':
        return renderSecurityTab();
      case 'plans':
        return renderPlansTab();
      case 'appearance':
        return renderAppearanceTab();
      case 'integrations':
        return renderIntegrationsTab();
      default:
        return renderProfileTab();
    }
  };

  return (
    <AuthWrapper>
      <div className="flex h-screen bg-background">
        <Sidebar 
          expanded={sidebarExpanded} 
          onToggle={() => setSidebarExpanded(!sidebarExpanded)} 
        />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <TopHeader 
            onMenuToggle={() => setSidebarExpanded(!sidebarExpanded)}
            title="Configurações"
          />
          
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Sidebar */}
                <div className="lg:col-span-1">
                  <Card>
                    <CardContent className="p-0">
                      <nav className="space-y-1">
                        {tabs.map((tab) => {
                          const Icon = tab.icon;
                          const isActive = activeTab === tab.id;
                          
                          return (
                            <button
                              key={tab.id}
                              onClick={() => handleTabChange(tab.id)}
                              className={`w-full flex items-center px-4 py-3 text-left transition-colors ${
                                isActive
                                  ? 'bg-accent text-accent-foreground border-r-2 border-primary'
                                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                              }`}
                            >
                              <Icon className="h-5 w-5 mr-3" />
                              {tab.label}
                            </button>
                          );
                        })}
                      </nav>
                    </CardContent>
                  </Card>
                </div>

                {/* Content */}
                <div className="lg:col-span-3">
                  {renderTabContent()}
                  
                  <div className="mt-8 flex justify-end">
                    <Button onClick={handleSave} className="bg-primary hover:bg-primary/90">
                      <Save className="h-4 w-4 mr-2" />
                      Salvar Alterações
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Settings; 