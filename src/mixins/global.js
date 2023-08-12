import Swal from 'sweetalert2';
import axios from 'axios';
const globalMixin={
    methods: {
        showSuccessSwal(title,message){
            Swal.fire(title?title:'Success', message?message:'Completed Succesfully', 'success');
        },
        showWarningSwal(title,message){
            Swal.fire(title?title:'Warning',message?message:'Warning message','warning')
        },
        showInfoSwal(title,message){
            Swal.fire(title?title:'All it is fine',message?message:'Are you still here?','question')
        },
        showErrorSwal(title,message){
            Swal.fire({
            icon:'error',
            title:title?title:'Oops....',
            text:message?message:'Something went wrong',
            }) 
        },
        addPreloader(){
            
            const loader=document.getElementById('loader');
            if(loader){
                loader.classList.add('preloader-active');
            }
        },
        removePreloader(){
            const loader=document.getElementById('loader');
            if(loader){
                loader.classList.remove('preloader-active');
            }
            
        },
        async sendRequest(url,method,data){
            try {
                return axios({
                    method:method,
                    url:'http://127.0.0.1:8000/api/'+url,
                    data:data
                });
            }catch (error) {
                console.log(error);
            }
        }
    },
}
export default globalMixin;