import { LazyIframe } from "@/components/ui/lazy-iframe";

export const VSLSection = () => {
  return (
    <section id="vsl" className="py-16 bg-bg-section">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
            O Método Simples Para Gerar Pix Diários no Seu Celular
          </h1>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto">
            Sem precisar vender cursos, criar conteúdo ou gravar vídeos.
          </p>
        </div>

        {/* Video Container - Performance Optimized */}
        <div className="relative bg-background rounded-xl shadow-soft overflow-hidden">
          <div className="relative aspect-video">
            <LazyIframe
              src="https://www.youtube.com/embed/3fNz3HUz3Ow?si=cTFw52hT5g3ucNn7&rel=0&showinfo=0&modestbranding=1"
              title="Pix Express - Video Sales Letter"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Call to action below video */}
        <div className="text-center mt-8">
          <p className="text-lg font-bold mb-6" style={{ color: '#dc2626' }}>
            🔥 APENAS 100 VAGAS DISPONÍVEIS - ÚLTIMAS HORAS!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                console.log('Button clicked, scrolling to offers');
                const offersSection = document.getElementById('offers');
                console.log('Found offers section:', offersSection);
                if (offersSection) {
                  offersSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  });
                } else {
                  console.log('Offers section not found, trying alternative scroll');
                  // Fallback - scroll to a position where offers should be
                  window.scrollTo({
                    top: window.innerHeight * 2,
                    behavior: 'smooth'
                  });
                }
              }}
              className="bg-brand-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-brand-primary-dark transition-colors duration-200 shadow-soft hover:shadow-medium"
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