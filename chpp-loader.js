let keywordMap = {
    'прозор': 'window',
    'отвори': 'open',
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
    'Бесконачно': 'Math.Infinity',
    'насумично': 'random',
    'функција': 'function',
    'класа': 'class',
    'наслеђује': 'extends',
    'конструктор': 'constructor',
    'родитељ': 'super',
    'врати': 'return',
    'испиши': 'alert',
    'константа': 'const',
    'дај да': 'let',
    'нека': 'let',
    'ово': 'this',
    'буде': '=',
    'буду': '=',
    'постаје': '=',
    'дохвати': 'fetch',
    'пробај': 'try',
    'баци': 'throw',
    'Грешку': 'Error',
    'гурни': 'push',
    'споји': 'join',
    'растави': 'split',
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
    'обрни': 'reverse',
    'окрени': 'reverse',
    'нови': 'new',
    'нова': 'new',
    'ново': 'new',
    'нову': 'new',
    'пута': '*',
    'за': 'for',
    'док': 'while',
    'док је': 'while',
    'ако је': 'if',
    'ако': 'if',
    'у супротном': 'else',
    'или': '||',
    'и': '&&',
    'ако је инстанца': 'instanceof',
    'ако је тип': 'typeof',
    'стани': 'break',
    'кочи': 'break',
    'случај': 'case',
    'настави': 'continue',
    'шта се покварило': 'debugger',
    'подразумевано': 'default',
    'обриши': 'delete',
    'ради': 'do',
    'коначно': 'finally',
    'напокон': 'finally',
    'пребаци': 'switch',
    'подај': 'var',
    'изнедефиниши': 'void',
    'извези': 'export',
    'увези': 'import',
    'у': 'in',
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

    return source
}
