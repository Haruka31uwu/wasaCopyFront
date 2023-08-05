import Echo from "laravel-echo"

window.Pusher = require('pusher-js');

const echo= new Echo({
    broadcaster: 'pusher',
    key: 'd893bc04c49a94987fe6',
    wsHost: window.location.hostname,
    cluster:"mt1",
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
});
echo.channel('text-messages').listen('.message',(data)=>{
    console.log(data.message);
});

export default echo;