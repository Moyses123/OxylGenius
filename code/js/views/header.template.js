Vue.component('header-template', {
    template: `
<header id="header-template" class="mdl-layout__header mdl-color--white mdl-color-text--grey-800">
    <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">MOCS</span>
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation. We hide it in small screens. -->
        <nav class="mdl-navigation mdl-layout--large-screen-only">
            <a class="mdl-navigation__link mdl-color-text--grey-600" href="#">Link</a>
            <a class="mdl-navigation__link mdl-color-text--grey-600" href="#">Fazer Login</a>
            <a class="mdl-navigation__link mdl-color-text--grey-600" href="#">Cadastro</a> 
        </nav>
    </div>
</header>
    `
});