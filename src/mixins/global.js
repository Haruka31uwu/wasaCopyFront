import Swal from 'sweetalert2';

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
            footer:'<a href="">Why do I have this issue?</a>'
            }) 
        },
        showPreloader(){
            document.body.classList.add('preloader-active'); // Aplicar clase para el overlay

        },
        removePreloader(){
            document.body.classList.remove('preloader-active'); // Remover clase para el overlay
        }

    },
}
export default globalMixin;