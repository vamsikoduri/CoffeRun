(function (window) {
    'use strict';
    var App = window.App || {};

    function CheckList(selector) {

        if (!selector) {
            throw new Error('No Selector provided');
        }

        this.$element = $(selector);
        if (this.$element.length == 0) {
            throw new Error('Could not find the element with the selector:' + selector)
        }


    }

    function Row(coffeeOrder) {

        var $div = $('<div></div>', {
            'data-coffee-order': 'checkbox',
            'class': 'checkbox'
        });

        var $label = $('<label></label>');

        var $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: coffeeOrder.emailAddress
        });


        var description = coffeeOrder.size + ' '; 
        if (coffeeOrder.flavor) { 
            description += coffeeOrder.flavor + ' '; 
        } 
        
        description += coffeeOrder.coffee + ', '; 
        description += ' (' + coffeeOrder.emailAddress + ')'; 
        description += ' [' + coffeeOrder.strength + 'x]';

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    }

    CheckList.prototype.addRow = function(coffeeOrder)
    {
        var rowElement = new Row(coffeeOrder);

        this.$element.append(rowElement.$element);
    }



    App.CheckList = CheckList;
    window.App = App;

})(window);