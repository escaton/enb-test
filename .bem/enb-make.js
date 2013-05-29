module.exports = function(config) {

    config.loadModule('enb-checkout', function(config) {
        config.addLibraries({
            'lego' : {
                type: 'git',
                url: 'git://github.yandex-team.ru/lego/romochka.git',
                treeish: '2.10.12'
            }
        })
    });

    config.module('enb-checkout', function(config) {
        config.addLibraries({
            '.bem/lib/bem-controls' : {
                type: 'git',
                url: 'git://github.com/bem/bem-controls.git'
            },
            '.bem/lib/islands-controls' : {
                type: 'git',
                url: 'git://github.yandex-team.ru/lego/islands-controls.git'
            }
        })
    });

    config.task("libraries.get", function(task) {
        return config.module('enb-checkout').checkoutLibraries(task);
    });

}