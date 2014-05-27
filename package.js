Package.describe({
    summary: "Member Collection and Profiles for Meteor"
});

Package.on_use(function (api) {
	api.use('standard-app-packages', ['client', 'server']);
	api.use('templating', 'client');

  	api.use([ 'iron-router', 'bootstrap-3', 'errors'], ['client']);

    api.add_files(['new_member.html', 'members/members_list.html', 'members/member_link.html', 'members/member_page.html','members/member_profile.html','members/member_edit.html','new_member.js', 'member_router.js'], 'client');
    api.add_files('members.js', ['client', 'server']);
    api.export('Members', ['client', 'server']);
});
