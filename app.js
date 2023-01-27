const thePosts = document.querySelector('#allPost');

const thePOst  = async (config) => {
   try{
      const res =  await axios(config)
      return res.data;
   }catch(err) {
      console.log(err);
   }
}


const postData = async () => {

      let posts = await thePOst('https://jsonplaceholder.typicode.com/posts')

      posts.map(post =>{
            let createsDiv = document.createElement('div')
            createsDiv.classList.add('post')
            createsDiv.innerHTML = `
            <h4>${post.title}</h4>
            <p>${post.body}</p>
            `
            thePosts.appendChild(createsDiv)
      })

}


postData()

// const allData = async (config) => {
     
//       try{
//             const res = await axios(config)
//             return res.data
//       } catch(err){
//             throw new Error('data could not available')
//       }


// }

// const showData = async () => {
//      const post = await allData('https://jsonplaceholder.typicode.com/posts');
//      post.map( (data) => {
//       const newPost = document.createElement('div')
//       const newPosts = document.createElement('div')
//       newPost.classList.add('post');
//       newPosts.classList.add('posts')
//       newPost.appendChild(newPosts)
//       newPost.innerHTML = `
//       <h4>${data.title}</h4>
//       <p>${data.body}</p>
//       `
//       thePost.appendChild(newPost)

//      })
// }

// showData()