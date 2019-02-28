function getNotification() {

    count++;
    document.getElementById('orderNotificationCount').innerText = count;
}
$(function () {
    let count = 0;

    //debugger;

    //let connection = new signalR.HubConnection("/orderHub");

    //connection.on('displayOrderNotification', () => {
    //    getNotification();
    //});

    //connection.start();

    let connection = new signalR.HubConnectionBuilder()
        .withUrl("/orderHub")
        .build();

    connection.on("send", data => {
        console.log(data);
    });

    connection.start()
        .then(() => connection.invoke("send", "Hello"));
});