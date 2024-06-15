let container=document.getElementById("container");
let selectTag=document.getElementById("select");
selectTag.addEventListener("change",function(){
    fetch_data(selectTag.value);
})

async function fetch_data(order){
    let api_link="https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries"
    if(order!=undefined){
        api_link+="?sort=population&order="+order;
    }
    try {
        
        let res=await fetch(api_link)
        let data=await res.json()
        console.log(data)
        showData(data.data)
    } catch (error) {
        console.log(error)
    }
}
fetch_data();

function showData(data){
    container.innerHTML=""
    data.forEach(element => {
        let countrydiv=document.createElement("div");
        countrydiv.className="countryDiv";

        let country_name=document.createElement("h3");
        country_name.innerHTML=element.country;

        let rank=document.createElement("p");
        rank.innerHTML=element.Rank;

        let population=document.createElement("h4");
        population.innerHTML=element.population;

        countrydiv.append(country_name,rank,population);
        container.append(countrydiv);
    });
}