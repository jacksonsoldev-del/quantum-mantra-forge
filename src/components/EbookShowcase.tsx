import jimatImage from "@/assets/jimat.png";
import sihirquantumImage from "@/assets/sihirquantum.png";
import vibrasiImage from "@/assets/vibrasi_terlarang.png";

const EbookShowcase = () => {
  const ebooks = [
    {
      image: jimatImage,
      title: "JIMAT",
      subtitle: "Dari Benda Bertuah ke Alat Kesadaran",
      description: "Panduan sang penyihir modern"
    },
    {
      image: sihirquantumImage,
      title: "SIHIR KUANTUM",
      subtitle: "Panduan Lengkap Menggunakan Niat, Energi, dan Kesadaran",
      description: "Untuk Mencipta Realitas Impian Anda"
    },
    {
      image: vibrasiImage,
      title: "VIBRASI TERLARANG",
      subtitle: "Membelah Pelet & Santet dengan Lensa Kuno dan Kuantum",
      description: "Yadiqan Quantum Awareness Network"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
              Koleksi E-Book Spiritual
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Perpustakaan lengkap untuk transformasi kesadaran Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ebooks.map((ebook, index) => (
            <div
              key={index}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-glow-quantum p-6">
                <div className="relative mb-6 transform group-hover:scale-105 transition-transform duration-500">
                  <img
                    src={ebook.image}
                    alt={ebook.title}
                    className="w-full h-auto mx-auto drop-shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-quantum blur-xl opacity-0 group-hover:opacity-50 transition-opacity -z-10" />
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {ebook.title}
                  </h3>
                  <p className="text-sm text-secondary font-semibold mb-2">
                    {ebook.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {ebook.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EbookShowcase;
