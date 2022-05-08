var Result = function(){
    this.results = ["Сайт-визитка","Корпоративный сайт","Портал","Сайт-сервис","Сайт-каталог","Интернет-магазин","Лендинг","Социальные сети"];
};
Result.prototype.checklist = function(){
    let name = this.results[Math.floor(Math.random()*this.results.length)];

    console.log("I will choose to know:", name);
    return name;
}

let recom = new Result();
module.exports = recom