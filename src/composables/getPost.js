import { ref } from "vue";
import { db } from '../firebase/config';

let getPost = (id) => {
    let post = ref(null);
    let error = ref("");
    // let url = ref("http://127.0.0.1:8000/api/posts/");
    
    let load = async() => {
        try {
            let res = await db.collection('posts').doc(id).get();
            post.value = {id: id, ...res.data()};
            // let res = await fetch(url.value+id);
            // if (res.status === 404) {
            //     throw new Error('404. Not Found Url');
            // }
            // let data = await res.json();
            // post.value = data;
            } catch (err) {
                error.value = err.message;
            }
        };
    return {post, error, load};
}

export default getPost;