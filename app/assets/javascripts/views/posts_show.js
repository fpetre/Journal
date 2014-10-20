Journal.Views.Show = Backbone.View.extend ({
  template: JST["posts/show"],


  render: function(){
    var renderedView =this.template({this.post})
    this.$el.html(renderedView);
    return this;
  }
});