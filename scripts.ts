class AdminTS {
    uploadarray = [];
    collectionarray=[]
    constructor() {
      let btn = document.getElementById("coolbutton");
      btn.addEventListener("click", (e:Event) => this.getUpload());
      let btn1 = document.getElementById("coolbutton1");
      btn1.addEventListener("click", (e:Event) => this.getView());
      let btn2 = document.getElementById("coolbutton2");
      btn2.addEventListener("click", (e:Event) => this.getCollection());
      let btn3 = document.getElementById("search");
      btn3.addEventListener("click", (e:Event) => this.search());
    }
    Myupload(value,unit)
    {
        this.uploadarray.push([value,unit]);
       // console.log(this.uploadarray);
    }
    Mycollection(cname,theme)
    {
        this.collectionarray.push({cname,theme});
       // console.log(this.collectionarray)
    }
   
    getView()
    {
       // var pic = window.localStorage.getItem('upload');
        //var img:URL = pic
        var DOM_img = document.createElement("img");
       // console.log(pic);

        DOM_img.src = window.localStorage.getItem('upload');
       // document.getElementById("pic").style.display = pic.replace('90x90','225x225');
       document.getElementById('image').appendChild(DOM_img); 
       // console.log(pic);

    }
    getUpload(){
       // button click handler
       let value = (document.getElementById("gname") as HTMLInputElement).value;
       let unit = (document.getElementById("url") as HTMLInputElement).value; 

       this.Myupload(value, unit);
       window.localStorage.setItem('upload',(document.getElementById("url") as HTMLInputElement).value)
       document.getElementById('hello').innerText = value;
       alert("added successfully");
       console.log(this.uploadarray);
    }
    getCollection(){
        let cname = (document.getElementById("cname") as HTMLInputElement).value;
        let theme = (document.getElementById("tname") as HTMLInputElement).value; 
 
        this.Mycollection(cname,theme);
        window.localStorage.setItem('collection',"theme")
        document.getElementById("hello1").innerHTML=theme
        console.log(this.collectionarray);
     }
     search()
     {
        let search = (document.getElementById("ser") as HTMLInputElement).value;
        console.log(search)
        console.log(this.collectionarray)
        for(let i=0;i<this.collectionarray.length;i++)
        {
            if(search==this.collectionarray[i].theme)
            {
                alert("Theme available");
            }
           
        }
        
     }
    
  }

  new AdminTS();

