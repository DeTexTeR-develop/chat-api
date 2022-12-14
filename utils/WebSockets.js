class WebSockets{
	users = [];
	connection(client){
		client.on("disconnet", ()=> {
			this.users = this.users.filter((user) => user.socketId !== client.id);		
		});
		
		client.on("connect", () => {
			this.users.push(
				{
					socketId: client.id,
					userId: userId
				}
			);
		});
		client.on("subscribe", (room , otherUserId = "") => {
			this.subscribeOtherUser(room, otherUserId);
			client.join(room);
		});

		client.on("unsubscribe", (room) => {
			client.leave(room);
		});
	};

	subscribeOtherUser(room, otherUserId){
		const userSockets = this.users.filter(
			(user) => user.userId === otherUserId
		);
		userSockets.map((userInfo) => {
			const socketConn = global.io.sockets.connected(userInfo.socketId);
			if(socketConn){
				socketConn.join(room);
			}
		});
	}
};


module.exports = WebSockets;
