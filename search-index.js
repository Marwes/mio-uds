var searchIndex = {};
searchIndex["mio_uds"] = {"doc":"MIO bindings for Unix Domain Sockets","items":[[3,"UnixStream","mio_uds","A Unix stream socket.",null,null],[3,"UnixListener","","A structure representing a Unix domain socket server.",null,null],[3,"UnixDatagram","","A Unix datagram socket.",null,null],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"bind","","Creates a Unix datagram socket bound to the given path.",0,{"inputs":[{"name":"p"}],"output":{"generics":["unixdatagram"],"name":"result"}}],[11,"from_datagram","","Consumes a standard library `UnixDatagram` and returns a wrapped `UnixDatagram` compatible with mio.",0,{"inputs":[{"name":"unixdatagram"}],"output":{"generics":["unixdatagram"],"name":"result"}}],[11,"pair","","Create an unnamed pair of connected sockets.",0,{"inputs":[],"output":{"name":"result"}}],[11,"unbound","","Creates a Unix Datagram socket which is not bound to any address.",0,{"inputs":[],"output":{"generics":["unixdatagram"],"name":"result"}}],[11,"connect","","Connects the socket to the specified address.",0,{"inputs":[{"name":"self"},{"name":"p"}],"output":{"name":"result"}}],[11,"try_clone","","Creates a new independently owned handle to the underlying socket.",0,{"inputs":[{"name":"self"}],"output":{"generics":["unixdatagram"],"name":"result"}}],[11,"local_addr","","Returns the address of this socket.",0,{"inputs":[{"name":"self"}],"output":{"generics":["socketaddr"],"name":"result"}}],[11,"peer_addr","","Returns the address of this socket's peer.",0,{"inputs":[{"name":"self"}],"output":{"generics":["socketaddr"],"name":"result"}}],[11,"recv_from","","Receives data from the socket.",0,null],[11,"recv","","Receives data from the socket.",0,null],[11,"send_to","","Sends data on the socket to the specified address.",0,null],[11,"send","","Sends data on the socket to the socket's peer.",0,null],[11,"take_error","","Returns the value of the `SO_ERROR` option.",0,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[11,"shutdown","","Shut down the read, write, or both halves of this connection.",0,{"inputs":[{"name":"self"},{"name":"shutdown"}],"output":{"name":"result"}}],[11,"register","","",0,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"reregister","","",0,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"deregister","","",0,{"inputs":[{"name":"self"},{"name":"poll"}],"output":{"name":"result"}}],[11,"as_raw_fd","","",0,{"inputs":[{"name":"self"}],"output":{"name":"i32"}}],[11,"into_raw_fd","","",0,{"inputs":[{"name":"self"}],"output":{"name":"i32"}}],[11,"from_raw_fd","","",0,{"inputs":[{"name":"i32"}],"output":{"name":"unixdatagram"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"bind","","Creates a new `UnixListener` bound to the specified socket.",1,{"inputs":[{"name":"p"}],"output":{"generics":["unixlistener"],"name":"result"}}],[11,"from_listener","","Consumes a standard library `UnixListener` and returns a wrapped `UnixListener` compatible with mio.",1,{"inputs":[{"name":"unixlistener"}],"output":{"generics":["unixlistener"],"name":"result"}}],[11,"accept","","Accepts a new incoming connection to this listener.",1,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[11,"try_clone","","Creates a new independently owned handle to the underlying socket.",1,{"inputs":[{"name":"self"}],"output":{"generics":["unixlistener"],"name":"result"}}],[11,"local_addr","","Returns the local socket address of this listener.",1,{"inputs":[{"name":"self"}],"output":{"generics":["socketaddr"],"name":"result"}}],[11,"take_error","","Returns the value of the `SO_ERROR` option.",1,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[11,"register","","",1,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"reregister","","",1,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"deregister","","",1,{"inputs":[{"name":"self"},{"name":"poll"}],"output":{"name":"result"}}],[11,"as_raw_fd","","",1,{"inputs":[{"name":"self"}],"output":{"name":"i32"}}],[11,"into_raw_fd","","",1,{"inputs":[{"name":"self"}],"output":{"name":"i32"}}],[11,"from_raw_fd","","",1,{"inputs":[{"name":"i32"}],"output":{"name":"unixlistener"}}],[11,"fmt","","",2,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"connect","","Connects to the socket named by `path`.",2,{"inputs":[{"name":"p"}],"output":{"generics":["unixstream"],"name":"result"}}],[11,"from_stream","","Consumes a standard library `UnixStream` and returns a wrapped `UnixStream` compatible with mio.",2,{"inputs":[{"name":"unixstream"}],"output":{"generics":["unixstream"],"name":"result"}}],[11,"pair","","Creates an unnamed pair of connected sockets.",2,{"inputs":[],"output":{"name":"result"}}],[11,"try_clone","","Creates a new independently owned handle to the underlying socket.",2,{"inputs":[{"name":"self"}],"output":{"generics":["unixstream"],"name":"result"}}],[11,"local_addr","","Returns the socket address of the local half of this connection.",2,{"inputs":[{"name":"self"}],"output":{"generics":["socketaddr"],"name":"result"}}],[11,"peer_addr","","Returns the socket address of the remote half of this connection.",2,{"inputs":[{"name":"self"}],"output":{"generics":["socketaddr"],"name":"result"}}],[11,"take_error","","Returns the value of the `SO_ERROR` option.",2,{"inputs":[{"name":"self"}],"output":{"generics":["option"],"name":"result"}}],[11,"shutdown","","Shuts down the read, write, or both halves of this connection.",2,{"inputs":[{"name":"self"},{"name":"shutdown"}],"output":{"name":"result"}}],[11,"read_bufs","","Read in a list of buffers all at once.",2,null],[11,"write_bufs","","Write a list of buffers all at once.",2,null],[11,"register","","",2,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"reregister","","",2,{"inputs":[{"name":"self"},{"name":"poll"},{"name":"token"},{"name":"ready"},{"name":"pollopt"}],"output":{"name":"result"}}],[11,"deregister","","",2,{"inputs":[{"name":"self"},{"name":"poll"}],"output":{"name":"result"}}],[11,"read","","",2,null],[11,"write","","",2,null],[11,"flush","","",2,{"inputs":[{"name":"self"}],"output":{"name":"result"}}],[11,"as_raw_fd","","",2,{"inputs":[{"name":"self"}],"output":{"name":"i32"}}],[11,"into_raw_fd","","",2,{"inputs":[{"name":"self"}],"output":{"name":"i32"}}],[11,"from_raw_fd","","",2,{"inputs":[{"name":"i32"}],"output":{"name":"unixstream"}}]],"paths":[[3,"UnixDatagram"],[3,"UnixListener"],[3,"UnixStream"]]};
initSearch(searchIndex);