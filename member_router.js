Router.map(function() { 
	this.route('membersList', {
		path: '/members',
		controller: MembersControler
	});
	this.route('memberProfile', {
		path: '/members/:routeName',
		data: function() {
			return Members.findOne({routeName: this.params.routeName}); 
		},
		controller: MembersControler
	});

	this.route('memberEdit', {
		path: '/members/:routeName/edit',
		data: function() {
			return Members.findOne({routeName: this.params.routeName}); 
		},
		controller: MembersControler
	});

	this.route('newMember', {
		path: '/member/new'
	});
});

MembersControler = RouteController.extend({
	waitOn: function() {
		return Meteor.subscribe('members');
	},
	members: function() {
		return Members.find();
	}
});