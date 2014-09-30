Template.appointment_wizard.helpers({
	states : function () {
		var states=[{state:1},{state:0},{state:0}];
		if(!!Session.get("patient_id") && !!Session.get("clinic_id")) {
			states=[{state:1},{state:1},{state:1}];
		}
		else if (!!Session.get("clinic_id")) {
			states=[{state:1},{state:1},{state:0}];
		}
		else {
			states=[{state:1},{state:0},{state:0}];
			
		}
		return states;
	},
	Patient: function() {
    return Patient.findOne({"_id":Session.get("patient_id")});
	}
});
Template.appointment_wizard.events({
	'click .b1': function(e) {
    e.preventDefault();
    Session.set("patient_id","");
    Session.set("clinic_id","");

  },
	'click .b2': function(e) {
    e.preventDefault();
    Session.set("patient_id","");

  },
	'click .b3': function(e) {
    e.preventDefault();

  },
	'click .b4': function(e) {
    e.preventDefault();
	if(!!Session.get("patient_id") && !!Session.get("clinic_id")) {
		Session.set("patient_id","");
	}
	else if (!!Session.get("clinic_id")) {
		Session.set("clinic_id","");
	}
	else {
		
	}
  },
	'click .b5': function(e) {
    e.preventDefault();
	 Appointments.update({"clinic_id":Session.get("clinic_id"),"user_id":Session.get("patient_id"),"doctor_id":Session.get("docId")},{$set :{"status":"closed"}});
  }
});