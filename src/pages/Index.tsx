import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedModel, setSelectedModel] = useState<number | null>(null);

  const models = [
    {
      id: 1,
      name: 'Sofia',
      image: 'https://cdn.poehali.dev/projects/dca9716b-7e34-47c6-94b6-df62cae91468/files/c37b51ad-2984-4c76-b030-d10b9e0db137.jpg',
      height: '178 cm',
      bust: '86',
      waist: '62',
      hips: '90',
      shoeSize: '38 EU',
      hairColor: 'Dark Brown',
      eyeColor: 'Brown',
      category: 'Editorial'
    },
    {
      id: 2,
      name: 'Elena',
      image: 'https://cdn.poehali.dev/projects/dca9716b-7e34-47c6-94b6-df62cae91468/files/dc6d6440-540d-4663-9a2f-f2b13ce7f023.jpg',
      height: '180 cm',
      bust: '84',
      waist: '60',
      hips: '88',
      shoeSize: '39 EU',
      hairColor: 'Blonde',
      eyeColor: 'Blue',
      category: 'Runway'
    },
    {
      id: 3,
      name: 'Isabella',
      image: 'https://cdn.poehali.dev/projects/dca9716b-7e34-47c6-94b6-df62cae91468/files/b7659b84-38ff-4dc9-b25b-fe7418e0da4b.jpg',
      height: '176 cm',
      bust: '85',
      waist: '61',
      hips: '89',
      shoeSize: '38 EU',
      hairColor: 'Red',
      eyeColor: 'Green',
      category: 'Commercial'
    },
    {
      id: 4,
      name: 'Olivia',
      image: 'https://cdn.poehali.dev/projects/dca9716b-7e34-47c6-94b6-df62cae91468/files/24a623f7-a421-461a-bb22-f95dc3181d6a.jpg',
      height: '179 cm',
      bust: '87',
      waist: '63',
      hips: '91',
      shoeSize: '39 EU',
      hairColor: 'Dark Brown',
      eyeColor: 'Hazel',
      category: 'High Fashion'
    },
    {
      id: 5,
      name: 'Victoria',
      image: 'https://cdn.poehali.dev/projects/dca9716b-7e34-47c6-94b6-df62cae91468/files/b3bdf073-2a5d-493c-b482-e14cd84523ce.jpg',
      height: '177 cm',
      bust: '86',
      waist: '62',
      hips: '90',
      shoeSize: '38 EU',
      hairColor: 'Black',
      eyeColor: 'Brown',
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/10">
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
                onClick={() => scrollToSection('models')}
                className={`text-sm tracking-wide transition-colors hover:text-accent ${
                  activeSection === 'models' ? 'text-accent' : 'text-foreground'
                }`}
              >
                MODELS
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className={`text-sm tracking-wide transition-colors hover:text-accent ${
                  activeSection === 'about' ? 'text-accent' : 'text-foreground'
                }`}
              >
                ABOUT AGENCY
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-secondary/20 to-white"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center space-y-8 animate-fade-in">
            <h2 className="text-8xl font-light leading-tight">
              Sofia Conception<br />du modele
            </h2>
            <p className="text-2xl text-muted-foreground font-light tracking-wide max-w-2xl mx-auto">
              Premier modeling agency representing exceptional talent in fashion, editorial, and commercial work
            </p>
            <div className="flex gap-4 pt-8 justify-center">
              <Button
                onClick={() => scrollToSection('models')}
                className="bg-black text-white hover:bg-accent hover:text-black transition-all px-10 py-6 text-sm tracking-wider"
              >
                VIEW MODELS
              </Button>
              <Button
                onClick={() => scrollToSection('about')}
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white transition-all px-10 py-6 text-sm tracking-wider"
              >
                ABOUT US
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="models" className="min-h-screen py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light mb-4 text-center animate-fade-in">Our Models</h2>
          <p className="text-center text-muted-foreground mb-16 font-light tracking-wide">
            Discover our talented roster of professional models
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {models.map((model, index) => (
              <Card
                key={model.id}
                className="group relative overflow-hidden cursor-pointer border-none shadow-sm hover:shadow-xl transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedModel(model.id)}
              >
                <div className="relative h-[450px]">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-light mb-2">{model.name}</h3>
                      <div className="space-y-1 text-sm">
                        <p className="text-white/80">{model.height}</p>
                        <p className="text-white/80">{model.bust}/{model.waist}/{model.hips}</p>
                        <p className="text-accent font-medium">{model.category}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-light text-center">{model.name}</h3>
                  <p className="text-sm text-muted-foreground text-center">{model.category}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {selectedModel && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedModel(null)}
        >
          <Card className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-white animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={() => setSelectedModel(null)}
                className="absolute top-4 right-4 z-10 bg-white rounded-full p-2 hover:bg-accent transition-colors"
              >
                <Icon name="X" size={24} />
              </button>
              
              {models.find(m => m.id === selectedModel) && (
                <div className="grid md:grid-cols-2 gap-8">
                  <img
                    src={models.find(m => m.id === selectedModel)!.image}
                    alt={models.find(m => m.id === selectedModel)!.name}
                    className="w-full h-[600px] object-cover"
                  />
                  
                  <div className="p-8 space-y-6">
                    <div>
                      <h2 className="text-4xl font-light mb-2">
                        {models.find(m => m.id === selectedModel)!.name}
                      </h2>
                      <p className="text-accent text-lg">
                        {models.find(m => m.id === selectedModel)!.category}
                      </p>
                    </div>

                    <div className="space-y-4 pt-6 border-t border-black/10">
                      <div className="flex justify-between py-2 border-b border-black/5">
                        <span className="text-muted-foreground font-light">Height</span>
                        <span className="font-medium">{models.find(m => m.id === selectedModel)!.height}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-black/5">
                        <span className="text-muted-foreground font-light">Measurements</span>
                        <span className="font-medium">
                          {models.find(m => m.id === selectedModel)!.bust}/
                          {models.find(m => m.id === selectedModel)!.waist}/
                          {models.find(m => m.id === selectedModel)!.hips}
                        </span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-black/5">
                        <span className="text-muted-foreground font-light">Shoe Size</span>
                        <span className="font-medium">{models.find(m => m.id === selectedModel)!.shoeSize}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-black/5">
                        <span className="text-muted-foreground font-light">Hair Color</span>
                        <span className="font-medium">{models.find(m => m.id === selectedModel)!.hairColor}</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-black/5">
                        <span className="text-muted-foreground font-light">Eye Color</span>
                        <span className="font-medium">{models.find(m => m.id === selectedModel)!.eyeColor}</span>
                      </div>
                    </div>

                    <Button
                      className="w-full bg-black text-white hover:bg-accent hover:text-black transition-all py-6 text-sm tracking-wider mt-8"
                    >
                      CONTACT FOR BOOKING
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      )}

      <section id="about" className="min-h-screen flex items-center py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-5xl font-light mb-8">About Sofia Conception du modele</h2>
            
            <p className="text-xl text-muted-foreground font-light leading-relaxed">
              Founded in Paris, Sofia Conception du modele is a premier modeling agency dedicated to 
              discovering and nurturing exceptional talent. We represent models who work with the world's 
              leading fashion houses, magazines, and brands.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-12">
              <Card className="p-8 border-none shadow-sm bg-white">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-accent/10 p-4 rounded-full">
                    <Icon name="Users" size={32} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-light">Elite Roster</h3>
                  <p className="text-muted-foreground font-light">
                    Carefully curated selection of top-tier models
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-none shadow-sm bg-white">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-accent/10 p-4 rounded-full">
                    <Icon name="Star" size={32} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-light">Global Reach</h3>
                  <p className="text-muted-foreground font-light">
                    International presence in major fashion capitals
                  </p>
                </div>
              </Card>

              <Card className="p-8 border-none shadow-sm bg-white">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="bg-accent/10 p-4 rounded-full">
                    <Icon name="Award" size={32} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-light">Excellence</h3>
                  <p className="text-muted-foreground font-light">
                    Commitment to professionalism and quality
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-light mb-4">Sofia Conception du modele</h3>
              <p className="text-white/60 font-light text-sm">
                Premier modeling agency representing exceptional talent worldwide
              </p>
            </div>

            <div>
              <h4 className="text-lg font-light mb-4">Contact</h4>
              <div className="space-y-2 text-white/60 text-sm">
                <p>Paris, France</p>
                <p>contact@sofiaconception.com</p>
                <p>+33 1 23 45 67 89</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-light mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:text-accent transition-colors">
                  <Icon name="Mail" size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-white/60 font-light tracking-wide">
              © 2024 Sofia Conception du modele. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
