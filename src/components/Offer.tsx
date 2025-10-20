import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, TrendingDown, Sparkles } from "lucide-react";

const Offer = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cosmic" />
      
      {/* Animated elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Warning Badge */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <AlertTriangle className="w-6 h-6 text-secondary animate-pulse" />
            <p className="text-secondary text-lg font-bold tracking-wider">PERHATIAN! KESEMPATAN EMAS</p>
            <AlertTriangle className="w-6 h-6 text-secondary animate-pulse" />
          </div>

          {/* Main Offer Card */}
          <div className="bg-card border-2 border-primary rounded-3xl p-8 md:p-12 shadow-glow-quantum">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-gold">
                  Diskon Eksklusif 50% OFF!
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8">
                Hanya untuk <span className="text-primary font-bold">200 pembeli pertama!</span>
              </p>

              {/* Price Comparison */}
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="relative">
                  <div className="text-4xl font-bold text-muted-foreground line-through opacity-50">
                    Rp 200.000
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-1 bg-destructive rotate-12" />
                  </div>
                </div>
                
                <TrendingDown className="w-8 h-8 text-primary" />
                
                <div className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-gold">
                  Rp 99.000
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-6 py-3 bg-destructive/10 border border-destructive/30 rounded-full mb-8">
                <Clock className="w-5 h-5 text-destructive" />
                <p className="text-destructive font-semibold">
                  Penawaran ini tidak akan datang dua kali!
                </p>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Sparkles, text: "Akses Selamanya" },
                { icon: Clock, text: "Download Instan" },
                { icon: AlertTriangle, text: "Stok Terbatas" }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2 p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                  <p className="text-sm font-semibold text-foreground">{item.text}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="w-full bg-gradient-gold text-foreground hover:shadow-glow-gold transform hover:scale-105 transition-all text-xl font-bold py-8"
                asChild
              >
                <a href="https://lynk.id/ridwan11234" target="_blank" rel="noopener noreferrer">
                  🔥 YA, SAYA SIAP MENJADI PENCIPTA REALITAS SAYA!
                </a>
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Atau hubungi via WhatsApp untuk informasi lebih lanjut
              </p>

              <Button
                size="lg"
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary/10 text-lg"
                asChild
              >
                <a href="https://wa.me/6285647934601" target="_blank" rel="noopener noreferrer">
                  💬 Chat WhatsApp: 085647934601
                </a>
              </Button>
            </div>

            {/* Urgency Footer */}
            <div className="mt-8 pt-8 border-t border-border text-center">
              <p className="text-lg font-bold text-foreground mb-2">
                JANGAN BIARKAN SATU DETIK PUN TERBUANG!
              </p>
              <p className="text-muted-foreground">
                Setiap penundaan adalah penundaan manifestasi impian Anda!
              </p>
            </div>
          </div>

          {/* Bottom Warning */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Harga ini adalah harga yang tidak masuk akal untuk nilai sebesar ini, dan tidak akan bertahan lama.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
