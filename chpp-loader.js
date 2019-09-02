let keywordMap = {
    'Обећање': 'Promise',
    'асинхрона': 'async',
    'одложи': 'setTimeout',
    'сачекај': 'await',
    'онда': 'then',
    'ухвати': 'catch',
    'пробај': 'try',
    'празно': 'null',
    'заСваки': 'forEach',
    'недефинисано': 'undefined',
    'Математика': 'Math',
    'насумично': 'random',
    'функција': 'function',
    'класа': 'class',
    'наслеђује': 'extends',
    'конструктор': 'constructor',
    'врати': 'return',
    'испиши': 'alert',
    'константа': 'const',
    'дај да': 'let',
    'ово': 'this',
    'буде': '=',
    'дохвати': 'fetch',
    'пробај': 'try',
    'баци': 'throw',
    'Грешку': 'Error',
    'гурни': 'push',
    'споји': 'join',
    'добија вредност': '=',
    'повећај за': '+=',
    'увећај за': '+=',
    'умањи за': '-=',
    'нетачно': 'false',
    'тачно': 'true',
    'није једнако': '!=',
    'није': '!',
    'мањи од': '<',
    'мање од': '<',
    'већи од': '>',
    'веће од': '>',
    'постаје': '=',
    'једнако': '=',
    'Низ': 'Array',
    'процеди': 'filter',
    'дужина': 'length',
    'нови': 'new',
    'нова': 'new',
    'ново': 'new',
    'нову': 'new',
    'пута': '*',
    'за': 'for',
    'док': 'while',
    'ако': 'if',
    'у супрoтном': 'else',
    'или': '||',
    'и': '&&',
}

function transpile(code) {
    code = ` ${code} `

    let newCode = Object.keys(keywordMap).reduce((prev, keyword) => {
        return prev
            .replace(
                new RegExp(`(\\s|\\(|\\.|\\'|\\"|\\{}|\\=)${keyword}(\\s|\\(|\\.|\\'|\\"|\\{}|\\=|\\)|\\;)`, 'g'),
                `$1${keywordMap[keyword]}$2`
            )
    }, code)

    return newCode
}

module.exports = function loader(source) {
    console.log(source)

    source = transpile(source)

    console.log(source)
    console.log('\n\n\n\n')

    return `export default ${JSON.stringify(source)}`
}