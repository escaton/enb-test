module.exports = function(config) {

    config.module('enb-checkout', function(config) {
        config.addLibraries({
            '.bem/lib/bem-controls' : {
                check: false
            }
        })
    });

}