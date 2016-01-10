angular.module("customer").factory('Favourite', function(){

    function Favourite(likes, dislikes){
        this.likes = likes;
        this.dislikes = dislikes;
    }
    Favourite.build = function(data){
        return new Favourite(data.likes, data.dislikes);
    };
    return Favourite;
});