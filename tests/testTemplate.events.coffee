'click .event': ->
	Meteor.__COFFEESCRIPT_EVENT_WRAPPER_PRESENT = true
	if 'a' in 'abc'	# This gets the compiler to add the
					# definition for __indexOf at the
					# beginning of the file.
		return 891
