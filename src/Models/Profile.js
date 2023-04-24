export class Profile {
    profileId;
    avatar;
    name;
    bio;

    constructor(id) {
        this.profileId = id;
    }

    setAvatar(_img) {
        this.avatar = _img;
        return this;
    }

    setName(_name) {
        this.name = _name;
        return this;
    }

    setBio(_description) {
        this.bio = _description;
        return this;
    }

    getId() {
        return this.id;
    }

    getAvatar() {
        return this.avatar;
    }

    getName() {
        return this.name;
    }

    getBio() {
        return this.bio;
    }
}