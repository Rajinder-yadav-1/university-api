




const url = "http://universities.hipolabs.com/search?name=";

let btn  = document.querySelector("button");

btn.addEventListener("click", async ( ) =>{
    let country = document.querySelector("input").value
    console.log(country);

    let collages =  await getCollages(country);

Show(collages);
})

async function getCollages(country){

    try{
        let res = await axios.get(url + country);
        return res.data; 
    }catch(e){
        console.log("error" ,e);
        return [];
    }


  }
async function Show(collages) {
  let list = document.querySelector("#list");
  list.innerText = "";

  for (col of collages) {
      console.log(col.name);

      let li = document.createElement("li");
      list.appendChild(li);

      let universityName = col.name;

      let words = universityName.split(' ');
      for (let i = 0; i < words.length; i++) {
          // Use a delay to simulate typing effect
          await new Promise((resolve) => setTimeout(resolve, 10));
          // Append the current word to the list item with non-breaking space
          li.innerHTML += words[i] + '&nbsp;';
      }

      let br = document.createElement("br");
      list.appendChild(br);
  }
}