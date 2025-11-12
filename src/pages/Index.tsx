import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const modelInfo = {
    name: 'Sofia',
    height: '178 cm',
    bust: '86 cm',
    waist: '62 cm',
    hips: '90 cm',
    shoeSize: '38 EU',
    hairColor: 'Dark Brown',
    eyeColor: 'Brown'
  };

  const portfolioImages = [
    {
      url: 'https://cdn.poehali.dev/projects/dca9716b-7e34-47c6-94b6-df62cae91468/files/c37b51ad-2984-4c76-b030-d10b9e0db137.jpg',
      category: 'Portrait'
    },
    {
      url: 'https://cdn.poehali.dev/projects/dca9716b-7e34-47c6-94b6-df62cae91468/files/24a623f7-a421-461a-bb22-f95dc3181d6a.jpg',
      category: 'Editorial'
    },
    {
      url: 'https://cdn.poehali.dev/projects/dca9716b-7e34-47c6-94b6-df62cae91468/files/b3bdf073-2a5d-493c-b482-e14cd84523ce.jpg',
      category: 'Beauty'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-black/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-light tracking-wider">Sofia Conception du modele</h1>
            <div className="flex gap-8">
              <button
                onClick={() => scrollToSection('home')}
                className={`text-sm tracking-wide transition-colors hover:text-accent ${
                  activeSection === 'home' ? 'text-accent' : 'text-foreground'
                }`}
              >
                HOME
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm tracking-wide transition-colors hover:text-accent ${
                  activeSection === 'about' ? 'text-accent' : 'text-foreground'
                }`}
              >
                ABOUT
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className={`text-sm tracking-wide transition-colors hover:text-accent ${
                  activeSection === 'portfolio' ? 'text-accent' : 'text-foreground'
                }`}
              >
                PORTFOLIO
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-7xl font-light leading-tight">
                Sofia
              </h2>
              <p className="text-xl text-muted-foreground font-light tracking-wide">
                Professional Fashion Model
              </p>
              <div className="flex gap-4 pt-4">
                <Button
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-black text-white hover:bg-accent hover:text-black transition-all px-8 py-6 text-sm tracking-wider"
                >
                  VIEW PORTFOLIO
                </Button>
                <Button
                  onClick={() => scrollToSection('about')}
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white transition-all px-8 py-6 text-sm tracking-wider"
                >
                  ABOUT ME
                </Button>
              </div>
            </div>
            <div className="animate-scale-in">
              <img
                src={portfolioImages[0].url}
                alt="Sofia Model Portrait"
                className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center py-20 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-light mb-12 text-center animate-fade-in">About the Model</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 border-none shadow-none bg-white animate-fade-in">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-black/10">
                    <Icon name="User" size={24} className="text-accent" />
                    <h3 className="text-2xl font-light">Profile</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-black/5">
                      <span className="text-muted-foreground font-light">Name</span>
                      <span className="font-medium">{modelInfo.name}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-black/5">
                      <span className="text-muted-foreground font-light">Hair Color</span>
                      <span className="font-medium">{modelInfo.hairColor}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-black/5">
                      <span className="text-muted-foreground font-light">Eye Color</span>
                      <span className="font-medium">{modelInfo.eyeColor}</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 border-none shadow-none bg-white animate-fade-in">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 pb-4 border-b border-black/10">
                    <Icon name="Ruler" size={24} className="text-accent" />
                    <h3 className="text-2xl font-light">Measurements</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-black/5">
                      <span className="text-muted-foreground font-light">Height</span>
                      <span className="font-medium">{modelInfo.height}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-black/5">
                      <span className="text-muted-foreground font-light">Bust</span>
                      <span className="font-medium">{modelInfo.bust}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-black/5">
                      <span className="text-muted-foreground font-light">Waist</span>
                      <span className="font-medium">{modelInfo.waist}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-black/5">
                      <span className="text-muted-foreground font-light">Hips</span>
                      <span className="font-medium">{modelInfo.hips}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-black/5">
                      <span className="text-muted-foreground font-light">Shoe Size</span>
                      <span className="font-medium">{modelInfo.shoeSize}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light mb-12 text-center animate-fade-in">Portfolio</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image.url}
                  alt={`Portfolio ${image.category}`}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-light tracking-wider">
                    {image.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl font-light mb-4">Sofia Conception du modele</h3>
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Icon name="Mail" size={24} />
            </a>
          </div>
          <p className="text-sm text-white/60 font-light tracking-wide">
            © 2024 Sofia. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
