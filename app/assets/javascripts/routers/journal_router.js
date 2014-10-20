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
      if (!$("div.sidebar").val()) {
        Journal.Collections.posts.fetch();
        $('div.sidebar').html( Journal.Views.Index.render().$el);
      }
      var post = Journal.Collections.posts.getOrFetch(id);
      var postsShow = new Journal.Views.PostsShow({
        model: post,
        collection: Journal.Collections.posts
      });
      this._swapView(postsShow);
    },

    postsNew: function () {
      if (!$("div.sidebar").val()) {
        Journal.Collections.posts.fetch();
        $('div.sidebar').html( Journal.Views.Index.render().$el);
      }
      var post = new Journal.Models.Post();
      var postsNew = new Journal.Views.PostForm({
        model: post,
        collection: Journal.Collections.posts
      });

      this._swapView(postsNew);
    },

    postsEdit: function (id) {
      if (!$("div.sidebar").val()) {
        Journal.Collections.posts.fetch();
        $('div.sidebar').html( Journal.Views.Index.render().$el);
      }
      var post = Journal.Collections.posts.getOrFetch(id);

      var postsEdit = new Journal.Views.PostForm({
        model: post,
        collection: Journal.Collections.posts
      });

      this._swapView(postsEdit);
    },

    _swapView: function(view) {
      this._currentView && this._currentView.remove();
      this._currentView = view;
      $('div.posts').html(view.render().$el);
    }

});