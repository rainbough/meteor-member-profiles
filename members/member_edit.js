Template.memberEdit.events({
	'submit form': function(e) {
		e.preventDefault();

		var	currentMemberId = this._id
		var	currentMemberRoute = this.routeName;
		var memberProperties = {
			routeName: $(e.target).find('[name=routeName]').val(),
			imageUrl: $(e.target).find('[name=image_url]').val(),
			email2: $(e.target).find('[name=email2]').val(),
			title: $(e.target).find('[name=title]').val(),
			prefix: $(e.target).find('[name=prefix]').val(),
			firstname: $(e.target).find('[name=firstname]').val(),
			lastname: $(e.target).find('[name=lastname]').val(),
			suffix: $(e.target).find('[name=suffix]').val(),
			institutions: getArray('institutions'),
			email: $(e.target).find('[name=email]').val(),
			labPhone: $(e.target).find('[name=phone]').val(),
			labName: $(e.target).find('[name=labName]').val(),
			labAddress1: $(e.target).find('[name=address1]').val(),
			labAddress2: $(e.target).find('[name=address2]').val(),
			city: $(e.target).find('[name=city]').val(),
			state: $(e.target).find('[name=state]').val(),
			zip: $(e.target).find('[name=zip]').val(),
			country: $(e.target).find('[name=country]').val(),
			riKeywords: $(e.target).find('[name=riKeywords]').val(),
			associations: getArray('associations'),
			labAssociates: getArray('associates')

		}

		Meteor.call('memberUpdate', memberProperties, currentMemberId, currentMemberRoute, function(error, routeName){
			if(error){
				throwError(error.reason);
			}
			else
				Router.go('memberPage', {routeName: currentMemberRoute});
			
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
	// These add input fields for additional associations, associatiates, institutions
	'click #add_institutions': function(e){
		e.preventDefault();
		$('.institution_group').append('<div class="inline"><input name="institutions" class="institutions" type="text" value="" placeholder="organization name" /></div>');
	},
	'click #add_associates': function(e){
		e.preventDefault();
		$('.associates_group').append('<div class="inline"><input class="associates" name="labAssociates" type="text" value="" placeholder="associate name" /></div>');

	},
	'click #add_associations': function(e){
		e.preventDefault();
		$('.associations_group').append('<div class="inline"><input class="associations" name="associations" type="text" value="" placeholder="association name" /></div>');
	}
});
var getArray = function(class_name){
	var input_array = [];
	$('.'+ class_name).each(function(){
		input_array.push($(this).val());
	});
	console.log(input_array);
	return input_array;


}
