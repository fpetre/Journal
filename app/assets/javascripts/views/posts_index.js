Journal.Views.PostsIndex = Backbone.View.extend({
  template: JST["posts/index"],
  tagName: "ul",

  initialize: function () {
    this.listenTo(this.collection, "remove", this.render);
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.collection, "change", this.render);
    this.listenTo(this.collection, "reset", this.render);
    this.listenTo(this.collection, "sync", this.render);

  },

  events: {
    "click button.delete-post" : "deletePost"
  },

  deletePost:   function(event){
    var $button = $(event.currentTarget);
    var postId = $button.data("id");
    var model = this.collection.get(postId);
    model.destroy();
  },



  render: function () {
    var renderedView = this.template({ posts: this.collection });
    this.$el.html(renderedView);

    return this;
  }
});

Journal.Views.Index = new Journal.Views.PostsIndex ({ collection: Journal.Collections.posts });