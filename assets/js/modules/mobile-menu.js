// assets/js/modules/mobile-menu.js

export default function (Alpine) {
  Alpine.data('mobileMenu', (openMessage, closeMessage) => ({
    isOpen: false,

    init() {
      // Watch for state changes
      this.$watch('isOpen', (val) => this.handleMenuChange(val));
    },

    toggle() {
      this.isOpen = !this.isOpen;
    },

    handleMenuChange(isOpen) {
      // Handle Lenis (Smooth Scroll)
      if (window.lenis) {
        isOpen ? window.lenis.stop() : window.lenis.start();
      }

      // Handle Announcer
      const message = isOpen ? openMessage : closeMessage;

      if (this.$store.announcer) {
        this.$store.announcer.announce(message);
      }
    }
  }));
}
