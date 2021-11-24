var MYLIBRARY = MYLIBRARY || (function(){
    var _args = {};

    return {
        init : function(Args) {
            _args = Args;
        },
        interactiveText : function() {
            document.write(_args[0]);
        }
    };
}());