import Echo from "laravel-echo"
import store from "../store/index"
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
    console.log(data.messageData,'socket');
    const user=JSON.parse(store.getters.G_USER)
    if(user.id==data.messageData.for){
        store.dispatch('A_SET_NEW_MESSAGE',data.messageData);

    }
});

export default echo;