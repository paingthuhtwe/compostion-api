import { ref } from "vue";

let getPost = (id) => {
    let post = ref(null);
    let error = ref("");
    let url = ref("http://127.0.0.1:8000/api/projects/");
    
    let load = async() => {
        try {
            await new Promise((resolve, reject)=>{
                setTimeout(resolve, 500);
            });
            let res = await fetch(url.value+id);
            if (res.status === 404) {
                throw new Error('404. Not Found Url');
            }
            let data = await res.json();
            post.value = data;
            } catch (err) {
                error.value = err.message;
            }
        }
    return {post, error, load};
}

export default getPost;