function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tableViewRow";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    $.__views.listRow = Ti.UI.createTableViewRow({
        height: "160dp",
        selectionStyle: "NONE",
        className: "listRow",
        id: "listRow"
    });
    $.__views.listRow && $.addTopLevelView($.__views.listRow);
    $.__views.rowContainer = Ti.UI.createView({
        borderColor: "#cacdd8",
        borderRadius: 3,
        borderWidth: 1,
        left: "5dp",
        top: "5dp",
        right: "5dp",
        height: "150dp",
        width: Ti.UI.FILL,
        backgroundColor: "#fff",
        id: "rowContainer"
    });
    $.__views.listRow.add($.__views.rowContainer);
    $.__views.profilePic = Ti.UI.createImageView({
        width: "66dp",
        height: "66dp",
        image: "/bert_appc_lecture.jpg",
        top: "5dp",
        left: "5dp",
        id: "profilePic"
    });
    $.__views.rowContainer.add($.__views.profilePic);
    $.__views.profileName = Ti.UI.createLabel({
        top: "5dp",
        left: "80dp",
        color: "#941100",
        font: {
            fontSize: "16dp",
            fontWeight: "bold"
        },
        id: "profileName",
        text: "Appcelerator"
    });
    $.__views.rowContainer.add($.__views.profileName);
    $.__views.timeAgo = Ti.UI.createLabel({
        top: "5dp",
        right: "5dp",
        color: "#bbbbbb",
        font: {
            fontSize: "12dp"
        },
        id: "timeAgo",
        text: "30 minutes ago"
    });
    $.__views.rowContainer.add($.__views.timeAgo);
    $.__views.status = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        left: "80dp",
        right: "5dp",
        top: "25dp",
        font: {
            fontSize: "16dp"
        },
        text: "Having a great day working on Cross Platform Mobility!",
        id: "status"
    });
    $.__views.rowContainer.add($.__views.status);
    $.__views.grayLine = Ti.UI.createView({
        id: "grayLine",
        bottom: "51"
    });
    $.__views.rowContainer.add($.__views.grayLine);
    $.__views.bottomActions = Ti.UI.createView({
        bottom: 0,
        height: "50dp",
        width: Ti.UI.FILL,
        backgroundColor: "#eff2f5",
        layout: "horizontal",
        id: "bottomActions"
    });
    $.__views.rowContainer.add($.__views.bottomActions);
    $.__views.__alloyId5 = Ti.UI.createView({
        width: "50%",
        height: "50dp",
        id: "__alloyId5"
    });
    $.__views.bottomActions.add($.__views.__alloyId5);
    $.__views.likeBtn = Ti.UI.createImageView({
        width: "76dp",
        height: "20dp",
        image: "/likebtn.png",
        id: "likeBtn"
    });
    $.__views.__alloyId5.add($.__views.likeBtn);
    $.__views.__alloyId6 = Ti.UI.createView({
        width: "50%",
        height: "50dp",
        id: "__alloyId6"
    });
    $.__views.bottomActions.add($.__views.__alloyId6);
    $.__views.commentBtn = Ti.UI.createImageView({
        width: "76dp",
        height: "20dp",
        image: "/commentbtn.png",
        id: "commentBtn"
    });
    $.__views.__alloyId6.add($.__views.commentBtn);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.setTitle = function(t) {
        $.profileName.text = t;
    };
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;