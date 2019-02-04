var port = 3011;

var ioc = require( 'socket.io-client' );
var client = ioc.connect( "http://localhost:" + port );

client.once( "connect", function () {
    console.log( 'Client: Connected to port ' + port );

    client.emit( "echo", process.argv.slice(2)[0], function ( message ) {
        console.log( 'Echo received: ', message );
        client.disconnect();
        //server.close();
    } );
} );