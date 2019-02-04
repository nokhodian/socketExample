var port = 3011;

var server = require( 'http' ).createServer( ).listen( port, function () {
    console.log( "Express server listening on port " + port );
} );

var ioc = require( 'socket.io-client' );
var io = require( 'socket.io' ).listen( server ).set( "log level", 0 );
var client = ioc.connect( "http://localhost:2020" );

io.sockets.on( "connection", function ( socket ) {
    socket.on( "echo", function ( msg, callback ) {
		console.log( 'Server got this message :',msg );
        callback( msg );
		client.emit( "echo", reverseString(msg), function ( message ) {});
		
});
});


function reverseString(str){
	if(str){
		let stringRev ="";
		for(let i= 0; i<str.length; i++){
			stringRev = str[i]+stringRev;
		}
		return stringRev;
	}
}
