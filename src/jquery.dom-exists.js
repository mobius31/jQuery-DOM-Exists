// jQuery DOM Exists
// Author: Jon Houston
// GitHub: https://github.com/mobius31/jQuery-DOM-Exists

jQuery.fn.DOMexists = function () {
	var _this = this;
	
	if ( _this.length ) {
		return true;
	} else {
		return false;
	}
	
};