Template.newMember.events({
	'submit form': function(e) {
		e.preventDefault();
		// Each one of these attributes should have an associated form input on admin_member_new.html

		var member = {
			routeName: $(e.target).find('[name=routeName]').val(),
			imageUrl: $(e.target).find('[name=image_url]').val(),
			email: $(e.target).find('[name=email]').val(),
			title: $(e.target).find('[name=title]').val(),
			prefix: $(e.target).find('[name=prefix]').val(),
			firstname: $(e.target).find('[name=firstname]').val(),
			lastname: $(e.target).find('[name=lastname]').val(),
			suffix: $(e.target).find('[name=suffix]').val(),
			city: $(e.target).find('[name=city]').val(),
			state: $(e.target).find('[name=state]').val(),
			country: $(e.target).find('[name=country]').val(),
			interests: $(e.target).find('[name=interests]').val(),
			description: $(e.target).find('#profile_description').val()

		}
	
			
		Meteor.call('member', member, function(error, id) { 
			if (error) {
				throwError(error.reason);
				
				if (error.error === 302)
					Router.go('memberPage', {_id: error.details})
			} else {
				var newMember = Members.findOne({_id: id});
				var newMemberRoute = newMember.routeName;
				Router.go('memberPage', {routeName: newMemberRoute});
			}
		});
	}
});

