const dogs = {
    Rex:{
        name: "Rex",
        avatar: "images/dog-rex.jpg",
        age: 25,
        bio: "Art. Literature. Natural wine. Yoga.",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    Bella:{
        name: "Bella",
        avatar: "images/dog-bella.jpg",
        age: 43,
        bio: "Yup, that's my owner. U can meet him if you want",
        hasBeenSwiped: false,
        hasBeenLiked: false
    },
    Teddy:{
        name: "Teddy",
        avatar: "images/dog-teddy.jpg",
        age: 30,
        bio: "How you doin?",
        hasBeenSwiped: false,
        hasBeenLiked: false
    }
}

const dogArray=['Rex','Bella','Teddy']
const postDislike = document.querySelector('.post-dislike')
const postlike = document.querySelector('.post-like')

class newpost{
    constructor(data){
        Object.assign(this,data)
    }
    getdoppost(){
        const {name, avatar, age, bio } = this
        document.querySelector('.dog-photo').innerHTML=`
            <img src="${avatar}" alt="dog-photo" class="dog-post-photo">
            <img src='./images/badge-nope.png' alt="decline status" id="status-badge-nope" class="status-badge-nope">
            <img src='./images/badge-like.png' alt="Accept status" class="status-badge-like">
            <div class="dog-info">
                <p class="post-user-info cursor">${name},${' '}${age} </p>
                <p class="post-caption">${bio}</p>
            </div>
        `
    }

    disliked(){
        this.hasBeenSwiped= true
        document.querySelector('.status-badge-nope').classList.toggle('display')
    }
    liked(){
        this.hasBeenLiked = true
        document.querySelector('.status-badge-like').classList.toggle('display')
    }
    rendernext(){
        setTimeout(rendernextdog,1000)
    }
}

function getnewdog(){
    const nextdog = dogs[dogArray.shift()]
    return nextdog ?  new newpost(nextdog) : stop()
    
}
let nextdog=getnewdog()

function render(){
    const dog =new newpost(nextdog)
    console.log(dog)
    dog.getdoppost()
}

function rendernextdog(){
    nextdog=getnewdog()
    if(nextdog){
        console.log(nextdog)
        render()
    }
    else{end()}
}

postlike.addEventListener('click',function(){
    nextdog.liked()
    nextdog.rendernext()})
postDislike.addEventListener('click',function(){
    nextdog.disliked()
    nextdog.rendernext()})

function end(){
    document.querySelector('.dog-photo').innerHTML=`
    <div class="end-section">
    <img src="./images/logo.png" class="logo cursor">
        <p class="app-name">Tin Dog</p>
        <p class="descrpt">An alternative for dogs</p>
        <p class="descrpt">Find your best dog</p>
    </div>
    `
    document.querySelector('.app-logo').style.display="none"
    document.querySelector('.dog-post-engagement').style.display="none"
}

render()
