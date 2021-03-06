IdeaVoter.Views.IdeasIndex = Backbone.View.extend({

	template: HandlebarsTemplates['ideas/index'],
	initialize: function(){
    this.collection.on('reset',this.render, this)
    this.collection.on('add',this.render, this);
     },

   events: {
    "submit #new_idea ": "createIdea",
    "click #upvote": "upvote"
		},

  render: function(){
    $(this.el).html(this.template())
    this.collection.each(this.addIdea)
    return this;
  },

  addIdea: function(idea){
  	view = new IdeaVoter.Views.Idea({model: idea})
  	$('#ideas').append(view.render().el)
  },

  upvote:function(event){
  	alert("Thanks for the vote!");
  	// event.preventDefault(),
  	// idea = this.collection.get({model: idea}),
  	// idea.set({'votes': idea.get('votes') + 1})
  	// idea.save()
  },

  createIdea: function(event){
  	event.preventDefault(),
  	password = prompt("In order to submit an idea, please enter the password.");
  	if(password == "BK001" ||password == "Kindling"){ 
	  	this.collection.create(
		  	attributes = {
		  	"title": $('#new_idea_title').val(),
		  	"name" : $('#new_idea_name').val(),
		  	"description" : $('#new_idea_description').val()
	  	})
  	}
  	else{
  		alert("Sorry, you can only submit an idea if you have the correct password");
  	}
	}

});
