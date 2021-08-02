const list = document.querySelector("ul");
const body = document.querySelector("body");

const ids = [
    {
        id: "whatwedo",

    },
    {
        id: "whoweare",

    },
    {
        id: "job",

    },
    {
        id: "new",

    },
    {
        id: "contacts",

    },
    // {
    //     id: "faq",

    // }
]


// ids.forEach(({ id, text, background }) => {
//     const item = document.createElement('li');
//     const a = document.createElement('a');
//     const section = document.createElement('section');
//     a.setAttribute('data-id', id);
//     a.setAttribute('href', `#${id}`);
//     a.innerHTML = text;

//     section.setAttribute('id', id);
//     section.style.backgroundColor = background;

//     item.appendChild(a);
//     list.appendChild(item);

//     body.appendChild(section);
// });


let currentId;
currentId = ids[0].id;
window.addEventListener('scroll', () => {

    const { scrollY } = window;

    ids.forEach((idd) => {
        const element = document.getElementById(idd.id);
        if (element !== null) {

            const { offsetTop, offsetHeight } = element;
            if (
                offsetTop - (offsetHeight / 2) <= scrollY && (offsetTop + offsetHeight / 2) > scrollY) {

                const prevAnchor = document.querySelector(`a[data-id=${currentId}]`);
                prevAnchor.classList.remove('active');

                const anchor = document.querySelector(`a[data-id=${idd.id}]`);
                anchor.classList.add('active');
                currentId = idd.id;
            } else {
                console.log("daxil olmadi ")
            }
        }

    })
})

function Amsterdam (){
    var text = "Headquarters";
    var text2 = "Teleportboulevard 130, Scalehub, Unit number 1.08, 1043 EJ Amsterdam, Netherlands"
    var text3 = "amsterdam@simbrella.com"
    
    document.getElementsByClassName("Headquarters")[0].innerHTML = text
    document.getElementsByClassName("Teleportboulevard")[0].innerHTML = text2
    document.getElementsByClassName("com")[0].innerHTML = text3

    document.querySelector("#amsterdam").style.color =  "#FF931E";
    document.querySelector("#singapore").style.color = "#999999";
    document.querySelector("#baku").style.color =  "#999999";
}
function Singapore (){
    var text = "APAC Region Office";
    var text2 = "163 Tras Street, #07-02, Lian Huat Building, 079024, Singapore"
    var text3 = "singapore@simbrella.com"
    
    document.getElementsByClassName("Headquarters")[0].innerHTML = text
    document.getElementsByClassName("Teleportboulevard")[0].innerHTML = text2
    document.getElementsByClassName("com")[0].innerHTML = text3

    document.querySelector("#amsterdam").style.color = "#999999";
    document.querySelector("#singapore").style.color = "#FF931E";
    document.querySelector("#baku").style.color =  "#999999";
}
function Baku (){
    var text = "Main Operations Office";
    var text2 = "YAMANSANAAA MELLIMMMM"
    var text3 = "baku@simbrella.com"
    
    document.getElementsByClassName("Headquarters")[0].innerHTML = text
    document.getElementsByClassName("Teleportboulevard")[0].innerHTML = text2
    document.getElementsByClassName("com")[0].innerHTML = text3

    document.querySelector("#amsterdam").style.color = "#999999";
    document.querySelector("#singapore").style.color = "#999999";
    document.querySelector("#baku").style.color = "#FF931E";
}





