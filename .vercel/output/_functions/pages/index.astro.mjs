import { c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, e as renderScript } from '../chunks/astro/server_DQgsxJKG.mjs';
import 'kleur/colors';
/* empty css                                 */
import { d as $$Button, a as $$SectionHeading, b as $$Layout, $ as $$Section, c as $$Ticker } from '../chunks/Ticker_8UcDoly1.mjs';
import 'clsx';
import { b as getImage, $ as $$Image } from '../chunks/_astro_assets_BoUoH_nF.mjs';
import { h as heroImage, e as ecoImage } from '../chunks/hero-image_BvdtK5hp.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { useState } from 'react';
import '../chunks/index_DPYU2bcR.mjs';
export { renderers } from '../renderers.mjs';

const $$HeroSection = createComponent(async ($$result, $$props, $$slots) => {
  const optimizedHeroImage = await getImage({ src: heroImage, width: 1920, format: "avif", priority: true });
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`flex flex-col justify-end items-center px-5 pb-8 lg:pb-16 bg-cover bg-center w-full h-svh lg:h-[708px] lg:rounded-b-[80px] relative overflow-hidden`, "class")}${addAttribute(`background-image: url('${optimizedHeroImage.src}');`, "style")}> <div class="bg-charcoal/10 w-full h-svh lg:h-[800px] absolute top-0"></div> <div class="lg:max-w-300 z-5"> <!-- <h1 class="text-[40px] md:text-[102px] text-rice leading-[1.3] font-primary tracking-wide text-shadow-md text-left">Vietnamese street food, reimagined</h1> --> <h1 class="text-transparent text-stroked text-7xl md:text-[102px] leading-[1.3] font-primary tracking-wide text-left">Vietnamese street food, reimagined</h1> </div> </section>`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/HeroSection.astro", void 0);

function SneakPeakCard({ bgImageUrl, title, description, cardWidth = "w-[166px] lg:w-[387px]", cardHeight = "h-[166px] lg:h-[387px]", overlayHeight = "h-[387px]", additionalCardClasses = "", additionalOverlayClasses = "" }) {
  const [isVisible, setIsVisible] = useState(0);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "div",
    {
      onMouseEnter: () => setIsVisible(1),
      onMouseLeave: () => setIsVisible(0),
      className: `bg-cover bg-center ${cardWidth} ${cardHeight} rounded-[40px] overflow-hidden relative cursor-pointer ${additionalCardClasses}`,
      style: { backgroundImage: `url(${bgImageUrl})` },
      children: /* @__PURE__ */ jsx("div", { className: `bg-gradient-to-t from-charcoal to-charcoal/0 ${overlayHeight} flex flex-col justify-end absolute bottom-0 transition-opacity duration-700  ${isVisible ? "opacity-100" : "opacity-0"} ${additionalOverlayClasses}`, children: /* @__PURE__ */ jsxs("div", { className: "hidden lg:block px-2 lg:px-10 py-2 lg:py-10 text-rice", children: [
        /* @__PURE__ */ jsx("h4", { className: `lg:mb-[10px] font-primary text-[16px] lg:text-[32px] tracking-wide leading-[1.3]`, children: title }),
        /* @__PURE__ */ jsx("p", { className: "font-secondary text-[18px] leading-[1.5]", children: description })
      ] }) })
    }
  ) });
}

const image1 = new Proxy({"src":"/_astro/pho.BgJJRbqG.jpg","width":2333,"height":3500,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/GAO TO GO/00000Website/gaotogo-website/src/images/pho.jpg";
							}
							
							return target[name];
						}
					});

const image2 = new Proxy({"src":"/_astro/banh-mi.Dv9TNHmm.jpg","width":5491,"height":3661,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/GAO TO GO/00000Website/gaotogo-website/src/images/banh-mi.jpg";
							}
							
							return target[name];
						}
					});

const image3 = new Proxy({"src":"/_astro/dumplings.Dtgvi98z.jpg","width":2811,"height":4211,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/GAO TO GO/00000Website/gaotogo-website/src/images/dumplings.jpg";
							}
							
							return target[name];
						}
					});

const image4 = new Proxy({"src":"/_astro/mix.BRGH8noQ.jpg","width":2480,"height":3508,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/GAO TO GO/00000Website/gaotogo-website/src/images/mix.jpg";
							}
							
							return target[name];
						}
					});

const image5 = new Proxy({"src":"/_astro/noodles.CszIi9j-.jpg","width":2992,"height":2992,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/GAO TO GO/00000Website/gaotogo-website/src/images/noodles.jpg";
							}
							
							return target[name];
						}
					});

async function SneakPeak() {
  const image1Optimised = await getImage({ src: image1, width: 600, format: "avif" });
  const image2Optimised = await getImage({ src: image2, width: 793, format: "avif" });
  const image3Optimised = await getImage({ src: image3, width: 600, format: "avif" });
  const image4Optimised = await getImage({ src: image4, width: 600, format: "avif" });
  const image5Optimised = await getImage({ src: image5, width: 600, format: "avif" });
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-row lg:flex-col space-x-3 lg:space-x-0 lg:space-y-5 lg:min-w-300 text-rice relative overflow-x-scroll no-scrollbar", children: [
    /* @__PURE__ */ jsx("img", { src: "/icons/star.png", alt: "star-icon", className: "hidden lg:block absolute w-[52px] h-[52px] top-93 left-93 z-10" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row space-x-3 lg:space-x-5", children: [
      /* @__PURE__ */ jsx(
        SneakPeakCard,
        {
          bgImageUrl: image1Optimised.src,
          title: "Noodle salad with five spices grill chicken",
          description: "rice noodle, crunchy lettuce, pickle carrot and radish, herbs, five spices grill chicken, vietnamese sweet and sour fish sauce.",
          additionalCardClasses: "flex-none"
        }
      ),
      /* @__PURE__ */ jsx(
        SneakPeakCard,
        {
          bgImageUrl: image2Optimised.src,
          title: "Vietnamese noodles with five spices grill chicken",
          description: "vietnamese noodles, crunchy lettuce, pickle carrot and radish, herbs, five spices grill chicken, vietnamese sweet and sour fish sauce.",
          cardWidth: "w-[166px] lg:w-full",
          overlayHeight: "h-[300px]"
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row space-x-3 lg:space-x-5", children: [
      /* @__PURE__ */ jsx(
        SneakPeakCard,
        {
          bgImageUrl: image3Optimised.src,
          title: "Dumplings with five spices grill chicken",
          description: "dumplings, crunchy lettuce, pickle carrot and radish, herbs, five spices grill chicken, vietnamese sweet and sour fish sauce.",
          additionalCardClasses: ""
        }
      ),
      /* @__PURE__ */ jsx(
        SneakPeakCard,
        {
          bgImageUrl: image4Optimised.src,
          title: "Dumplings with five spices grill chicken",
          description: "dumplings, crunchy lettuce, pickle carrot and radish, herbs, five spices grill chicken, vietnamese sweet and sour fish sauce."
        }
      ),
      /* @__PURE__ */ jsx(
        SneakPeakCard,
        {
          bgImageUrl: image5Optimised.src,
          title: "Dumplings with five spices grill chicken",
          description: "dumplings, crunchy lettuce, pickle carrot and radish, herbs, five spices grill chicken, vietnamese sweet and sour fish sauce."
        }
      )
    ] })
  ] }) });
}

const outdoorImage = new Proxy({"src":"/_astro/outdoor.DUwi2z-5.jpg","width":793,"height":472,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/GAO TO GO/00000Website/gaotogo-website/src/images/outdoor.jpg";
							}
							
							return target[name];
						}
					});

const $$OrderCTA = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 font-secondary m-0"> <div id="leftDiv" class="flex flex-col space-y-5 lg:space-y-10 p-5 lg:p-10 border-2 border-charcoal rounded-[24px] lg:rounded-[40px] h-fit shrink-0 "> <div class="flex flex-col space-y-1"> <h4 class="text-2xl lg:text-[32px] text-charcoal font-semibold">Click & Collect</h4> <p class="text-[18px] lg:text-[28px] text-charcoal/80 font-normal mb-3">Ready when you are.</p> ${renderComponent($$result, "Button", $$Button, { "hoverBackgroundColor": "hover:bg-charcoal", "hoverTextColor": "hover:text-rice", "mobilePaddingY": "py-2", "additionalStyles": "lg:w-fit text-center" })} </div> <div class="flex flex-col space-y-1"> <h4 class="text-2xl lg:text-[32px] text-charcoal font-semibold">Get It Delivered</h4> <p class="text-[18px] lg:text-[28px] text-charcoal/80 font-normal mb-3">Right to your door.</p> ${renderComponent($$result, "Button", $$Button, { "hoverBackgroundColor": "hover:bg-charcoal", "hoverTextColor": "hover:text-rice", "mobilePaddingY": "py-2", "additionalStyles": "lg:w-fit text-center" })} </div> </div> <div id="rightDiv"> ${renderComponent($$result, "Image", $$Image, { "src": outdoorImage, "alt": "Description of image", "format": "avif", "class": "object-cover h-60  md:h-full rounded-[24px] lg:rounded-[40px]" })} </div> </div> ${renderScript($$result, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/OrderCTA.astro?astro&type=script&index=0&lang.ts")}`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/OrderCTA.astro", void 0);

const $$EcoCommitment = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="flex flex-col-reverse lg:flex-row bg-coral lg:rounded-t-[80px] overflow-hidden"> <div class="flex-1 shrink-0"> ${renderComponent($$result, "Image", $$Image, { "src": ecoImage, "alt": "Eco-friendly Packaging Photo", "width": 800, "format": "avif", "class": "object-cover w-full h-80 lg:h-full lg:max-h-150 rounded-t-[40px] lg:rounded-none" })} </div> <div class="flex justify-center items-center px-10 py-10 lg:px-10 flex-1"> <div class="flex flex-col space-y-3 lg:space-y-4 lg:w-140"> ${renderComponent($$result, "SectionHeading", $$SectionHeading, { "text": "Eco-friendly outside. Flavour-packed inside.", "showSubText": false })} <p class="font-secondary text-[18px] lg:text-[28px] text-charcoal/80">We use planet-kind packaging that travels well and feels good.</p> </div> </div> </div> </section>`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/EcoCommitment.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Homepage | G\u1EA1o To Go" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "Section", $$Section, { "additionalClasses": "pr-0 pb-10 lg:pb-10" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col space-y-4 lg:space-y-10"> ${renderComponent($$result3, "SectionHeading", $$SectionHeading, { "text": "Try our most-loved dishes.", "subtext": "Top Picks", "showSubText": true })} <div class="hidden"> ${renderComponent($$result3, "Button", $$Button, { "additionalStyles": "lg:mt-2 mb-2 lg:mb-4" })} </div> ${renderComponent($$result3, "SneakPeak", SneakPeak, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "G:/GAO TO GO/00000Website/gaotogo-website/src/components/SneakPeak.tsx", "client:component-export": "default" })} </div> ` })} ${renderComponent($$result2, "Ticker", $$Ticker, {})} ${renderComponent($$result2, "Section", $$Section, { "additionalClasses": "pt-10 lg:pt-10" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col space-y-4 lg:space-y-10"> ${renderComponent($$result3, "SectionHeading", $$SectionHeading, { "text": "Skip the queue, not the flavour.", "showSubText": false })} ${renderComponent($$result3, "OrderCTA", $$OrderCTA, {})} </div> ` })} ${renderComponent($$result2, "EcoCommitment", $$EcoCommitment, {})} </main> ` })}`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/pages/index.astro", void 0);

const $$file = "G:/GAO TO GO/00000Website/gaotogo-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
