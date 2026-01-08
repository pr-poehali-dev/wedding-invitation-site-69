import Icon from "@/components/ui/icon";
import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-montserrat">
      <div className="container mx-auto px-4 py-8 md:py-16 max-w-4xl">
        
        <section className="text-center mb-16 animate-fade-in">
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-foreground mb-4 tracking-wider">
            РОБЕРТ
          </h1>
          <div className="text-4xl md:text-5xl font-cormorant font-light text-muted-foreground mb-4">
            &
          </div>
          <h1 className="font-cormorant text-5xl md:text-7xl font-light text-foreground mb-12 tracking-wider">
            КРИСТИНА
          </h1>
          
          <div className="h-px w-32 bg-border mx-auto mb-8"></div>
          
          <div className="font-cormorant text-4xl md:text-5xl font-light text-muted-foreground mb-8 tracking-wide">
            24 01 2026
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
            Роберт и Кристина
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
              24 января 2026
            </p>
            <p className="text-2xl md:text-3xl font-cormorant font-medium text-primary">
              18:00
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
              Кафе "Три Берёзы"
            </p>
            <p className="text-sm md:text-base text-muted-foreground/70 mt-2">
              ул. Маяковского, 2Е
            </p>
            <p className="text-sm md:text-base text-muted-foreground/70">
              Усть-Балка
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2345.678!2d85.123456!3d54.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVXN0LUJhbGthLCBNYXlha292c2tvZ28gMkU!5e0!3m2!1sru!2s!4v1704636000000!5m2!1sru!2s"
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
              href="https://maps.google.com/?q=Усть-Балка+Маяковского+2Е"
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