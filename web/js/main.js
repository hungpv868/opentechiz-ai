/* ============================================================
   OpenTechiz AI — main.js
   Alpine.js data components + utilities
   ============================================================ */

document.addEventListener('alpine:init', () => {

  /* ── Nav Component ─────────────────────────────────────── */
  Alpine.data('nav', () => ({
    navOpen: false,
    servicesOpen: false,
    scrolled: false,
    init() {
      window.addEventListener('scroll', () => {
        this.scrolled = window.scrollY > 20;
      });
    }
  }));

  /* ── FAQ Accordion ─────────────────────────────────────── */
  Alpine.data('faq', () => ({
    openItem: null,
    toggle(id) {
      this.openItem = this.openItem === id ? null : id;
    }
  }));

  /* ── Use Cases Filter ──────────────────────────────────── */
  Alpine.data('useCasesFilter', () => ({
    activeFilter: 'all',
    setFilter(f) { this.activeFilter = f; }
  }));

});

/* ── Scroll to Section Utility ────────────────────────────── */
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}
