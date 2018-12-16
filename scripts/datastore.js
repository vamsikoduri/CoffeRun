(function(window){


    var App = window.App || {};

    function DataStore(){
        
        /* variables declard insisde of a constructor with out the this keyword are private variables */
        /* private variables can only be accessed by private fucntion. These functions are defined with in the constructor. */
        /* in order to acces the private variables we define privelage functions. These functions are define using this.functionName = () and these functions have acces to
           private variables of the class */
        
        console.log('running the DataStore Function');
        var data = {};

        this.getData = function()
        {
            return data;
        }
    }

    DataStore.prototype.add = function(key,value)
    {
        this.getData()[key] = value;
    }


    DataStore.prototype.get = function(key)
    {
        return this.getData()[key]; 
    }

    DataStore.prototype.getAll = function(key)
    {
        return this.getData(); 
    }


    DataStore.prototype.remove = function(key)
    {
        delete this.getData()[key];
    }



    App.DataStore = DataStore;
    window.App = App;

})(window);