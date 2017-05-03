Vue.component('header-drawer-template', {
    template: `
<div>
    <header id="header-template" class="mdl-layout__header mdl-color--white mdl-color-text--grey-800">
        <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">MOCS</span>
            <div class="mdl-layout-spacer"></div>
            <!-- Navigation. We hide it in small screens. -->
            <nav class="mdl-navigation mdl-layout--large-screen-only">
                <a class="mdl-navigation__link mdl-color-text--grey-600" href="#">Link</a>
                <a class="mdl-navigation__link mdl-color-text--grey-600" v-on:click="openLoginModal = true" href="#">Fazer Login</a>
                <a class="mdl-navigation__link mdl-color-text--grey-600" href="#">Cadastro</a> 
            </nav>
        </div>
    </header>
    <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Mocs</span>
        <nav class="mdl-navigation">
            <a class="mdl-navigation__link mdl-color-text--grey-600" href="#">Link</a>
            <a class="mdl-navigation__link mdl-color-text--grey-600" href="#" v-on:click="openLoginModal = true">Fazer Login</a>
            <a class="mdl-navigation__link mdl-color-text--grey-600" href="#">Cadastro</a>
        </nav> 
    </div>
    <div class="obfuscator" v-show="openLoginModal" style="opacity: 1;display: flex; align-items: center;flex-direction: center;">
        <div class="login-card mdl-card mdl-shadow--4dp zoomIn" style="margin: 0 auto">
            <div class="mdl-card__title mdl-card--border">
                <h2 class="mdl-card__title-text">Faça login</h2>
            </div>
            <div class="mdl-card__supporting-text">
                <form action="#">
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input v-model="user" class="mdl-textfield__input" type="text" id="login">
                        <label class="mdl-textfield__label" for="login">Usuário...</label>
                    </div>
                    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                        <input v-model="pass" class="mdl-textfield__input" type="password" id="pass">
                        <label class="mdl-textfield__label" for="pass">Senha...</label>
                    </div>
                </form>
            </div>
            <div class="mdl-card__actions">
                <div v-show="loading" style="margin-bottom: 12px" id="p2" class="mdl-progress mdl-js-progress mdl-progress__indeterminate"></div>
                <button id="closeModalButton" v-on:click="openLoginModal = false" class="mdl-button mdl-js-button">
                    Cancelar
                </button>
                <button id="loginButton" v-on:click="login()" :disabled="loading" style="float: right" class="mdl-color--red-500 mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                    Login
                </button>
            </div>
            <div class="ripple">
                <spinner></spinner>
            </div>
        </div>
    </div>
</div>
    `,
    data: function () {
        return {
            loading: false,
            user: '',
            pass: '',
            openLoginModal: false,
        }
    },
    methods: {
        login: function () {
            document.getElementById('loginButton').style.opacity = '0';
            document.getElementsByClassName('ripple')[0].style.display = 'flex';
            document.getElementsByClassName('ripple')[0].classList.add('fadeInRipple');
        }
    }
});