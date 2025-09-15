import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_DQgsxJKG.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_6oaJG9GT.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///G:/GAO%20TO%20GO/00000Website/gaotogo-website/","cacheDir":"file:///G:/GAO%20TO%20GO/00000Website/gaotogo-website/node_modules/.astro/","outDir":"file:///G:/GAO%20TO%20GO/00000Website/gaotogo-website/dist/","srcDir":"file:///G:/GAO%20TO%20GO/00000Website/gaotogo-website/src/","publicDir":"file:///G:/GAO%20TO%20GO/00000Website/gaotogo-website/public/","buildClientDir":"file:///G:/GAO%20TO%20GO/00000Website/gaotogo-website/dist/client/","buildServerDir":"file:///G:/GAO%20TO%20GO/00000Website/gaotogo-website/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DQ3y6ODQ.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/feedback","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/feedback\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"feedback","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/feedback.ts","pathname":"/api/feedback","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send.ts","pathname":"/api/send","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DQ3y6ODQ.css"}],"routeData":{"route":"/careers","isIndex":false,"type":"page","pattern":"^\\/careers\\/?$","segments":[[{"content":"careers","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/careers.astro","pathname":"/careers","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.DQ3y6ODQ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["G:/GAO TO GO/00000Website/gaotogo-website/src/pages/about.astro",{"propagation":"none","containsHead":true}],["G:/GAO TO GO/00000Website/gaotogo-website/src/pages/careers.astro",{"propagation":"none","containsHead":true}],["G:/GAO TO GO/00000Website/gaotogo-website/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/feedback@_@ts":"pages/api/feedback.astro.mjs","\u0000@astro-page:src/pages/api/send@_@ts":"pages/api/send.astro.mjs","\u0000@astro-page:src/pages/careers@_@astro":"pages/careers.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DxDUSmSJ.mjs","G:/GAO TO GO/00000Website/gaotogo-website/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CJ9GH6r1.mjs","G:/GAO TO GO/00000Website/gaotogo-website/src/components/FooterLinksDesktop.tsx":"_astro/FooterLinksDesktop.D-4LNjEf.js","G:/GAO TO GO/00000Website/gaotogo-website/src/components/FooterLinksMobile.tsx":"_astro/FooterLinksMobile.DBK_rvmL.js","@astrojs/react/client.js":"_astro/client.DVxemvf8.js","G:/GAO TO GO/00000Website/gaotogo-website/src/components/OrderCTA.astro?astro&type=script&index=0&lang.ts":"_astro/OrderCTA.astro_astro_type_script_index_0_lang.DZiJUuCh.js","G:/GAO TO GO/00000Website/gaotogo-website/node_modules/astro/dist/assets/services/noop.js":"_astro/noop.BsVCOQhs.js","G:/GAO TO GO/00000Website/gaotogo-website/src/components/SneakPeak.tsx":"_astro/SneakPeak.KERf5-Gh.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["G:/GAO TO GO/00000Website/gaotogo-website/src/components/OrderCTA.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",()=>{const e=document.getElementById(\"leftDiv\"),t=document.getElementById(\"rightDiv\");if(window.matchMedia(\"(min-width: 768px)\").matches&&e&&t){const i=e.offsetHeight;t.style.height=`${i}px`}});"]],"assets":["/_astro/team.CzS9rdxi.jpg","/_astro/pho.BgJJRbqG.jpg","/_astro/hero-image.C1lQwGN-.jpg","/_astro/outdoor.DUwi2z-5.jpg","/_astro/noodles.CszIi9j-.jpg","/_astro/banh-mi.Dv9TNHmm.jpg","/_astro/dumplings.Dtgvi98z.jpg","/_astro/doll.D_S6AbpG.jpg","/_astro/eco-packaging.C8GVYFD3.jpg","/_astro/mix.BRGH8noQ.jpg","/_astro/workings.BcUD0_rq.jpg","/_astro/about.DQ3y6ODQ.css","/favicon.svg","/logo-secondary.svg","/logo.svg","/menu-closed.svg","/fonts/BDStreetSignSans-StandardSubtleInktrap.otf","/fonts/BDStreetSignSans_Variable.ttf","/icons/arrow-right.svg","/icons/collapse.svg","/icons/expand.svg","/icons/facebook.svg","/icons/flavoring.png","/icons/instagram.svg","/icons/menu-closed.svg","/icons/mortar.png","/icons/snapchat.svg","/icons/soup.png","/icons/star.png","/icons/thread.svg","/icons/x-twitter.svg","/icons/youtube.svg","/_astro/client.DVxemvf8.js","/_astro/FooterLinksDesktop.D-4LNjEf.js","/_astro/FooterLinksMobile.DBK_rvmL.js","/_astro/index.RH_Wq4ov.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/noop.BsVCOQhs.js","/_astro/SneakPeak.BpX4lrVB.js","/_astro/SneakPeak.KERf5-Gh.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"cy89dkp4RiyKkR/z5pNrdcIZfFr5ohZabYNNbKD/HtI="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
