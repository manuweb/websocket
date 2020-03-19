function CustomMarker(latlng, map, args) {
	this.latlng = latlng;	
	this.args = args;	
	this.setMap(map);	
}

CustomMarker.prototype = new google.maps.OverlayView();

CustomMarker.prototype.draw = function() {
	
	var self = this;
	
	var div = this.div;
	
	if (!div) {
	
        
		div = this.div = document.createElement('div');
                                
                //var data='data:image/jpeg;base64,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';
		//var newContent = document.createTextNode('<img src="'+data+'" width="32px" height="auto">');
 		//var newContent = document.createTextNode('<b>Hey</b>');
 
            //div.appendChild(newContent); //añade texto al div creado. 
		div.className = 'marker';
		div.style.background='url(img/yo.jpg) no-repeat';	
                div.style.backgroundSize='32px auto';
                div.style.borderRadius='32px';
                div.style.position = 'absolute';
                 
		div.style.cursor = 'pointer';
		div.style.width = '32px';
		div.style.height = '32px';
		//div.style.background = 'blue';
		
		if (typeof(self.args.marker_id) !== 'undefined') {
			div.dataset.marker_id = self.args.marker_id;
		}
		
		
		
		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
	}
	
	var point = this.getProjection().fromLatLngToDivPixel(this.latlng);
	
	if (point) {
		div.style.left = (point.x - 10) + 'px';
		div.style.top = (point.y - 20) + 'px';
	}
};

CustomMarker.prototype.remove = function() {
	if (this.div) {
		this.div.parentNode.removeChild(this.div);
		this.div = null;
	}	
};

CustomMarker.prototype.getPosition = function() {
	return this.latlng;	
};