import { c as createComponent, d as createAstro, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_DQgsxJKG.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$2 = createAstro();
const $$Bubble = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Bubble;
  const { text, margin = "mb-4 lg:mb-5", additionalClasses = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${margin} ${additionalClasses}`, "class")}> <span class=" font-secondary font-medium tracking-wide text-[12px] lg:text-[16px] text-charcoal/80 px-3 py-[6px] lg:px-4 lg:py-2 border-[1px] lg:border-[3px] border-charcoal shadow-[2px_2px_#282b31] lg:shadow-[3px_3px_#282b31] rounded-[12px]">${text}</span> </div>`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/Bubble.astro", void 0);

const $$Astro$1 = createAstro();
const $$H1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$H1;
  const { text, width = "w-full", additionalClasses = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(`text-charcoal ${width} text-[40px] lg:text-[102px] leading-[1.3] font-primary tracking-wide text-left ${additionalClasses}`, "class")}>${text}</h1>`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/H1.astro", void 0);

const $$Astro = createAstro();
const $$BigPara = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BigPara;
  const { text, width = "w-full", additionalClasses = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<p${addAttribute(`${width} text-[18px] lg:text-[32px] text-charcoal/80 ${additionalClasses}`, "class")}>${text}</p>`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/BigPara.astro", void 0);

export { $$H1 as $, $$BigPara as a, $$Bubble as b };
