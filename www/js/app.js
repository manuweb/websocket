// iOS

// Dom7
var $$ = Dom7;


var publicidad='no';
var contadorPubli=0;
// Init App

var versionApp='1.0';



var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'iNavega',
  // App id
  id: 'com.manuweb.testwebsocket',

  // Add default routes
  routes: [
  {
    path: '/',
    url: './index.html',
    name: 'home',
  },
  // About page
  

  ],dialog: {
    // set default title for all dialog shortcuts
    title: 'Test WebSocket',
    // change default "OK" button text
    buttonCancel: 'Cancelar',

  },
  
    on: {
        init: function () {
            console.log('App initialized');
            screen.orientation.lock('portrait');
            var devicePlatform = device.platform;
            var version = device.version;
           
           

            
        
            cordova.plugins.backgroundMode.enable();
            cordova.plugins.backgroundMode.overrideBackButton();
            cordova.plugins.backgroundMode.on('activate', function () {

                entraenSuspension();
            });

            cordova.plugins.backgroundMode.on('deactivate', function () {
                saledeSuspension();
            });
            
            

                   
      
            IniciaGPS();      
            
           
       
            
           
        },
    }
});










function ir_a_vista(vista) {
        app.panel.close();
        $$('.tab-link').removeClass( "tab-link-active" );
       
        var vis=vista.split('-');
        $$('#tab'+vis[1]).addClass( "tab-link-active" );
        app.tab.show(vista);
        

}



    



var servidor="https://www.elmaestroweb.es/apps/iNautica/";




app.on('tabShow', onTabShow);

function onTabShow() {
        var ancho=Math.round(screen.width*0.9)+'px';
    if($$('#tab-2').hasClass( "tab-active" )){
         app.navbar.hide('.navbar');

        var center = map.getCenter();
        google.maps.event.trigger(map, "resize"); //this fix the problem with not completely map
        map.setCenter(center);
        
        
    } 
    else {
        app.navbar.show('.navbar');
    }

     




}

var pos={lat:0, lng:0};
var pos2={lat:0, lng:0};






var watchID;
var map;







function initMap() {

   
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 18,
        center: pos,
        disableDefaultUI: true,
        styles: [{
              "featureType": "poi",
              "stylers": [
                { "visibility": "off" }
              ]}]
    });    
    
     infoWindow = new google.maps.InfoWindow;   

  


    IniciaGPS();



} 











function entraenSuspension(){
    console.log('App segundo plano');
    IniciaGPS();

}



function saledeSuspension(){
    console.log('App primer plano');
    IniciaGPS();


  
  
}



function IniciaGPS(){
    //app.dialog.alert(estadoGPS);

        app.preloader.show('blue');
        watchID = navigator.geolocation.watchPosition(onSuccessPos, onErrorPos, {  maximumAge: 5000, timeout: 5000, enableHighAccuracy: true  });

        
    
    
}

/*
Personal Acces Token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ5ZmU2NDJlNjQyZDYwZTQ1NzY0NzY4NzU5NGJmZDUxZjdlODhhYjdmMGUwN2QzMWFlOTIzOWQ4ZTM0NzE0NDg0ZDcwNDZjZDAzYjg2OTNlIn0.eyJhdWQiOiI2IiwianRpIjoiZDlmZTY0MmU2NDJkNjBlNDU3NjQ3Njg3NTk0YmZkNTFmN2U4OGFiN2YwZTA3ZDMxYWU5MjM5ZDhlMzQ3MTQ0ODRkNzA0NmNkMDNiODY5M2UiLCJpYXQiOjE1NzQ3NTk4OTMsIm5iZiI6MTU3NDc1OTg5MywiZXhwIjoxNjA2MzgyMjkzLCJzdWIiOiI3MyIsInNjb3BlcyI6W119.YVbkV8ynhBp3W5gr-5Vggu0GfjQeVeXLECjlLgIdnCVlwUaH21iTlVZE9myiauXDILHmJ9yHCeDteYWSJREOxcVVJ-_1v2WdRIQmLVItcfiF6qVoNixQlkvvA7rQXgZVcBFBO4lxHvPpxYaU6NiaT8M7VV1R7CXJ669OtYD22wcXbOHPvU1Az4B_frk7T25m3AdbTGkYvUMSEqM2T07TMx2ti0_-YvFoOHvmiGPJ3Da4turSylRe4wgXbOOruLHmiQduqjn33h995tlkJYmO2KPOlJv5DOCKVVNqOLQj8EK64JyeisrVd8Yd_TMAuvwYg09iddvqqgkBlATAfpbaXM9t_Ppjl5Qi_7HdPd1CrhWJVCbSJfxKoa4MuWnq3NAfrg4sRBycuedWwk-Q5diMUpI4kJupiCwAHSRXunSgsJfa6k8ZKsc1btKGdhos5K3V5Z5a5i5j2wy_UcIPZEATT22sdpIiHjfri82Kf-8C6KRCl-MOgKpB7l3znB-cqQIv1wxlNUdbBPgoSTmHqmTasGwfl-PhUt41aZGQc5ptwy9c-zJVNwPgAmyFU4cid-5JFbdU0uV4SDberv3dkGoayFTnS6wbZkR62EtsgJ2zEGuPwYorWBeoDsID0BOx2m4xEj9XnfEhwIkOS-sFnD0MuH1GYVcLev867leetvvkLIQ

*/


var yo;

var host = "wss://connect.websocket.in/v2/1?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ5ZmU2NDJlNjQyZDYwZTQ1NzY0NzY4NzU5NGJmZDUxZjdlODhhYjdmMGUwN2QzMWFlOTIzOWQ4ZTM0NzE0NDg0ZDcwNDZjZDAzYjg2OTNlIn0.eyJhdWQiOiI2IiwianRpIjoiZDlmZTY0MmU2NDJkNjBlNDU3NjQ3Njg3NTk0YmZkNTFmN2U4OGFiN2YwZTA3ZDMxYWU5MjM5ZDhlMzQ3MTQ0ODRkNzA0NmNkMDNiODY5M2UiLCJpYXQiOjE1NzQ3NTk4OTMsIm5iZiI6MTU3NDc1OTg5MywiZXhwIjoxNjA2MzgyMjkzLCJzdWIiOiI3MyIsInNjb3BlcyI6W119.YVbkV8ynhBp3W5gr-5Vggu0GfjQeVeXLECjlLgIdnCVlwUaH21iTlVZE9myiauXDILHmJ9yHCeDteYWSJREOxcVVJ-_1v2WdRIQmLVItcfiF6qVoNixQlkvvA7rQXgZVcBFBO4lxHvPpxYaU6NiaT8M7VV1R7CXJ669OtYD22wcXbOHPvU1Az4B_frk7T25m3AdbTGkYvUMSEqM2T07TMx2ti0_-YvFoOHvmiGPJ3Da4turSylRe4wgXbOOruLHmiQduqjn33h995tlkJYmO2KPOlJv5DOCKVVNqOLQj8EK64JyeisrVd8Yd_TMAuvwYg09iddvqqgkBlATAfpbaXM9t_Ppjl5Qi_7HdPd1CrhWJVCbSJfxKoa4MuWnq3NAfrg4sRBycuedWwk-Q5diMUpI4kJupiCwAHSRXunSgsJfa6k8ZKsc1btKGdhos5K3V5Z5a5i5j2wy_UcIPZEATT22sdpIiHjfri82Kf-8C6KRCl-MOgKpB7l3znB-cqQIv1wxlNUdbBPgoSTmHqmTasGwfl-PhUt41aZGQc5ptwy9c-zJVNwPgAmyFU4cid-5JFbdU0uV4SDberv3dkGoayFTnS6wbZkR62EtsgJ2zEGuPwYorWBeoDsID0BOx2m4xEj9XnfEhwIkOS-sFnD0MuH1GYVcLev867leetvvkLIQ";

var socket=new WebSocket(host);    

var hora=new Date();

function onSuccessPos(position) {
    var hora2=new Date();
    var h=hora2.getHours();
    if (h<=9)  {h='0'+h;}
    var m=hora2.getMinutes();
    if (m<=9)  {m='0'+m;}
    var s=hora2.getSeconds();
    if (s<=9)  {s='0'+s;}
    
    pos2.lat=position.coords.latitude;
    pos2.lng=position.coords.longitude;
    
    var myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
  
    map.setCenter(myLatlng);
    app.preloader.hide();
    try {yo.setMap(null);}catch(err) {}
   
    yo = new CustomMarker(
        myLatlng, 
        map,
        {
                marker_id: '123',
                leyend: "Yo"
        }
    );

    
    try {
    

                          
    //console.log("Servidor conectado "+this.readyState);
        socket.send(pos2.lat+'|'+pos2.lng+'#'+h+':'+m+':'+s); 
        console.log(pos2.lat+'|'+pos2.lng); 
    
    }
    catch(ex){ 
        console.log('error'); 
    }
    
    

}

    // onError Callback receives a PositionError object
    //
    function onErrorPos(error) {
         app.preloader.hide();
    }






