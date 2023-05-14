import { ref } from "vue";
import { useRouter } from "vue-router";

let cratePost = (title, body, category) => {
   
        let url = ref("http://127.0.0.1:8000/api/posts");
        let error = ref('');
        let router = useRouter();

        let create = () => {

            console.log(title,body,category)
            try {
                let res = fetch(url.value, {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify({
                        title: title,
                        body: body,
                        category: category
                    })
                })
        
                if (res.status === 404) {
                    throw new Error("404. Not Found Url!");
                }

                router.push({name: 'home'});
            } catch (err) {
                error.value = err.message;
            }
        }
    return {error, create};
}

export default cratePost;