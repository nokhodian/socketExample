var port = 2020;

var server = require( 'http' ).createServer( ).listen( port, function () {
    console.log( "Express server listening on port " + port );
} );

var io = require( 'socket.io' ).listen( server ).set( "log level", 0 );

io.sockets.on( "connection", function ( socket ) {
    socket.on( "echo", function ( msg, callback ) {
		console.log("I got: ",msg);
	});
});


