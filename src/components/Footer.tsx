const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-secondary">
            Mantera Kuantum
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Memprogram Realitas Melalui Frekuensi Kesadaran
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
            <a
              href="https://lynk.id/ridwan11234"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              Link Pembelian
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a
              href="https://wa.me/6285647934601"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              WhatsApp: 085647934601
            </a>
          </div>

          <div className="pt-8 text-sm text-muted-foreground">
            <p>© 2024 Yadiqan. Semua hak cipta dilindungi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
