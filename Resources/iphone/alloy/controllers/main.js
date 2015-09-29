function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showhidemenu() {
        Ti.Analytics.featureEvent("openMenu");
        alert("Menu Button Clicked");
    }
    function onStatusBtnClick() {
        Ti.Analytics.featureEvent("statusClicked");
        if ($.menuBar) {
            var a1 = Ti.UI.createAnimation({
                backgroundColor: "#696969",
                duration: 250
            });
            var a2 = Ti.UI.createAnimation({
                backgroundColor: "#f5f6f9",
                duration: 500
            });
            $.menuBar.animate(a1, function() {
                $.menuBar.animate(a2);
            });
        }
        var rows = [];
        for (var i = 0; 50 > i; i++) rows.push(Alloy.createController("tableViewRow").getView());
        $.mainList.data = rows;
    }
    function onPhotoBtnClick() {
        Ti.Analytics.featureEvent("photoClicked");
        alert("Photo Button Clicked");
    }
    function onCheckinBtnClick() {
        Ti.Analytics.featureEvent("checkinClicked");
        alert("CheckIn Button Clicked");
    }
    function onLogoClick() {
        Ti.Analytics.featureEvent("logoClicked");
        alert("Logo Clicked");
    }
    function onFriendClick() {
        Ti.Analytics.featureEvent("friendClicked");
        alert("Friend Button Clicked");
    }
    function onMessageClick() {
        Ti.Analytics.featureEvent("messageClicked");
        alert("Message Button Clicked");
    }
    function onNotificationClick() {
        Ti.Analytics.featureEvent("notificationClicked");
        alert("Notification Button Clicked");
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "main";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        var __parentSymbol = __processArg(arguments[0], "__parentSymbol");
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.main = Ti.UI.createWindow({
        backgroundColor: "white",
        orientationModes: [ Ti.UI.PORTRAIT, Ti.UI.LANDSCAPE_LEFT, Ti.UI.LANDSCAPE_RIGHT, Ti.UI.UPSIDE_PORTRAIT ],
        navBarHidden: true,
        fullscreen: true,
        id: "main"
    });
    $.__views.main && $.addTopLevelView($.__views.main);
    $.__views.page = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        backgroundColor: "#d6d6d6",
        left: 0,
        layout: "vertical",
        id: "page"
    });
    $.__views.main.add($.__views.page);
    $.__views.navigationBar = Ti.UI.createView({
        backgroundImage: "/images/iconBarBG.png",
        width: Ti.UI.FILL,
        height: "54dp",
        top: 0,
        id: "navigationBar"
    });
    $.__views.page.add($.__views.navigationBar);
    $.__views.topActions = Ti.UI.createView({
        width: "150dp",
        height: "50dp",
        layout: "horizontal",
        id: "topActions"
    });
    $.__views.navigationBar.add($.__views.topActions);
    $.__views.friendsBtn = Ti.UI.createImageView({
        height: "50dp",
        width: "50dp",
        image: "/images/friendsbtn.png",
        id: "friendsBtn"
    });
    $.__views.topActions.add($.__views.friendsBtn);
    onFriendClick ? $.__views.friendsBtn.addEventListener("click", onFriendClick) : __defers["$.__views.friendsBtn!click!onFriendClick"] = true;
    $.__views.messagesBtn = Ti.UI.createImageView({
        height: "50dp",
        width: "50dp",
        image: "/images/messagesbtn.png",
        id: "messagesBtn"
    });
    $.__views.topActions.add($.__views.messagesBtn);
    onMessageClick ? $.__views.messagesBtn.addEventListener("click", onMessageClick) : __defers["$.__views.messagesBtn!click!onMessageClick"] = true;
    $.__views.notificationsBtn = Ti.UI.createImageView({
        height: "50dp",
        width: "50dp",
        image: "/images/notificationsbtn.png",
        id: "notificationsBtn"
    });
    $.__views.topActions.add($.__views.notificationsBtn);
    onNotificationClick ? $.__views.notificationsBtn.addEventListener("click", onNotificationClick) : __defers["$.__views.notificationsBtn!click!onNotificationClick"] = true;
    $.__views.menubtn = Ti.UI.createImageView({
        left: 0,
        width: "55dp",
        height: "54dp",
        image: "/images/menubtn.png",
        id: "menubtn"
    });
    $.__views.navigationBar.add($.__views.menubtn);
    showhidemenu ? $.__views.menubtn.addEventListener("click", showhidemenu) : __defers["$.__views.menubtn!click!showhidemenu"] = true;
    $.__views.logo = Ti.UI.createImageView({
        width: "45dp",
        height: "45dp",
        right: "5dp",
        image: "/chatbtn.png",
        id: "logo"
    });
    $.__views.navigationBar.add($.__views.logo);
    onLogoClick ? $.__views.logo.addEventListener("click", onLogoClick) : __defers["$.__views.logo!click!onLogoClick"] = true;
    $.__views.menuBar = Ti.UI.createView({
        backgroundColor: "#f5f6f9",
        width: Ti.UI.FILL,
        height: "50dp",
        layout: "horizontal",
        id: "menuBar"
    });
    $.__views.page.add($.__views.menuBar);
    $.__views.__alloyId0 = Ti.UI.createView({
        width: "33%",
        height: "50dp",
        left: 0,
        id: "__alloyId0"
    });
    $.__views.menuBar.add($.__views.__alloyId0);
    $.__views.statusBtn = Ti.UI.createImageView({
        width: "73dp",
        height: "19dp",
        image: "/images/statusbtn.png",
        id: "statusBtn"
    });
    $.__views.__alloyId0.add($.__views.statusBtn);
    onStatusBtnClick ? $.__views.statusBtn.addEventListener("click", onStatusBtnClick) : __defers["$.__views.statusBtn!click!onStatusBtnClick"] = true;
    $.__views.__alloyId1 = Ti.UI.createView({
        width: "33%",
        height: "50dp",
        left: 0,
        id: "__alloyId1"
    });
    $.__views.menuBar.add($.__views.__alloyId1);
    $.__views.photoBtn = Ti.UI.createImageView({
        width: "73dp",
        height: "19dp",
        image: "/images/photobtn.png",
        id: "photoBtn"
    });
    $.__views.__alloyId1.add($.__views.photoBtn);
    onPhotoBtnClick ? $.__views.photoBtn.addEventListener("click", onPhotoBtnClick) : __defers["$.__views.photoBtn!click!onPhotoBtnClick"] = true;
    $.__views.__alloyId2 = Ti.UI.createView({
        width: "33%",
        height: "50dp",
        left: 0,
        id: "__alloyId2"
    });
    $.__views.menuBar.add($.__views.__alloyId2);
    $.__views.checkinBtn = Ti.UI.createImageView({
        width: "73dp",
        height: "19dp",
        image: "/images/checkinbtn.png",
        id: "checkinBtn"
    });
    $.__views.__alloyId2.add($.__views.checkinBtn);
    onCheckinBtnClick ? $.__views.checkinBtn.addEventListener("click", onCheckinBtnClick) : __defers["$.__views.checkinBtn!click!onCheckinBtnClick"] = true;
    $.__views.mainWindow = Ti.UI.createView({
        height: Ti.UI.FILL,
        width: Ti.UI.FILL,
        id: "mainWindow"
    });
    $.__views.page.add($.__views.mainWindow);
    var __alloyId3 = [];
    $.__views.__alloyId4 = Alloy.createController("tableViewRow", {
        id: "__alloyId4",
        __parentSymbol: __parentSymbol
    });
    __alloyId3.push($.__views.__alloyId4.getViewEx({
        recurse: true
    }));
    $.__views.mainList = Ti.UI.createTableView({
        data: __alloyId3,
        id: "mainList"
    });
    $.__views.mainWindow.add($.__views.mainList);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    $.main.open();
    __defers["$.__views.friendsBtn!click!onFriendClick"] && $.__views.friendsBtn.addEventListener("click", onFriendClick);
    __defers["$.__views.messagesBtn!click!onMessageClick"] && $.__views.messagesBtn.addEventListener("click", onMessageClick);
    __defers["$.__views.notificationsBtn!click!onNotificationClick"] && $.__views.notificationsBtn.addEventListener("click", onNotificationClick);
    __defers["$.__views.menubtn!click!showhidemenu"] && $.__views.menubtn.addEventListener("click", showhidemenu);
    __defers["$.__views.logo!click!onLogoClick"] && $.__views.logo.addEventListener("click", onLogoClick);
    __defers["$.__views.statusBtn!click!onStatusBtnClick"] && $.__views.statusBtn.addEventListener("click", onStatusBtnClick);
    __defers["$.__views.photoBtn!click!onPhotoBtnClick"] && $.__views.photoBtn.addEventListener("click", onPhotoBtnClick);
    __defers["$.__views.checkinBtn!click!onCheckinBtnClick"] && $.__views.checkinBtn.addEventListener("click", onCheckinBtnClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;