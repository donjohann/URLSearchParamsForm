/* Johan Wistbacka */
window.onload = function URLSearchParamsFields() {
	if(document.getElementsByClassName("URLSearchParamsField").length > 0){
		let formFields = document.getElementsByClassName("URLSearchParamsField");
		const queryString = window.location.search;
		let params = new URLSearchParams(queryString);
		for (let field of formFields) { 
			if(field.type == 'radio' || field.type == 'checkbox' ){
				let arr = params.getAll(field.name);
				for (let i = 0; i < arr.length; i++) {
					if(arr[i] == field.value){
						document.getElementById(field.id).checked = true;	
					}
				}
			}else{
				document.getElementById(field.id).value = params.get(field.id);	  
			}
		}
		for (var i = 0; i < formFields.length; i++) {
			formFields[i].onchange = function () {
				if(this.type=='checkbox'){
					var checkbox = document.getElementsByName(this.name);
					params.delete(this.name);
					for (var i=0;i<checkbox.length;i++){
						if ( checkbox[i].checked ) {
							params.append(this.name, checkbox[i].value);	
						}
					}
				}else if(this.value.length != 0){
					params.set(this.name, this.value);		
				}else{
					params.delete(this.name);
				}
				window.history.replaceState(null, null, "?" + params);
			}
		}
	}
}