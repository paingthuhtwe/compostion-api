import { ref } from "vue";

let getPosts = () =>{
    let posts = ref([]);
    let error = ref("");
    let url = ref("http://127.0.0.1:8000/api/projects");

    let load = async () => {
      try {
        let res = await fetch(url.value);

        if (res.status === 404) {
          throw new Error("404. Not Found Url!");
        }

        let datas = await res.json();
        posts.value = datas;
      } catch (err) {
        error.value = err.message;
      }
    };

    return {posts, error, load};
}

export default getPosts;