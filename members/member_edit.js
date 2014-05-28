Template.memberEdit.events({
	'submit form': function(e) {
		e.preventDefault();

		var	currentMemberId = this._id
		var	currentMemberRoute = this.routeName;
		var memberProperties = {
			routeName: $(e.target).find('[name=routeName]').val(),
			imageUrl: $(e.target).find('[name=image_url]').val(),
			title: $(e.target).find('[name=title]').val(),
			prefix: $(e.target).find('[name=prefix]').val(),
			firstname: $(e.target).find('[name=firstname]').val(),
			lastname: $(e.target).find('[name=lastname]').val(),
			suffix: $(e.target).find('[name=suffix]').val(),
			email: $(e.target).find('[name=email]').val(),
			city: $(e.target).find('[name=city]').val(),
			state: $(e.target).find('[name=state]').val(),
			country: $(e.target).find('[name=country]').val(),
			interests: $(e.target).find('[name=interests]').val()

		}

		Meteor.call('memberUpdate', memberProperties, currentMemberId, currentMemberRoute, function(error, routeName){
			if(error){
				Errors.throw(error.reason);
			}
			else
				Router.go('memberProfile', {routeName: currentMemberRoute});
			
		});
		
	},
	'click .delete': function(e) {
		e.preventDefault();
		if(confirm("Delete this member?")) {
			var currentMemberId = this._id;
			Members.remove(currentMemberId);
			Router.go('membersList');
		}
	},

});
