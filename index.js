;(function(factory){
if(typeof define == 'function' && define.amd){
    //seajs or requirejs environment
    define(['jquery', 'class', 'picker', 'datepicker', 'timepicker'], factory);
}else if(typeof module === 'object' && typeof module.exports == 'object'){
    module.exports = factory(
        require('jquery'),
        require('class'),
        require('picker'),
        require('datepicker'),
        require('timepicker')
    );
}else{
    factory(window.jQuery, window.jQuery.klass, window.jQuery.picker, window.jQuery.fn.datepicker, window.jQuery.fn.timepicker);
}
})(function($, Class, Picker, DatePicker, TimePicker){
return Class.$factory('datetimepicker', Picker, {
    initialize: function(options){
        var self = this;

        self._super(options);

        self.$datepicker = new DatePicker({
            container: self.$picker,
            closeAfterSelect: false
        });

        self.$timepicker = new TimePicker({
            container: self.$picker
        });

        self.$timepicker.on('confirm', function(event, time){
            var date = self.$datepicker.getDate();

            self.trigger('confirm', [date + ' ' + time, date, time]);
            $(options.dom).val(date + ' ' + time);
            self.close();
        });

        self.$picker.addClass('ui3-datetimepicker');
    },

    destroy: function(){
        var self = this;

        self.$datepicker.destroy();
        self.$datepicker = null;
        self.$timepicker.destroy();
        self.$timepicker = null;
        self._super.destroy.call(self);
    }
});

});
