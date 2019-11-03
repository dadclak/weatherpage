new Vue({

    el:'#app',
    data: {
        city: ''
    },
    methods: {
        getData: function() {
            var self = this;
            console.log('hello  ')
            $.getJSON('https://api.openweathermap.org/data/2.5/weather?q='+ self.city + '&appid=70ab5191fe9cc5eb23e7334c9e5d2ef2&units=metric', function(json){
                self.$set('data', json);
            });
        }
    }
});