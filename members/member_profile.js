Template.memberProfile.helpers({
	ownsProfile: function() {
		return this.user_id == Meteor.userId();
	}
});

Template.memberProfile.events({
	'click #edit': function(){
		var currentMemberRoute = this.routeName;
		Router.go('memberEdit', {routeName: currentMemberRoute });
		
	},

	'click #delete': function(e) {
		e.preventDefault();
		if(confirm("Delete this member?")) {
			var currentMemberId = this._id;
			Members.remove(currentMemberId);
			Router.go('membersProfile');
		}
	}
});