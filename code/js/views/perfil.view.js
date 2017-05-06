Vue.component('perfil-view', {
    template: `
<div class="card-view mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
        <h5 class="mdl-color-text--grey-700">Alterar Dados</h5>
    </div>
    <div class="mdl-card__supporting-text">
    </div>
    <div class="mdl-card__actions mdl-card--border">
        <a v-on:click="load()" class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            Salvar dados
        </a>
    </div>
    <ripple v-show="loading" :state="state"></ripple>
</div>
    `,
    data: function () {
        return {
            loading: false,
            state: 'loading'
        }
    },
    methods: {
        load: function () {
            this.loading = true;
            setTimeout(() => {
                this.state = 'ready';

                setTimeout(() => {
                    this.loading = false;
                    this.state = 'loading';
                }, 1000);
            }, 2000);
        }
    }
});