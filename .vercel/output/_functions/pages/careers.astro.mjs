import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DQgsxJKG.mjs';
import 'kleur/colors';
/* empty css                                 */
import { $ as $$Section, a as $$SectionHeading, b as $$Layout, c as $$Ticker } from '../chunks/Ticker_8UcDoly1.mjs';
import '../chunks/index_DPYU2bcR.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_BoUoH_nF.mjs';
import { $ as $$H1, b as $$Bubble, a as $$BigPara } from '../chunks/BigPara_CA7W6y7D.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const teamImage = new Proxy({"src":"/_astro/team.CzS9rdxi.jpg","width":3949,"height":5923,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/GAO TO GO/00000Website/gaotogo-website/src/images/team.jpg";
							}
							
							return target[name];
						}
					});

const workingtImage = new Proxy({"src":"/_astro/workings.BcUD0_rq.jpg","width":5304,"height":7952,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/GAO TO GO/00000Website/gaotogo-website/src/images/workings.jpg";
							}
							
							return target[name];
						}
					});

const $$ThePitch = createComponent(($$result, $$props, $$slots) => {
  const pitchPoints = [
    {
      title: "A supportive workplace",
      para: "We keep it positive with respect, support, and clear communication."
    },
    {
      title: "Flexible shifts and fair pay",
      para: "Flexible hours that work for you, with fair pay you can count on."
    },
    {
      title: "Staff meals & perks",
      para: "Enjoy free staff meals other small perks that make a big difference."
    },
    {
      title: "Grow with Us",
      para: "We\u2019re growing fast\u2014and there\u2019s space for you to grow with us."
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "width": " w-full", "paddingY": "pt-10 lg:py-32", "paddingX": "px-0", "additionalClasses": "bg-saffron" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="lg:w-[calc((100%+1200px)/2)] flex flex-col-reverse lg:flex-row lg:space-x-25"> <div> ${renderComponent($$result2, "Image", $$Image, { "src": workingtImage, "alt": "About Us Image 1", "width": 800, "format": "avif", "class": "mt-10 lg:mt-0 w-full object-cover aspect-square rounded-t-[40px] lg:rounded-t-[0] lg:rounded-r-[40px]" })} </div> <div class="my-auto lg:max-w-158 w-full px-5 lg:px-0"> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "text": "Why work with us?", "additionalClasses": "mb-7 lg:mb-13" })} <div class="flex flex-col lg:flex-row lg:flex-wrap font-secondary text-charcoal space-x-0 lg:space-x-10 space-y-6 lg:space-y-10"> ${pitchPoints.map((point) => renderTemplate`<div class="flex-1 min-w-84"> <h4 class="text-[22px] font-semibold mb-3">${point.title}</h4> <p class="text-[18px] opacity-80">${point.para}</p> </div>`)} </div> </div> </div> ` })}`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/careers/ThePitch.astro", void 0);

const $$CareerForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form action="api/send" class="flex flex-col space-y-5 w-full p-10  border-[1px] lg:border-[3px] border-charcoal shadow-[2px_2px_#282b31] lg:shadow-[3px_3px_#282b31] rounded-[40px]"> <label>
Name
<input type="text" id="name" name="name" class="bg-gray-300" required> </label> <label>
Email
<input type="email" id="email" name="email" class="bg-gray-300" required> </label> <label>
Message
<textarea id="message" name="message" class="bg-gray-300" required></textarea> </label> <button class="bg-green-600">Send</button> </form>`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/careers/CareerForm.astro", void 0);

const $$TakingAction = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "additionalClasses": "pt-10 lg:pt-10 flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:justify-between" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col space-y-5 lag:space-y-8"> ${renderComponent($$result2, "SectionHeading", $$SectionHeading, { "text": "Sound like a good fit?" })} <p class="text-[17px] lg:tex-xl text-charcoal/80">Send us your CV and a quick note about yourself at <a href="#" class="text-emerald">careers@gaotogo.uk</a>, or use the form to apply.</p> </div> <div> ${renderComponent($$result2, "CareerForm", $$CareerForm, {})} </div> ` })}`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/components/careers/TakingAction.astro", void 0);

const $$Careers = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Careers | G\u1EA1o To Go" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section class="pt-28 lg:pt-60 pb-10 lg:pb-32"> <div class="pb-6 lg:pb-22"> <div class=" flex flex-col items-center w-fit px-5 lg:px-0 mx-auto relative"> ${renderComponent($$result2, "H1", $$H1, { "text": "Join the team", "additionalClasses": " text-emerald text-[56px] lg:text-[152px] " })} ${renderComponent($$result2, "Bubble", $$Bubble, { "text": "that keeps it fast, fresh, and full of flavour.", "margin": "", "additionalClasses": "hidden lg:block absolute bottom-0 right-[-60px]" })} <p class="lg:hidden font-secondary font-medium tracking-wide text-[12px] text-charcoal/80 mt-[-4px]">that keeps it fast, fresh, and full of flavour.</p> </div> </div> <div class="lg:max-w-300 mx-auto"> ${renderComponent($$result2, "Image", $$Image, { "src": teamImage, "alt": "G\u1EA1o To Go Team Group Photo", "width": 1200, "format": "avif", "class": "object-cover lg:rounded-[40px] aspect-video" })} </div> <div class="flex flex-col space-y-4 lg:space-y-6 lg:max-w-196 mx-auto mt-6 lg:mt-32 px-5 lg:px-0"> ${renderComponent($$result2, "BigPara", $$BigPara, { "text": "At GAO TO GO, we move quickly, cook cleanly, and serve with purpose." })} ${renderComponent($$result2, "BigPara", $$BigPara, { "text": "If you\u2019re passionate about food, hospitality, or just love working in a fast-paced, friendly environment \u2014 we\u2019d love to hear from you." })} </div> </section> ${renderComponent($$result2, "ThePitch", $$ThePitch, {})} ${renderComponent($$result2, "Ticker", $$Ticker, { "topBanner": "lg:hidden" })} ${renderComponent($$result2, "TakingAction", $$TakingAction, {})} </main> ` })}`;
}, "G:/GAO TO GO/00000Website/gaotogo-website/src/pages/careers.astro", void 0);

const $$file = "G:/GAO TO GO/00000Website/gaotogo-website/src/pages/careers.astro";
const $$url = "/careers";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Careers,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
