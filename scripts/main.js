(function(){
    'use strict';
    var FORM_SELECTOR = '[data-coffee-order="form"]';
    var CHECKLIST_SELECTOR = '[data-coffee-order="checklist"]';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;
    var CheckList = App.CheckList;
    var checkList =  new CheckList(CHECKLIST_SELECTOR);
   
    var myTruck = new Truck('ncc-1701', new DataStore());
    checkList.addClickHandler(myTruck.deliverOrder.bind(myTruck)); 
    var formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(
        function (data)
        {
            myTruck.createOrder.call(myTruck,data);
            checkList.addRow.call(checkList,data);
            
        }
    );
    window.myTruck = myTruck;
    formHandler.addSliderHandler();
    console.log(formHandler);
})(window);