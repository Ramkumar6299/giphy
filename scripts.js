var AdminTS = /** @class */ (function () {
    function AdminTS() {
        var _this = this;
        this.uploadarray = [];
        this.collectionarray = [];
        var btn = document.getElementById("coolbutton");
        btn.addEventListener("click", function (e) { return _this.getUpload(); });
        var btn1 = document.getElementById("coolbutton1");
        btn1.addEventListener("click", function (e) { return _this.getView(); });
        var btn2 = document.getElementById("coolbutton2");
        btn2.addEventListener("click", function (e) { return _this.getCollection(); });
        var btn3 = document.getElementById("search");
        btn3.addEventListener("click", function (e) { return _this.search(); });
    }
    AdminTS.prototype.Myupload = function (value, unit) {
        this.uploadarray.push([value, unit]);
        // console.log(this.uploadarray);
    };
    AdminTS.prototype.Mycollection = function (cname, theme) {
        this.collectionarray.push({ cname: cname, theme: theme });
        // console.log(this.collectionarray)
    };
    AdminTS.prototype.getView = function () {
        // var pic = window.localStorage.getItem('upload');
        //var img:URL = pic
        var DOM_img = document.createElement("img");
        // console.log(pic);
        DOM_img.src = window.localStorage.getItem('upload');
        // document.getElementById("pic").style.display = pic.replace('90x90','225x225');
        document.getElementById('image').appendChild(DOM_img);
        // console.log(pic);
    };
    AdminTS.prototype.getUpload = function () {
        // button click handler
        var value = document.getElementById("gname").value;
        var unit = document.getElementById("url").value;
        this.Myupload(value, unit);
        window.localStorage.setItem('upload', document.getElementById("url").value);
        document.getElementById('hello').innerText = value;
        alert("added successfully");
        console.log(this.uploadarray);
    };
    AdminTS.prototype.getCollection = function () {
        var cname = document.getElementById("cname").value;
        var theme = document.getElementById("tname").value;
        this.Mycollection(cname, theme);
        window.localStorage.setItem('collection', "theme");
        document.getElementById("hello1").innerHTML = theme;
        console.log(this.collectionarray);
    };
    AdminTS.prototype.search = function () {
        var search = document.getElementById("ser").value;
        console.log(search);
        console.log(this.collectionarray);
        for (var i = 0; i < this.collectionarray.length; i++) {
            if (search == this.collectionarray[i].theme) {
                alert("Theme available");
            }
        }
    };
    return AdminTS;
}());
new AdminTS();
