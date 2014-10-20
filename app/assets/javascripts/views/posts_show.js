Journal.Views.PostsShow = Backbone.View.extend ({
  template: JST["posts/show"],

  initialize: function (options) {
    this.listenTo(this.collection, "add", this.render);
    this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    var view = this;

    var renderedView = this.template({ post: this.model });
    this.$el.html(renderedView);

    this.$el.find("h1").on("dblclick", this.handleTitleDblClick.bind(this));
    this.$el.find("p").on("dblclick", this.handleBodyDblClick.bind(this));

    return this;
  },

  handleTitleDblClick: function (event) {
    var view = this;
    var $header = $(event.currentTarget);
    var $input = $("<input type='text' name='post[title]' value='" + view.model.get("title") + "'>");

    $header.replaceWith($input);
    $input.on("blur", function (event) {
      view.model.save({ title: $input.val() }, {patch: true});
      view.render();
    });
  },

    handleBodyDblClick: function (event) {
      var view = this;
      var $header = $(event.currentTarget);
      var $input = $("<input type='text' name='post[body]' value='" + view.model.get("body") + "'>");

      $header.replaceWith($input);
      $input.on("blur", function (event) {
        view.model.save({ body: $input.val() }, {patch: true});
        view.render();
      });
    }
});