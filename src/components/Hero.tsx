import { Button } from "@/components/ui/button";
import bannerImage from "@/assets/banner.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-cosmic">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-glow animation-delay-2000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
              <p className="text-primary text-sm font-semibold tracking-wider">RAHASIA TERKUAK!</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
                Mantera Kuno & Fisika Kuantum
              </span>
              <br />
              <span className="text-foreground">
                Bersatu Wujudkan Hidup Impian Anda!
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl">
              Dari praktisi mistik yang pasif, bertransformasi menjadi <span className="text-primary font-semibold">Insinyur Realitas</span> yang sadar dan aktif.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-gold text-foreground hover:shadow-glow-gold transform hover:scale-105 transition-all text-lg font-bold px-8"
                asChild
              >
                <a href="https://lynk.id/ridwan11234" target="_blank" rel="noopener noreferrer">
                  DAPATKAN SEKARANG
                </a>
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 text-lg"
                asChild
              >
                <a href="https://wa.me/6285647934601" target="_blank" rel="noopener noreferrer">
                  Hubungi WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>Diskon 50% Terbatas</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
                <span>200 Pembeli Pertama</span>
              </div>
            </div>
          </div>

          {/* 3D Book Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <img
                src={bannerImage}
                alt="Mantera Kuantum - Memprogram Realitas Melalui Frekuensi Kesadaran"
                className="w-full max-w-lg mx-auto drop-shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-quantum blur-2xl opacity-50 -z-10" />
            </div>

            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/20 rounded-full animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-accent/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
