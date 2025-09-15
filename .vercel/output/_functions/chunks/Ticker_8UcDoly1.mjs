import { c as createComponent, d as createAstro, m as maybeRenderHead, b as addAttribute, a as renderTemplate, r as renderComponent, f as renderHead, g as renderSlot } from './astro/server_DQgsxJKG.mjs';
import 'kleur/colors';
import 'clsx';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const $$Astro$4 = createAstro();
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Button;
  const { ctaText = "Order Now", link = "#", hoverScale = "hover:scale-100", additionalStyles = "", mobilePaddingX = "px-3", desktopPaddingX = "lg:px-6", mobilePaddingY = "py-[6px]", desktopPaddingY = "lg:py-3", backgroundColor = "bg-emerald", hoverBackgroundColor = "hover:bg-rice", textColor = "text-rice", hoverTextColor = "hover:text-emerald" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")}${addAttribute([mobilePaddingX, desktopPaddingX, mobilePaddingY, desktopPaddingY, backgroundColor, hoverBackgroundColor, textColor, hoverTextColor, "text-[16px]", "lg:text-[20px]", "font-primary", "tracking-wide", "rounded-full", "transition", "delay-50", "duration-300", "ease-in-out", hoverScale, additionalStyles], "class:list")}> ${ctaText} </a>`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/Button.astro", void 0);

const $$Dropdown = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative group"> <a href="#" class="flex items-center hover:text-coral">
Click & Collect
<svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path> </svg> </a>  <div class="absolute hidden group-hover:block bg-white shadow-md rounded py-2 w-48"> <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Service 1</a> <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Service 2</a> <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Service 3</a> </div> </div>`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/Dropdown.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="hidden lg:flex items-center text-rice text-xl tracking-wide font-primary space-x-8"> <a href="#" class="hover:text-coral 0">Menu</a> ${renderComponent($$result, "Dropdown", $$Dropdown, {})} <a href="#" class="hover:text-coral">Locations</a> <a href="/about" class="hover:text-coral">Our Story</a> <a href="#" class="hover:text-coral">Nutrition</a> </nav>`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/Nav.astro", void 0);

const $$MobileMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="#" class=""> <img src="/menu-closed.svg" alt="menu-hamburger-closed" class="w-[26px] lg:w-[34px] h-[26px] lg:h-[34px]"> </a>`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/MobileMenu.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="bg-charcoal mx-4 mt-4 lg:mt-8 py-3 lg:py-5 px-5 lg:px-8 lg:max-w-300 box-border lg:mx-auto inset-x-0 rounded-full z-50 fixed"> <div class="flex items-center justify-between"> <a href="/" class="pt-[2px] lg:pt-1"> <img src="/logo.svg" alt="Logo" class="h-7 lg:h-11"> </a> <div class="flex flex-row space-x-4 lg:space-x-5 items-center"> ${renderComponent($$result, "Nav", $$Nav, {})} ${renderComponent($$result, "Button", $$Button, { "hoverScale": "hover:scale-102" })} ${renderComponent($$result, "MobileMenu", $$MobileMenu, {})} </div> </div> </header>`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/Header.astro", void 0);

function FooterLinksMobile({ links, title }) {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "lg:hidden flex flex-col",
      onClick: () => setIsOpen(!isOpen),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pb-3 border-b-2 border-rice/10", children: [
          /* @__PURE__ */ jsx("span", { className: "font-primary text-xl tracking-wide", children: title }),
          /* @__PURE__ */ jsx("img", { src: `/icons/${isOpen ? "collapse.svg" : "expand.svg"}`, alt: "expand icon", onClick: () => setIsOpen(!isOpen) })
        ] }),
        /* @__PURE__ */ jsx("ul", { className: `flex flex-col space-y-3 ${isOpen ? "opacity-100 max-h-100 mt-[16px]" : "opacity-0 max-h-0 overflow-hidden "} transition-all duration-500 ease-in-out`, children: links.map((item) => /* @__PURE__ */ jsx("li", { className: "font-secondary text-[16px] text-rice/80 hover:text-rice", children: /* @__PURE__ */ jsx("a", { href: item.href, className: "", children: item.text }) })) })
      ]
    }
  );
}

function FooterLinksDesktop({ links, title }) {
  return /* @__PURE__ */ jsxs("div", { className: "hidden lg:flex flex-col space-y-[18px]", children: [
    /* @__PURE__ */ jsx("span", { className: "font-primary text-xl tracking-wide", children: title }),
    /* @__PURE__ */ jsx("ul", { className: " flex flex-col space-y-4", children: links.map((item) => /* @__PURE__ */ jsx("li", { className: "font-secondary text-[16px] text-rice/80 hover:text-rice", children: /* @__PURE__ */ jsx("a", { href: item.href, className: "", children: item.text }) })) })
  ] });
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const socialIcons = [
    { src: "/icons/instagram.svg", alt: "Instagram", href: "#" },
    { src: "/icons/snapchat.svg", alt: "Snapchat", href: "#" },
    { src: "/icons/youtube.svg", alt: "Youtube", href: "#" },
    { src: "/icons/facebook.svg", alt: "Facebook", href: "#" },
    { src: "/icons/x-twitter.svg", alt: "X", href: "#" },
    { src: "/icons/thread.svg", alt: "Thread", href: "#" }
  ];
  const aboutLinks = [
    { text: "Our Story", href: "#" },
    { text: "Contact Us", href: "#" },
    { text: "Careers", href: "/careers" },
    { text: "FAQs", href: "#" }
  ];
  const menuLinks = [
    { text: "Menu", href: "#" },
    { text: "Nutritional Info", href: "#" },
    { text: "Gluten Free", href: "#" },
    { text: "Allergens", href: "#" }
  ];
  const policyLinks = [
    { text: "Terms & Conditions", href: "#" },
    { text: "Privacy", href: "#" },
    { text: "Cookies Policy", href: "#" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="bg-charcoal text-rice"> <div class="flex flex-col space-y-10 lg:space-y-0 lg:flex-row lg:justify-between px-5 lg:px-0 py-10 pt-15 lg:py-22 max-w-300 mx-auto">  <div class="flex flex-col items-start space-y-4"> <img src="/logo-secondary.svg" alt="Logo" class="h-11 lg:h-13"> <p class="text-[14px] lg:text-[16px] font-secondary text-rice/80 w-70">Fresh, flavourful meals for busy lives — mostly gluten-free, always fuss-free, and planet-friendly.</p> <ul class="flex space-x-2 mt-1"> ${socialIcons.map((item) => renderTemplate`<li> <a${addAttribute(item.href, "href")} class=""> <img${addAttribute(item.src, "src")}${addAttribute(item.alt, "alt")} class="w-7 lg:w-8"> </a> </li>`)} </ul> </div>  ${renderComponent($$result, "FooterLinksDesktop", FooterLinksDesktop, { "links": aboutLinks, "title": "About Us", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "G:/GAO TO GO/00000Website/gaotogo-website/src/components/FooterLinksDesktop.tsx", "client:component-export": "default" })} ${renderComponent($$result, "FooterLinksDesktop", FooterLinksDesktop, { "links": menuLinks, "title": "About Us", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "G:/GAO TO GO/00000Website/gaotogo-website/src/components/FooterLinksDesktop.tsx", "client:component-export": "default" })}  <div class="lg:flex flex-col space-y-5 p-5 lg:p-0 border-2 lg:border-0 border-emerald rounded-[24px]"> <div class="flex flex-col space-y-1"> <span class="font-secondary text-[16px] font-medium text-rice/80"> Don’t Miss a Bite </span> <h5 class="font-primary text-4xl tracking-wide leading-[1.3]">Stay in touch with all <br> things GAO TO GO</h5> </div> <a href="#" class="flex items-center space-x-2 bg-rice pr-2 rounded-full"> <span class="flex-1 font-primary text-[16px] tracking-wider bg-emerald hover:bg-rice hover:text-charcoal px-5 py-3 rounded-full text-center transition delay-50 duration-300 ease-in-out">Get Updates & Offers</span> <img src="/icons/arrow-right.svg" alt="" class="h-8"> </a> </div>  <div class="lg:hidden flex flex-col space-y-6"> <div>${renderComponent($$result, "FooterLinksMobile", FooterLinksMobile, { "links": aboutLinks, "title": "About Us", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "G:/GAO TO GO/00000Website/gaotogo-website/src/components/FooterLinksMobile.tsx", "client:component-export": "default" })}</div> <div>${renderComponent($$result, "FooterLinksMobile", FooterLinksMobile, { "links": menuLinks, "title": "Our Menu", "client:visible": true, "client:component-hydration": "visible", "client:component-path": "G:/GAO TO GO/00000Website/gaotogo-website/src/components/FooterLinksMobile.tsx", "client:component-export": "default" })}</div> </div> </div>  <div class="hidden lg:block border-t-2 border-rice/10"> <div class="flex justify-between max-w-300 py-4 mx-auto"> <span class="font-secondary text-[16px] uppercase">© 2025 GAO TO GO</span> <ul class="flex space-x-6"> ${policyLinks.map((item) => renderTemplate`<li class="font-secondary text-[16px] hover:text-rice/80"><a${addAttribute(item.href, "href")} class="">${item.text}</a></li>`)} </ul> <span class="font-secondary text-[16px]">creative by
<a href="#" class="underline hover:text-emerald">mirza</a> </span> </div> </div>  <div class="flex flex-col space-y-4 lg:hidden px-5 pb-10"> <div class="flex justify-between"> <ul> <li class="font-secondary text-[16px] hover:text-rice/80 w-20"><a${addAttribute(policyLinks[0].href, "href")} class="">${policyLinks[0].text}</a></li> </ul> <ul class="flex space-x-4"> <li class="font-secondary text-[16px] hover:text-rice/80 max-w-20"><a${addAttribute(policyLinks[1].href, "href")} class="">${policyLinks[1].text}</a></li> <li class="font-secondary text-[16px] hover:text-rice/80 max-w-20"><a${addAttribute(policyLinks[2].href, "href")} class="">${policyLinks[2].text}</a></li> </ul> </div> <div class="flex space-x-2"> <span class="font-secondary text-[16px] uppercase">© 2025 GAO TO GO</span> <span class="font-secondary text-[16px]">|</span> <span class="font-secondary text-[16px]">creative by
<a href="#" class="underline text-emerald">mirza</a> </span> </div> </div> </footer>`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/Footer.astro", void 0);

const $$Astro$3 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description = "Fast, fresh Vietnamese meals made for busy lives. Order for delivery or click & collect \u2014 98% gluten-free, eco-friendly, and packed with flavour.", image } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta property="og:image"${addAttribute(image, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-rice "> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/layouts/Layout.astro", void 0);

const $$Astro$2 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Section;
  const { paddingY = "py-10 lg:py-32", paddingX = "px-5 lg:px-0", width = "max-w-300", additionalClasses = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`font-secondary ${paddingY} ${paddingX} ${width} mx-auto ${additionalClasses}`, "class")}> ${renderSlot($$result, $$slots["default"])} </section>`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/Section.astro", void 0);

const $$Astro$1 = createAstro();
const $$SectionHeading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SectionHeading;
  const { text, subtext = "", showSubText = false, color = "text-charcoal", additionalClasses = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`${additionalClasses}`, "class")}> ${showSubText && renderTemplate`<span class="text-[12px] lg:text-sm text-charcoal/80 bg-emerald/10 border-emerald/2 border-2 uppercase font-secondary font-medium tracking-wide px-3 py-1.5 lg:px-4 lg:py-2 rounded-full">${subtext}</span>`} <h2${addAttribute(`${showSubText && "mt-2"} text-charcoal text-[32px] lg:text-[52px] font-primary leading-[1.3] tracking-wide`, "class")}>${text}</h2> </div>`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/SectionHeading.astro", void 0);

const $$Astro = createAstro();
const $$Ticker = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ticker;
  const { topBanner = "lg:block", bottomBanner = "lg:block" } = Astro2.props;
  const tickerText = [
    "\u{1F525} COOKED FRESH DAILY",
    "\u{1F33F} 98% GLUTEN-FREE",
    "\u26A1 BUILT FOR BUSY LIVES",
    "\u{1F331} ECO-FRIENDLY PACKAGING",
    "\u{1F35C} BOLD FLAVOUR, NO WAITING"
  ];
  return renderTemplate`${maybeRenderHead()}<div class="bg-chili"> <div${addAttribute(`hidden ${topBanner} h-10 lg:h-20 bg-rice rounded-b-full`, "class")}></div> <div class="flex flex-row whitespace-nowrap py-5 lg:py-15 space-x-6 lg:space-x-13 text-rice text-[32px] lg:text-7xl overflow-hidden"> <ul class="flex space-x-6 lg:space-x-13 font-primary tracking-wide leading-[1.25] animate-loop-scroll lg:animate-loop-scroll-lg"> ${tickerText.map((item) => renderTemplate`<li class="min-w-fit">${item}</li>`)} </ul> <ul class="flex space-x-6 lg:space-x-13 font-primary tracking-wide leading-[1.25] animate-loop-scroll lg:animate-loop-scroll-lg" aria-hidden="true"> ${tickerText.map((item) => renderTemplate`<li class="min-w-fit">${item}</li>`)} </ul> </div> <div${addAttribute(`hidden ${bottomBanner} h-10 lg:h-20 bg-rice rounded-t-full`, "class")}></div> </div>`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/Ticker.astro", void 0);

export { $$Section as $, $$SectionHeading as a, $$Layout as b, $$Ticker as c, $$Button as d };
