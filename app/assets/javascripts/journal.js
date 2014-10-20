window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Journal.Routers.JournalRouter($('body'));
  }
};

$(document).ready(function(){
  Journal.initialize();
});
