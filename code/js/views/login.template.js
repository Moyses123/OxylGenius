Vue.component('login-template', {
    template: `
<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
  <header-drawer-template></header-drawer-template>
  <main class="mdl-layout__content">
   <section id="login-page">
    
    </section>
  </main>
</div>
    `,
    data: function () {
        return {
            loading: false,
            user: '',
            pass: ''
        }
    },
    
});