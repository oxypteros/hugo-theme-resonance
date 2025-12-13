// assets/js/main.js
import initLenis from "./modules/lenis.js";
window.lenis = initLenis();

import Alpine from '@alpinejs/csp';
import focus from "@alpinejs/focus";
import anchor from "@alpinejs/anchor";
import collapse from "@alpinejs/collapse";


import announcerStore from "./stores/announcer.js";
import mobileMenuModule from "./modules/mobile-menu.js";

Alpine.plugin(focus);
Alpine.plugin(anchor);
Alpine.plugin(collapse);


announcerStore(Alpine);
mobileMenuModule(Alpine);


window.Alpine = Alpine;
Alpine.start();
