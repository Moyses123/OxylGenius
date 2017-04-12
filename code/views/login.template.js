Vue.component('login-template', {
    template: `
<section id="login-page">
    <div class="mdl-card mdl-shadow--4dp">
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
            <button id="loginButton" v-on:click="login()" :disabled="loading" style="float: right" class="mdl-color--red-500 mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                Login
            </button>
        </div>
        <div class="ripple">
            <h5 style="text-align: center;margin: 0 auto">Você fez login</h5>
        </div>
    </div>
</section>
    `,
    data: function () {
        return {
            loading: false,
            user: '',
            pass: ''
        }
    },
    methods: {
        login: function () {
            document.getElementById('loginButton').style.opacity = '0';
            document.getElementsByClassName('ripple')[0].style.display = 'flex';
            document.getElementsByClassName('ripple')[0].classList.add('fadeInRipple');
        },
        close: function(){

        }
    }
});