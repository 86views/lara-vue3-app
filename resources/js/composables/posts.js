import { ref, inject } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'


export default function  usePosts() {
    const posts = ref([])
    const post = ref([])

    const errors = ref('')
    const router = useRouter()
    const validationErrors = ref([])
    const isLoading = ref(false)
    const swal = inject('$swal')
    

    const getPosts = async(page =1) => {
           axios.get(`/api/posts?page=${page}`)
           .then((response) => {
              posts.value = response.data;
           });
       
    }


   const getPost = async(id) => {
           axios.get('/api/posts/' + id)
           .then((response) => {
              post.value = response.data.data;
           });
       
    }


    // const getPosts = async (page =1) => {
    //     let response = await axios.get(`/api/posts?page=${page}`)
    //     posts.value = response.data

    // }
    
    // const getPost = async (id) => { 
    //     let response = await axios.get(`/api/posts/${id}`)
    //     post.value = response.data.data
       
    // }




    // const storePost = async (post) => {
    //         await axios.post('/api/posts', post)
    //         await router.push({ name: 'posts.index' })
        
    // }

    
    
    const storePost = async(post) => {
           if(isLoading.value) return;

           isLoading.value = true
           validationErrors.value = {}

           axios.post('/api/posts', post)
           .then((response) => {
               router.push({ name: 'posts.index'})
               swal({
                'icon': 'success',
                'title': 'Post Update successfully'
              })
          
           })
           .catch((error) => {
                 if(error.response?.data) {
                    validationErrors.value = error.response.data.errors
                 }
           })
           .finally(() => isLoading.value = false)
       
    }

    
    const updatePost = async(post) => {
        if(isLoading.value) return;

        isLoading.value = true
        validationErrors.value = {}

        axios.put('/api/posts/' + post.id, post)
        .then((response) => {
            router.push({ name: 'posts.index'})
            swal({
              'icon': 'success',
              'title': 'Post Update successfully'
            })
       
        })
        .catch((error) => {
              if(error.response?.data) {
                 validationErrors.value = error.response.data.errors
              }
        })
        .finally(() => isLoading.value = false)
    
 }



 const deletePost = async(id) => {
    
    swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      })
     
    .then(result => {
         if(result.isConfirmed) {
    axios.delete('/api/posts/' + id)
       .then(response => {
        getPosts()
        router.push({ name: 'posts.index'})
        swal({
            icon: 'success',
            title: 'Posts deleted successfully'
           
        })
      
    })
    .catch((error) => {
        swal({
            'icon': 'error',
            'title': 'Something went wrong'
          }) 
    })
    }
})
}


    return {
        post,
        posts,
        getPost,
        getPosts,  
        storePost,
        updatePost,
        deletePost,
        validationErrors,
        isLoading
    } 
    
} 

    

