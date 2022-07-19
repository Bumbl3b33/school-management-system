/**
 * Converts camelcase word to separated Uppercase words (camelCase => Camel Case) 
 * @param {*} camelCaseTitle 
 * returns string of capitalized words
 */
const TableHeader = (camelCaseTitle) => {

    return (
        String(camelCaseTitle)
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, function (str) { return str.toUpperCase(); }
        ))
}

export default TableHeader;