import { ref } from "vue";
import { db } from '../firebase/config'

let getPosts = () =>{
    let posts = ref([]);
    let error = ref("");
    // let url = ref("http://127.0.0.1:8000/api/posts");

    let load = async () => {
      try {
        let res = await db.collection('posts').get();
        posts.value = res.docs.map((doc)=>{
          return {id: doc.id, ...doc.data()};
        });

        // let res = await fetch(url.value);
        // if (res.status === 404) {
        //   throw new Error("404. Not Found Url!");
        // }
        // let datas = await res.json();
        // posts.value = datas;
      } catch (err) {
        error.value = err.message;
      }
    };

    return {posts, error, load};
}

export default getPosts;