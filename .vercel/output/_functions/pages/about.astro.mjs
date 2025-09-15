import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_DQgsxJKG.mjs';
import 'kleur/colors';
/* empty css                                 */
import { $ as $$Section, a as $$SectionHeading, b as $$Layout, c as $$Ticker } from '../chunks/Ticker_8UcDoly1.mjs';
import { $ as $$H1, a as $$BigPara, b as $$Bubble } from '../chunks/BigPara_CA7W6y7D.mjs';
import '../chunks/index_DPYU2bcR.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BoUoH_nF.mjs';
import { e as ecoImage, h as heroImage } from '../chunks/hero-image_BvdtK5hp.mjs';
export { renderers } from '../renderers.mjs';

const $$FounderStatement = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "width": " w-full", "paddingY": "pt-0 pb-10 lg:py-32", "additionalClasses": "bg-saffron rounded-b-[40px] lg:rounded-[0px]" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="lg:w-[calc((100%+1200px)/2)] flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-25"> <div class="w-full"> ${renderComponent($$result2, "Image", $$Image, { "src": ecoImage, "alt": "About Us Image 1", "width": 800, "format": "avif", "class": "w-full object-cover aspect-square rounded-[24px] lg:rounded-[0] lg:rounded-r-[40px]" })} </div> <div class="my-auto lg:max-w-158"> <div class="pb-4 lg:pb-8"> <p class="text-[18px] lg:text-[24px] text-charcoal/80 pb-4 lg:pb-6">Growing up around the aromas of simmering broth and fresh herbs, Vietnamese food has always felt like home to me — warm, vibrant, and full of care.</p> <p class="text-[18px] lg:text-[24px] text-charcoal/80 ">But as life got busier, I struggled to find meals that had the same soul, without the wait. That’s how Gạo To Go began: a way to share the food I love, at the pace life demands — without compromising on flavour, quality, or tradition.</p> </div> <div class="flex flex-col"> <span class="font-semibold text-[18px] lg:text-[24px]">Ms. Doan Thi Mai Huong</span> <span class="text-[14px] lg:text-[20px] text-charcoal/80">Founder & CEO</span> </div> </div> </div> ` })}`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/about/FounderStatement.astro", void 0);

const $$BrandStatement = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "width": "w-full", "additionalClasses": "flex flex-col space-y-5 lg:space-y-10" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-300 mx-auto w-full"> ${renderComponent($$result2, "H1", $$H1, { "text": "A Taste of Vietnam, Made for the Go" })} </div> ${renderComponent($$result2, "Image", $$Image, { "src": heroImage, "alt": "About Us Image", "width": 1020, "format": "avif", "class": "lg:w-[calc((100%+1200px)/2)] object-cover w-full aspect-video lg:h-[720px] rounded-[24px] lg:rounded-[0px] lg:rounded-r-[80px]" })} <div class="max-w-300 mx-auto w-full lg:flex lg:justify-end"> ${renderComponent($$result2, "BigPara", $$BigPara, { "text": "G\u1EA1o To Go is where tradition meets tempo \u2014bringing the fresh, bold flavours of Vietnam to fast-moving lives in the UK.", "width": "max-w-190" })} </div> ` })}`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/about/BrandStatement.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const processes = [
    {
      icon: "/icons/soup.png",
      alt: "simmering soup bowl icon",
      text: "Broths simmer slow."
    },
    {
      icon: "/icons/mortar.png",
      alt: "herbs in mortar icon",
      text: "Herbs are added fresh."
    },
    {
      icon: "/icons/flavoring.png",
      alt: "sprinkling salt icon",
      text: "Flavours run deep."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "width": "w-full", "additionalClasses": "bg-coral" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-300 mx-auto flex flex-col space-y-10 lg:space-y-13 items-center lg:items-start"> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "text": "We don\u2019t cut corners" })} <ul class="w-full flex flex-col space-y-8 lg:space-y-0 lg:flex-row lg:justify-between"> ${processes.map((process) => renderTemplate`<li class="flex flex-col space-y-3 lg:space-y-4 items-center lg:items-start"> <img${addAttribute(process.icon, "src")}${addAttribute(process.alt, "alt")} class="w-20 h-20"> <p class="font-medium text-charcoal/80 text-[18px] lg:text-6">${process.text}</p> </li>`)} </ul> </div> ` })}`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/about/Process.astro", void 0);

const $$BrandOverview = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "additionalClasses": "pb-10 lg:pb-10" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-196 mx-auto flex flex-col space-y-6 lg:space-y-8"> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "text": "Real Vietnamese Flavour. No Fuss." })} <div class="flex flex-col space-y-[18px] lg:space-y-6"> ${renderComponent($$result2, "BigPara", $$BigPara, { "text": "We serve authentic Vietnamese meals, cooked fresh in high-spec kitchens and delivered hot to our city pick-up points." })} ${renderComponent($$result2, "BigPara", $$BigPara, { "text": "We serve authentic Vietnamese meals, cooked fresh in high-spec kitchens and delivered hot to our city pick-up points." })} </div> </div> ` })}`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/about/BrandOverview.astro", void 0);

const dollImage = new Proxy({"src":"/_astro/doll.D_S6AbpG.jpg","width":5472,"height":3648,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/GAO TO GO/00000Website/gaotogo-website/src/images/doll.jpg";
							}
							
							return target[name];
						}
					});

const $$BrandMoto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "additionalClasses": "pt-10 lg:pt-10 flex flex-col space-y-5 lg:space-y-10" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div> <span class="font-secondary text-[16px] lg:text-[32px] tracking-wide">GAO TO GO is</span> <h2 class="font-primary text-charcoal text-[40px] md:text-[102px] leading-[1.3] tracking-wide">Fast. <span class="text-emerald">Fresh.</span> Delicious.</h2> </div> ${renderComponent($$result2, "Image", $$Image, { "src": dollImage, "alt": "menu item live action image", "format": "avif", "width": 1200, "class": "object-cover aspect-video rounded-[24px] lg:rounded-[40px]" })} ` })}`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/about/BrandMoto.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Our Story | G\u1EA1o To Go" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="pt-30 lg:pt-60 pb-5 lg:pb-22 bg-saffron lg:bg-rice"> <div class="px-5 lg:px-0 lg:max-w-300 mx-auto"> ${renderComponent($$result2, "Bubble", $$Bubble, { "text": "G\u1EA1o To Go was born out of a simple idea," })} ${renderComponent($$result2, "H1", $$H1, { "text": "Why should busy lives miss out on real food?", "width": "lg:w-[890px]", "additionalClasses": "lg:ml-12 text-emerald" })} </div> </div> ${renderComponent($$result2, "FounderStatement", $$FounderStatement, {})} ${renderComponent($$result2, "BrandStatement", $$BrandStatement, {})} ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "BrandOverview", $$BrandOverview, {})} ${renderComponent($$result2, "Ticker", $$Ticker, {})} ${renderComponent($$result2, "BrandMoto", $$BrandMoto, {})} </main> ` })}`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/pages/about.astro", void 0);

const $$file = "G:/GAO TO GO/00000Website/gaotogo-website/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
