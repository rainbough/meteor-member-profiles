Package.describe({
    summary: "Member Collection and Profiles for Meteor"
});

Package.on_use(function (api) {
	api.use('standard-app-packages', 'accounts-base' ['client', 'server']);
	api.use('templating', 'client');
	api.use('roles', ['client', 'server']);
  	api.use([ 'iron-router', 'bootstrap-3', 'errors'], ['client']);
    api.add_files(['members/member_forms.html', 'members/members_templates.html', 'members/member_router.js', 'members/members.css', 'members/member_events.js'], 'client');
    api.add_files(['members/members.js'], ['client', 'server']);
    api.export('Members', ['client', 'server']);
});
