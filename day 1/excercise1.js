//Sort and Reverse data from string array based on string length
var Countries = /** @class */ (function () {
    function Countries() {
        this.countryList = new Array();
        this.countryList.push("India");
        this.countryList.push("America");
        this.countryList.push("Russia");
        this.countryList.push("China");
        this.countryList.push("Australia");
        this.countryList.push("Brazil");
        this.countryList.push("Japan");
    }
    Countries.prototype.GetCountries = function () {
        return this.countryList;
    };
    Countries.prototype.Sort = function () {
        return this.countryList.sort(function (country1, country2) {
            return country1.length < country2.length ? -1 : 1;
        });
    };
    Countries.prototype.Filter = function (minExpectedLength) {
        return this.countryList.filter(function (country, index) {
            return country.length > minExpectedLength;
        });
    };
    return Countries;
}());
var countriesObj = new Countries();
console.log("Original array:");
countriesObj.GetCountries().forEach(function (value, index) {
    console.log(value);
});
console.log("\nArray after sorting on length (smallest first):");
var sortedArray = countriesObj.Sort();
sortedArray.forEach(function (value, index) {
    console.log(value);
});
console.log("\nArray after sorting on length (longest first):");
sortedArray.reverse().forEach(function (value, index) {
    console.log(value);
});
console.log("\nArray after filtering length > 5 :");
countriesObj.Filter(5).forEach(function (value, index) {
    console.log(value);
});
