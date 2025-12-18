import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const programs = [
    {
      age: '7-10 лет',
      title: 'CYBER KIDS',
      description: 'Базовая программа для юных исследователей цифрового мира',
      features: ['Робототехника для начинающих', 'Креативное программирование', 'VR-игры и квесты', 'Киберспорт'],
      color: 'from-cyan-500 to-blue-500',
      icon: 'Gamepad2'
    },
    {
      age: '11-14 лет',
      title: 'TECH WARRIORS',
      description: 'Продвинутая программа для амбициозных тинейджеров',
      features: ['3D-моделирование', 'Создание игр', 'Хакатоны', 'Дрон-рейсинг'],
      color: 'from-purple-500 to-pink-500',
      icon: 'Cpu'
    },
    {
      age: '15-17 лет',
      title: 'DIGITAL LEGENDS',
      description: 'Экспертная программа для будущих лидеров технологий',
      features: ['AI и машинное обучение', 'Блокчейн-проекты', 'Стартап-лаборатория', 'Киберзащита'],
      color: 'from-fuchsia-500 to-violet-500',
      icon: 'Zap'
    }
  ];

  const galleryImages = [
    { title: 'VR Зона', description: 'Погружение в виртуальные миры', image: 'https://cdn.poehali.dev/projects/8d54aabd-14b8-40f1-8a0a-9b09bb9e3af4/files/5246572e-dd23-4cc5-bb3f-9c8434fea5b0.jpg' },
    { title: 'Робототехника', description: 'Создание будущего своими руками', image: 'https://cdn.poehali.dev/projects/8d54aabd-14b8-40f1-8a0a-9b09bb9e3af4/files/70648a49-ea92-4704-9056-affbe2af7ab0.jpg' },
    { title: 'Киберспорт', description: 'Турниры и командные баталии', image: 'https://cdn.poehali.dev/projects/8d54aabd-14b8-40f1-8a0a-9b09bb9e3af4/files/7e48fc2e-a6a3-49d2-8dbb-aede6b211f66.jpg' },
    { title: 'Территория лагеря', description: 'Современный tech-кампус', image: 'https://cdn.poehali.dev/projects/8d54aabd-14b8-40f1-8a0a-9b09bb9e3af4/files/c767f53f-1e80-4e40-b6f2-ceda8d9e35d8.jpg' }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white cyber-grid">
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/90 backdrop-blur-lg border-b border-cyan-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/projects/8d54aabd-14b8-40f1-8a0a-9b09bb9e3af4/files/fee3169a-025f-4c03-90ac-1541e791deeb.jpg" 
                alt="Sokol Logo" 
                className="w-12 h-12 object-contain rounded-lg" 
                style={{ filter: 'drop-shadow(0 0 8px #00f0ff) drop-shadow(0 0 15px #00f0ff)' }}
              />
              <h1 className="text-2xl font-bold neon-glow text-cyan-400">СОКОЛ</h1>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'programs', 'gallery', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === section ? 'text-cyan-400 neon-glow' : 'text-gray-400'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'about' && 'О лагере'}
                  {section === 'programs' && 'Программы'}
                  {section === 'gallery' && 'Галерея'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-purple-500/10 to-transparent" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            backgroundImage: 'radial-gradient(circle, #00f0ff 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="glitch">
            <h1 className="text-6xl md:text-8xl font-black mb-6 neon-glow text-cyan-400 animate-fade-in">СОКОЛ </h1>
          </div>
          <p className="text-xl md:text-3xl mb-8 text-purple-400 animate-fade-in font-light">
            Детский технолагерь будущего
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto animate-fade-in">
            Погрузись в мир технологий, киберспорта и цифрового творчества. 
            Стань частью нового поколения tech-героев!
          </p>
          <div className="flex gap-4 justify-center animate-scale-in">
            <Button 
              onClick={() => scrollToSection('programs')}
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-8 py-6 text-lg neon-border border-2 border-cyan-400 transition-all hover:scale-105"
            >
              <Icon name="Rocket" className="mr-2" />
              Выбрать программу
            </Button>
            <Button 
              onClick={() => scrollToSection('contacts')}
              variant="outline"
              className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500/20 font-bold px-8 py-6 text-lg transition-all hover:scale-105"
            >
              <Icon name="Send" className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 neon-glow text-cyan-400">
            О ЛАГЕРЕ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: 'Shield', title: 'Безопасность', text: 'Защищенная территория с 24/7 охраной и видеонаблюдением' },
              { icon: 'Users', title: 'Команда', text: 'Опытные вожатые и tech-менторы из IT-индустрии' },
              { icon: 'Sparkles', title: 'Технологии', text: 'Современное оборудование и VR/AR технологии' }
            ].map((item, idx) => (
              <Card 
                key={idx} 
                className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 hover:scale-105 neon-border"
              >
                <CardHeader>
                  <Icon name={item.icon} className="text-cyan-400 mb-4" size={48} />
                  <CardTitle className="text-2xl text-cyan-400">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="py-24 relative bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 neon-glow text-purple-400">
            ПРОГРАММЫ ПО ВОЗРАСТАМ
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <Card 
                key={idx}
                className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border-2 border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:scale-105 overflow-hidden group"
              >
                <div className={`h-2 bg-gradient-to-r ${program.color}`} />
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Icon name={program.icon} className="text-purple-400 group-hover:scale-110 transition-transform" size={48} />
                    <span className={`text-sm font-bold px-3 py-1 rounded-full bg-gradient-to-r ${program.color} text-white`}>
                      {program.age}
                    </span>
                  </div>
                  <CardTitle className="text-2xl text-purple-400 mb-2">{program.title}</CardTitle>
                  <CardDescription className="text-gray-300">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {program.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-gray-300">
                        <Icon name="ChevronRight" className="text-cyan-400" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 neon-glow text-cyan-400">
            ГАЛЕРЕЯ
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx}
                className="relative group overflow-hidden rounded-lg border-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 aspect-square cursor-pointer"
              >
                <img 
                  src={img.image} 
                  alt={img.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 group-hover:opacity-75 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-cyan-400 mb-1">{img.title}</h3>
                  <p className="text-sm text-gray-300">{img.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-24 relative bg-gradient-to-b from-transparent via-cyan-900/10 to-transparent">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 neon-glow text-cyan-400">
            КОНТАКТЫ
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border-2 border-cyan-500/30">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-400">Свяжитесь с нами</CardTitle>
                <CardDescription className="text-gray-300">Заполните форму, и мы ответим в течение 24 часов</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input 
                  placeholder="Ваше имя" 
                  className="bg-[#0a0a0f] border-cyan-500/50 focus:border-cyan-400 text-white placeholder:text-gray-500"
                />
                <Input 
                  placeholder="Email или телефон" 
                  className="bg-[#0a0a0f] border-cyan-500/50 focus:border-cyan-400 text-white placeholder:text-gray-500"
                />
                <Textarea 
                  placeholder="Ваше сообщение" 
                  rows={4}
                  className="bg-[#0a0a0f] border-cyan-500/50 focus:border-cyan-400 text-white placeholder:text-gray-500"
                />
                <Button className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold">
                  <Icon name="Send" className="mr-2" />
                  Отправить
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border-2 border-purple-500/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="MapPin" className="text-purple-400 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-purple-400 mb-1">Адрес</h3>
                      <p className="text-gray-300">Московская область, Солнечногорский район</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border-2 border-purple-500/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Phone" className="text-purple-400 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-purple-400 mb-1">Телефон</h3>
                      <p className="text-gray-300">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border-2 border-purple-500/30">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <Icon name="Mail" className="text-purple-400 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold text-purple-400 mb-1">Email</h3>
                      <p className="text-gray-300">info@sokol2077.ru</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-cyan-500/30 bg-[#0a0a0f]/50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img 
              src="https://cdn.poehali.dev/projects/8d54aabd-14b8-40f1-8a0a-9b09bb9e3af4/files/fee3169a-025f-4c03-90ac-1541e791deeb.jpg" 
              alt="Sokol Logo" 
              className="w-8 h-8 object-contain rounded-lg" 
              style={{ filter: 'drop-shadow(0 0 6px #00f0ff) drop-shadow(0 0 12px #00f0ff)' }}
            />
            <span className="text-xl font-bold neon-glow text-cyan-400">СОКОЛ 2077</span>
          </div>
          <p className="text-gray-400">Детский технолагерь будущего</p>
          <p className="text-gray-500 text-sm mt-2">© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
}