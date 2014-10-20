Journal.Views.PostForm = Backbone.View.extend({
  template: JST["posts/form"],

  events: {
    "submit form": "submit"
  },

  render: function() {
    this.model = (this.model || new Journal.Collections.Post());

    var renderedView = this.template({ post: this.model });
    this.$el.html(renderedView);
    return this;
  },


  submit: function (event) {
    event.preventDefault();
    console.log("this runs");
    var formData = $(event.currentTarget).serializeJSON();
    console.log(formData);
    var view = this;
    var model = this.model;

    if (this.model.isNew()) {
      this.collection.create(formData, {
        success: function () {
          Backbone.history.navigate("#", {trigger: true});
        }
      });
    } else {
      console.log(formData);
      this.model.save(formData, {
        patch: true,
        success: function () {
          Backbone.history.navigate("posts/" + model.get("id"), {trigger: true});
        },

        failure: function () {
          view.render();
        }
      });
    }
  }


});