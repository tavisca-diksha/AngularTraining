/*Define a string variable with data of 100 characheters in it
and perform the following operation on the data -
Find out the indices and occurances of character 'a' in it
Find out number of statements in the string. (value after . symbol)
Convert the first character of the statement in Upper case*/
var WebSeriesReport = /** @class */ (function () {
    function WebSeriesReport(msg) {
        this.takeAwayMessage = msg;
    }
    WebSeriesReport.prototype.GetCharacterInfo = function (charToFind) {
        var charInfo = new Array();
        for (var index = 0; index < this.takeAwayMessage.length; index++) {
            if (this.takeAwayMessage[index] == charToFind[0]) {
                charInfo.push(index);
            }
        }
        return charInfo;
    };
    WebSeriesReport.prototype.GetStatements = function () {
        return this.takeAwayMessage.split(".");
    };
    return WebSeriesReport;
}());
console.log("MONEY HEIST WEB SERIES\n");
var msg = "money Heist is a Spanish heist crime drama television series created by Álex Pina. the series traces two long-prepared heists led by the Professor (Álvaro Morte), one on the Royal Mint of Spain, and one on the Bank of Spain. The series was initially intended as a limited series to be told in two parts. it had its original run of 15 episodes on Spanish network Antena 3 from 2 May 2017 through 23 November 2017. a documentary involving the producers and the cast premiered on Netflix the same day, titled Money Heist: The Phenomenon.";
console.log(msg);
var webSeriesReport = new WebSeriesReport(msg);
var indices = webSeriesReport.GetCharacterInfo("a");
console.log('\nNumber of a : ' + indices.length + ' at below indices:');
console.log(indices.join());
var statements = webSeriesReport.GetStatements();
console.log('\nNumber of statements : ' + (statements.length - 1));
console.log("\nAfter formatting text (making 1st letter capital of every statement):");
statements.forEach(function (statement, index) {
    statement = statement.trim();
    if (statement.length > 0)
        console.log(index + ': ' + statement.charAt(0).toUpperCase() + statement.slice(1));
});
