//Sort and Reverse data from string array based on string length

class Countries
{
    private countryList : Array<string>;
    constructor(){
        this.countryList = new Array<string>();
        this.countryList.push("India");
        this.countryList.push("America");
        this.countryList.push("Russia");
        this.countryList.push("China");
        this.countryList.push("Australia");
        this.countryList.push("Brazil");
        this.countryList.push("Japan");
    }

    GetCountries() :Array<string>{
        return this.countryList;
    }

    Sort() : Array<string>{
        return this.countryList.sort((country1:string, country2:string)=>{
            return country1.length < country2.length ? -1 : 1;
        });
    }    

    Filter(minExpectedLength:number) : Array<string>{
        return this.countryList.filter((country : string, index: number)=>{
            return country.length > minExpectedLength
        });
    }
}

let countriesObj = new Countries();
console.log("Original array:");
countriesObj.GetCountries().forEach(function(value : string, index:number){
    console.log(value);
});

console.log("\nArray after sorting on length (smallest first):")
var sortedArray = countriesObj.Sort();
sortedArray.forEach(function(value : string, index:number){
    console.log(value);
});

console.log("\nArray after sorting on length (longest first):")
sortedArray.reverse().forEach(function(value : string, index:number){
    console.log(value);
});

console.log("\nArray after filtering length > 5 :")
countriesObj.Filter(5).forEach(function(value : string, index:number){
    console.log(value);
});

