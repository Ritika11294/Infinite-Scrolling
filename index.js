let container = document.querySelector(".container");


const Data = () => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            const array = Array(25).fill(1);
            resolve(array);
        }, 200)
    })
}

const getData = async() => {
    const data = await Data()
    appendData(data)
}

getData();


let count = 1, string = "Masai School";
const appendData = (array) => {
    array.forEach(() => {
        let div = `<p> ${string}  ${count++}</p>`
        container.insertAdjacentHTML("beforeend", div);
    })
}

    window.addEventListener("scroll" , ()=>{
        const { clientHeight, scrollHeight, scrollTop } =
          document.documentElement;
    
    
        if (clientHeight + scrollTop >= scrollHeight ) getData();
    })
    