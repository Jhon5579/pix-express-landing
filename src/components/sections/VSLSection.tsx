export const VSLSection = () => {
  return (
    <section id="vsl" className="py-16 bg-bg-section">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Assista ao Vídeo e Descubra Como Funciona
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Veja na prática como o método Pix Express pode transformar sua realidade financeira
          </p>
        </div>

        {/* Video Container */}
        <div className="relative bg-background rounded-xl shadow-strong overflow-hidden">
          <div className="relative aspect-video">
            <iframe
              src="https://www.youtube.com/embed/3fNz3HUz3Ow?si=cTFw52hT5g3ucNn7&rel=0&showinfo=0&modestbranding=1"
              title="Pix Express - Video Sales Letter"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Call to action below video */}
        <div className="text-center mt-8">
          <p className="text-lg text-text-secondary mb-6">
            Depois de assistir ao vídeo, escolha seu plano abaixo:
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                const offersSection = document.getElementById('offers');
                if (offersSection) {
                  offersSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="bg-brand-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-brand-primary-dark transition-all duration-300 shadow-cta hover:shadow-strong"
            >
              Ver Ofertas Especiais
            </button>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="text-center mt-8 space-y-2">
          <p className="text-sm text-text-muted">
            🎯 Método testado e aprovado • ⚡ Acesso imediato • 🔒 Pagamento seguro
          </p>
          <p className="text-xs text-text-muted">
            Assista ao vídeo completo para entender todos os detalhes
          </p>
        </div>
      </div>
    </section>
  );
};