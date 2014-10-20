Journal.Routers.JournalRouter = Backbone.Router.extend({
  routes: {
    "": "postsIndex",
    "posts/new": "postsNew",
    "posts/:id/edit": "postsEdit",
    "posts/:id": "postsShow",
  },

  postsIndex:
    function () {
      Journal.Collections.posts.fetch();
      var postsIndex = new Journal.Views.PostsIndex ({ collection: Journal.Collections.posts });
      $('div.sidebar').html(postsIndex.render().$el);
    },

    postsShow: function(id) {
      var post = Journal.Collections.posts.getOrFetch(id);
      var postsShow = new Journal.Views.PostsShow({
        model: post,
        collection: Journal.Collections.posts
      });
      $('div.posts').html(postsShow.render().$el)
    },

    postsNew: function () {
      var post = new Journal.Models.Post();
      var postsNew = new Journal.Views.PostForm({
        model: post,
        collection: Journal.Collections.posts
      });

      $('div.posts').html(postsNew.render().$el);
    },

    postsEdit: function (id) {
      var post = Journal.Collections.posts.getOrFetch(id);

      var postsEdit = new Journal.Views.PostForm({
        model: post,
        collection: Journal.Collections.posts
      });

      $('div.posts').html(postsEdit.render().$el);
    }
});