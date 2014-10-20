Journal.Routers.JournalRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/:id": "postsShow"
  }


  postsIndex:
    function () {
      Journal.Collections.posts.fetch({
        success: function () {
          var PIV = new Journal.Views.PostsIndex ({ collection: Journal.Collections.posts });

          $('body').append(PIV.render().$el);
        }
      });
    },


});