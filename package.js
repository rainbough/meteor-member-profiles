Package.describe({
    summary: "Member Collection and Profiles for Meteor"
});

Package.on_use(function (api) {
	api.use('standard-app-packages', 'accounts-base' ['client', 'server']);
	api.use('templating', 'client');

  	api.use([ 'iron-router', 'bootstrap-3', 'errors'], ['client']);

    api.add_files(['members/new_member.html', 'members/members_list.html', 'members/member_link.html', 'members/member_page.html','members/member_profile.html','members/member_edit.html','members/new_member.js', 'members/member_router.js'], 'client');
    api.add_files('members/members.js', ['client', 'server']);
    api.export('Members', ['client', 'server']);
});
