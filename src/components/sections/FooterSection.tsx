export const FooterSection = () => {
  return (
    <footer className="bg-text-primary text-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Logo/Nome */}
          <div>
            <h3 className="text-2xl font-bold text-brand-primary">
              Pix Express
            </h3>
            <p className="text-gray-300 mt-2">
              O método simples para gerar renda extra
            </p>
          </div>

          {/* Links legais */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Termos de Uso
            </a>
            <a 
              href="#" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              Política de Privacidade
            </a>
          </div>

          {/* Aviso legal */}
          <div className="border-t border-gray-600 pt-6">
            <p className="text-sm text-gray-400 leading-relaxed max-w-3xl mx-auto">
              <strong>Aviso Legal:</strong> Este produto não garante a obtenção de resultados. 
              Qualquer referência ao desempenho de uma estratégia não deve ser interpretada 
              como uma garantia de resultados. Os resultados podem variar de pessoa para pessoa, 
              dependendo de diversos fatores como dedicação, aplicação do método e circunstâncias individuais.
            </p>
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-gray-600">
            <p className="text-sm text-gray-400">
              © 2024 Pix Express. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};