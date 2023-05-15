import { ref } from "vue";

let getPost = (id) => {
    let post = ref(null);
    let array = ref([])
    let error = ref("");
    let url = ref("http://127.0.0.1:8000/api/posts/");
    
    let load = async() => {
        try {
            let res = await fetch(url.value+id);
            if (res.status === 404) {
                throw new Error('404. Not Found Url');
            }
            let data = await res.json();
            post.value = data;
            array.value = post.value.category.split(',');
            } catch (err) {
                error.value = err.message;
            }
        }
    return {array,post, error, load};
}

export default getPost;