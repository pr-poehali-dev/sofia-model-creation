import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

interface Model {
  id: number;
  name: string;
  image: string;
  height: string;
  bust: string;
  waist: string;
  hips: string;
  shoeSize: string;
  hairColor: string;
  eyeColor: string;
  category: string;
}

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedModel, setSelectedModel] = useState<number | null>(null);
  const [models, setModels] = useState<Model[]>([]);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [editingModel, setEditingModel] = useState<Model | null>(null);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const [formData, setFormData] = useState<Omit<Model, 'id'>>({
    name: '',
    image: '',
    height: '',
    bust: '',
    waist: '',
    hips: '',
    shoeSize: '',
    hairColor: '',
    eyeColor: '',
    category: ''
  });

  const handleInputChange = (field: keyof Omit<Model, 'id'>, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleAddModel = () => {
    const newModel: Model = {
      id: Date.now(),
      ...formData
    };
    setModels(prev => [...prev, newModel]);
    setFormData({
      name: '',
      image: '',
      height: '',
      bust: '',
      waist: '',
      hips: '',
      shoeSize: '',
      hairColor: '',
      eyeColor: '',
      category: ''
    });
    setIsAddDialogOpen(false);
  };

  const handleEditModel = (model: Model) => {
    setEditingModel(model);
    setFormData({
      name: model.name,
      image: model.image,
      height: model.height,
      bust: model.bust,
      waist: model.waist,
      hips: model.hips,
      shoeSize: model.shoeSize,
      hairColor: model.hairColor,
      eyeColor: model.eyeColor,
      category: model.category
    });
  };

  const handleUpdateModel = () => {
    if (editingModel) {
      setModels(prev => prev.map(m => 
        m.id === editingModel.id ? { ...editingModel, ...formData } : m
      ));
      setEditingModel(null);
      setFormData({
        name: '',
        image: '',
        height: '',
        bust: '',
        waist: '',
        hips: '',
        shoeSize: '',
        hairColor: '',
        eyeColor: '',
        category: ''
      });
    }
  };

  const handleDeleteModel = (id: number) => {
    setModels(prev => prev.filter(m => m.id !== id));
  };

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
            <div className="flex gap-8 items-center">
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
              <button
                onClick={() => setIsAdminOpen(!isAdminOpen)}
                className="p-2 hover:bg-accent/10 rounded-full transition-colors"
                title="Admin Panel"
              >
                <Icon name="Settings" size={20} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isAdminOpen && (
        <div className="fixed top-16 right-6 z-50 w-96 bg-white shadow-2xl border border-black/10 rounded-lg animate-fade-in">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-light">Admin Panel</h3>
              <button onClick={() => setIsAdminOpen(false)}>
                <Icon name="X" size={20} />
              </button>
            </div>

            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full mb-6 bg-black text-white hover:bg-accent hover:text-black">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Add New Model
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-light">Add New Model</DialogTitle>
                </DialogHeader>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <Label>Name</Label>
                    <Input value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
                  </div>
                  <div>
                    <Label>Category</Label>
                    <Input value={formData.category} onChange={(e) => handleInputChange('category', e.target.value)} placeholder="e.g. Editorial" />
                  </div>
                  <div className="col-span-2">
                    <Label>Image URL</Label>
                    <Input value={formData.image} onChange={(e) => handleInputChange('image', e.target.value)} placeholder="https://..." />
                  </div>
                  <div>
                    <Label>Height</Label>
                    <Input value={formData.height} onChange={(e) => handleInputChange('height', e.target.value)} placeholder="178 cm" />
                  </div>
                  <div>
                    <Label>Bust</Label>
                    <Input value={formData.bust} onChange={(e) => handleInputChange('bust', e.target.value)} placeholder="86" />
                  </div>
                  <div>
                    <Label>Waist</Label>
                    <Input value={formData.waist} onChange={(e) => handleInputChange('waist', e.target.value)} placeholder="62" />
                  </div>
                  <div>
                    <Label>Hips</Label>
                    <Input value={formData.hips} onChange={(e) => handleInputChange('hips', e.target.value)} placeholder="90" />
                  </div>
                  <div>
                    <Label>Shoe Size</Label>
                    <Input value={formData.shoeSize} onChange={(e) => handleInputChange('shoeSize', e.target.value)} placeholder="38 EU" />
                  </div>
                  <div>
                    <Label>Hair Color</Label>
                    <Input value={formData.hairColor} onChange={(e) => handleInputChange('hairColor', e.target.value)} />
                  </div>
                  <div>
                    <Label>Eye Color</Label>
                    <Input value={formData.eyeColor} onChange={(e) => handleInputChange('eyeColor', e.target.value)} />
                  </div>
                </div>
                <Button onClick={handleAddModel} className="w-full mt-6 bg-black text-white hover:bg-accent hover:text-black">
                  Add Model
                </Button>
              </DialogContent>
            </Dialog>

            <div className="space-y-3 max-h-96 overflow-y-auto">
              {models.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">No models yet. Add your first model!</p>
              ) : (
                models.map(model => (
                  <div key={model.id} className="flex items-center gap-3 p-3 border border-black/10 rounded-lg hover:border-accent transition-colors">
                    <img src={model.image} alt={model.name} className="w-12 h-12 object-cover rounded" />
                    <div className="flex-1">
                      <p className="font-medium">{model.name}</p>
                      <p className="text-xs text-muted-foreground">{model.category}</p>
                    </div>
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          onClick={() => handleEditModel(model)}
                          className="p-2 hover:bg-accent/10 rounded-full"
                        >
                          <Icon name="Pencil" size={16} />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-light">Edit Model</DialogTitle>
                        </DialogHeader>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                          <div>
                            <Label>Name</Label>
                            <Input value={formData.name} onChange={(e) => handleInputChange('name', e.target.value)} />
                          </div>
                          <div>
                            <Label>Category</Label>
                            <Input value={formData.category} onChange={(e) => handleInputChange('category', e.target.value)} />
                          </div>
                          <div className="col-span-2">
                            <Label>Image URL</Label>
                            <Input value={formData.image} onChange={(e) => handleInputChange('image', e.target.value)} />
                          </div>
                          <div>
                            <Label>Height</Label>
                            <Input value={formData.height} onChange={(e) => handleInputChange('height', e.target.value)} />
                          </div>
                          <div>
                            <Label>Bust</Label>
                            <Input value={formData.bust} onChange={(e) => handleInputChange('bust', e.target.value)} />
                          </div>
                          <div>
                            <Label>Waist</Label>
                            <Input value={formData.waist} onChange={(e) => handleInputChange('waist', e.target.value)} />
                          </div>
                          <div>
                            <Label>Hips</Label>
                            <Input value={formData.hips} onChange={(e) => handleInputChange('hips', e.target.value)} />
                          </div>
                          <div>
                            <Label>Shoe Size</Label>
                            <Input value={formData.shoeSize} onChange={(e) => handleInputChange('shoeSize', e.target.value)} />
                          </div>
                          <div>
                            <Label>Hair Color</Label>
                            <Input value={formData.hairColor} onChange={(e) => handleInputChange('hairColor', e.target.value)} />
                          </div>
                          <div>
                            <Label>Eye Color</Label>
                            <Input value={formData.eyeColor} onChange={(e) => handleInputChange('eyeColor', e.target.value)} />
                          </div>
                        </div>
                        <Button onClick={handleUpdateModel} className="w-full mt-6 bg-black text-white hover:bg-accent hover:text-black">
                          Update Model
                        </Button>
                      </DialogContent>
                    </Dialog>
                    <button
                      onClick={() => handleDeleteModel(model.id)}
                      className="p-2 hover:bg-destructive/10 rounded-full text-destructive"
                    >
                      <Icon name="Trash2" size={16} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

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
          
          {models.length === 0 ? (
            <div className="text-center py-20">
              <Icon name="Users" size={64} className="mx-auto text-muted-foreground mb-4" />
              <p className="text-xl text-muted-foreground font-light">No models yet</p>
              <p className="text-sm text-muted-foreground mt-2">Use the admin panel to add your first model</p>
            </div>
          ) : (
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
          )}
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
              Новое модельное агентство, зародившееся в России. Sofia Conception du modele создано для 
              открытия и развития талантливых моделей. Мы стремимся представить наших моделей ведущим 
              российским и международным брендам, журналам и дизайнерам.
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