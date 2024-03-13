//Задача: не змінюючи логіки, змінити структуру коду, щоби вона відповідала принципу DRY:
// ctx.prototype.__applyStyleState = function (styleState) {
//     var keys = Object.keys(styleState), i, key;
//
//     for (i=0; i<keys.length; i++) {
//         key = keys[i];
//         this[key] = styleState[key];
//     }
// };
// ctx.prototype.__setDefaultStyles = function () {
//     var keys = Object.keys(STYLES), i, key; // keys of object - object selection
//
//     for (i=0; i<keys.length; i++) {
//         key = keys[i];
//         this[key] = STYLES[key].canvas; // field selection
//     }
// };
// ctx.prototype.__getStyleState = function () {
//     var i, styleState = {}, keys = Object.keys(STYLES), key;
//
//     for (i=0; i<keys.length; i++) {
//         key = keys[i];
//         styleState[key] = this[key];
//     }
//     return styleState;
// };

function iterateOverKeys(obj, action) {
    var keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        action(key, obj[key]);
    }
}

ctx.prototype.__applyStyleState = function (styleState) {
    iterateOverKeys(styleState, (key, value) => {
        this[key] = value;
    });
};

ctx.prototype.__setDefaultStyles = function () {
    iterateOverKeys(STYLES, (key, value) => {
        this[key] = value.canvas;
    });
};

ctx.prototype.__getStyleState = function () {
    var styleState = {};

    iterateOverKeys(STYLES, (key) => {
        styleState[key] = this[key];
    });

    return styleState;
};
