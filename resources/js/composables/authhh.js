import axios from 'axios'
import  {ref, reactive} from 'vue';
import { useRouter } from 'vue-router'


export default function  useAuth() {
   
    const processing = ref(false)
    const validationErrors = ref({})
    const router = useRouter()
    const loginForm  = reactive({
        email: '',
        password: ''
      
    })

  

    const submitLogin = async() => {
         if(processing.value) return;

         processing.value = true
         validationErrors.value = {}

            axios.post('/login', loginForm)
               .then(async response => {
                   loginUser(response) 
               })
        .catch(error => {
            if(error.response?.data) {
                validationErrors.value = error.response.data.errors
            }
        })
       .finally( () => processing.value = false)

}
   
// async login(){
//     this.processing = true
    
//     await axios.post('/login',login).then(({data})=>{
//         loginUser(response) 
//     }).catch(({response})=>{
//         if(response.status===422){
//             this.validationErrors = response.data.errors
//         }else{
//             this.validationErrors = {}
//             alert(response.data.message)
//         }
//     }).finally(()=>{
//         this.processing = false
//     })
// },


     const loginUser = (response) => {
         localStorage.setItem('loggedIn', JSON.stringify(true))
         router.push({ name: 'posts.index'})
     } 
 

    return {
        loginForm,
        validationErrors,
        processing,
        submitLogin
     
       } 

       

    }     
    


    

