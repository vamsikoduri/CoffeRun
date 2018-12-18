(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;

    function FormHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$formElement = $(selector);
        if (this.$formElement.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    
     FormHandler.prototype.addSubmitHandler = function (fn) {
        console.log('Setting submit handler for form');

        this.$formElement.on('submit', function (event) {
            event.preventDefault();
            var data = {};
            $(this).serializeArray().forEach(function (item) {
                data[item.name] = item.value;
                console.log(item.name + " is " + item.value);
            })

           
            console.log(data);
            fn(data);
            this.reset();
            this.elements[0].focus();
           

        });

    } 


    FormHandler.prototype.addSliderHandler = function () {
        this.$slider = $('[data-coffee-order="slider"]');
        this.$slider.on('click', function (event) {
            event.preventDefault();
            var updatedValue = $(this).serializeArray()[0]['value']
            var selectorValueText = $('[data-coffee-order="sliderValue"]');
            var udpateColor = 'black'
            if (updatedValue > 20 && updatedValue <= 50) {
                udpateColor = 'blue';
            }
            if (updatedValue > 50 && updatedValue <= 90) {
                udpateColor = 'brown';
            }
            if (updatedValue > 90) {
                udpateColor = 'brown';
            }
            selectorValueText.text(updatedValue);
            selectorValueText.css('color', udpateColor);

        });

    }

    App.FormHandler = FormHandler;
    window.App = App;

})(window);