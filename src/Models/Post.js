export class Post {
    id;
    image;
    createdAt;
    author;
    text;
    comments;
    likes;

    constructor(id) {
        this.id = id;
    }

    setImage(_img) {
        this.image = _img;
        
        return this;
    }

    setAuthor(_nameTag) {
        this.author = _nameTag;

        return this;
    }

    setText(_text) {
        this.text = _text;

        return this;
    }

    setComments(_total) {
        this.comments = _total;
        return this;
    }

    setLikes(_total) {
        this.likes = _total;
        return this;
    }

    setCreatedAt(_date) {
        this.createdAt = new Date(_date);
        return this;
    }

    getId() {
        return this.id;
    }

    getImage() {
        return this.image;
    }

    getAuthor() {
        return this.author;
    }

    getCreatedAt() {
        return this.createdAt;
    }

    getText() {
        return this.text;
    }

    getTotalComments() {
        return this.comments;
    }

    getTotalLikes() {
        return this.likes;
    }
}