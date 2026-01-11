// export const categories = [
//   {
//     id: 1,
//     name: "Men Clothes",
//     items: 24,
//     image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb"
//   },
  // {
  //   id: 2,
  //   name: "Women Clothes",
  //   items: 12,
  //   image: "https://plus.unsplash.com/premium_photo-1689371958569-9591167a8db8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // },
  // {
  //   id: 3,
  //   name: "Accessories",
  //   items: 43,
  //   image: "https://images.unsplash.com/3/www.madebyvadim.com.jpg?q=80&w=882&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // },
  // {
  //   id: 4,
  //   name: "Cotton Clothes",
  //   items: 31,
  //   image: "https://plus.unsplash.com/premium_photo-1673125287363-b4e837f1215f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // },
  // {
  //   id: 5,
  //   name: "Summer Clothes",
  //   items: 26,
  //   image: "https://plus.unsplash.com/premium_photo-1658526995638-39b190351b06?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // },
  // {
  //   id: 6,
  //   name: "Wedding Clothes",
  //   items: 52,
  //   image: "https://images.unsplash.com/photo-1519741497674-611481863552"
  // },
  // {
  //   id: 7,
  //   name: "Spring Clothes",
  //   items: 31,
  //   image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // },
  // {
  //   id: 8,
  //   name: "Causal Wears",
  //   items: 26,
  //   image: "https://images.unsplash.com/photo-1600574691453-499962cc0611?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // },
  // {
  //   id: 9,
  //   name: "Hats",
  //   items: 52,
  //   image: "https://images.unsplash.com/photo-1533055640609-24b498dfd74c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  // }
// ];

import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;