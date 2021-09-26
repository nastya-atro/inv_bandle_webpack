export class Post{
    post = ''
    constructor(props) {
        this.name = props.name;
        this.title = props.title;
        this.logo = props.logo;
    }
    getPost(){
       return this.post = JSON.stringify({name: this.name, title: this.title, logo: this.logo})
    }
}