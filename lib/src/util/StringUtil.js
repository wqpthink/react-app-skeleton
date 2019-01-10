/**
 * string util handle
 */
export default {
    isEmpty: input => (input == null || input == ''),
    isNotEmpty: input => !(input == null || input == ''),
    isBlank: input => (input == null || /^\s*$/.test(input)),
    isNotBlank: input => !(input == null || /^\s*$/.test(input)),
    trim: input => input.replace(/^\s+|\s+$/, ''),
    trimToEmpty: input => input == null ? "" : input.replace(/^\s+|\s+$/, ''),
    startsWith: (input, prefix) => (input.indexOf(prefix) === 0),
    endsWith: (input, suffix) => (input.lastIndexOf(suffix) === 0),
    contains: (input, searchSeq) => (input.indexOf(searchSeq) >= 0),
    equals: (input1, input2) => input1 === input2,
    equalsIgnoreCase: (input1, input2) => input1.toLocaleLowerCase() === input2.toLocaleLowerCase(),
    containsWhitespace: (input) => (input.indexOf(' ') >= 0),
    //生成指定个数的字符
    repeat: function(ch, repeatTimes) {
        var result = "";
        for(var i = 0; i < repeatTimes; i++) {
            result += ch;
        }
        return result;
    },
    deleteWhitespace: (input) => input.replace(/\s+/g, ''),
    //首小写字母转大写
    capitalize: function(input) {
        var strLen = 0;
        if(input == null || (strLen = input.length) == 0) {
            return input;
        }
        return input.replace(/^[a-z]/, function(matchStr) {
            return matchStr.toLocaleUpperCase();
        });
    },
    //首大写字母转小写
    uncapitalize: function(input) {
        var strLen = 0;
        if(input == null || (strLen = input.length) == 0) {
            return input;
        }
        return input.replace(/^[A-Z]/, function(matchStr) {
            return matchStr.toLocaleLowerCase();
        });
    },
    //大写转小写，小写转大写
    swapCase: function(input) {
        return input.replace(/[a-z]/ig, function(matchStr) {
            if(matchStr >= 'A' && matchStr <= 'Z') {
                return matchStr.toLocaleLowerCase();
            } else if(matchStr >= 'a' && matchStr <= 'z') {
                return matchStr.toLocaleUpperCase();
            }
        });
    },
    //只包含字母
    isAlpha: function(input) {
        return /^[a-z]+$/i.test(input);
    },
    //只包含字母、空格
    isAlphaSpace: function(input) {
        return /^[a-z\s]*$/i.test(input);
    },
    //只包含字母、数字
    isAlphanumeric: function(input) {
        return /^[a-z0-9]+$/i.test(input);
    },
    //只包含字母、数字和空格
    isAlphanumericSpace: function(input) {
        return /^[a-z0-9\s]*$/i.test(input);
    },
    //数字
    isNumeric: function(input) {
        return /^(?:[1-9]\d*|0)(?:\.\d+)?$/.test(input);
    },
    //小数
    isDecimal: function(input) {
        return /^[-+]?(?:0|[1-9]\d*)\.\d+$/.test(input);
    },
    //负小数
    isNegativeDecimal: function(input) {
        return /^\-?(?:0|[1-9]\d*)\.\d+$/.test(input);
    },
    //正小数
    isPositiveDecimal: function(input) {
        return /^\+?(?:0|[1-9]\d*)\.\d+$/.test(input);
    },
    //整数
    isInteger: function(input) {
        return /^[-+]?(?:0|[1-9]\d*)$/.test(input);
    },
    //正整数
    isPositiveInteger: function(input) {
        return /^\+?(?:0|[1-9]\d*)$/.test(input);
    },
    //负整数
    isNegativeInteger: function(input) {
        return /^\-?(?:0|[1-9]\d*)$/.test(input);
    },
    //只包含数字和空格
    isNumericSpace: function(input) {
        return /^[\d\s]*$/.test(input);
    },
    isWhitespace: function(input) {
        return /^\s*$/.test(input);
    },
    isAllLowerCase: function(input) {
        return /^[a-z]+$/.test(input);
    },
    isAllUpperCase: function(input) {
        return /^[A-Z]+$/.test(input);
    },
    defaultString: function(input, defaultStr) {
        return input == null ? defaultStr : input;
    },
    //删掉特殊字符(英文状态下)
    removeSpecialCharacter: function(input) {
        return input.replace(/[!-/:-@\[-`{-~]/g, "");
    },
    //只包含特殊字符、数字和字母（不包括空格，若想包括空格，改为[ -~]）
    isSpecialCharacterAlphanumeric: function(input) {
        return /^[!-~]+$/.test(input);
    },
    /**
     * @param {String} message
     * @param {Array} arr
     * 消息格式化
     */
    format: function(message, arr) {
        return message.replace(/{(\d+)}/g, function(matchStr, group1) {
            return arr[group1];
        });
    },
    //中文校验
    isChinese: function(input) {
        return /^[\u4E00-\u9FA5]+$/.test(input);
    },
    //去掉中文字符
    removeChinese: function(input) {
        return input.replace(/[\u4E00-\u9FA5]+/gm, "");
    },
    //转义元字符
    escapeMetacharacter: function(input) {
        var metacharacter = "^$()*+.[]|\\-?{}|";
        if(metacharacter.indexOf(input) >= 0) {
            input = "\\" + input;
        }
        return input;
    },
    //转义字符串中的元字符
    escapeMetacharacterOfStr: function(input) {
        return input.replace(/[\^\$\*\+\.\|\\\-\?\{\}\|]/gm, "\\$&");
    }
};
