const ecoImage = new Proxy({"src":"/_astro/eco-packaging.C8GVYFD3.jpg","width":4000,"height":6000,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/GAO TO GO/00000Website/gaotogo-website/src/images/eco-packaging.jpg";
							}
							
							return target[name];
						}
					});

const heroImage = new Proxy({"src":"/_astro/hero-image.C1lQwGN-.jpg","width":4828,"height":3219,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "G:/GAO TO GO/00000Website/gaotogo-website/src/images/hero-image.jpg";
							}
							
							return target[name];
						}
					});

export { ecoImage as e, heroImage as h };
