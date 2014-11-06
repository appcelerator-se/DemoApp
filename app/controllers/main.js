
var _args = arguments[0] || {};


/** Open the Main Window **/
$.main.open();


/** Demonstrate Some Basic Behavior when clicking on the PhotoButton **/

function onPhotoBtnClick(e) {  
	Ti.Analytics.featureEvent("photoClicked");
	
	/** If the menu bar exists, lets animate it **/
	
	if($.menuBar) { 
		/** Animation To Darken the Menu Bar **/
		var a1 = Ti.UI.createAnimation({
			backgroundColor: "#696969",
			duration: 250
		});
		
		/** Animation to bring the menu bar color back to normal **/
		var a2 = Ti.UI.createAnimation({
			backgroundColor: "#f5f6f9",
			duration: 500
		});
		
		/** Call to Animate the MenuBar View **/
		$.menuBar.animate(a1, function(){
			$.menuBar.animate(a2);
		});
	}
	
	/* Dynamically Add Rows to the TableView */
	
	var rows = [];
	for(var i=0; i<50; i++){
		
		/** Create a TableView Row and add it to the `rows` array **/
		rows.push(Alloy.createController('tableViewRow').getView());
	}
	
	/** Update the TableView Data with the new rows **/
	$.mainList.data = rows;
}

/** Stub Functions for other Buttons **/

function showhidemenu(){
	Ti.Analytics.featureEvent("openMenu");
	alert("Menu Button Clicked");
};

function onStatusBtnClick(e){
	Ti.Analytics.featureEvent("statusClicked");
	alert("Status Button Clicked");
}

function onCheckinBtnClick(e){
	Ti.Analytics.featureEvent("checkinClicked");
	alert("CheckIn Button Clicked");
}

function onFriendClick(e){
	Ti.Analytics.featureEvent("friendClicked");
	alert("Friend Button Clicked");
}

function onMessageClick(e){
	Ti.Analytics.featureEvent("messageClicked");
	alert("Message Button Clicked");
}

function onNotificationClick(e){
	Ti.Analytics.featureEvent("notificationClicked");
	alert("Notification Button Clicked");
}


