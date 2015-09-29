exports.createCollapsableView = function(args) {
    var view = Ti.UI.createView(args);
    view.collapse = function() {
        view.expandedHeight = view.expandedHeight || view.height;
        view.animate({
            height: 0,
            duration: 250
        });
    };
    view.expand = function() {
        view.height = view.expandedHeight;
    };
    return view;
};