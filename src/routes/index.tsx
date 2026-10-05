import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  CircleCheck,
  ChevronDown,
  Gamepad2,
  Headphones,
  House,
  Instagram,
  Menu,
  MessageCircle,
  MonitorPlay,
  ShieldCheck,
  Signal,
  Sparkles,
  Users,
  Wifi,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "New World Telecom | Internet Fibra Óptica" },
      {
        name: "description",
        content:
          "Internet fibra óptica rápida e estável para sua casa ou empresa. Fale com a New World Telecom pelo WhatsApp.",
      },
      { property: "og:title", content: "New World Telecom | Internet Fibra Óptica" },
      {
        property: "og:description",
        content:
          "Internet de alta velocidade para trabalhar, estudar, jogar e assistir sem preocupação.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const COMPANY = { name: "New World", lastName: "Telecom" };
const WHATSAPP: Array<{ number: string; display: string }> = [
  { number: "5585991292424", display: "(85) 99129-2424" },
  { number: "5585991068856", display: "(85) 99106-8856" },
];
const INSTAGRAM = "https://instagram.com/newworld_telecom";
const benefits: Array<[LucideIcon, string, string]> = [
  [Zap, "Alta velocidade", "Conexão rápida para todos os seus dispositivos."],
  [Signal, "100%Fibra óptica", "Mais estabilidade e desempenho em todos os momentos."],
  [Gamepad2, "Ideal para jogos", "Baixa latência para partidas online sem atraso."],
  [MonitorPlay, "Streaming fluido", "Filmes e séries em alta qualidade, sem travamentos."],
  [Users, "Para toda a família", "Celulares, TVs, consoles e computadores conectados."],
  [Headphones, "Suporte especializado", "Equipes preparadas sempre que você precisar."],
];
const faqs = [
  [
    "Como faço para contratar?",
    "Entre em contato pelo WhatsApp. Nossa equipe apresenta as opções e agenda a instalação.",
  ],
  [
    "A internet é fibra óptica?",
    "Sim. Nossa rede utiliza fibra óptica para oferecer mais velocidade e estabilidade.",
  ],
  [
    "Existe taxa de instalação?",
    "A condição de instalação pode variar conforme o plano e a região. Consulte nossa equipe.",
  ],
  [
    "Quanto tempo demora para instalar?",
    "O prazo é confirmado pela equipe técnica após o atendimento comercial.",
  ],
  [
    "A empresa atende minha região?",
    "Fale com nossa equipe pelo WhatsApp para confirmar o atendimento na sua região.",
  ],
  [
    "Existe fidelidade?",
    "As condições comerciais serão apresentadas de forma transparente antes da contratação.",
  ],
  [
    "Posso trocar de plano?",
    "Sim. Fale com nossa equipe para consultar as opções disponíveis para o seu endereço.",
  ],
  [
    "Como funciona o suporte técnico?",
    "O suporte orienta você e, quando necessário, agenda atendimento técnico.",
  ],
  [
    "Qual é o horário de atendimento?",
    "Consulte o horário atualizado diretamente com nossa equipe pelo WhatsApp.",
  ],
  [
    "A empresa oferece roteador Wi-Fi?",
    "Os equipamentos inclusos variam por plano. Consulte os detalhes antes de contratar.",
  ],
];
const testimonials: Array<[string, string, string]> = [
  [
    "[NOME DO CLIENTE]",
    "[CIDADE / BAIRRO]",
    "“A conexão transformou nossa rotina. A internet se mantém estável em todos os aparelhos.”",
  ],
  [
    "[NOME DO CLIENTE]",
    "[CIDADE / BAIRRO]",
    "“Atendimento rápido e instalação muito bem feita. Estamos muito satisfeitos.”",
  ],
  [
    "[NOME DO CLIENTE]",
    "[CIDADE / BAIRRO]",
    "“Agora consigo trabalhar e a família assistir ao mesmo tempo, sem travamentos.”",
  ],
];

const wa = (text: string) =>
  `https://wa.me/${WHATSAPP[0]?.number ?? ""}?text=${encodeURIComponent(text)}`;

function Brand({ light = false, icon = true }: { light?: boolean, icon?: boolean }) {
  return (
    <a
      href="#inicio"
      className={`flex items-center font-display flex-col text-md font-extrabold ${light ? "text-primary-foreground" : "text-foreground"}`}
      aria-label="Ir ao início"
    >
      {icon && <Wifi size={28} />}
      <span>{COMPANY.name}</span>
      <span className="text-xs">{COMPANY.lastName}</span>
    </a>
  );
}
function ButtonLink({
  href,
  children,
  kind = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  kind?: "primary" | "outline" | "whatsapp" | "light";
  className?: string;
}) {
  return (
    <a href={href} className={`button button-${kind} ${className}`}>
      {children}
    </a>
  );
}

function Home() {
  const [menu, setMenu] = useState(false);
  const nav = [
    ["Início", "#inicio"],
    ["Benefícios", "#beneficios"],
    ["FAQ", "#faq"],
    ["Contato", "#contato"],
  ];
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-primary-foreground/15 bg-brand-blue/95 text-primary-foreground backdrop-blur-xl">
        <div className="container flex h-20 items-center justify-between">
          <Brand light />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
            {nav.map(([n, h]) => (
              <a key={n} className="nav-link" href={h}>
                {n}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <ButtonLink
              href={wa(`Olá! Gostaria de conhecer os planos de internet da ${COMPANY.name}.`)}
              kind="light"
            >
              Contrate agora <ArrowRight className="size-4" />
            </ButtonLink>
          </div>
          <button
            className="icon-button lg:hidden"
            onClick={() => setMenu(!menu)}
            aria-label={menu ? "Fechar menu" : "Abrir menu"}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {menu && (
          <nav className="mobile-menu lg:hidden" aria-label="Navegação para celular">
            {nav.map(([n, h]) => (
              <a key={n} href={h} onClick={() => setMenu(false)}>
                {n}
              </a>
            ))}
            <ButtonLink
              href={wa(`Olá! Gostaria de conhecer os planos de internet da ${COMPANY.name}.`)}
            >
              Contrate agora
            </ButtonLink>
          </nav>
        )}
      </header>

      <main>
        <section id="inicio" className="hero-section scroll-mt-20">
          <div className="hero-graphic" aria-hidden="true">
            <div className="fiber-line fiber-one" />
            <div className="fiber-line fiber-two" />
            <div className="fiber-line fiber-three" />
            <div className="speed-orbit">
              <Wifi />
              <span>100% fibra óptica</span>
            </div>
            <div className="speed-pill pill-one">
              <Zap /> Ultra velocidade
            </div>
            <div className="speed-pill pill-two">
              <ShieldCheck /> Sinal estável
            </div>
          </div>
          <div className="hero-wash" />
          <div className="container relative z-10 grid min-h-[760px] items-center pt-24 lg:grid-cols-12">
            <div className="max-w-3xl py-16 lg:col-span-7">
              <div className="eyebrow">
                <Sparkles className="size-4" /> Fibra óptica de verdade
              </div>
              <h1>Internet rápida, estável e do jeito que você precisa.</h1>
              <p className="hero-copy">
                Alta velocidade para trabalhar, estudar, jogar, assistir e navegar sem preocupação.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink
                  href={wa(`Olá! Gostaria de conhecer os planos de internet da ${COMPANY.name}.`)}
                >
                  Quero contratar <ArrowRight className="size-4" />
                </ButtonLink>
                <ButtonLink href="#beneficios" kind="outline">
                  Conheça os benefícios
                </ButtonLink>
                <ButtonLink
                  href={wa(`Olá! Gostaria de conhecer os planos de internet da ${COMPANY.name}.`)}
                  kind="whatsapp"
                >
                  <MessageCircle className="size-4" /> WhatsApp
                </ButtonLink>
              </div>
              <div className="trust-row">
                {[
                  "Fibra óptica",
                  "Instalação rápida",
                  "Suporte especializado",
                  "Alta velocidade",
                ].map((x) => (
                  <span key={x}>
                    <CircleCheck className="size-4" />
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section id="beneficios" className="section bg-surface scroll-mt-20">
          <div className="container">
            <div className="section-head">
              <span className="section-kicker">Conexão que acompanha você</span>
              <h2>Por que escolher a {COMPANY.name}?</h2>
              <p>Tecnologia e atendimento unidos para você aproveitar cada momento online.</p>
            </div>
            <div className="benefit-grid">
              {benefits.map(([Icon, t, d]) => (
                <article className="benefit" key={String(t)}>
                  <div className="benefit-icon">
                    <Icon />
                  </div>
                  <h3>{String(t)}</h3>
                  <p>{String(d)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head">
              <span className="section-kicker">Internet para todos</span>
              <h2>Conexão certa para cada objetivo</h2>
            </div>
            <div className="audience-grid">
              <article className="audience audience-home">
                <House />
                <span>Internet residencial</span>
                <h3>Conecte toda a sua casa</h3>
                <p>
                  Mais liberdade para estudar, trabalhar, jogar, conversar e assistir com toda a
                  família.
                </p>
                <ButtonLink
                  href={wa(`Olá! Gostaria de conhecer a internet residencial da ${COMPANY.name}.`)}
                  kind="light"
                >
                  Falar com a equipe <ArrowRight className="size-4" />
                </ButtonLink>
              </article>
              <article className="audience audience-business">
                <Building2 />
                <span>Internet empresarial</span>
                <h3>Conexão para sua empresa crescer</h3>
                <p>
                  Estabilidade para sistemas, videoconferências e operações que não podem parar.
                </p>
                <ButtonLink
                  href={wa(`Olá! Gostaria de conhecer a internet empresarial da ${COMPANY.name}.`)}
                  kind="outline"
                >
                  Falar com a equipe <ArrowRight className="size-4" />
                </ButtonLink>
              </article>
            </div>
          </div>
        </section>

        <section id="faq" className="section scroll-mt-20">
          <div className="container faq-wrap">
            <div>
              <span className="section-kicker">Tire suas dúvidas</span>
              <h2>Perguntas frequentes</h2>
              <p className="body-copy">
                Tudo o que você precisa saber antes de contratar sua internet.
              </p>
              <div className="support-box">
                <MessageCircle />
                <div>
                  <strong>Ainda tem dúvidas?</strong>
                  <span>Fale diretamente com nossa equipe.</span>
                </div>
                <a href={wa(`Olá! Tenho uma dúvida sobre os planos da ${COMPANY.name}.`)}>
                  Falar agora
                </a>
              </div>
            </div>
            <div className="faq-list">
              {faqs.map(([q, a]) => (
                <details key={q}>
                  <summary>
                    {q}
                    <ChevronDown />
                  </summary>
                  <p>{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <div className="cta-icon">
              <Wifi size={48} />
            </div>
            <h2>Pronto para ter uma internet melhor?</h2>
            <p>Entre em contato e venha fazer parte da {COMPANY.name}.</p>
            <div>
              <ButtonLink
                href={wa(`Olá! Gostaria de contratar a internet da ${COMPANY.name}.`)}
                kind="light"
              >
                Quero contratar <ArrowRight className="size-4" />
              </ButtonLink>
              <ButtonLink
                href={wa(`Olá! Gostaria de conhecer os planos de internet da ${COMPANY.name}.`)}
                kind="whatsapp"
              >
                <MessageCircle className="size-4" /> Falar pelo WhatsApp
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <footer id="contato">
        <div className="container footer-grid">
          <div>
            <Brand light icon={false}/>
            <p>
              Internet fibra óptica para conectar sua casa ou empresa com velocidade, estabilidade e
              suporte.
            </p>
          </div>
          <div>
            <h3>Links rápidos</h3>
            <a href="#inicio">Início</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h3>Contato</h3>
            {WHATSAPP.map((w) => (
              <a key={w.number} href={`https://wa.me/${w.number}`}>
                <MessageCircle />
                {w.display}
              </a>
            ))}
            <a href={INSTAGRAM} target="_blank" rel="noreferrer">
              <Instagram />
              @newworld_telecom
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 {COMPANY.name}. Todos os direitos reservados.</span>
          <div>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </footer>
      <a
        className="floating-wa"
        href={wa(`Olá! Gostaria de conhecer os planos de internet da ${COMPANY.name}.`)}
        aria-label="Falar pelo WhatsApp"
      >
        <MessageCircle />
        <span>Fale conosco</span>
      </a>
    </div>
  );
}
