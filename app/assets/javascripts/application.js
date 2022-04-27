//= require jquery3
//= require popper
//= require bootstrap-sprockets
//= require jquery
//= require jquery_ujs
//= require activestorage
//= require turbolinks
//= require_tree .


app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
