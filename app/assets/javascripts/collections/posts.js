Journal.Collections.Posts = Backbone.Collection.extend({
  model: Journal.Models.Post,
  url: "/posts",

  getOrFetch: function(id){
    var post = this.get(id);
    if (post) {
      post.fetch();
    } else {
      var posts = this;
      post = new Journal.Models.Post({id: id});
      post.fetch({success: function(){
        posts.add(post);
      }});
    }
    return post;
  }
});

Journal.Collections.posts = new Journal.Collections.Posts();