// assets/js/stores/announcer.js

export default function(Alpine) {
  Alpine.store('announcer', {
    message: '',

    announce(newMessage) {
      this.message = newMessage;

      setTimeout(() => {
        this.message = '';
      }, 500);
    }
  });
}