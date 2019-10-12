module.exports = {
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "babel-eslint",
        ecmaVersion: 2019,
        sourceType: "module",
        ecmaFeatures: {
            globalReturn: false,
            impliedStrict: true,
            jsx: true
        },
        requireConfigFile: false,
        allowImportExportEverywhere: false
    },
    plugins: ["vue"],
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    root: true,
    rules: {
        /**
         * 在 for 循环中计数器必须向正确的方向移动
         * @see https://eslint.org/docs/rules/for-direction
         */
        "for-direction": "error",

        /**
         * 在 Getter 函数中必须包含返回值
         * @see https://eslint.org/docs/rules/getter-return
         */
        "getter-return": "error",

        /**
         * 不能将 Async 函数当作 Promise 的执行函数
         * @see https://eslint.org/docs/rules/no-async-promise-executor
         */
        "no-async-promise-executor": "error",

        /**
         * 禁止在循环中使用 Await 操作
         * @see https://eslint.org/docs/rules/no-await-in-loop
         */
        "no-await-in-loop": "error",

        /**
         * 禁止和 -0 做比较
         * @see https://eslint.org/docs/rules/no-compare-neg-zero
         */
        "no-compare-neg-zero": "error",

        /**
         * 在 if, for 等判断条件中禁止赋值
         * @see http://eslint.org/docs/rules/no-cond-assign
         */
        "no-cond-assign": ["error", "except-parens"],

        /**
         * 禁止调用 console
         * @see http://eslint.org/docs/rules/no-console
         */
        "no-console": "warn",

        /**
         * 禁止在条件中使用常量表达式
         * @see http://eslint.org/docs/rules/no-constant-condition
         */
        "no-constant-condition": "error",

        /**
         * 禁止在正则表达式中使用控制字符
         * @see http://eslint.org/docs/rules/no-control-regex
         */
        "no-control-regex": "error",

        /**
         * 禁用 debugger
         * @see http://eslint.org/docs/rules/no-debugger
         */
        "no-debugger": "error",

        /**
         * 禁止出现重名参数
         * @see http://eslint.org/docs/rules/no-dupe-args
         */
        "no-dupe-args": "error",

        /**
         * 禁止出现 key 重复
         * @see http://eslint.org/docs/rules/no-dupe-keys
         */
        "no-dupe-keys": "error",

        /**
         * switch 中禁止重复的 case 标签
         * @see http://eslint.org/docs/rules/no-duplicate-case
         */
        "no-duplicate-case": "error",

        /**
         * 禁止空语句
         * @see http://eslint.org/docs/rules/no-empty
         */
        "no-empty": ["error", {
            "allowEmptyCatch": true
        }],

        /**
         * 正则中禁止空的选择符 "[]"
         * @see http://eslint.org/docs/rules/no-empty-character-class
         */
        "no-empty-character-class": "error",

        /**
         * 禁止对 catch 子句的参数重新赋值
         * @see http://eslint.org/docs/rules/no-ex-assign
         */
        "no-ex-assign": "error",

        /**
         * 禁止不必要的布尔转换
         * @see http://eslint.org/docs/rules/no-extra-boolean-cast
         */
        "no-extra-boolean-cast": "error",

        /**
         * 禁止不必要的括号
         * @see http://eslint.org/docs/rules/no-extra-parens
         */
        "no-extra-parens": ["error", "all", {"enforceForArrowConditionals": false}],

        /**
         * 禁止不必要的分号
         * @see http://eslint.org/docs/rules/no-extra-semi
         */
        "no-extra-semi": "error",

        /**
         * 禁止给函数类型的变量重新赋值
         * @see http://eslint.org/docs/rules/no-func-assign
         */
        "no-func-assign": "error",

        /**
         * 禁止在 if 等内部进行声明函数，变量
         * @see http://eslint.org/docs/rules/no-inner-declarations
         */
        "no-inner-declarations": ["error", "both"],

        /**
         * 禁止给正则构造函数中传递错误的正则表达式字符串和标志
         * @see http://eslint.org/docs/rules/no-invalid-regexp
         */
        "no-invalid-regexp": "error",

        /**
         * 禁止在字符串和注释之外不规则的空白
         * @see http://eslint.org/docs/rules/no-irregular-whitespace
         */
        "no-irregular-whitespace": "error",

        /**
         * 禁止在字符类语法中使用多个代码点生成的字符
         * @see https://eslint.org/docs/rules/no-misleading-character-class
         */
        "no-misleading-character-class": "error",

        /**
         * 禁止以函数方式调用  Math, JSON 等对象
         * @see http://eslint.org/docs/rules/no-obj-calls
         */
        "no-obj-calls": "error",

        /**
         * 禁止直接调用 Object.prototypes 的内置属性，如 hasOwnProperty 等方法，改用 {}.hasOwnProperty.call 调用
         * @see http://eslint.org/docs/rules/no-prototype-builtins
         */
        "no-prototype-builtins": "error",

        /**
         * 正则中禁止多个空格，请用 " {3}" 等代替
         * @see http://eslint.org/docs/rules/no-regex-spaces
         */
        "no-regex-spaces": "error",

        /**
         * 禁止稀疏数组
         * @see http://eslint.org/docs/rules/no-sparse-arrays
         */
        "no-sparse-arrays": "error",

        /**
         * 禁止在字符串中使用 `${variable}` 模板语法
         * @type {[type]}
         */
        "no-template-curly-in-string": "error",

        /**
         * 禁止出现令人困惑的多行表达式
         * @see http://eslint.org/docs/rules/no-unexpected-multiline
         */
        "no-unexpected-multiline": "warn",

        /**
         * 禁止在return、throw、continue 和 break 语句之后出现无法执行的代码
         * @see http://eslint.org/docs/rules/no-unreachable
         */
        "no-unreachable": "error",

        /**
         * 禁止在 finally 语句块中出现控制流语句
         * @see http://eslint.org/docs/rules/no-unsafe-finally
         */
        "no-unsafe-finally": "error",

        /**
         * instanceof, in 左侧禁止有其他操作符
         * @see http://eslint.org/docs/rules/no-unsafe-negation
         */
        "no-unsafe-negation": "error",

        /**
         * 禁止有异步冲突风险的赋值操作
         * @see https://eslint.org/docs/rules/require-atomic-updates
         */
        "require-atomic-updates": "error",

        /**
         * 使用 isNaN() 而禁止和 NaN 比较
         * @see http://eslint.org/docs/rules/use-isnan
         */
        "use-isnan": "error",

        /**
         * 强制 typeof 表达式与有效的字符串进行比较
         * @see http://eslint.org/docs/rules/valid-typeof
         */
        "valid-typeof": "error",

        /**
         * Getter/Setter 成对出现，允许只有 Getter 没 Setter
         * @see http://eslint.org/docs/rules/accessor-pairs
         */
        "accessor-pairs": ["error", {
            "getWithoutSet": true
        }],

        /**
         * 数组回调返回值判断
         * @see http://eslint.org/docs/rules/array-callback-return
         */
        "array-callback-return": "error",

        /**
         * 将 var 看作是块级作用域
         * @see http://eslint.org/docs/rules/block-scoped-var
         */
        "block-scoped-var": "error",

        /**
         * 在方法中不使用 this 可以声明为 static
         * @see http://eslint.org/docs/rules/class-methods-use-this
         */
        "class-methods-use-this": "off",

        /**
         * 过于复杂的函数
         * @see http://eslint.org/docs/rules/complexity
         */
        "complexity": "off",

        /**
         * 一致的 return 返回
         * @see http://eslint.org/docs/rules/consistent-return
         */
        "consistent-return": "off",

        /**
         * if 等强制添加花括号
         * @see http://eslint.org/docs/rules/curly
         * @example
         */
        curly: ["error", "multi-line"],

        /**
         * while 中强制添加 default 块
         * @see http://eslint.org/docs/rules/default-case
         */
        "default-case": ["error", {
            commentPattern: "^no default$"
        }],

        /**
         * 属性前面的 . 和属性之间禁止换行
         * @see http://eslint.org/docs/rules/dot-location
         */
        "dot-location": ["error", "property"],

        /**
         * 对象优先使用 . 号调用
         * @see http://eslint.org/docs/rules/dot-notation
         */
        "dot-notation": ["error", {
            allowKeywords: true
        }],

        /**
         * 使用 === 而不是 ==
         * @see http://eslint.org/docs/rules/eqeqeq
         */
        eqeqeq: ["error", "allow-null"],

        /**
         * for in 中 使用 hasOwnProperty 判断
         * @see http://eslint.org/docs/rules/guard-for-in
         */
        "guard-for-in": "off",

        /**
         * 每个文件中定义的 Class 数量
         * @see https://eslint.org/docs/rules/max-classes-per-file
         */
        "max-classes-per-file": "warn",

        /**
         * 禁止调用 alert、confirm 和 prompt
         * @see http://eslint.org/docs/rules/no-alert
         */
        "no-alert": "error",

        /**
         * 禁止使用 arguments.caller 和 arguments.callee
         * @see http://eslint.org/docs/rules/no-caller
         */
        "no-caller": "error",

        /**
         * switch 语句中的 case 中禁止直接使用块级声明（使用花括号括起来）
         * @see http://eslint.org/docs/rules/no-case-declarations
         */
        "no-case-declarations": "error",

        /**
         * 对正则中的 "/=/" 使用转义 "/\=/"，防止看起来像除法
         * @see http://eslint.org/docs/rules/no-div-regex
         */
        "no-div-regex": "warn",

        /**
         * 禁止 else 中使用 return，建议直接 return
         * @see http://eslint.org/docs/rules/no-else-return
         */
        "no-else-return": "error",

        /**
         * 禁止空函数
         * @see http://eslint.org/docs/rules/no-empty-function
         */
        "no-empty-function": "error",

        /**
         * 禁止使用空解构模式
         * @see http://eslint.org/docs/rules/no-empty-pattern
         */
        "no-empty-pattern": "error",

        /**
         * 禁止和 null 进行 == 的比较
         * @see http://eslint.org/docs/rules/no-eq-null
         */
        "no-eq-null": "off",

        /**
         * 禁止使用 eval
         * @see http://eslint.org/docs/rules/no-eval
         */
        "no-eval": "error",

        /**
         * 禁止扩展 native 的对象
         * @see http://eslint.org/docs/rules/no-extend-native
         */
        "no-extend-native": "error",

        /**
         * 禁止不必要的 .bind() 调用
         * @see http://eslint.org/docs/rules/no-extra-bind
         */
        "no-extra-bind": "error",

        /**
         * 禁止不必要的 label
         * @see http://eslint.org/docs/rules/no-extra-label
         */
        "no-extra-label": "error",

        /**
         * switch 中必须添加 break，禁止多个 case
         * @see http://eslint.org/docs/rules/no-fallthrough
         */
        "no-fallthrough": "error",

        /**
         * 禁止省略浮点数的 0，eg：.12 => 0.12
         * @see http://eslint.org/docs/rules/no-floating-decimal
         */
        "no-floating-decimal": "error",

        /**
         * 禁止给内部对象或者全局变量赋值
         * @see http://eslint.org/docs/rules/no-global-assign
         */
        "no-global-assign": "error",

        /**
         * 禁止使用奇怪的类型转换
         * @see http://eslint.org/docs/rules/no-implicit-coercion
         */
        "no-implicit-coercion": ["error", {
            "boolean": false,
            "number": false,
            "string": false
        }],

        /**
         * 禁止隐式的定义全局变量
         * @see http://eslint.org/docs/rules/no-implicit-globals
         */
        "no-implicit-globals": "error",

        /**
         * 禁止使用隐式的 eval，如 setTimeout(), setInterval() 中传入字符串
         * @see http://eslint.org/docs/rules/no-implied-eval
         */
        "no-implied-eval": "error",

        /**
         * 禁止在 class 之外使用 this
         * @see http://eslint.org/docs/rules/no-invalid-this
         */
        "no-invalid-this": "off",

        /**
         * 禁止使用 __iterator__ 作为原型方法
         * @see http://eslint.org/docs/rules/no-iterator
         */
        "no-iterator": "error",

        /**
         * 禁止使用 label
         * @see http://eslint.org/docs/rules/no-labels
         */
        "no-labels": "error",

        /**
         * 禁止使用无意义的块级作用域
         * @see http://eslint.org/docs/rules/no-lone-blocks
         */
        "no-lone-blocks": "error",

        /**
         * 禁止在循环中定义函数，而返回循环计数
         * @see http://eslint.org/docs/rules/no-loop-func
         */
        "no-loop-func": "error",

        /**
         * 禁止魔术数字
         * @see http://eslint.org/docs/rules/no-magic-numbers
         */
        "no-magic-numbers": "off",

        /**
         * 禁止连续的空格
         * @see http://eslint.org/docs/rules/no-multi-spaces
         */
        "no-multi-spaces": ["error", {
            "exceptions": {
                "VariableDeclarator": true,
                "ImportDeclaration": true
            }
        }],

        /**
         * 禁止字符串换行
         * @see http://eslint.org/docs/rules/no-multi-str
         */
        "no-multi-str": "error",

        /**
         * 禁止使用 new Xxx() 而不获取实例
         * @see http://eslint.org/docs/rules/no-new
         */
        "no-new": "off",

        /**
         * 禁止使用 new Function 调用
         * @see http://eslint.org/docs/rules/no-new-func
         */
        "no-new-func": "error",

        /**
         * 对于 String, Number 和 Boolean，禁止使用 new 来调用
         * @see http://eslint.org/docs/rules/no-new-wrappers
         */
        "no-new-wrappers": "error",

        /**
         * 禁止使用八进制
         * @see http://eslint.org/docs/rules/no-octal
         */
        "no-octal": "error",

        /**
         * 禁止使用八进制转义
         * @see http://eslint.org/docs/rules/no-octal-escape
         */
        "no-octal-escape": "error",

        /**
         * 形参禁止重新赋值
         * @see http://eslint.org/docs/rules/no-param-reassign
         */
        "no-param-reassign": "off",

        /**
         * 禁止使用 __proto__ 调用
         * @see http://eslint.org/docs/rules/no-proto
         */
        "no-proto": "error",

        /**
         * 禁止重复声明
         * @see http://eslint.org/docs/rules/no-redeclare
         */
        "no-redeclare": "error",

        /**
         * 禁止使用反对的属性
         * @see http://eslint.org/docs/rules/no-restricted-properties
         */
        "no-restricted-properties": "off",

        /**
         * return 语句中禁止赋值
         * @see http://eslint.org/docs/rules/no-return-assign
         */
        "no-return-assign": ["error", "always"],

        /**
         * 禁止使用没必要的 `return await`
         * @see https://eslint.org/docs/rules/no-return-await
         */
        "no-return-await": "error",

        /**
         * 禁止使用 `javascript:` 形式的伪协议
         * @see http://eslint.org/docs/rules/no-script-url
         */
        "no-script-url": "error",

        /**
         * 禁止自赋值
         * @see http://eslint.org/docs/rules/no-self-assign
         */
        "no-self-assign": "error",

        /**
         * 禁止自比较
         * @see http://eslint.org/docs/rules/no-self-compare
         */
        "no-self-compare": "error",

        /**
         * 禁止逗号运算符
         * @see http://eslint.org/docs/rules/no-sequences
         */
        "no-sequences": "error",

        /**
         * 禁止 throw 字面量
         * @see http://eslint.org/docs/rules/no-throw-literal
         */
        "no-throw-literal": "warn",

        /**
         * 禁止使用不变的循环条件
         * @see http://eslint.org/docs/rules/no-unmodified-loop-condition
         */
        "no-unmodified-loop-condition": "error",

        /**
         * 禁止未使用的表达式
         * @see http://eslint.org/docs/rules/no-unused-expressions
         */
        "no-unused-expressions": ["error", {
            "allowShortCircuit": true,
            "allowTernary": true
        }],

        /**
         * 禁止未使用的 label
         * @see http://eslint.org/docs/rules/no-unused-labels
         */
        "no-unused-labels": "error",

        /**
         * 禁止无必要的 .call() 和 .apply();
         * @see http://eslint.org/docs/rules/no-useless-call
         */
        "no-useless-call": "error",

        /**
         * 禁止无必要的 catch;
         * @see http://eslint.org/docs/rules/no-useless-catch
         */
        "no-useless-catch": "error",

        /**
         * 禁止无必要的字符串连接
         * @see http://eslint.org/docs/rules/no-useless-concat
         */
        "no-useless-concat": "error",

        /**
         * 禁止无必要的转义
         * @see http://eslint.org/docs/rules/no-useless-escape
         */
        "no-useless-escape": "error",

        /**
         * 禁止无必要的 return
         * @see http://eslint.org/docs/rules/no-useless-return
         */
        "no-useless-return": "error",

        /**
         * 禁止使用 void
         * @see http://eslint.org/docs/rules/no-void
         */
        "no-void": "off",

        /**
         * 禁止使用带有警告性质的注释
         * @see http://eslint.org/docs/rules/no-warning-comments
         */
        "no-warning-comments": ["warn", {
            "terms": ["todo", "fixme"],
            "location": "start"
        }],

        /**
         * 禁止使用 with
         * @see http://eslint.org/docs/rules/no-with
         */
        "no-with": "error",

        /**
         * 正则中优先使用命名捕获组
         * @see https://eslint.org/docs/rules/prefer-named-capture-group
         * @reason Node.js 8 中未实现
         */
        "prefer-named-capture-group": "off",

        /**
         * `Reject` 必须返回 `Error` 对象
         * @see https://eslint.org/docs/rules/prefer-promise-reject-errors
         */
        "prefer-promise-reject-errors": "error",

        /**
         * parseInt 等必须添加基数
         * @see http://eslint.org/docs/rules/radix
         */
        "radix": "error",

        /**
         * Async 函数中必须包含 `await`
         * @see https://eslint.org/docs/rules/require-await
         */
        "require-await": "error",

        /**
         * 正则中必须使用 `u` 标记
         * @see https://eslint.org/docs/rules/require-unicode-regexp
         */
        // "require-unicode-regexp": "error",

        /**
         * 在顶部声明
         * @see http://eslint.org/docs/rules/vars-on-top
         */
        "vars-on-top": "off",

        /**
         * 立即执行函数的括号必须在外边
         * @see http://eslint.org/docs/rules/wrap-iife
         */
        "wrap-iife": "off",

        /**
         * 比较的字面量放右侧
         * @see http://eslint.org/docs/rules/yoda
         */
        "yoda": "error",

        /**
         * strict 模式
         * @see http://eslint.org/docs/rules/strict
         */
        strict: "off",

        /**
         * 在声明处初始化
         * @see http://eslint.org/docs/rules/init-declarations
         */
        "init-declarations": ["warn", "always"],

        /**
         * 禁止删除变量
         * @see http://eslint.org/docs/rules/no-delete-var
         */
        "no-delete-var": "error",

        /**
         * 禁止 label 变量
         * @see http://eslint.org/docs/rules/no-label-var
         */
        "no-label-var": "error",

        /**
         * 禁止特性全局变量
         * @see http://eslint.org/docs/rules/no-restricted-globals
         */
        "no-restricted-globals": "error",

        /**
         * 禁止定义父级已有的变量
         * @see http://eslint.org/docs/rules/no-shadow
         */
        "no-shadow": "off",

        /**
         * 禁止重新定义 native 的变量，NaN，Infinity 等
         * @see http://eslint.org/docs/rules/no-shadow-restricted-names
         */
        "no-shadow-restricted-names": "error",

        /**
         * 禁止未定义的调用
         * @see http://eslint.org/docs/rules/no-undef
         */
        "no-undef": "error",

        /**
         * 禁止使用 undefined 来初始化
         * @see http://eslint.org/docs/rules/no-undef-init
         */
        "no-undef-init": "error",

        /**
         * 禁止给 undefined 定义
         * @see http://eslint.org/docs/rules/no-undefined
         */
        "no-undefined": "error",

        /**
         * 禁止定义而未使用
         * @see http://eslint.org/docs/rules/no-unused-vars
         */
        "no-unused-vars": ["error", {
            vars: "local",
            args: "after-used"
        }],

        /**
         * 禁止在定义前使用
         * @see http://eslint.org/docs/rules/no-use-before-define
         */
        "no-use-before-define": "error",

        /**
         * 数组方括号换行风格
         * @see https://eslint.org/docs/rules/array-bracket-newline
         */
        "array-bracket-newline": "off",

        /**
         * 方括号，圆括号内侧的空格
         * @see http://eslint.org/docs/rules/array-bracket-spacing
         */
        "array-bracket-spacing": ["warn", "never"],

        /**
         * 数组元素换行风格
         * @see https://eslint.org/docs/rules/array-element-newline
         */
        "array-element-newline": "off",

        /**
         * 花括号内侧的空格
         * @see http://eslint.org/docs/rules/block-spacing
         */
        "block-spacing": ["warn", "always"],

        /**
         * 花括号换行方式
         * @see http://eslint.org/docs/rules/brace-style
         */
        "brace-style": ["warn", "1tbs", {
            allowSingleLine: true
        }],


        /**
         * 注释首字母大写
         * @see https://eslint.org/docs/rules/capitalized-comments
         */
        "capitalized-comments": "off",

        /**
         * 数组或对象的尾部禁止添加逗号
         * @see http://eslint.org/docs/rules/comma-dangle
         */
        "comma-dangle": "error",

        /**
         * 逗号前后的空格
         * @see http://eslint.org/docs/rules/comma-spacing
         */
        "comma-spacing": ["warn", {
            before: false,
            after: true
        }],

        /**
         * 逗号的风格
         * @see http://eslint.org/docs/rules/comma-style
         */
        "comma-style": ["error", "last"],

        /**
         * 属性前后的空格
         * @see http://eslint.org/docs/rules/computed-property-spacing
         */
        "computed-property-spacing": ["warn", "never"],

        /**
         * this 变量的指代
         * @see http://eslint.org/docs/rules/consistent-this
         */
        "consistent-this": "off",

        /**
         * 文件末尾的空行
         * @see http://eslint.org/docs/rules/eol-last
         */
        "eol-last": "error",

        /**
         * 函数名和括号中间不加空格
         * @see http://eslint.org/docs/rules/func-call-spacing
         */
        "func-call-spacing": ["warn", "never"],

        /**
         * 函数名和变量名匹配
         * @see http://eslint.org/docs/rules/func-name-matching
         */
        "func-name-matching": "error",

        /**
         * 函数名称
         * @see http://eslint.org/docs/rules/func-names
         */
        "func-names": "warn",

        /**
         * 函数风格
         * @see http://eslint.org/docs/rules/func-style
         */
        "func-style": ["warn", "expression", {
            "allowArrowFunctions": true
        }],

        /**
         * 函数参数换行
         * @see http://eslint.org/docs/rules/function-paren-newline
         */
        "function-paren-newline": ["warn", "never"],

        /**
         * 参数名黑名单
         * @see http://eslint.org/docs/rules/id-blacklist
         */
        "id-blacklist": "off",

        /**
         * 变量长度
         * @see http://eslint.org/docs/rules/id-length
         */
        "id-length": "off",

        /**
         * 变量的格式
         * @see http://eslint.org/docs/rules/id-match
         */
        "id-match": "off",

        /**
         * 箭头函数换行风格
         * @see http://eslint.org/docs/rules/implicit-arrow-linebreak
         */
        "implicit-arrow-linebreak": ["warn", "beside"],

        /**
         * 缩进，switch 风格
         * @see http://eslint.org/docs/rules/indent
         */
        "indent": ["warn", 4, {
            "SwitchCase": 1
        }],

        /**
         * jsx 括号风格
         * @see http://eslint.org/docs/rules/indent
         */
        "jsx-quotes": ["error", "prefer-double"],

        /**
         * 键值对的风格
         * @see http://eslint.org/docs/rules/key-spacing
         */
        "key-spacing": ["warn", {
            "beforeColon": false,
            "afterColon": true
        }],

        /**
         * 关键字两侧空格
         * @see http://eslint.org/docs/rules/keyword-spacing
         */
        "keyword-spacing": ["warn", {
            "before": true,
            after: true
        }],

        /**
         * 行内注释位置
         * @see http://eslint.org/docs/rules/line-comment-position
         */
        "line-comment-position": "off",

        /**
         * 换行的格式
         * @see http://eslint.org/docs/rules/linebreak-style
         */
        "linebreak-style": "off",

        /**
         * 注释的形式
         * @see http://eslint.org/docs/rules/lines-around-comment
         */
        "lines-around-comment": "off",

        /**
         * 类方法前后的空格
         * @see http://eslint.org/docs/rules/lines-between-class-members
         */
        "lines-between-class-members": ["warn", "always"],

        /**
         * for 循环等调用深度
         * @see http://eslint.org/docs/rules/max-depth
         */
        "max-depth": ["warn", 8],

        /**
         * 单行长度
         * @see http://eslint.org/docs/rules/max-len
         */
        "max-len": ["warn", 120, 4, {
            "ignoreComments": true,
            "ignoreUrls": true,
            "ignoreStrings": true
        }],

        /**
         * 单个文件最大行数
         * @see http://eslint.org/docs/rules/max-lines
         */
        "max-lines": "off",

        /**
         * 单个函数最大行数
         * @see http://eslint.org/docs/rules/max-lines-per-function
         */
        "max-lines-per-function": "off",

        /**
         * callback 调用深度
         * @see http://eslint.org/docs/rules/max-nested-callbacks
         */
        "max-nested-callbacks": ["warn", 5],

        /**
         * 参数个数
         * @see http://eslint.org/docs/rules/max-params
         */
        "max-params": "off",

        /**
         * 函数内的声明个数
         * @see http://eslint.org/docs/rules/max-statements
         */
        "max-statements": "off",

        /**
         * 单行声明的个数
         * @see http://eslint.org/docs/rules/max-statements-per-line
         */
        "max-statements-per-line": ["warn", {
            "max": 1
        }],

        /**
         * 多行注释的格式
         * @see http://eslint.org/docs/rules/multiline-comment-style
         */
        "multiline-comment-style": "off",

        // /**
        //  * 多行的三元运算符
        //  * @see http://eslint.org/docs/rules/multiline-ternary
        //  */
        // "multiline-ternary": ["warn", "never"],

        /**
         * 大写用 new 调用
         * @see http://eslint.org/docs/rules/new-cap
         */
        "new-cap": "warn",

        /**
         * new 调用后面的 ()
         * @see http://eslint.org/docs/rules/new-parens
         */
        "new-parens": "error",

        /**
         * 方法调用前的换行
         * @see http://eslint.org/docs/rules/newline-per-chained-call
         */
        "newline-per-chained-call": ["warn", {
            ignoreChainWithDepth: 4
        }],

        /**
         * 数组构造函数
         * @see http://eslint.org/docs/rules/no-array-constructor
         */
        "no-array-constructor": "error",

        /**
         * 不使用位运算
         * @see http://eslint.org/docs/rules/no-bitwise
         */
        "no-bitwise": "error",

        /**
         * 不使用 continue
         * @see http://eslint.org/docs/rules/no-continue
         */
        "no-continue": "off",

        /**
         * 不使用行后面的行内注释
         * @see http://eslint.org/docs/rules/no-inline-comments
         */
        "no-inline-comments": "off",

        /**
         * else 内不使用单独的 if
         * @see http://eslint.org/docs/rules/no-lonely-if
         */
        "no-lonely-if": "off",

        /**
         * 禁止混用的运算符
         * @see http://eslint.org/docs/rules/no-mixed-operators
         */
        // "no-mixed-operators": ["error", { "allowSamePrecedence": true }],

        /**
         * 禁止混用空格和 tab
         * @see http://eslint.org/docs/rules/no-mixed-spaces-and-tabs
         */
        "no-mixed-spaces-and-tabs": "error",

        /**
         * 禁止连续赋值
         * @see http://eslint.org/docs/rules/no-multi-assign
         */
        "no-multi-assign": "off",

        /**
         * 多行连续的空行
         * @see http://eslint.org/docs/rules/no-multiple-empty-lines
         */
        "no-multiple-empty-lines": ["warn", {
            "max": 1,
            "maxEOF": 1
        }],

        /**
         * 禁止否定的判断在前
         * @see http://eslint.org/docs/rules/no-negated-condition
         */
        "no-negated-condition": "off",

        // /**
        //  * 禁止嵌套的三元表达式
        //  * @see http://eslint.org/docs/rules/no-nested-ternary
        //  */
        // "no-nested-ternary": "error",

        /**
         * 禁止调用 new Object
         * @see http://eslint.org/docs/rules/no-new-object
         */
        "no-new-object": "error",

        /**
         * 禁止使用 ++ 和 --;
         * @see http://eslint.org/docs/rules/no-plusplus
         */
        "no-plusplus": "off",

        /**
         * 限制的语法
         * @see http://eslint.org/docs/rules/no-restricted-syntax
         */
        "no-restricted-syntax": ["error", "WithStatement"],

        /**
         * 禁止在文件中使用 tab
         * @see http://eslint.org/docs/rules/no-tabs
         */
        // "no-tabs": "error",

        // /**
        //  * 三元运算符
        //  * @see http://eslint.org/docs/rules/no-ternary
        //  */
        // "no-ternary": "off",

        /**
         * 行尾的空白符
         * @see http://eslint.org/docs/rules/no-trailing-spaces
         */
        "no-trailing-spaces": "error",

        /**
         * 变量名头部的 _
         * @see http://eslint.org/docs/rules/no-underscore-dangle
         */
        "no-underscore-dangle": "off",

        // /**
        //  * 不必要的三元运算符
        //  * @see http://eslint.org/docs/rules/no-unneeded-ternary
        //  */
        // "no-unneeded-ternary": "error",

        /**
         * 禁止属性前的空格
         * @see http://eslint.org/docs/rules/no-whitespace-before-property
         */
        "no-whitespace-before-property": "error",

        /**
         * 单行声明格式
         * @see http://eslint.org/docs/rules/nonblock-statement-body-position
         */
        "nonblock-statement-body-position": ["warn", "below"],

        /**
         * JS 对象内部换行风格
         * @see http://eslint.org/docs/rules/object-curly-newline
         */
        "object-curly-newline": "off",

        /**
         * 对象的空格风格
         * @see http://eslint.org/docs/rules/object-curly-spacing
         */
        "object-curly-spacing": ["warn", "never"],

        /**
         * 对象属性换行风格
         * @see http://eslint.org/docs/rules/object-property-newline
         */
        "object-property-newline": "off",

        /**
         * 单 var 声明
         * @see http://eslint.org/docs/rules/one-var
         */
        "one-var": "off",

        /**
         * var 声明在同一行
         * @see http://eslint.org/docs/rules/one-var-declaration-per-line
         */
        "one-var-declaration-per-line": ["error", "always"],

        /**
         * 赋值运算符
         * @see http://eslint.org/docs/rules/operator-assignment
         */
        "operator-assignment": ["error", "always"],

        /**
         * 运算符换行
         * @see http://eslint.org/docs/rules/operator-linebreak
         */
        "operator-linebreak": ["error", "none"],

        /**
         * 块级作用域前后的空行
         * @see http://eslint.org/docs/rules/padded-blocks
         */
        "padded-blocks": "off",

        /**
         * 声明前后的空行
         * @see http://eslint.org/docs/rules/padding-line-between-statements
         */
        "padding-line-between-statements": ["warn", {
            "blankLine": "always",
            "prev": "directive",
            "next": "*"
        }],

        /**
         * 优先使用对象展开而不是 `Object.assign`
         * @see https://eslint.org/docs/rules/prefer-object-spread
         */
        "prefer-object-spread": "warn",

        /**
         * 属性的引号
         * @see http://eslint.org/docs/rules/quote-props
         */
        "quote-props": ["error", "as-needed", {
            "keywords": true,
            "numbers": true,
            "unnecessary": false
        }],

        /**
         * 引号类型
         * @see http://eslint.org/docs/rules/quotes
         */
        "quotes": ["error", "double", {
            avoidEscape: true
        }],

        /**
         * 分号
         * @see http://eslint.org/docs/rules/semi
         */
        "semi": ["error", "always"],

        /**
         * 分号空白
         * @see http://eslint.org/docs/rules/semi-spacing
         */
        "semi-spacing": ["error", {
            "before": false,
            "after": true
        }],

        /**
         * 分号风格
         * @see http://eslint.org/docs/rules/semi-style
         */
        "semi-style": ["warn", "last"],

        /**
         * 对象 key 排序
         * @see http://eslint.org/docs/rules/sort-keys
         */
        "sort-keys": "off",

        /**
         * var 排序
         * @see http://eslint.org/docs/rules/sort-vars
         */
        "sort-vars": "off",

        /**
         * 块级的空格
         * @see http://eslint.org/docs/rules/space-before-blocks
         */
        "space-before-blocks": ["warn", {
            "functions": "always",
            "keywords": "always"
        }],

        /**
         * 函数的空格
         * @see http://eslint.org/docs/rules/space-before-function-paren
         */
        "space-before-function-paren": ["warn", {
            "anonymous": "always",
            "named": "never"
        }],

        /**
         * 函数调用内部空格
         * @see http://eslint.org/docs/rules/space-in-parens
         */
        "space-in-parens": ["warn", "never"],

        /**
         * 运算符空格
         * @see http://eslint.org/docs/rules/space-infix-ops
         */
        "space-infix-ops": ["warn", {
            "int32Hint": true
        }],

        /**
         * 一元运算符空格
         * @see http://eslint.org/docs/rules/space-unary-ops
         */
        "space-unary-ops": "warn",

        /**
         * 注释的空格
         * @see http://eslint.org/docs/rules/spaced-comment
         */
        "spaced-comment": ["warn", "always", {
            exceptions: ["-", "+", "*"],
            markers: ["!", "*!"]
        }],

        /**
         * Switch 语句冒号风格
         * @see http://eslint.org/docs/rules/switch-colon-spacing
         */
        "switch-colon-spacing": ["warn", {
            "after": true,
            "before": false
        }],

        /**
         * 模板标记和字面量之间空格
         * @see http://eslint.org/docs/rules/template-tag-spacing
         */
        "template-tag-spacing": ["warn", "never"],

        /**
         * Unicode BOM 检测
         * @see http://eslint.org/docs/rules/unicode-bom
         */
        "unicode-bom": "error",

        /**
         * 正则直接量的使用
         * @see http://eslint.org/docs/rules/wrap-regex
         */
        "wrap-regex": "off",

        /**
         * 箭头函数体的风格
         * @see http://eslint.org/docs/rules/arrow-body-style
         */
        "arrow-body-style": "off",

        /**
         * 箭头函数头的风格
         * @see http://eslint.org/docs/rules/arrow-parens
         */
        "arrow-parens": ["error", "as-needed"],

        /**
         * 箭头函数的空格
         * @see http://eslint.org/docs/rules/arrow-spacing
         */
        "arrow-spacing": ["warn", {
            before: true,
            after: true
        }],

        /**
         * super 调用的校验
         * @see http://eslint.org/docs/rules/constructor-super
         */
        "constructor-super": "error",

        /**
         * generator 的风格
         * @see http://eslint.org/docs/rules/generator-star-spacing
         */
        "generator-star-spacing": ["error", {
            before: false,
            after: true
        }],

        /**
         * class 重复赋值
         * @see http://eslint.org/docs/rules/no-class-assign
         */
        "no-class-assign": "error",

        /**
         * 在条件判断中禁止箭头函数，=> 和 >= 容易混淆
         * @see http://eslint.org/docs/rules/no-confusing-arrow
         */
        "no-confusing-arrow": ["error", {
            allowParens: true
        }],

        /**
         * const 的重复赋值
         * @see http://eslint.org/docs/rules/no-const-assign
         */
        "no-const-assign": "error",

        /**
         * 重复的 class 方法名
         * @see http://eslint.org/docs/rules/no-dupe-class-members
         */
        "no-dupe-class-members": "error",

        /**
         * 禁止重复的 imports 引用
         * @see http://eslint.org/docs/rules/no-duplicate-imports
         */
        "no-duplicate-imports": "error",

        /**
         * 禁止通过 new 调用 Symbol
         * @see http://eslint.org/docs/rules/no-new-symbol
         */
        "no-new-symbol": "error",

        /**
         * 禁止 imports 限制的模块
         * @see http://eslint.org/docs/rules/no-restricted-imports
         */
        "no-restricted-imports": "off",

        /**
         * 在 this 之前调用 super
         * @see http://eslint.org/docs/rules/no-this-before-super
         */
        "no-this-before-super": "error",

        /**
         * 禁止没必要的计算 key
         * @see http://eslint.org/docs/rules/no-useless-computed-key
         */
        "no-useless-computed-key": "error",

        /**
         * 禁止没必要的构造函数
         * @see http://eslint.org/docs/rules/no-useless-constructor
         */
        "no-useless-constructor": "error",

        /**
         * 禁止不必要的重命名
         * @see http://eslint.org/docs/rules/no-useless-rename
         */
        "no-useless-rename": "error",

        /**
         * 在 es6 中禁止使用 var
         * @see http://eslint.org/docs/rules/no-var
         */
        "no-var": "error",

        /**
         * 对象的缩写
         * @see http://eslint.org/docs/rules/object-shorthand
         */
        "object-shorthand": ["error", "always", {
            avoidQuotes: true,
            ignoreConstructors: false
        }],

        /**
         * 优先回调中使用箭头函数
         * @see http://eslint.org/docs/rules/prefer-arrow-callback
         */
        "prefer-arrow-callback": ["error", {
            "allowNamedFunctions": true
        }],

        /**
         * 优先使用 const
         * @see http://eslint.org/docs/rules/prefer-const
         */
        "prefer-const": ["error", {
            destructuring: "all",
            ignoreReadBeforeAssign: true
        }],

        /**
         * 优先使用数组和对象解构
         * @see https://eslint.org/docs/rules/prefer-destructuring
         */
        "prefer-destructuring": "off",

        /**
         * 优先使用数字字面量
         * @see http://eslint.org/docs/rules/prefer-numeric-literals
         */
        "prefer-numeric-literals": "error",

        /**
         * 优先使用不定参数 ...argu 形式
         * @see http://eslint.org/docs/rules/prefer-rest-params
         */
        "prefer-rest-params": "error",

        /**
         * 优先使用 spread
         * @see http://eslint.org/docs/rules/prefer-spread
         */
        "prefer-spread": "error",

        /**
         * 优先使用模板
         * @see http://eslint.org/docs/rules/prefer-template
         */
        "prefer-template": "off",

        /**
         * 在 generate 中使用 yield 关键字
         * @see http://eslint.org/docs/rules/require-yield
         */
        "require-yield": "off",

        /**
         * 解构的空格
         * @see http://eslint.org/docs/rules/rest-spread-spacing
         */
        "rest-spread-spacing": ["error", "never"],

        /**
         * imports 排序
         * @see http://eslint.org/docs/rules/sort-imports
         */
        "sort-imports": "off",

        /**
         * Symbol 调用添加描述
         * @see http://eslint.org/docs/rules/symbol-description
         */
        "symbol-description": "error",

        /**
         * 模板变量的空白符
         * @see http://eslint.org/docs/rules/template-curly-spacing
         */
        "template-curly-spacing": ["error", "never"],

        /**
         * yield 的 * 空白符
         * @see http://eslint.org/docs/rules/yield-star-spacing
         */
        "yield-star-spacing": ["error", {
            "before": false,
            "after": true
        }],

        /**
         * 计算属性包含异步方法
         * @see https://eslint.vuejs.org/rules/no-async-in-computed-properties.html
         */
        "vue/no-async-in-computed-properties": "error",

        /**
         * 重复的 Key
         * @see https://eslint.vuejs.org/rules/no-dupe-keys.html
         */
        "vue/no-dupe-keys": "warn",

        /**
         * 重复的属性
         * @see https://eslint.vuejs.org/rules/no-duplicate-attributes.html
         */
        "vue/no-duplicate-attributes": "warn",

        /**
         * 解析错误
         * @see https://eslint.vuejs.org/rules/no-parsing-error.html
         */
        "vue/no-parsing-error": "error",

        /**
         * 覆盖保留的属性
         * @see https://eslint.vuejs.org/rules/no-reserved-keys.html
         */
        "vue/no-reserved-keys": "warn",

        /**
         * data 属性的值必须是一个函数
         * @see https://eslint.vuejs.org/rules/no-shared-component-data.html
         */
        "vue/no-shared-component-data": "error",

        /**
         * 禁止在计算属性中对属性修改
         * @see https://eslint.vuejs.org/rules/no-side-effects-in-computed-properties.html
         */
        "vue/no-side-effects-in-computed-properties": "error",

        /**
         * 禁止 <template> 使用 key 属性
         * @see https://eslint.vuejs.org/rules/no-template-key.html
         */
        "vue/no-template-key": "error",

        /**
         * <textarea> 使用 v-model="message" 来绑定
         * @see https://eslint.vuejs.org/rules/no-textarea-mustache.html
         */
        "vue/no-textarea-mustache": "error",

        /**
         * 禁止组件定义未使用
         * @see https://eslint.vuejs.org/rules/no-unused-components.html
         */
        "vue/no-unused-components": "error",

        /**
         * v-for 中禁止定义未使用的变量
         * @see https://eslint.vuejs.org/rules/no-unused-vars.html
         */
        "vue/no-unused-vars": "error",

        /**
         * 禁止在同一节点上使用 v-for 和 v-if
         * @see https://eslint.vuejs.org/rules/no-use-v-if-with-v-for.html
         */
        "vue/no-use-v-if-with-v-for": "error",

        /**
         * 动态组件必须绑定 is
         * @see https://eslint.vuejs.org/rules/require-component-is.html
         */
        "vue/require-component-is": "error",

        /**
         * Props 属性必须指定类型为构造器
         * @see https://eslint.vuejs.org/rules/require-prop-type-constructor.html
         */
        "vue/require-prop-type-constructor": "error",

        /**
         * render 函数必须有返回值
         * @see https://eslint.vuejs.org/rules/require-render-return.html
         */
        "vue/require-render-return": "error",

        /**
         * v-for 指令必须指定 key
         * @see https://eslint.vuejs.org/rules/require-v-for-key.html
         */
        "vue/require-v-for-key": "error",

        /**
         * prop 的默认值必须匹配类型
         * @see https://eslint.vuejs.org/rules/require-valid-default-prop.html
         */
        "vue/require-valid-default-prop": "error",

        /**
         * 计算属性必须有返回值
         * @see https://eslint.vuejs.org/rules/return-in-computed-property.html
         */
        "vue/return-in-computed-property": "error",

        /**
         * v-on 属性描述符和非描述符不能混用
         * @see https://eslint.vuejs.org/rules/use-v-on-exact.html
         */
        "vue/use-v-on-exact": "error",

        /**
         * template 的根节点必须合法
         * @see https://eslint.vuejs.org/rules/valid-template-root.html
         */
        "vue/valid-template-root": "error",

        /**
         * v-bind 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-bind.html
         */
        "vue/valid-v-bind": "error",

        /**
         * v-cloak 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-cloak.html
         */
        "vue/valid-v-cloak": "error",

        /**
         * v-else-if 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-else-if.html
         */
        "vue/valid-v-else-if": "error",

        /**
         * v-else 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-else.html
         */
        "vue/valid-v-else": "error",

        /**
         * v-for 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-for.html
         */
        "vue/valid-v-for": "error",
        /**
         * v-html 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-html.html
         */
        "vue/valid-v-html": "error",
        /**
         * v-if 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-if.html
         */
        "vue/valid-v-if": "error",
        /**
         * v-model 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-model.html
         */
        "vue/valid-v-model": "error",
        /**
         * v-on 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-on.html
         */
        "vue/valid-v-on": "error",
        /**
         * v-once 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-once.html
         */
        "vue/valid-v-once": "error",
        /**
         * v-pre 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-pre.html
         */
        "vue/valid-v-pre": "error",
        /**
         * v-show 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-show.html
         */
        "vue/valid-v-show": "error",
        /**
         * v-text 指令必须合法
         * @see https://eslint.vuejs.org/rules/valid-v-text.html
         */
        "vue/valid-v-text": "error",

        /**
         * 自定义组件的属性风格
         * @see https://eslint.vuejs.org/rules/attribute-hyphenation.html
         */
        "vue/attribute-hyphenation": "warn",

        /**
         * HTML 标签闭合换行风格
         * @see https://eslint.vuejs.org/rules/html-closing-bracket-newline.html
         */
        "vue/html-closing-bracket-newline": ["warn", {
            "singleline": "never",
            "multiline": "always"
        }],

        /**
         * HTML 标签空格风格
         * @see https://eslint.vuejs.org/rules/html-closing-bracket-spacing.html
         */
        "vue/html-closing-bracket-spacing": ["warn", {
            "startTag": "never",
            "endTag": "never",
            "selfClosingTag": "always"
        }],

        /**
         * html 的结束标签必须符合规定
         * @see https://eslint.vuejs.org/rules/html-end-tags.html
         */
        "vue/html-end-tags": "warn",

        /**
         * html 的缩进风格
         * @see https://eslint.vuejs.org/rules/html-indent.html
         */
        "vue/html-indent": ["warn", 4],

        /**
         * html 属性值引号风格
         * @see https://eslint.vuejs.org/rules/html-quotes.html
         */
        "vue/html-quotes": "warn",

        /**
         * HTML 标签自闭和属性
         * @see https://eslint.vuejs.org/rules/html-self-closing.html
         */
        "vue/html-self-closing": ["warn", {
            "html": {
                "void": "always",
                "normal": "never",
                "component": "always"
            },
            "svg": "never",
            "math": "never"
        }],

        /**
         * 限制每行允许的最多属性数量
         * @see https://eslint.vuejs.org/rules/max-attributes-per-line.html
         */
        "vue/max-attributes-per-line": ["warn", {
            "singleline": 5,
            "multiline": {
                "max": 1,
                "allowFirstLine": false
            }
        }],

        /**
         * 组件元素的换行风格
         * @see https://eslint.vuejs.org/rules/multiline-html-element-content-newline.html
         */
        "vue/multiline-html-element-content-newline": "warn",

        /**
         * 模板语法的空格风格
         * @see https://eslint.vuejs.org/rules/mustache-interpolation-spacing.html
         */
        "vue/mustache-interpolation-spacing": "warn",

        /**
         * 组件 name 属性的值的风格
         * @see https://eslint.vuejs.org/rules/name-property-casing.html
         */
        "vue/name-property-casing": "warn",

        /**
         * 禁止出现连续空格
         * @see https://eslint.vuejs.org/rules/no-multi-spaces.html
         */
        "vue/no-multi-spaces": "warn",

        /**
         * 模板属性名值之间的空格
         * @see https://eslint.vuejs.org/rules/no-spaces-around-equal-signs-in-attribute.html
         */
        "vue/no-spaces-around-equal-signs-in-attribute": "warn",

        /**
         * 模板变量复用父级变量名
         * @see https://eslint.vuejs.org/rules/no-template-shadow.html
         */
        "vue/no-template-shadow": "warn",

        /**
         * 属性名风格
         * @see https://eslint.vuejs.org/rules/prop-name-casing.html
         */
        "vue/prop-name-casing": "warn",

        /**
         * Prop 属性必须有默认值
         * @see https://eslint.vuejs.org/rules/require-default-prop.html
         */
        "vue/require-default-prop": "error",

        /**
         * Prop 必须有类型限制
         * @see https://eslint.vuejs.org/rules/require-prop-types.html
         */
        "vue/require-prop-types": "warn",

        /**
         * HTML 换行风格
         * @see https://eslint.vuejs.org/rules/singleline-html-element-content-newline.html
         */
        "vue/singleline-html-element-content-newline": "off",

        /**
         * v-bind 风格
         * @see https://eslint.vuejs.org/rules/v-bind-style.html
         * @reason 没必要限制
         * @fixable
         */
        "vue/v-bind-style": "warn",

        /**
         * v-on 风格
         * @see https://eslint.vuejs.org/rules/v-on-style.html
         */
        "vue/v-on-style": "warn",

        /**
         * 属性排序
         * @see https://eslint.vuejs.org/rules/attributes-order.html
         */
        "vue/attributes-order": "off",

        /**
         * 警告 v-html 标签以防止 XSS
         * @see https://eslint.vuejs.org/rules/no-v-html.html
         */
        "vue/no-v-html": "warn",

        /**
         * 组件方法属性排序
         * @see https://eslint.vuejs.org/rules/order-in-components.html
         */
        "vue/order-in-components": "off",

        /**
         * 模板中的 this
         * @see https://eslint.vuejs.org/rules/this-in-template.html
         */
        "vue/this-in-template": "warn",

        /**
         * 数组前后的空格
         * @see https://eslint.vuejs.org/rules/array-bracket-spacing.html
         */
        "vue/array-bracket-spacing": ["warn", "never"],

        /**
         * 箭头函数的空格
         * @see https://eslint.vuejs.org/rules/arrow-spacing.html
         */
        "vue/arrow-spacing": ["warn", {
            before: true,
            after: true
        }],

        /**
         * 花括号内侧的空格
         * @see https://eslint.vuejs.org/rules/block-spacing.html
         */
        "vue/block-spacing": ["warn", "always"],

        /**
         * 花括号换行方式
         * @see https://eslint.vuejs.org/rules/brace-style.html
         */
        "vue/brace-style": ["warn", "1tbs", {
            allowSingleLine: true
        }],

        /**
         * 驼峰式
         * @see https://eslint.vuejs.org/rules/camelcase.html
         */
        "vue/camelcase": ["warn", {
            "properties": "never"
        }],

        /**
         * 数组或对象的尾部禁止添加逗号
         * @see https://eslint.vuejs.org/rules/comma-dangle.html
         */
        "vue/comma-dangle": "error",

        /**
         * 模板中组件名风格
         * @see https://eslint.vuejs.org/rules/component-name-in-template-casing.html
         */
        "vue/component-name-in-template-casing": "warn",

        /**
         * 使用 === 而不是 ==
         * @see https://eslint.vuejs.org/rules/eqeqeq.html
         */
        "vue/eqeqeq": ["error", "allow-null"],

        /**
         * 键值对的风格
         * @see https://eslint.vuejs.org/rules/key-spacing.html
         */
        "vue/key-spacing": ["warn", {
            "beforeColon": false,
            "afterColon": true
        }],

        /**
         * 匹配组件文件名
         * @see https://eslint.vuejs.org/rules/match-component-file-name.html
         */
        "vue/match-component-file-name": "off",

        /**
         * Boolean 类型变量不设置默认值
         * @see https://eslint.vuejs.org/rules/no-boolean-default.html
         */
        "vue/no-boolean-default": "off",

        /**
         * 限制的语法
         * @see https://eslint.vuejs.org/rules/no-restricted-syntax.html
         */
        "vue/no-restricted-syntax": "error",

        /**
         * 对象的空格风格
         * @see https://eslint.vuejs.org/rules/object-curly-spacing.html
         */
        "vue/object-curly-spacing": ["warn", "never"],

        /**
         * Vue 对象的直接导出
         * @see https://eslint.vuejs.org/rules/require-direct-export.html
         */
        "vue/require-direct-export": "error",

        /**
         * 缩进，switch 风格
         * @see https://eslint.vuejs.org/rules/script-indent.html
         */
        "vue/script-indent": ["warn", 4, {
            "baseIndent": 0,
            "switchCase": 1
        }],

        /**
         * 运算符空格
         * @see https://eslint.vuejs.org/rules/space-infix-ops.html
         */
        "vue/space-infix-ops": ["warn", {
            "int32Hint": true
        }],

        /**
         * 一元运算符空格
         * @see https://eslint.vuejs.org/rules/space-unary-ops.html
         */
        "vue/space-unary-ops": "warn",

        /**
         * v-on 中函数调用风格
         * @see https://eslint.vuejs.org/rules/v-on-function-call.html
         */
        "vue/v-on-function-call": "error"
    }
};
