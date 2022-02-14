const base_url = process.env.NEXTJS_BACKEND

module.exports = {
  images:{
    loader: "imgix",
    path: `${base_url}/`
  },
  
};