import { CheckCircle2, Zap, Brain, Target, Shield, Heart, Lightbulb, Sparkles } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Menguasai \"Seni Menggetarkan Daya\"",
      description: "Pelajari konsep Daya, Krenteg ing Ati, dan Rasa Sejati dari akar kebijaksanaan Nusantara untuk memperkuat \"sinyal\" mantera Anda.",
      chapter: "Bab 2"
    },
    {
      icon: Brain,
      title: "Otak sebagai Transceiver Kuantum",
      description: "Temukan bagaimana gelombang otak (Alpha, Theta) Anda berperan vital dalam manifestasi dan bagaimana Anda bisa mengoptimalkannya.",
      chapter: "Bab 3"
    },
    {
      icon: Target,
      title: "Protokol Kalibrasi Detail",
      description: "Ikuti Protokol Kalibrasi untuk membersihkan diri, pikiran, ruang, dan menentukan Niat Presisi (Blueprint Kuantum) yang jernih.",
      chapter: "Bab 4"
    },
    {
      icon: Sparkles,
      title: "Algoritma Manifestasi",
      description: "Kuasai teknik pernapasan sebagai carrier wave, seni merapal (lisan vs. batin), hingga fusi suara, visualisasi, dan emosi.",
      chapter: "Bab 5"
    },
    {
      icon: Shield,
      title: "Peta Frekuensi Mantera",
      description: "Analisis \"paket informasi\" di balik mantera proteksi, penglaris, daya tarik, penyembuhan, dan kepercayaan diri dengan contoh praktis.",
      chapter: "Bab 6"
    },
    {
      icon: Lightbulb,
      title: "Diagnosis Kegagalan Mantera",
      description: "Teknik troubleshooting untuk mengkalibrasi ulang saat hasil belum terlihat. Pahami \"Disonansi & Interferensi\".",
      chapter: "Bab 7"
    },
    {
      icon: Heart,
      title: "Hening sebagai Frekuensi Tertinggi",
      description: "Melampaui mantera dan menjadi \"Mantera yang Hidup,\" mencapai keadaan Manunggaling Kawula Gusti dari perspektif kesadaran kuantum.",
      chapter: "Bab 9"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-cosmic opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-4">
            <p className="text-primary text-sm font-semibold tracking-wider">APA YANG ANDA PELAJARI</p>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Mantera Quantum
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ini BUKAN sekadar teori, ini adalah <span className="text-primary font-bold">PANDUAN PRAKTIS</span> untuk transformasi total Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-glow-quantum group hover:transform hover:scale-105"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="inline-flex p-3 bg-primary/10 rounded-lg group-hover:shadow-glow-quantum transition-all flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-secondary font-semibold mb-2">{benefit.chapter}</div>
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                      {benefit.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-card border border-primary/30 rounded-2xl p-8 max-w-4xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Janji Kami</h3>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Dari praktisi mistik yang pasif, Anda akan bertransformasi menjadi <span className="text-primary font-bold">insinyur realitas yang sadar</span>, aktif, dan mampu memahat takdir Anda sendiri.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
