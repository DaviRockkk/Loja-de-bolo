export default function CakeShopHomepage() {
  const products = [
    {
      name: 'Bolo de Brigadeiro',
      price: 'R$ 85',
      image:
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Red Velvet',
      price: 'R$ 110',
      image:
        'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Ninho com Morango',
      price: 'R$ 120',
      image:
        'https://images.unsplash.com/photo-1559622214-ab4bd2d328f4?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const testimonials = [
    {
      name: 'Mariana',
      text: 'O bolo chegou impecável e muito saboroso. Atendimento excelente!',
    },
    {
      name: 'Camila',
      text: 'A decoração ficou linda. Todo mundo elogiou na festa.',
    },
    {
      name: 'Lucas',
      text: 'Pedido rápido e super fácil pelo WhatsApp.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F5] text-[#3B2B27] font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#F2E6DF]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">Doce Encanto</h1>
            <p className="text-sm text-[#8B6B61]">Confeitaria Artesanal</p>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#cardapio" className="hover:text-[#A76D5D] transition">
              Cardápio
            </a>
            <a href="#como-funciona" className="hover:text-[#A76D5D] transition">
              Como funciona
            </a>
            <a href="#depoimentos" className="hover:text-[#A76D5D] transition">
              Depoimentos
            </a>
            <a href="#instagram" className="hover:text-[#A76D5D] transition">
              Instagram
            </a>
          </nav>

          <button className="bg-[#A76D5D] hover:bg-[#8f594a] transition text-white px-5 py-2 rounded-full text-sm font-medium shadow-sm">
            Pedir Agora
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block bg-[#F8E8E2] text-[#A76D5D] px-4 py-2 rounded-full text-sm font-medium mb-6">
            Feitos sob encomenda
          </span>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Bolos artesanais para momentos especiais
          </h2>

          <p className="text-lg text-[#6E5B55] leading-relaxed mb-8 max-w-xl">
            Sabores caseiros, decoração delicada e entrega em Vila Velha.
            Faça sua encomenda de forma rápida e prática.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-[#A76D5D] hover:bg-[#8f594a] transition text-white px-7 py-4 rounded-2xl font-semibold shadow-md">
              Ver Cardápio
            </button>

            <button className="bg-white border border-[#EAD7CF] hover:border-[#A76D5D] transition px-7 py-4 rounded-2xl font-semibold">
              Pedir no WhatsApp
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-[#F6DCD2] rounded-[40px] rotate-3"></div>

          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1400&auto=format&fit=crop"
            alt="Bolo artesanal"
            className="relative rounded-[40px] shadow-2xl w-full h-[550px] object-cover"
          />
        </div>
      </section>

      {/* Produtos */}
      <section id="cardapio" className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="text-[#A76D5D] font-semibold mb-2">Mais pedidos</p>
            <h3 className="text-4xl font-bold">Nossos favoritos</h3>
          </div>

          <button className="text-[#A76D5D] font-semibold hover:underline">
            Ver todos →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-[#F2E6DF]"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-72 object-cover"
              />

              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h4 className="text-2xl font-bold mb-1">{product.name}</h4>
                    <p className="text-[#8B6B61]">A partir de {product.price}</p>
                  </div>
                </div>

                <button className="w-full bg-[#A76D5D] hover:bg-[#8f594a] transition text-white py-3 rounded-2xl font-semibold">
                  Encomendar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section
        id="como-funciona"
        className="bg-white border-y border-[#F2E6DF]"
      >
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <p className="text-[#A76D5D] font-semibold mb-2">Simples e rápido</p>
            <h3 className="text-4xl font-bold">Como funciona</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Escolha o bolo',
                text: 'Veja os sabores, tamanhos e estilos disponíveis.',
              },
              {
                step: '02',
                title: 'Faça a encomenda',
                text: 'Envie os detalhes pelo WhatsApp de forma prática.',
              },
              {
                step: '03',
                title: 'Receba em casa',
                text: 'Entregamos com cuidado para sua comemoração.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#FFF9F5] rounded-[28px] p-8 border border-[#F2E6DF]"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#A76D5D] text-white flex items-center justify-center text-lg font-bold mb-6">
                  {item.step}
                </div>

                <h4 className="text-2xl font-bold mb-3">{item.title}</h4>
                <p className="text-[#6E5B55] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <p className="text-[#A76D5D] font-semibold mb-2">Clientes felizes</p>
          <h3 className="text-4xl font-bold">Depoimentos</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] p-8 shadow-sm border border-[#F2E6DF]"
            >
              <div className="text-4xl mb-4">“</div>
              <p className="text-[#5B4A45] leading-relaxed mb-6">
                {testimonial.text}
              </p>
              <strong>{testimonial.name}</strong>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram */}
      <section id="instagram" className="bg-[#FFF2EC]">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-[#A76D5D] font-semibold mb-2">Instagram</p>
              <h3 className="text-4xl font-bold">Acompanhe nossas criações</h3>
            </div>

            <button className="text-[#A76D5D] font-semibold hover:underline">
              @doceencanto →
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              'https://images.unsplash.com/photo-1464306076886-da185f6a9d05?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1519869325930-281384150729?q=80&w=1200&auto=format&fit=crop',
              'https://images.unsplash.com/photo-1535141192574-5d4897c12636?q=80&w=1200&auto=format&fit=crop',
            ].map((image, index) => (
              <img
                key={index}
                src={image}
                alt="Instagram"
                className="rounded-[24px] h-72 w-full object-cover hover:scale-[1.02] transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="bg-[#A76D5D] rounded-[40px] p-10 md:p-16 text-white text-center shadow-xl">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Faça sua encomenda hoje mesmo
          </h3>

          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Entre em contato pelo WhatsApp e personalize seu bolo para
            aniversários, casamentos e ocasiões especiais.
          </p>

          <button className="bg-white text-[#A76D5D] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition duration-300 shadow-md">
            Chamar no WhatsApp
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#F2E6DF] bg-white">
        <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">
          <div>
            <h4 className="text-2xl font-bold mb-4">Doce Encanto</h4>
            <p className="text-[#6E5B55] leading-relaxed">
              Bolos artesanais feitos com carinho e ingredientes selecionados.
            </p>
          </div>

          <div>
            <h5 className="font-bold mb-4">Menu</h5>
            <ul className="space-y-3 text-[#6E5B55]">
              <li>Cardápio</li>
              <li>Encomendas</li>
              <li>Depoimentos</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4">Contato</h5>
            <ul className="space-y-3 text-[#6E5B55]">
              <li>(27) 99999-9999</li>
              <li>contato@doceencanto.com</li>
              <li>Vila Velha - ES</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-4">Horários</h5>
            <ul className="space-y-3 text-[#6E5B55]">
              <li>Seg - Sex: 9h às 18h</li>
              <li>Sábado: 9h às 14h</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <button className="fixed bottom-6 right-6 bg-[#25D366] text-white w-16 h-16 rounded-full shadow-2xl text-2xl hover:scale-110 transition duration-300">
        💬
      </button>
    </div>
  );
}
