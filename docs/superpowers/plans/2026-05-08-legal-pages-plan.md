# Legal Pages Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create 4 static legal pages (Privacy, Terms, Cookies, LGPD) with shared layout, hybrid content format (plain-language summary + full legal text), and update footer links.

**Architecture:** A reusable `LegalPageLayout` component provides the visual shell (header, summary box, legal nav, content container, footer). Each page is a Next.js route that imports the layout and passes its specific content as children. Content is written inline in JSX for rich formatting.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion

---

## File Structure

| File | Responsibility |
|------|----------------|
| `web/src/components/legal/LegalPageLayout.tsx` | Shared visual shell for all 4 legal pages |
| `web/src/app/privacidade/page.tsx` | Privacy Policy page content + metadata |
| `web/src/app/termos/page.tsx` | Terms of Use page content + metadata |
| `web/src/app/cookies/page.tsx` | Cookie Policy page content + metadata |
| `web/src/app/lgpd/page.tsx` | LGPD page content + metadata |
| `web/src/components/Footer.tsx` | Update legal link hrefs to internal routes |

---

## Constants (used across all tasks)

```tsx
// Legal navigation links shared by all pages
const LEGAL_NAV = [
  { label: "Política de Privacidade", href: "/privacidade" },
  { label: "Termos de Uso", href: "/termos" },
  { label: "Política de Cookies", href: "/cookies" },
  { label: "LGPD", href: "/lgpd" },
] as const;
```

---

### Task 1: Create LegalPageLayout component

**Files:**
- Create: `web/src/components/legal/LegalPageLayout.tsx`

- [ ] **Step 1: Create the directory**

```bash
mkdir -p /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web/src/components/legal
```

- [ ] **Step 2: Write LegalPageLayout.tsx**

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  summary: string[];
  lastUpdated: string;
  children: React.ReactNode;
}

const LEGAL_NAV = [
  { label: "Política de Privacidade", href: "/privacidade" },
  { label: "Termos de Uso", href: "/termos" },
  { label: "Política de Cookies", href: "/cookies" },
  { label: "LGPD", href: "/lgpd" },
] as const;

export function LegalPageLayout({
  title,
  subtitle,
  summary,
  lastUpdated,
  children,
}: LegalPageLayoutProps) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navigation />

      <main className="flex-1">
        {/* Hero / Header */}
        <section
          className="bg-white border-b border-[var(--amelia-line)]"
          style={{ padding: "clamp(5rem, 12vh, 7rem) clamp(1.5rem, 5vw, 5rem) clamp(2rem, 5vh, 3rem)" }}
        >
          <div className="mx-auto max-w-[780px]">
            <h1
              className="font-display font-normal text-[#7b6bb2]"
              style={{
                fontSize: "clamp(2rem, 5vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {title}
            </h1>
            {subtitle && (
              <p className="mt-3 font-sans font-light text-[#5c5470] text-[clamp(1rem,1.5vw,1.15rem)] leading-relaxed max-w-[600px]">
                {subtitle}
              </p>
            )}

            {/* Summary box */}
            <div className="mt-8 rounded-r-xl border-l-[3px] border-[#7b6bb2] bg-[rgba(123,107,178,0.06)] px-6 py-5">
              <p className="mb-3 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-[#7b6bb2]">
                Resumo para você
              </p>
              <ul className="flex flex-col gap-2">
                {summary.map((item, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-[#7b6bb2]" />
                    <span className="font-sans text-sm leading-relaxed text-[#4a4a4a]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Legal nav tabs */}
        <nav
          className="sticky top-[72px] z-30 border-b border-[var(--amelia-line)] bg-white/95 backdrop-blur-md"
          aria-label="Navegação entre políticas legais"
        >
          <div className="mx-auto flex max-w-[780px] gap-1 overflow-x-auto px-[clamp(1.5rem,5vw,5rem)] py-3">
            {LEGAL_NAV.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`shrink-0 rounded-full px-4 py-2 font-sans text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-[#7b6bb2] text-white"
                      : "text-[#5c5470] hover:bg-[rgba(123,107,178,0.08)] hover:text-[#7b6bb2]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Main legal content */}
        <article
          className="mx-auto max-w-[780px] px-[clamp(1.5rem,5vw,5rem)]"
          style={{ paddingTop: "clamp(2rem,5vh,3rem)", paddingBottom: "clamp(3rem,8vh,5rem)" }}
        >
          <div className="prose-legal">{children}</div>

          <p className="mt-12 border-t border-[var(--amelia-line)] pt-6 font-sans text-xs text-[#8a8a8a]">
            Última atualização: {lastUpdated}
          </p>
        </article>
      </main>

      <Footer />
    </div>
  );
}
```

- [ ] **Step 3: Add prose-legal CSS utilities to globals.css**

Append to `web/src/app/globals.css`:

```css
/* ─── Legal pages typography ─── */
.prose-legal h2 {
  font-family: var(--font-dm-sans, "DM Sans", sans-serif);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--amelia-ink);
  margin-top: 2.5rem;
  margin-bottom: 1rem;
  line-height: 1.35;
}

.prose-legal h3 {
  font-family: var(--font-dm-sans, "DM Sans", sans-serif);
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--amelia-ink);
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
  line-height: 1.4;
}

.prose-legal p {
  font-family: var(--font-dm-sans, "DM Sans", sans-serif);
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #3a3a3a;
  margin-bottom: 1rem;
}

.prose-legal ul {
  list-style: disc;
  padding-left: 1.25rem;
  margin-bottom: 1rem;
}

.prose-legal ul li {
  font-family: var(--font-dm-sans, "DM Sans", sans-serif);
  font-size: 0.9375rem;
  line-height: 1.7;
  color: #3a3a3a;
  margin-bottom: 0.35rem;
}

.prose-legal a {
  color: #7b6bb2;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.prose-legal a:hover {
  color: #5e4985;
}

.prose-legal strong {
  font-weight: 600;
  color: var(--amelia-ink);
}
```

- [ ] **Step 4: Commit Task 1**

```bash
cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web
git add src/components/legal/LegalPageLayout.tsx src/app/globals.css
git commit -m "feat: add LegalPageLayout shared component for legal pages"
```

---

### Task 2: Create Privacy Policy page

**Files:**
- Create: `web/src/app/privacidade/page.tsx`

- [ ] **Step 1: Create the page directory**

```bash
mkdir -p /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web/src/app/privacidade
```

- [ ] **Step 2: Write page.tsx with content**

```tsx
import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Política de Privacidade — Amélia Saúde",
  description:
    "Saiba como a Amélia Saúde coleta, protege e utiliza seus dados pessoais. Transparência e segurança em cada etapa.",
  robots: "index, follow",
};

const SUMMARY = [
  "Coletamos apenas os dados necessários para operar seu plano de saúde e prestar atendimento.",
  "Seus dados são protegidos por criptografia e controles rigorosos de acesso.",
  "Nunca vendemos seus dados pessoais a terceiros.",
  "Você pode solicitar acesso, correção ou exclusão dos seus dados a qualquer momento.",
];

export default function PrivacidadePage() {
  return (
    <LegalPageLayout
      title="Política de Privacidade"
      subtitle="Como tratamos e protegemos suas informações pessoais"
      summary={SUMMARY}
      lastUpdated="08 de maio de 2026"
    >
      <h2>1. Introdução</h2>
      <p>
        A <strong>Amelia Operadora de Planos de Saude S.A.</strong> (“Amélia Saúde”, “nós” ou “nossa”), inscrita no CNPJ sob o nº 57.395.677/0001-93, respeita a privacidade dos seus usuários, beneficiários e visitantes. Esta Política de Privacidade descreve como coletamos, utilizamos, armazenamos, compartilhamos e protegemos suas informações pessoais.
      </p>
      <p>
        Ao acessar nosso site, utilizar nossos serviços ou contratar um plano de saúde, você declara que leu, entendeu e concorda com as práticas descritas neste documento.
      </p>

      <h2>2. Dados que coletamos</h2>
      <p>Podemos coletar as seguintes categorias de dados pessoais:</p>
      <ul>
        <li><strong>Identificação:</strong> nome completo, CPF, RG, data de nascimento, filiação, nacionalidade.</li>
        <li><strong>Contato:</strong> endereço residencial, telefone fixo e celular, endereço de e-mail.</li>
        <li><strong>Dados de saúde:</strong> histórico médico, diagnósticos, prescrições, resultados de exames e informações necessárias à autorização de procedimentos.</li>
        <li><strong>Financeiros:</strong> dados bancários, comprovantes de renda, histórico de pagamentos e inadimplência.</li>
        <li><strong>Navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, tempo de permanência e cookies (conforme nossa Política de Cookies).</li>
      </ul>

      <h2>3. Base legal para o tratamento</h2>
      <p>Tratamos seus dados pessoais com base em uma ou mais das seguintes hipóteses legais previstas na LGPD:</p>
      <ul>
        <li><strong>Execução de contrato:</strong> para viabilizar a contratação e prestação dos serviços de saúde contratados.</li>
        <li><strong>Obrigação legal ou regulatória:</strong> para atender exigências da ANS, do Ministério da Saúde, da Receita Federal e de outras autoridades competentes.</li>
        <li><strong>Consentimento:</strong> quando necessário para finalidades específicas, como envio de comunicações de marketing.</li>
        <li><strong>Legítimo interesse:</strong> para prevenção de fraudes, garantia da segurança de nossos sistemas e aprimoramento dos serviços.</li>
      </ul>

      <h2>4. Finalidades do tratamento</h2>
      <p>Utilizamos seus dados para as seguintes finalidades:</p>
      <ul>
        <li>Cadastro, habilitação e manutenção do vínculo como beneficiário do plano de saúde.</li>
        <li>Autorização, reembolso e prestação de atendimento médico-hospitalar.</li>
        <li>Comunicação sobre benefícios, reajustes, mudanças de rede credenciada e informações operacionais.</li>
        <li>Cumprimento de obrigações legais e regulatórias perante a ANS e outros órgãos.</li>
        <li>Melhoria contínua dos nossos produtos, serviços digitais e atendimento ao cliente.</li>
        <li>Prevenção e investigação de fraudes e atividades ilícitas.</li>
      </ul>

      <h2>5. Com quem compartilhamos seus dados</h2>
      <p>Seus dados pessoais podem ser compartilhados com:</p>
      <ul>
        <li><strong>Prestadores de serviços de saúde:</strong> médicos, clínicas, hospitais, laboratórios e demais profissionais da nossa rede credenciada, estritamente para a prestação do atendimento contratado.</li>
        <li><strong>Agência Nacional de Saúde Suplementar (ANS):</strong> para fins de regulação, fiscalização e cumprimento de obrigações legais.</li>
        <li><strong>Empresas parceiras e operadoras de saúde:</strong> quando necessário para operacionalização de produtos coletivos por adesão.</li>
        <li><strong>Autoridades públicas:</strong> quando exigido por lei, ordem judicial ou regulatória.</li>
        <li><strong>Fornecedores e prestadores de serviços terceirizados:</strong> hospedagem de dados, serviços de TI, atendimento ao cliente e análise de dados, sempre mediante contrato com cláusulas de confidencialidade e proteção de dados.</li>
      </ul>

      <h2>6. Retenção e exclusão de dados</h2>
      <p>
        Mantemos seus dados pessoais pelo tempo necessário para cumprir as finalidades descritas nesta política e para atender obrigações legais e regulatórias. Após o término do vínculo contratual, alguns dados poderão ser retidos pelo prazo exigido por lei (por exemplo, 5 anos para fins fiscais, conforme o Código Tributário Nacional).
      </p>
      <p>
        Quando aplicável, e desde que não haja impedimento legal, seus dados serão anonimizados ou excluídos ao final do prazo de retenção.
      </p>

      <h2>7. Seus direitos como titular</h2>
      <p>Em conformidade com a LGPD, você possui os seguintes direitos:</p>
      <ul>
        <li><strong>Acesso:</strong> solicitar informações sobre os dados pessoais que mantemos sobre você.</li>
        <li><strong>Correção:</strong> solicitar a retificação de dados incompletos, inexatos ou desatualizados.</li>
        <li><strong>Exclusão:</strong> solicitar a eliminação dos dados pessoais, exceto quando houver base legal para a retenção.</li>
        <li><strong>Portabilidade:</strong> solicitar a transferência dos seus dados a outro fornecedor de serviço ou produto, em formato estruturado e interoperável.</li>
        <li><strong>Revogação do consentimento:</strong> retirar seu consentimento a qualquer tempo, quando o tratamento tiver essa hipótese como base legal.</li>
        <li><strong>Oposição:</strong> solicitar a interrupção de tratamentos baseados em legítimo interesse, quando aplicável.</li>
        <li><strong>Informação:</strong> saber com quem seus dados foram compartilhados.</li>
      </ul>

      <h2>8. Segurança da informação</h2>
      <p>Adotamos medidas técnicas e administrativas adequadas para proteger seus dados pessoais contra acessos não autorizados, destruição, perda, alteração, vazamento ou qualquer forma de tratamento inadequado ou ilícito, incluindo:</p>
      <ul>
        <li>Criptografia de dados sensíveis em trânsito (TLS 1.2+) e em repouso (AES-256).</li>
        <li>Controles rigorosos de acesso baseados em princípio do menor privilégio.</li>
        <li>Registros de auditoria (logs) de acessos e alterações em dados pessoais.</li>
        <li>Políticas de segurança da informação alinhadas às melhores práticas do mercado.</li>
        <li>Treinamento contínuo de colaboradores sobre proteção de dados e privacidade.</li>
      </ul>

      <h2>9. Cookies e tecnologias de rastreamento</h2>
      <p>
        Utilizamos cookies e tecnologias similares para garantir o funcionamento do site, entender como você interage conosco e aprimorar sua experiência. Para mais detalhes, consulte nossa <a href="/cookies">Política de Cookies</a>.
      </p>

      <h2>10. Alterações nesta política</h2>
      <p>
        Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas, na legislação ou na regulamentação. Recomendamos que você a revise regularmente. Alterações materiais serão comunicadas por e-mail ou por meio de avisos em nosso site.
      </p>

      <h2>11. Contato do Encarregado de Dados (DPO)</h2>
      <p>
        Para exercer seus direitos, tirar dúvidas ou registrar reclamações sobre esta política, entre em contato com nosso Encarregado de Dados:
      </p>
      <p>
        <strong>E-mail:</strong>{" "}
        <a href="mailto:privacidade@ameliasaude.com.br">privacidade@ameliasaude.com.br</a>
        <br />
        <strong>Correspondência:</strong> Amelia Operadora de Planos de Saude S.A. — Departamento de Privacidade e Proteção de Dados. Endereço disponível pelos canais de atendimento.
      </p>
    </LegalPageLayout>
  );
}
```

- [ ] **Step 3: Commit Task 2**

```bash
cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web
git add src/app/privacidade/page.tsx
git commit -m "feat: add Privacy Policy page with full legal content"
```

---

### Task 3: Create Terms of Use page

**Files:**
- Create: `web/src/app/termos/page.tsx`

- [ ] **Step 1: Create the page directory**

```bash
mkdir -p /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web/src/app/termos
```

- [ ] **Step 2: Write page.tsx with content**

```tsx
import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Termos de Uso — Amélia Saúde",
  description:
    "Condições gerais de uso do site e dos serviços digitais da Amélia Saúde. Leia atentamente antes de navegar.",
  robots: "index, follow",
};

const SUMMARY = [
  "Ao usar nosso site, você concorda em fornecer informações verdadeiras e atualizadas.",
  "O conteúdo disponível é informativo e não substitui orientação médica profissional.",
  "Você não pode usar nossos serviços para fins ilícitos ou que possam causar danos.",
  "Reservamos o direito de modificar estes termos a qualquer momento, com aviso prévio.",
];

export default function TermosPage() {
  return (
    <LegalPageLayout
      title="Termos de Uso"
      subtitle="Condições gerais para navegação e utilização dos nossos serviços digitais"
      summary={SUMMARY}
      lastUpdated="08 de maio de 2026"
    >
      <h2>1. Aceitação dos termos</h2>
      <p>
        Ao acessar, navegar ou utilizar o site da <strong>Amelia Operadora de Planos de Saude S.A.</strong> (“Amélia Saúde”), você concorda em cumprir e estar vinculado aos presentes Termos de Uso. Se você não concordar com qualquer disposição deste documento, deve abster-se de utilizar nosso site e serviços digitais.
      </p>
      <p>
        Estes termos se aplicam a todos os visitantes, usuários, beneficiários e qualquer pessoa que acesse ou utilize nossos canais digitais.
      </p>

      <h2>2. Objeto</h2>
      <p>
        O site da Amélia Saúde tem como finalidade fornecer informações sobre nossos planos de saúde, rede credenciada, serviços de telemedicina, canais de atendimento e demais produtos e serviços oferecidos pela operadora.
      </p>
      <p>
        Algumas funcionalidades do site podem exigir cadastro prévio ou estar disponíveis exclusivamente para beneficiários ativos. O acesso a essas funcionalidades está sujeito a termos adicionais específicos.
      </p>

      <h2>3. Cadastro e responsabilidade pelas informações</h2>
      <p>
        Ao se cadastrar em nossos canais digitais, você se compromete a fornecer informações verdadeiras, precisas, atualizadas e completas. É de sua exclusiva responsabilidade manter seus dados de cadastro atualizados.
      </p>
      <p>
        Você é responsável por manter a confidencialidade de suas credenciais de acesso (login e senha) e por todas as atividades realizadas em sua conta. A Amélia Saúde não se responsabiliza por acessos não autorizados resultantes de negligência na guarda de suas credenciais.
      </p>

      <h2>4. Propriedade intelectual</h2>
      <p>
        Todo o conteúdo disponível no site, incluindo, mas não se limitando a, textos, imagens, logotipos, marcas, vídeos, áudios, gráficos, ícones, layout, design e software, é de propriedade exclusiva da Amélia Saúde ou de seus licenciadores e está protegido pelas leis de propriedade intelectual.
      </p>
      <p>
        É vedada a reprodução, distribuição, modificação, exibição pública, criação de obras derivadas ou qualquer outra forma de utilização do conteúdo sem autorização prévia e expressa da Amélia Saúde.
      </p>

      <h2>5. Limitação de responsabilidade</h2>
      <p>
        O conteúdo disponível em nosso site tem caráter meramente informativo e não configura aconselhamento médico, diagnóstico ou tratamento. Decisões relacionadas à saúde devem sempre ser tomadas em consulta com profissionais de saúde qualificados.
      </p>
      <p>
        A Amélia Saúde não garante que o site estará sempre disponível, livre de erros, vírus ou outras falhas técnicas. Eventuais indisponibilidades decorrentes de manutenção, atualizações ou problemas de conectividade não gerarão direito a indenização.
      </p>
      <p>
        A Amélia Saúde não se responsabiliza por danos diretos, indiretos, incidentais, consequenciais ou punitivos resultantes do uso ou da impossibilidade de uso do site, salvo em caso de dolo ou culpa grave comprovada.
      </p>

      <h2>6. Links externos</h2>
      <p>
        Nosso site pode conter links para sites de terceiros. A inclusão desses links não implica endosso, parceria ou responsabilidade da Amélia Saúde pelo conteúdo, políticas de privacidade ou práticas desses sites. Recomendamos que você leia os termos de uso e políticas de privacidade de qualquer site de terceiro que visitar.
      </p>

      <h2>7. Condutas proibidas</h2>
      <p>Ao utilizar nosso site, você se compromete a não:</p>
      <ul>
        <li>Utilizar o site para fins ilícitos, fraudulentos ou que violem direitos de terceiros.</li>
        <li>Tentar obter acesso não autorizado a nossos sistemas, redes ou dados de outros usuários.</li>
        <li>Distribuir malware, vírus, spyware ou qualquer código malicioso.</li>
        <li>Realizar engenharia reversa, descompilar ou tentar extrair o código-fonte do site.</li>
        <li>Utilizar robôs, crawlers, scrapers ou outros meios automatizados para acessar ou extrair conteúdo sem autorização.</li>
        <li>Interferir ou prejudicar a integridade, segurança ou performance do site.</li>
      </ul>

      <h2>8. Modificações dos termos</h2>
      <p>
        A Amélia Saúde se reserva o direito de alterar, adicionar ou remover disposições destes Termos de Uso a qualquer momento, mediante publicação da versão atualizada em nosso site. Alterações materiais serão comunicadas por e-mail ou aviso em destaque no site.
      </p>
      <p>
        O uso continuado do site após a publicação de alterações constituirá aceitação dos novos termos.
      </p>

      <h2>9. Lei aplicável e foro</h2>
      <p>
        Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil.
      </p>
      <p>
        Fica eleito o Foro da Comarca do Rio de Janeiro, Estado do Rio de Janeiro, como competente para dirimir quaisquer controvérsias decorrentes destes termos, com exclusão de qualquer outro, por mais privilegiado que seja.
      </p>
    </LegalPageLayout>
  );
}
```

- [ ] **Step 3: Commit Task 3**

```bash
cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web
git add src/app/termos/page.tsx
git commit -m "feat: add Terms of Use page with full legal content"
```

---

### Task 4: Create Cookie Policy page

**Files:**
- Create: `web/src/app/cookies/page.tsx`

- [ ] **Step 1: Create the page directory**

```bash
mkdir -p /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web/src/app/cookies
```

- [ ] **Step 2: Write page.tsx with content**

```tsx
import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "Política de Cookies — Amélia Saúde",
  description:
    "Entenda como usamos cookies para melhorar sua experiência, garantir a segurança e personalizar nossos serviços.",
  robots: "index, follow",
};

const SUMMARY = [
  "Cookies são pequenos arquivos que ajudam o site a funcionar melhor e de forma mais segura.",
  "Utilizamos cookies necessários, analíticos e de funcionalidade — nunca para rastreamento invasivo.",
  "Você pode aceitar, recusar ou gerenciar suas preferências de cookies a qualquer momento.",
  "Cookies de terceiros são usados apenas para análise de tráfego e melhoria do site.",
];

export default function CookiesPage() {
  return (
    <LegalPageLayout
      title="Política de Cookies"
      subtitle="Como utilizamos cookies e tecnologias similares em nosso site"
      summary={SUMMARY}
      lastUpdated="08 de maio de 2026"
    >
      <h2>1. O que são cookies</h2>
      <p>
        Cookies são pequenos arquivos de texto que um site armazena no seu dispositivo (computador, tablet ou celular) quando você o visita. Eles permitem que o site reconheça seu dispositivo em visitas subsequentes, memorizando suas preferências e melhorando sua experiência de navegação.
      </p>
      <p>
        Além dos cookies propriamente ditos, utilizamos outras tecnologias de rastreamento similares, como pixels, web beacons, local storage e session storage, que cumprem funções análogas.
      </p>

      <h2>2. Tipos de cookies que utilizamos</h2>
      <p>Classificamos os cookies utilizados em nosso site nas seguintes categorias:</p>

      <h3>2.1. Cookies necessários (essenciais)</h3>
      <p>
        São indispensáveis para o funcionamento básico do site. Sem eles, algumas funcionalidades não operam corretamente. Eles não armazenam informações pessoais identificáveis e não podem ser desativados em nossas configurações, pois são essenciais à prestação do serviço.
      </p>
      <ul>
        <li>Manutenção de sessões de navegação seguras.</li>
        <li>Proteção contra fraudes e ataques de segurança.</li>
        <li>Carregamento correto de páginas e recursos essenciais.</li>
      </ul>

      <h3>2.2. Cookies analíticos (desempenho)</h3>
      <p>
        Nos ajudam a entender como os visitantes interagem com nosso site, coletando informações de forma agregada e anônima. Esses dados são utilizados para melhorar a estrutura, o conteúdo e a usabilidade do site.
      </p>
      <ul>
        <li>Número de visitantes e páginas mais acessadas.</li>
        <li>Tempo médio de permanência no site.</li>
        <li>Fontes de tráfego e origem das visitas.</li>
        <li>Taxas de rejeição e páginas de saída.</li>
      </ul>

      <h3>2.3. Cookies de funcionalidade</h3>
      <p>
        Permitem que o site memorize suas escolhas e preferências, oferecendo uma experiência mais personalizada e conveniente.
      </p>
      <ul>
        <li>Idioma e região preferidos.</li>
        <li>Preferências de acessibilidade (tamanho de fonte, contraste).</li>
        <li>Lembretes de preenchimento de formulários.</li>
      </ul>

      <h3>2.4. Cookies de marketing (publicidade)</h3>
      <p>
        Atualmente, <strong>não utilizamos cookies de marketing</strong> para exibir anúncios personalizados ou compartilhar dados com redes de publicidade. Caso passemos a utilizar essa categoria no futuro, solicitaremos seu consentimento específico e atualizaremos esta política.
      </p>

      <h2>3. Cookies de terceiros</h2>
      <p>
        Utilizamos serviços de terceiros que podem definir cookies em seu dispositivo quando você visita nosso site. Esses cookies são gerenciados pelos respectivos provedores e estão sujeitos às suas próprias políticas de privacidade.
      </p>
      <ul>
        <li><strong>Google Analytics:</strong> utilizado para análise de tráfego e comportamento de navegação. Os dados são processados de forma agregada e anonimizada. Para mais informações, consulte a <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidade do Google</a>.</li>
      </ul>

      <h2>4. Gerenciamento de preferências</h2>
      <p>
        Você pode gerenciar suas preferências de cookies de diversas formas:
      </p>
      <ul>
        <li><strong>Central de preferências:</strong> quando disponível em nosso site, utilize o painel de gerenciamento de cookies para aceitar ou recusar categorias específicas.</li>
        <li><strong>Configurações do navegador:</strong> a maioria dos navegadores permite que você visualize, exclua ou bloqueie cookies. Acesse as configurações de privacidade do seu navegador para mais detalhes.
        </li>
        <li><strong>Ferramentas de opt-out:</strong> para cookies de análise do Google, você pode instalar o <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</li>
      </ul>
      <p>
        <strong>Importante:</strong> a desativação de cookies necessários pode comprometer o funcionamento correto do site e inviabilizar o acesso a algumas funcionalidades.
      </p>

      <h2>5. Alterações nesta política</h2>
      <p>
        Podemos atualizar esta Política de Cookies periodicamente para refletir mudanças nas tecnologias utilizadas ou na legislação aplicável. Recomendamos que você a revise regularmente. Alterações significativas serão comunicadas por meio de aviso em nosso site.
      </p>
    </LegalPageLayout>
  );
}
```

- [ ] **Step 3: Commit Task 4**

```bash
cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web
git add src/app/cookies/page.tsx
git commit -m "feat: add Cookie Policy page with full legal content"
```

---

### Task 5: Create LGPD page

**Files:**
- Create: `web/src/app/lgpd/page.tsx`

- [ ] **Step 1: Create the page directory**

```bash
mkdir -p /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web/src/app/lgpd
```

- [ ] **Step 2: Write page.tsx with content**

```tsx
import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const metadata: Metadata = {
  title: "LGPD — Amélia Saúde",
  description:
    "Conheça seus direitos sob a Lei Geral de Proteção de Dados (LGPD) e entenda como a Amélia Saúde os garante.",
  robots: "index, follow",
};

const SUMMARY = [
  "A LGPD protege seus dados pessoais no Brasil e garante direitos como acesso, correção e exclusão.",
  "Como operadora de saúde, tratamos dados sensíveis com proteção reforçada e base legal específica.",
  "Você pode exercer seus direitos a qualquer momento pelos nossos canais de atendimento.",
  "Temos um Encarregado de Dados (DPO) dedicado para responder às suas solicitações.",
];

export default function LgpdPage() {
  return (
    <LegalPageLayout
      title="Lei Geral de Proteção de Dados (LGPD)"
      subtitle="Seus direitos e nosso compromisso com a proteção de dados pessoais"
      summary={SUMMARY}
      lastUpdated="08 de maio de 2026"
    >
      <h2>1. O que é a LGPD</h2>
      <p>
        A <strong>Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018)</strong>, conhecida como LGPD, é a legislação brasileira que estabelece regras sobre a coleta, armazenamento, tratamento e compartilhamento de dados pessoais. Seu objetivo é proteger os direitos fundamentais de liberdade, privacidade e o livre desenvolvimento da personalidade das pessoas naturais.
      </p>
      <p>
        A Amélia Saúde está plenamente comprometida com o cumprimento da LGPD e adota as melhores práticas de governança, segurança e transparência no tratamento dos dados de nossos beneficiários, colaboradores, prestadores e demais titulares.
      </p>

      <h2>2. Dados pessoais sensíveis e tratamento especial</h2>
      <p>
        Como operadora de planos de saúde, a Amélia Saúde trata <strong>dados pessoais sensíveis</strong>, especialmente dados relacionados à saúde de nossos beneficiários. A LGPD classifica dados de saúde como uma categoria especial que exige proteção reforçada e base legal específica para seu tratamento.
      </p>
      <p>
        O tratamento de dados sensíveis só pode ocorrer nas seguintes hipóteses legais:
      </p>
      <ul>
        <li>Consentimento específico e destacado do titular.</li>
        <li>Cumprimento de obrigação legal ou regulatória pela controladora.</li>
        <li>Tratamento necessário para a execução de políticas públicas.</li>
        <li>Estudos realizados por órgão de pesquisa.</li>
        <li>Exercício regular de direitos em processo judicial, administrativo ou arbitral.</li>
        <li>Prevenção de fraudes e segurança do titular.</li>
      </ul>
      <p>
        No caso da Amélia Saúde, o tratamento de dados de saúde é realizado com base na <strong>execução do contrato de plano de saúde</strong> e no <strong>cumprimento de obrigações legais e regulatórias</strong> impostas pela ANS e pelo Ministério da Saúde.
      </p>

      <h2>3. Bases legais aplicáveis ao nosso tratamento</h2>
      <p>
        Todo tratamento de dados pessoais realizado pela Amélia Saúde está fundamentado em uma ou mais das bases legais previstas no art. 7º da LGPD:
      </p>
      <ul>
        <li><strong>Consentimento do titular:</strong> quando você concorda expressamente com o tratamento para finalidades específicas, como recebimento de comunicações de marketing.</li>
        <li><strong>Cumprimento de obrigação legal ou regulatória:</strong> para atender exigências da ANS, Receita Federal e demais órgãos reguladores.</li>
        <li><strong>Execução de contrato:</strong> para viabilizar a contratação, habilitação e prestação dos serviços de saúde contratados.</li>
        <li><strong>Exercício regular de direitos:</strong> em processos judiciais, administrativos ou arbitrais.</li>
        <li><strong>Legítimo interesse:</strong> para prevenção de fraudes, segurança da informação e melhoria contínua dos serviços, desde que respeitados os direitos e liberdades fundamentais do titular.</li>
      </ul>

      <h2>4. Direitos do titular (art. 18 da LGPD)</h2>
      <p>A LGPD garante a todo titular de dados pessoais os seguintes direitos:</p>
      <ul>
        <li><strong>I — Confirmação e acesso:</strong> confirmar a existência de tratamento e solicitar o acesso aos seus dados pessoais.</li>
        <li><strong>II — Correção:</strong> solicitar a retificação de dados incompletos, inexatos ou desatualizados.</li>
        <li><strong>III — Anonimização, bloqueio ou eliminação:</strong> solicitar a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD.</li>
        <li><strong>IV — Portabilidade:</strong> solicitar a portabilidade dos dados a outro fornecedor de serviço ou produto, em formato estruturado e de leitura automatizada.</li>
        <li><strong>V — Eliminação:</strong> solicitar a eliminação dos dados pessoais tratados com base no consentimento, exceto nas hipóteses de guarda obrigatória previstas em lei.</li>
        <li><strong>VI — Informação:</strong> obter informações sobre entidades públicas ou privadas com as quais os dados foram compartilhados.</li>
        <li><strong>VII — Revogação do consentimento:</strong> revogar o consentimento a qualquer tempo, quando o tratamento tiver essa hipótese como base legal.</li>
        <li><strong>VIII — Oposição:</strong> solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais que afetem seus interesses, incluídos os casos de profiling.</li>
      </ul>

      <h2>5. Como exercer seus direitos</h2>
      <p>
        Para exercer qualquer dos direitos previstos na LGPD, você pode entrar em contato conosco pelos seguintes canais:
      </p>
      <ul>
        <li><strong>E-mail do DPO:</strong>{" "}
          <a href="mailto:privacidade@ameliasaude.com.br">privacidade@ameliasaude.com.br</a>
        </li>
        <li><strong>Central de Atendimento:</strong> disponível nos telefones indicados na seção Contato do site.</li>
        <li><strong>Correspondência:</strong> Amelia Operadora de Planos de Saude S.A. — Departamento de Privacidade e Proteção de Dados.</li>
      </ul>
      <p>
        Responderemos às suas solicitações no prazo máximo de <strong>15 (quinze) dias</strong>, conforme estabelecido pela LGPD. Em casos complexos, poderemos solicitar prazo adicional, desde que comunicado ao titular dentro do prazo original.
      </p>

      <h2>6. Encarregado de Dados (DPO)</h2>
      <p>
        A Amélia Saúde possui um <strong>Encarregado de Dados Pessoais (DPO)</strong>, responsável por aceitar reclamações e comunicações dos titulares, prestar esclarecimentos, adotar providências e orientar os colaboradores e prestadores de serviço sobre as práticas de proteção de dados.
      </p>
      <p>
        <strong>Contato do DPO:</strong>{" "}
        <a href="mailto:privacidade@ameliasaude.com.br">privacidade@ameliasaude.com.br</a>
      </p>

      <h2>7. Segurança e boas práticas</h2>
      <p>
        Implementamos um conjunto abrangente de medidas técnicas e administrativas para garantir a segurança e a confidencialidade dos dados pessoais, incluindo:
      </p>
      <ul>
        <li>Criptografia de dados sensíveis em trânsito e em repouso.</li>
        <li>Controle de acesso baseado em papéis e necessidade de conhecimento.</li>
        <li>Monitoramento contínuo de sistemas e detecção de anomalias.</li>
        <li>Planos de resposta a incidentes de segurança.</li>
        <li>Treinamentos periódicos de conscientização em privacidade e segurança.</li>
        <li>Avaliações de impacto à proteção de dados pessoais (DPIA) para tratamentos de alto risco.</li>
      </ul>

      <h2>8. Transferência internacional de dados</h2>
      <p>
        Atualmente, <strong>não realizamos transferências internacionais</strong> de dados pessoais dos titulares. Todos os dados são processados e armazenados em território nacional, em servidores localizados no Brasil.
      </p>
      <p>
        Caso venhamos a realizar transferências internacionais no futuro, garantiremos que sejam adotadas as salvaguardas exigidas pela LGPD, como a verificação de nível de proteção adequado no país de destino ou a utilização de cláusulas contratuais específicas.
      </p>

      <h2>9. Canais de atendimento específicos para LGPD</h2>
      <p>
        Disponibilizamos canais exclusivos para atender questões relacionadas à proteção de dados:
      </p>
      <ul>
        <li><strong>E-mail exclusivo:</strong>{" "}
          <a href="mailto:privacidade@ameliasaude.com.br">privacidade@ameliasaude.com.br</a>
        </li>
        <li><strong>Assunto recomendado:</strong> inclua "LGPD — [seu nome] — [CPF]" para agilizar o atendimento.</li>
        <li><strong>Prazo de resposta:</strong> até 15 dias úteis, podendo ser prorrogado por igual período em casos complexos, mediante comunicação ao titular.</li>
      </ul>
    </LegalPageLayout>
  );
}
```

- [ ] **Step 3: Commit Task 5**

```bash
cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web
git add src/app/lgpd/page.tsx
git commit -m "feat: add LGPD page with full legal content"
```

---

### Task 6: Update Footer legal links

**Files:**
- Modify: `web/src/components/Footer.tsx:33-38`

- [ ] **Step 1: Update legalLinks array**

Replace:
```tsx
const legalLinks = [
  { label: "Política de Privacidade", href: CONTACT.site },
  { label: "Termos de Uso", href: CONTACT.site },
  { label: "Política de Cookies", href: CONTACT.site },
  { label: "LGPD", href: `mailto:${CONTACT.email}?subject=Dúvidas%20sobre%20LGPD` },
] as const;
```

With:
```tsx
const legalLinks = [
  { label: "Política de Privacidade", href: "/privacidade" },
  { label: "Termos de Uso", href: "/termos" },
  { label: "Política de Cookies", href: "/cookies" },
  { label: "LGPD", href: "/lgpd" },
] as const;
```

- [ ] **Step 2: Commit Task 6**

```bash
cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web
git add src/components/Footer.tsx
git commit -m "fix: update footer legal links to point to internal routes"
```

---

### Task 7: Build verification

**Files:**
- Verify: all created/modified files compile correctly

- [ ] **Step 1: Run Next.js build**

```bash
cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web
npm run build
```

Expected: Build completes with 0 errors. Warnings about unoptimized images or similar are acceptable.

- [ ] **Step 2: Run ESLint**

```bash
cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web
npm run lint
```

Expected: No critical lint errors. Minor style warnings are acceptable if pre-existing.

- [ ] **Step 3: Final commit**

```bash
cd /Volumes/SSDdoMarcos/Projetos/amelia-saude-v2/web
git commit --allow-empty -m "chore: verify build passes for legal pages"
```

---

## Self-Review Checklist

### 1. Spec coverage
| Spec requirement | Task |
|------------------|------|
| LegalPageLayout component shared | Task 1 |
| Hybrid format (summary box + legal text) | Task 1 (layout) + all page tasks |
| Navigation between legal pages | Task 1 |
| Privacy Policy content | Task 2 |
| Terms of Use content | Task 3 |
| Cookie Policy content | Task 4 |
| LGPD content | Task 5 |
| Footer links updated | Task 6 |
| SEO metadata per page | Each page exports Metadata |
| Responsive design | Layout uses clamp() and max-w |
| Accessibility (headings, aria-labels) | Task 1 |
| Build verification | Task 7 |

### 2. Placeholder scan
- No "TBD", "TODO", or "fill in details" found.
- All page content is complete legal text.
- All file paths are exact.
- All code blocks contain complete, copy-pasteable code.

### 3. Type consistency
- `LegalPageLayoutProps` interface used consistently across all 4 pages.
- `LEGAL_NAV` constant defined once inside the layout component.
- Metadata type imported from `next` in all pages.
- `usePathname` from `next/navigation` used for active tab detection.

---

## Execution Options

**Plan complete and saved to `docs/superpowers/plans/2026-05-08-legal-pages-plan.md`. Two execution options:**

**1. Subagent-Driven (recommended)** — I dispatch a fresh subagent per task, review between tasks, fast iteration

**2. Inline Execution** — Execute tasks in this session using executing-plans, batch execution with checkpoints

**Which approach?**
