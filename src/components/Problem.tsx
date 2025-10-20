import { AlertCircle, TrendingDown, HelpCircle } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Merasa Terjebak dalam Pola Hidup yang Itu-Itu Saja?",
      description: "Setiap hari terasa sama, tidak ada perubahan signifikan menuju kehidupan yang Anda impikan."
    },
    {
      icon: HelpCircle,
      title: "Impian Besar Anda Hanya Sebatas Angan?",
      description: "Sudah mencoba berbagai metode manifestasi, namun hasilnya masih jauh dari harapan."
    },
    {
      icon: AlertCircle,
      title: "PERINGATAN!",
      description: "Anda mungkin telah melewatkan 'kunci' fundamental yang disembunyikan oleh alam semesta, sebuah kunci yang kini terungkap dalam e-book revolusioner ini!"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-card/50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Apakah Ini </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-destructive to-accent">
              Masalah Anda?
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:border-primary/50 transition-all hover:shadow-glow-quantum group"
              >
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-lg group-hover:shadow-glow-quantum transition-all">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-cosmic border border-primary/30 rounded-2xl p-8 max-w-4xl">
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              Bayangkan jika Anda bisa menjadi <span className="text-primary font-bold">'Insinyur Realitas'</span> yang sadar, bukan lagi hanya praktisi mistik yang mengira-ngira. Bayangkan jika Anda memahami bagaimana <span className="text-secondary font-bold">"Mantera"</span> bukanlah sihir, melainkan teknologi informasi berbasis vibrasi yang merespons fokus kesadaran Anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
