import Icon from "@/components/ui/icon";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-montserrat">
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
        
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-foreground mb-4 tracking-wider">
            SERGEY
          </h1>
          <div className="text-4xl md:text-5xl font-cormorant font-light text-muted-foreground mb-4">
            &
          </div>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-foreground mb-12 tracking-wider">
            ANASTASIIA
          </h1>
          
          <div className="h-px w-32 bg-border mx-auto mb-8"></div>
          
          <div className="font-cormorant text-4xl md:text-5xl font-light text-muted-foreground mb-8 tracking-wide">
            14 09 2024
          </div>
        </section>

        <Card className="p-8 md:p-12 mb-12 bg-accent/30 border-none shadow-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-base md:text-lg text-center text-foreground/80 leading-relaxed mb-6">
            Наступит важный день в нашей жизни – мы станем семьей.
          </p>
          <p className="text-base md:text-lg text-center text-foreground/80 leading-relaxed mb-6">
            Ваша поддержка, понимание, любовь и дружба всегда были ценны для нашей пары.
          </p>
          <p className="text-base md:text-lg text-center text-foreground/80 leading-relaxed mb-8">
            Именно поэтому в этот счастливый день мы хотим, чтобы вы были рядом с нами!
          </p>
          <p className="text-base md:text-lg text-center text-foreground font-medium">
            С любовью,
          </p>
          <p className="text-base md:text-lg text-center text-foreground font-medium">
            Сергей и Анастасия
          </p>
        </Card>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 text-center border-border/50 shadow-sm animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex justify-center mb-4">
              <Icon name="Clock" size={32} className="text-primary" />
            </div>
            <h3 className="font-cormorant text-2xl md:text-3xl font-medium text-foreground mb-4">
              Время
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-2">
              14 сентября 2024
            </p>
            <p className="text-2xl md:text-3xl font-cormorant font-medium text-primary">
              15:00
            </p>
          </Card>

          <Card className="p-8 text-center border-border/50 shadow-sm animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex justify-center mb-4">
              <Icon name="MapPin" size={32} className="text-primary" />
            </div>
            <h3 className="font-cormorant text-2xl md:text-3xl font-medium text-foreground mb-4">
              Место
            </h3>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Ресторан "Золотой Дворик"
            </p>
            <p className="text-sm md:text-base text-muted-foreground/70 mt-2">
              ул. Пушкина, д. 25
            </p>
            <p className="text-sm md:text-base text-muted-foreground/70">
              Москва, 101000
            </p>
          </Card>
        </div>

        <Card className="p-8 md:p-10 border-border/50 shadow-sm animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex items-center justify-center mb-6">
            <Icon name="Map" size={28} className="text-primary mr-3" />
            <h3 className="font-cormorant text-2xl md:text-3xl font-medium text-foreground">
              Как добраться
            </h3>
          </div>
          <div className="aspect-video bg-muted rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2087548966804!2d37.617633776918335!3d55.75582897304628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JrRgNC10LzQu9GMLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjw!5e0!3m2!1sru!2s!4v1704636000000!5m2!1sru!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта местоположения"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://maps.google.com/?q=55.755829,37.617634"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <Icon name="Navigation" size={18} className="mr-2" />
              Открыть в картах
            </a>
          </div>
        </Card>

        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="inline-block">
            <div className="h-px w-16 bg-border mb-4"></div>
            <p className="text-sm text-muted-foreground font-light tracking-wide">
              Ждём вас с нетерпением
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
