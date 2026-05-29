export default function CakeShopHomepage() {
  const products = [
    {
      name: 'Bolo de Brigadeiro',
      price: 'R$ 30',
      image:
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Red Velvet',
      price: 'R$ 25',
      image:
        'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Ninho com Morango',
      price: 'R$ 45',
      image:
        'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  const whatsappNumber = '5527988197628';

  const whatsappMessage = encodeURIComponent(
    'Olá! Vim pelo site e gostaria de fazer uma encomenda 🎂'
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const testimonials = [
    {
      name: 'Mariana',
      text: 'O bolo chegou impecável e muito saboroso. Atendimento excelente!',
    },
    {
      name: 'Camila',
      text: 'A decoração ficou linda. Todo mundo elogiou.',
    },
    {
      name: 'Lucas',
      text: 'Pedido rápido e super fácil pelo WhatsApp.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F5] text-[#3B2B27] overflow-x-hidden">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#F2E6DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold truncate">
              Doce Encanto
            </h1>
            <p className="text-xs sm:text-sm text-[#8B6B61]">
              Confeitaria Artesanal
            </p>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
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

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#A76D5D] hover:bg-[#8f594a] transition text-white px-4 sm:px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap shadow-sm"
          >
            Pedir Agora
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center bg-[#F8E8E2] text-[#A76D5D] px-4 py-2 rounded-full text-sm font-medium mb-6">
            Feitos sob encomenda
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            Bolos artesanais para momentos especiais
          </h2>

          <p className="text-base sm:text-lg text-[#6E5B55] leading-relaxed mb-8 max-w-xl">
            Sabores caseiros, decoração delicada e entrega em Vila Velha.
            Faça sua encomenda de forma rápida e prática.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#cardapio"
              className="bg-[#A76D5D] hover:bg-[#8f594a] transition text-white px-6 py-4 rounded-2xl font-semibold shadow-md w-full sm:w-auto text-center"
            >
              Ver Cardápio
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-[#EAD7CF] hover:border-[#A76D5D] transition px-6 py-4 rounded-2xl font-semibold w-full sm:w-auto text-center"
            >
              Pedir no WhatsApp
            </a>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="absolute inset-0 bg-[#F6DCD2] rounded-[28px] sm:rounded-[40px] rotate-3"></div>

          <img
            src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1400&auto=format&fit=crop"
            alt="Bolo artesanal"
            className="relative rounded-[28px] sm:rounded-[40px] shadow-2xl w-full h-[320px] sm:h-[450px] lg:h-[620px] object-cover"
          />
        </div>
      </section>

      {/* PRODUTOS */}
      <section id="cardapio" className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <p className="text-[#A76D5D] font-semibold mb-2">Mais pedidos</p>
            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Nossos favoritos
            </h3>
          </div>

          <button className="text-[#A76D5D] font-semibold hover:underline self-start">
            Ver todos →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] overflow-hidden border border-[#F2E6DF] shadow-sm hover:shadow-xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 sm:h-64 lg:h-72 object-cover"
              />

              <div className="p-5 sm:p-6">
                <h4 className="text-xl sm:text-2xl font-bold mb-2">
                  {product.name}
                </h4>

                <p className="text-[#8B6B61] mb-5">
                  A partir de {product.price}
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-[#A76D5D] hover:bg-[#8f594a] transition text-white py-3 rounded-2xl font-semibold text-center"
                >
                  Encomendar
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-white border-y border-[#F2E6DF]" id="como-funciona">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-[#A76D5D] font-semibold mb-2">
              Simples e rápido
            </p>

            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Como funciona
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
                className="bg-[#FFF9F5] rounded-[28px] p-6 sm:p-8 border border-[#F2E6DF]"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#A76D5D] text-white flex items-center justify-center text-lg font-bold mb-6">
                  {item.step}
                </div>

                <h4 className="text-xl sm:text-2xl font-bold mb-3">
                  {item.title}
                </h4>

                <p className="text-[#6E5B55] leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-[#A76D5D] font-semibold mb-2">
            Clientes felizes
          </p>

          <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Depoimentos
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-[28px] p-6 sm:p-8 shadow-sm border border-[#F2E6DF]"
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

      {/* INSTAGRAM */}
      <section id="instagram" className="bg-[#FFF2EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-14">
            <div>
              <p className="text-[#A76D5D] font-semibold mb-2">Instagram</p>

              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-xl">
                Acompanhe nossas criações
              </h3>
            </div>

            <button className="text-[#A76D5D] font-semibold hover:underline self-start">
              @doceencanto →
            </button>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
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
                className="rounded-[18px] sm:rounded-[24px] h-40 sm:h-56 lg:h-72 w-full object-cover hover:scale-[1.02] transition duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20">
        <div className="bg-[#A76D5D] rounded-[28px] sm:rounded-[40px] p-8 sm:p-10 lg:p-16 text-white text-center shadow-xl">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight tracking-tight">
            Faça sua encomenda hoje mesmo
          </h3>

          <p className="text-base sm:text-lg opacity-90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Entre em contato pelo WhatsApp e personalize seu bolo.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#A76D5D] px-8 py-4 rounded-2xl font-bold hover:scale-105 transition duration-300 shadow-md w-full sm:w-auto"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#F2E6DF] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
              <li>Sábado: Fechado</li>
              <li>Domingo: Só na igreja 😁</li>
            </ul>
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTON */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 bg-[#25D366] text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl hover:scale-110 transition duration-300 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-7 h-7 sm:w-8 sm:h-8"
        >
          <path d="M19.11 17.2c-.27-.14-1.58-.78-1.82-.87-.24-.09-.42-.14-.6.14-.18.27-.69.87-.85 1.05-.15.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.34-.8-.71-1.34-1.58-1.5-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.6-1.45-.82-1.99-.22-.52-.44-.45-.6-.46h-.51c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27s.97 2.64 1.1 2.82c.14.18 1.9 2.9 4.61 4.07.64.28 1.14.45 1.53.57.64.2 1.22.17 1.68.1.51-.08 1.58-.65 1.8-1.28.22-.63.22-1.17.15-1.28-.07-.11-.25-.18-.52-.31z" />
          <path d="M16.01 3C8.83 3 3 8.74 3 15.83c0 2.27.6 4.49 1.73 6.44L3 29l6.94-1.81a13.08 13.08 0 006.07 1.5h.01C23.2 28.69 29 22.95 29 15.86 29 8.74 23.2 3 16.01 3zm0 23.39h-.01a10.8 10.8 0 01-5.49-1.5l-.39-.23-4.12 1.08 1.1-4-.25-.41a10.74 10.74 0 01-1.66-5.7c0-5.96 4.88-10.8 10.88-10.8 2.9 0 5.63 1.12 7.68 3.14a10.7 10.7 0 013.18 7.66c0 5.96-4.89 10.8-10.89 10.8z" />
        </svg>
      </a>
    </div>
  );
}
