import {Post} from "./Post.js";
import './styles/styles.css';
import json  from './assets/json.json'
import Logo  from './assets/webpack-logo.png'

const post = new Post({name: 'Nastya', title: 'About Me', logo: Logo})
console.log(post.getPost())
console.log(json)