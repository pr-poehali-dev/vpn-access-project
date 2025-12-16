import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Shield" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-gradient">FastVPN</span>
          </div>
          <div className="hidden md:flex gap-6">
            {["Главная", "Приложения", "Безопасность", "Цены", "Контакты"].map((item, i) => (
              <button
                key={item}
                onClick={() => scrollToSection(["hero", "apps", "security", "pricing", "contacts"][i])}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            Попробовать
          </Button>
        </div>
      </nav>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-gradient glow">
              Свободный интернет без границ
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Молниеносная скорость подключения. Доступ ко всем заблокированным приложениям и сайтам.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
              <Icon name="Zap" className="mr-2" size={24} />
              Подключиться сейчас
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/30">
              <Icon name="Play" className="mr-2" size={24} />
              Как это работает
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: "Gauge", value: "500+ Мбит/с", label: "Скорость подключения" },
              { icon: "Globe", value: "50+ стран", label: "Серверов по миру" },
              { icon: "Users", value: "2M+ пользователей", label: "Нам доверяют" }
            ].map((stat, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur border-primary/20 card-glow animate-fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                <CardContent className="p-6 text-center">
                  <Icon name={stat.icon as any} className="mx-auto mb-3 text-primary" size={40} />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="apps" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Работает везде</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Наши приложения доступны на всех популярных платформах
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "Apple", name: "iOS & macOS", color: "text-white" },
              { icon: "Smartphone", name: "Android", color: "text-green-500" },
              { icon: "Monitor", name: "Windows", color: "text-primary" },
              { icon: "Chrome", name: "Браузеры", color: "text-secondary" }
            ].map((platform, i) => (
              <Card key={i} className="group hover:scale-105 transition-transform cursor-pointer bg-card/50 backdrop-blur border-primary/20">
                <CardContent className="p-8 text-center">
                  <Icon name={platform.icon as any} className={`mx-auto mb-4 ${platform.color}`} size={56} />
                  <div className="font-semibold">{platform.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Разблокируйте любимые приложения</h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              {["YouTube", "Instagram", "Facebook", "Twitter", "TikTok", "Netflix", "Telegram"].map((app) => (
                <div key={app} className="px-6 py-3 bg-primary/10 border border-primary/30 rounded-full text-primary font-medium">
                  {app}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Максимальная безопасность</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Ваши данные под надёжной защитой военного уровня
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "Lock",
                title: "AES-256 шифрование",
                description: "Тот же стандарт шифрования, что используют банки и правительства"
              },
              {
                icon: "EyeOff",
                title: "Zero-Log политика",
                description: "Мы не храним логи вашей активности. Никогда. Проверено аудитом."
              },
              {
                icon: "Zap",
                title: "Kill Switch",
                description: "Автоматическая защита при обрыве VPN-соединения"
              },
              {
                icon: "Shield",
                title: "DNS & IP защита",
                description: "Полная защита от утечек DNS и вашего реального IP-адреса"
              },
              {
                icon: "Server",
                title: "Серверы Tier 1",
                description: "Только серверы высшего уровня для максимальной скорости"
              },
              {
                icon: "Fingerprint",
                title: "Multi-hop VPN",
                description: "Двойное шифрование через цепочку серверов"
              }
            ].map((feature, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-colors">
                <CardContent className="p-6">
                  <Icon name={feature.icon as any} className="mb-4 text-primary" size={48} />
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Выберите свой план</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            30 дней гарантии возврата денег
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Месяц",
                price: "₽590",
                period: "/месяц",
                features: ["Безлимитный трафик", "50+ стран", "До 5 устройств", "24/7 поддержка"],
                popular: false
              },
              {
                name: "Год",
                price: "₽290",
                period: "/месяц",
                originalPrice: "₽590",
                discount: "50% скидка",
                features: ["Всё из месячного", "Приоритетная поддержка", "Бесплатные обновления", "Bonus: 3 месяца в подарок"],
                popular: true
              },
              {
                name: "2 года",
                price: "₽190",
                period: "/месяц",
                originalPrice: "₽590",
                discount: "67% скидка",
                features: ["Всё из годового", "VIP поддержка", "Эксклюзивные серверы", "Bonus: 6 месяцев в подарок"],
                popular: false
              }
            ].map((plan, i) => (
              <Card 
                key={i} 
                className={`relative ${plan.popular ? 'border-primary border-2 scale-105 animate-pulse-glow' : 'border-primary/20'} bg-card/50 backdrop-blur`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-secondary px-6 py-1 rounded-full text-sm font-bold">
                    Лучшее предложение
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    {plan.discount && (
                      <div className="text-accent font-semibold mb-2">{plan.discount}</div>
                    )}
                    <div className="flex items-baseline justify-center gap-1">
                      {plan.originalPrice && (
                        <span className="text-muted-foreground line-through">{plan.originalPrice}</span>
                      )}
                      <span className="text-5xl font-bold text-primary">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <Icon name="Check" className="text-primary flex-shrink-0" size={20} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/90'}`} size="lg">
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Свяжитесь с нами</h2>
          <p className="text-center text-muted-foreground mb-12">
            Есть вопросы? Наша команда поддержки работает 24/7
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: "Mail", title: "Email", value: "support@fastvpn.com", link: "mailto:support@fastvpn.com" },
              { icon: "MessageCircle", title: "Онлайн чат", value: "Доступен 24/7", link: "#" },
              { icon: "Send", title: "Telegram", value: "@fastvpn_support", link: "https://t.me/fastvpn_support" },
              { icon: "HelpCircle", title: "База знаний", value: "help.fastvpn.com", link: "#" }
            ].map((contact, i) => (
              <Card key={i} className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-colors cursor-pointer">
                <CardContent className="p-6 flex items-center gap-4">
                  <Icon name={contact.icon as any} className="text-primary flex-shrink-0" size={32} />
                  <div>
                    <div className="font-semibold mb-1">{contact.title}</div>
                    <a href={contact.link} className="text-primary hover:text-primary/80 transition-colors">
                      {contact.value}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/50 backdrop-blur border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Или оставьте сообщение</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors"
                />
                <textarea
                  placeholder="Ваше сообщение"
                  rows={4}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                />
                <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Shield" className="text-primary" size={28} />
            <span className="text-xl font-bold text-gradient">FastVPN</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Свободный интернет для всех. Безопасно. Быстро. Надёжно.
          </p>
          <div className="flex justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-primary transition-colors">Условия использования</a>
            <a href="#" className="hover:text-primary transition-colors">О нас</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
