module.exports = {
    rules: {
        /**
         * 禁止使用无效的十六进制颜色
         * @see https://stylelint.io/user-guide/rules/color-no-invalid-hex/
         */
        "color-no-invalid-hex": true,

        /**
         * 禁止使用重复的字体名称
         * @see https://stylelint.io/user-guide/rules/font-family-no-duplicate-names/
         */
        "font-family-no-duplicate-names": true,

        /**
         * 总是添加字体族
         * @see https://stylelint.io/user-guide/rules/font-family-no-missing-generic-family-keyword/
         */
        "font-family-no-missing-generic-family-keyword": true,

        /**
         * 禁止在 calc 函数内使用无效的表达式
         * @see https://stylelint.io/user-guide/rules/function-calc-no-invalid/
         */
        "function-calc-no-invalid": true,

        /**
         * 禁止在 calc 函数内使用不加空格的操作符
         * @see https://stylelint.io/user-guide/rules/function-calc-no-unspaced-operator/
         */
        "function-calc-no-unspaced-operator": true,

        /**
         * 根据标准语法，禁止 `linear-gradient()` 中无效的方向值
         * @see https://stylelint.io/user-guide/rules/function-linear-gradient-no-nonstandard-direction/
         */
        "function-linear-gradient-no-nonstandard-direction": true,

        /**
         * 禁止在字符串中使用（非转义的）换行符
         * @see https://stylelint.io/user-guide/rules/string-no-newline/
         */
        "string-no-newline": true,

        /**
         * 禁止使用未知单位
         * @see https://stylelint.io/user-guide/rules/unit-no-unknown/
         */
        "unit-no-unknown": true,

        /**
         * 禁止使用未知属性
         * @see https://stylelint.io/user-guide/rules/property-no-unknown/
         */
        "property-no-unknown": true,

        /**
         * 禁止在 keyframe 声明中使用 !important
         * @see https://stylelint.io/user-guide/rules/keyframe-declaration-no-important/
         */
        "keyframe-declaration-no-important": true,

        /**
         * 在声明的块中中禁止出现重复的属性
         * @see https://stylelint.io/user-guide/rules/declaration-block-no-duplicate-properties/
         */
        "declaration-block-no-duplicate-properties": true,

        /**
         * 禁止缩写属性覆盖相关普通写法属性
         * @see https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides/
         */
        "declaration-block-no-shorthand-property-overrides": true,

        /**
         * 禁止出现空块
         * @see https://stylelint.io/user-guide/rules/block-no-empty/
         */
        "block-no-empty": [true, {"severity": "warning"}],

        /**
         * 禁止使用未知的伪类选择器
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-class-no-unknown/
         */
        "selector-pseudo-class-no-unknown": true,

        /**
         * 禁止使用未知的伪元素
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-element-no-unknown/
         */
        "selector-pseudo-element-no-unknown": true,

        /**
         * 禁用未知的类型选择器
         * @see https://stylelint.io/user-guide/rules/selector-type-no-unknown/
         */
        "selector-type-no-unknown": true,

        /**
         * 禁止使用未知的 media 特性名称
         * @see https://stylelint.io/user-guide/rules/media-feature-name-no-unknown/
         */
        "media-feature-name-no-unknown": true,

        /**
         * 禁止使用未知的 at 规则
         * @see https://stylelint.io/user-guide/rules/at-rule-no-unknown/
         */
        "at-rule-no-unknown": true,

        /**
         * 禁止空注释
         * @see https://stylelint.io/user-guide/rules/comment-no-empty/
         */
        "comment-no-empty": true,

        /**
         * 禁止低优先级的选择器出现在高优先级的选择器之后
         * @see https://stylelint.io/user-guide/rules/no-descending-specificity/
         */
        "no-descending-specificity": true,

        /**
         * 禁止重复的 `@import` 规则
         * @see https://stylelint.io/user-guide/rules/no-duplicate-at-import-rules/
         */
        "no-duplicate-at-import-rules": true,

        /**
         * 禁止重复的选择器
         * @see https://stylelint.io/user-guide/rules/no-duplicate-selectors/
         */
        "no-duplicate-selectors": true,

        /**
         * 禁止空白源文件
         * @see https://stylelint.io/user-guide/rules/no-empty-source/
         */
        "no-empty-source": true,

        /**
         * 禁止多余的分号
         * @see https://stylelint.io/user-guide/rules/no-extra-semicolons/
         */
        "no-extra-semicolons": true,

        /**
         * 禁用 CSS 不支持的双斜线注释
         * @see https://stylelint.io/user-guide/rules/no-invalid-double-slash-comments/
         */
        "no-invalid-double-slash-comments": true,
        /**
         * 禁止使用命名的颜色
         * @see https://stylelint.io/user-guide/rules/color-named/
         */
        "color-named": "never",

        /**
         * 禁止使用十六进制颜色
         * @see https://stylelint.io/user-guide/rules/color-no-hex/
         */
        // "color-no-hex": false,

        /**
         * 函数黑名单
         * @see https://stylelint.io/user-guide/rules/function-blacklist/
         */
        "function-blacklist": [],

        /**
         * 禁止使用相对协议的链接
         * @see https://stylelint.io/user-guide/rules/function-url-no-scheme-relative/
         */
        // "function-url-no-scheme-relative": true,

        /**
         * URL 资源协议黑名单
         * @see https://stylelint.io/user-guide/rules/function-url-scheme-blacklist/
         */
        "function-url-scheme-blacklist": ["ftp"],

        /**
         * URL 资源协议白名单
         * @see https://stylelint.io/user-guide/rules/function-url-scheme-whitelist/
         */
        "function-url-scheme-whitelist": ["http", "https", "data"],

        /**
         * 函数白名单
         * @see https://stylelint.io/user-guide/rules/function-whitelist/
         */
        // "function-whitelist": [],

        /**
         * keyframes 名称正则
         * @see https://stylelint.io/user-guide/rules/keyframes-name-pattern/
         */
        // "keyframes-name-pattern": "",

        /**
         * 限制小数位数
         * @see https://stylelint.io/user-guide/rules/number-max-precision/
         */
        "number-max-precision": 3,

        /**
         * 最小的动画时间
         * @see https://stylelint.io/user-guide/rules/time-min-milliseconds/
         */
        "time-min-milliseconds": 50,

        /**
         * 单位黑名单
         * @see https://stylelint.io/user-guide/rules/unit-blacklist/
         */
        "unit-blacklist": [],

        /**
         * 单位白名单
         * @see https://stylelint.io/user-guide/rules/unit-whitelist/
         */
        // "unit-whitelist": [],

        /**
         * 禁止在简写属性中使用冗余值
         * @see https://stylelint.io/user-guide/rules/shorthand-property-no-redundant-values/
         */
        "shorthand-property-no-redundant-values": true,

        /**
         * 禁止值带有浏览器前缀
         * @see https://stylelint.io/user-guide/rules/value-no-vendor-prefix/
         */
        "value-no-vendor-prefix": true,

        /**
         * 自定义属性的匹配模式
         * @see https://stylelint.io/user-guide/rules/custom-property-pattern/
         */
        // "custom-property-pattern": "",

        /**
         * 属性黑名单
         * @see https://stylelint.io/user-guide/rules/property-blacklist/
         */
        "property-blacklist": [],

        /**
         * 禁止属性带有浏览器前缀
         * @see https://stylelint.io/user-guide/rules/property-no-vendor-prefix/
         */
        "property-no-vendor-prefix": true,

        /**
         * 属性白名单
         * @see https://stylelint.io/user-guide/rules/property-whitelist/
         */
        // "property-whitelist": [],

        /**
         * 禁止使用可以缩写却不缩写的属性
         * @see https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties/
         */
        "declaration-block-no-redundant-longhand-properties": true,

        /**
         * 禁止在声明中使用 `!important`
         * @see https://stylelint.io/user-guide/rules/declaration-no-important/
         */
        "declaration-no-important": true,

        /**
         * 声明中使用的属性-单位黑名单
         * @see https://stylelint.io/user-guide/rules/declaration-property-unit-blacklist/
         */
        "declaration-property-unit-blacklist": {},

        /**
         * 声明中使用的属性-单位白名单
         * @see https://stylelint.io/user-guide/rules/declaration-property-unit-whitelist/
         */
        // "declaration-property-unit-whitelist": [],

        /**
         * 声明中使用的属性-值黑名单
         * @see https://stylelint.io/user-guide/rules/declaration-property-value-blacklist/
         */
        "declaration-property-value-blacklist": {},

        /**
         * 声明中使用的属性-值白名单
         * @see https://stylelint.io/user-guide/rules/declaration-property-value-whitelist/
         */
        // "declaration-property-value-whitelist": [],

        /**
         * 单行声明块中声明的数量
         * @see https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations/
         */
        "declaration-block-single-line-max-declarations": 1,

        /**
         * attribute 选择器操作符黑名单
         * @see https://stylelint.io/user-guide/rules/selector-attribute-operator-blacklist/
         */
        "selector-attribute-operator-blacklist": [],

        /**
         * attribute 选择器操作符白名单
         * @see https://stylelint.io/user-guide/rules/selector-attribute-operator-whitelist/
         */
        // "selector-attribute-operator-whitelist": [],

        /**
         * 类选择器匹配模式
         * @see https://stylelint.io/user-guide/rules/selector-class-pattern/
         */
        // "selector-class-pattern": "",

        /**
         * 关系选择器黑名单
         * @see https://stylelint.io/user-guide/rules/selector-combinator-blacklist/
         */
        "selector-combinator-blacklist": [],

        /**
         * 关系选择器白名单
         * @see https://stylelint.io/user-guide/rules/selector-combinator-whitelist/
         */
        // "selector-combinator-whitelist": [],

        /**
         * ID 选择器匹配模式
         * @see https://stylelint.io/user-guide/rules/selector-id-pattern/
         */
        // "selector-id-pattern": "",

        /**
         * 属性选择器最大个数
         * @see https://stylelint.io/user-guide/rules/selector-max-attribute/
         */
        "selector-max-attribute": 4,

        /**
         * 类选择器最大个数
         * @see https://stylelint.io/user-guide/rules/selector-max-class/
         */
        "selector-max-class": 6,

        /**
         * 关系选择器最大个数
         * @see https://stylelint.io/user-guide/rules/selector-max-combinators/
         */
        "selector-max-combinators": 3,

        /**
         * 选择器最大层数
         * @see https://stylelint.io/user-guide/rules/selector-max-compound-selectors/
         */
        "selector-max-compound-selectors": 6,

        /**
         * 选择器中相邻空行数量
         * @see https://stylelint.io/user-guide/rules/selector-max-empty-lines/
         */
        "selector-max-empty-lines": 0,

        /**
         * ID 选择器最大个数
         * @see https://stylelint.io/user-guide/rules/selector-max-id/
         */
        "selector-max-id": 2,

        /**
         * 伪类选择器最大个数
         * @see https://stylelint.io/user-guide/rules/selector-max-pseudo-class/
         */
        "selector-max-pseudo-class": 2,

        /**
         * 选择器的优先级
         * @see https://stylelint.io/user-guide/rules/selector-max-specificity/
         */
        "selector-max-specificity": "2,4,3",

        /**
         * 类型选择器最大个数
         * @see https://stylelint.io/user-guide/rules/selector-max-type/
         */
        "selector-max-type": 3,

        /**
         * 通用选择器最大个数
         * @see https://stylelint.io/user-guide/rules/selector-max-universal/
         */
        "selector-max-universal": 1,

        /**
         * 选择器嵌套模式
         * @see https://stylelint.io/user-guide/rules/selector-nested-pattern/
         */
        // "selector-nested-pattern": "",

        /**
         * 对类型选择器限制
         * @see https://stylelint.io/user-guide/rules/selector-no-qualifying-type/
         */
        "selector-no-qualifying-type": [true, {ignore: ["attribute", "class"]}],

        /**
         * 禁止选择器带有浏览器前缀
         * @see https://stylelint.io/user-guide/rules/selector-no-vendor-prefix/
         */
        "selector-no-vendor-prefix": true,

        /**
         * 伪类选择器黑名单
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-class-blacklist/
         */
        "selector-pseudo-class-blacklist": [],

        /**
         * 伪类选择器白名单
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-class-whitelist/
         */
        // "selector-pseudo-class-whitelist": [],

        /**
         * 伪元素选择器黑名单
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-element-blacklist/
         */
        "selector-pseudo-element-blacklist": [],

        /**
         * 伪元素选择器白名单
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-element-whitelist/
         */
        // "selector-pseudo-element-whitelist": [],

        /**
         * 媒体查询特性名称黑名单
         * @see https://stylelint.io/user-guide/rules/media-feature-name-blacklist/
         */
        "media-feature-name-blacklist": [],

        /**
         * 禁止媒体查询特性名称带有浏览器前缀
         * @see https://stylelint.io/user-guide/rules/media-feature-name-no-vendor-prefix/
         */
        "media-feature-name-no-vendor-prefix": true,

        /**
         * 媒体查询特性值白名单
         * @see https://stylelint.io/user-guide/rules/media-feature-name-value-whitelist/
         */
        // "media-feature-name-value-whitelist": [],

        /**
         * 媒体查询特性名称白名单
         * @see https://stylelint.io/user-guide/rules/media-feature-name-whitelist/
         */
        // "media-feature-name-whitelist": [],

        /**
         * 媒体查询名称匹配模式
         * @see https://stylelint.io/user-guide/rules/custom-media-pattern/
         */
        // "custom-media-pattern": "",

        /**
         * at 规则黑名单
         * @see https://stylelint.io/user-guide/rules/at-rule-blacklist/
         */
        "at-rule-blacklist": [],

        /**
         * 禁止 at 规则带有浏览器前缀
         * @see https://stylelint.io/user-guide/rules/at-rule-no-vendor-prefix/
         */
        "at-rule-no-vendor-prefix": true,

        /**
         * at 规则必要属性
         * @see https://stylelint.io/user-guide/rules/at-rule-property-requirelist/
         */
        "at-rule-property-requirelist": {
            "font-face": ["font-family", "font-style"]
        },

        /**
         * at 规则白名单
         * @see https://stylelint.io/user-guide/rules/at-rule-whitelist/
         */
        // "at-rule-whitelist": [],

        /**
         * 注释词语黑名单
         * @see https://stylelint.io/user-guide/rules/comment-word-blacklist/
         */
        "comment-word-blacklist": [],

        /**
         * 允许嵌套的深度
         * @see https://stylelint.io/user-guide/rules/max-nesting-depth/
         */
        "max-nesting-depth": 4,

        /**
         * 禁止未声明的动画名称
         * @see https://stylelint.io/user-guide/rules/no-unknown-animations/
         */
        "no-unknown-animations": true,
        /**
         * 十六进制颜色大写
         * @see https://stylelint.io/user-guide/rules/color-hex-case/
         */
        "color-hex-case": "upper",

        /**
         * 十六进制颜色使用缩写
         * @see https://stylelint.io/user-guide/rules/color-hex-length/
         */
        "color-hex-length": "short",

        /**
         * 字体名称需要使用引号引起来
         * @see https://stylelint.io/user-guide/rules/font-family-name-quotes/
         */
        "font-family-name-quotes": "always-where-recommended",

        /**
         * `font-weight` 的值尽量使用关键字
         * @see https://stylelint.io/user-guide/rules/font-weight-notation/
         */
        "font-weight-notation": "named-where-possible",

        /**
         * 多行情况下，函数的逗号后添加换行
         * @see https://stylelint.io/user-guide/rules/function-comma-newline-after/
         */
        "function-comma-newline-after": "always-multi-line",

        /**
         * 函数的逗号前禁止换行
         * @see https://stylelint.io/user-guide/rules/function-comma-newline-before/
         */
        "function-comma-newline-before": "never-multi-line",

        /**
         * 函数的逗号后添加空格
         * @see https://stylelint.io/user-guide/rules/function-comma-space-after/
         */
        "function-comma-space-after": "always",

        /**
         * 函数的逗号前禁止添加空格
         * @see https://stylelint.io/user-guide/rules/function-comma-space-before/
         */
        "function-comma-space-before": "never",

        /**
         * 函数中相邻的空行数量
         * @see https://stylelint.io/user-guide/rules/function-max-empty-lines/
         */
        "function-max-empty-lines": 0,

        /**
         * 函数名大小写
         * @see https://stylelint.io/user-guide/rules/function-name-case/
         */
        "function-name-case": "lower",

        /**
         * 多行情况下，函数的括号需要添加换行
         * @see https://stylelint.io/user-guide/rules/function-parentheses-newline-inside/
         */
        "function-parentheses-newline-inside": "always-multi-line",

        /**
         * 函数的括号内禁止空格
         * @see https://stylelint.io/user-guide/rules/function-parentheses-space-inside/
         */
        "function-parentheses-space-inside": "never",

        /**
         * Url 必须使用引号
         * @see https://stylelint.io/user-guide/rules/function-url-quotes/
         */
        "function-url-quotes": "always",

        /**
         * 在函数之后必须添加空格
         * @see https://stylelint.io/user-guide/rules/function-whitespace-after/
         */
        "function-whitespace-after": "always",

        /**
         * 小数必须添加前导 0
         * @see https://stylelint.io/user-guide/rules/number-leading-zero/
         */
        "number-leading-zero": "always",

        /**
         * 禁止数字中的拖尾 0
         * @see https://stylelint.io/user-guide/rules/number-no-trailing-zeros/
         */
        "number-no-trailing-zeros": true,

        /**
         * 引号样式
         * @see https://stylelint.io/user-guide/rules/string-quotes/
         */
        "string-quotes": "double",

        /**
         * 长度为0时，禁止使用单位
         * @see https://stylelint.io/user-guide/rules/length-zero-no-unit/
         */
        "length-zero-no-unit": true,

        /**
         * 单位大小写
         * @see https://stylelint.io/user-guide/rules/unit-case/
         */
        "unit-case": "lower",

        /**
         * 关键字值的大小写
         * @see https://stylelint.io/user-guide/rules/value-keyword-case/
         */
        "value-keyword-case": "lower",

        /**
         * 多行情况下，值的逗号后添加换行
         * @see https://stylelint.io/user-guide/rules/value-list-comma-newline-after/
         */
        "value-list-comma-newline-after": "always-multi-line",

        /**
         * 值的逗号前禁止添加换行
         * @see https://stylelint.io/user-guide/rules/value-list-comma-newline-before/
         */
        "value-list-comma-newline-before": "never-multi-line",

        /**
         * 值的逗号后必须添加空格
         * @see https://stylelint.io/user-guide/rules/value-list-comma-space-after/
         */
        "value-list-comma-space-after": "always",

        /**
         * 值的逗号前禁止添加空格
         * @see https://stylelint.io/user-guide/rules/value-list-comma-space-before/
         */
        "value-list-comma-space-before": "never",

        /**
         * 值列表中相邻空行数量
         * @see https://stylelint.io/user-guide/rules/value-list-max-empty-lines/
         */
        "value-list-max-empty-lines": 0,

        /**
         * 在自定义属性前添加空行
         * @see https://stylelint.io/user-guide/rules/custom-property-empty-line-before/
         */
        "custom-property-empty-line-before": "always",

        /**
         * 属性大小写
         * @see https://stylelint.io/user-guide/rules/property-case/
         */
        "property-case": "lower",

        /**
         * 在感叹号之后禁止空格
         * @see https://stylelint.io/user-guide/rules/declaration-bang-space-after/
         */
        "declaration-bang-space-after": "never",

        /**
         * 在感叹号之前添加空格
         * @see https://stylelint.io/user-guide/rules/declaration-bang-space-before/
         */
        "declaration-bang-space-before": "always",

        /**
         * 在冒号之后添加换行
         * @see https://stylelint.io/user-guide/rules/declaration-colon-newline-after/
         */
        // "declaration-colon-newline-after": "never",

        /**
         * 在冒号之后添加空格
         * @see https://stylelint.io/user-guide/rules/declaration-colon-space-after/
         */
        "declaration-colon-space-after": "always",

        /**
         * 在冒号之前添加空格
         * @see https://stylelint.io/user-guide/rules/declaration-colon-space-before/
         */
        "declaration-colon-space-before": "never",

        /**
         * 禁止在声明语句之前有空行
         * @see https://stylelint.io/user-guide/rules/declaration-empty-line-before/
         */
        "declaration-empty-line-before": "never",

        /**
         * 分号之后必须有一个换行
         * @see https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-after/
         */
        "declaration-block-semicolon-newline-after": "always",

        /**
         * 分号之前必须有一个换行
         * @see https://stylelint.io/user-guide/rules/declaration-block-semicolon-newline-before/
         */
        "declaration-block-semicolon-newline-before": "never-multi-line",

        /**
         * 单行声明分号之后必须有空格
         * @see https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-after/
         */
        "declaration-block-semicolon-space-after": "always-single-line",

        /**
         * 单行声明分号之前禁止添加空格
         * @see https://stylelint.io/user-guide/rules/declaration-block-semicolon-space-before/
         */
        "declaration-block-semicolon-space-before": "never",

        /**
         * 必须有拖尾分号
         * @see https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon/
         */
        "declaration-block-trailing-semicolon": "always",

        /**
         * 禁止在闭括号之前有空行
         * @see https://stylelint.io/user-guide/rules/block-closing-brace-empty-line-before/
         */
        "block-closing-brace-empty-line-before": "never",

        /**
         * 闭括号之后要求有一个换行符
         * @see https://stylelint.io/user-guide/rules/block-closing-brace-newline-after/
         */
        "block-closing-brace-newline-after": ["always", {ignoreAtRules: ["if", "else"]}],

        /**
         * 闭括号之前要求有一个换行符
         * @see https://stylelint.io/user-guide/rules/block-closing-brace-newline-before/
         */
        "block-closing-brace-newline-before": "always",

        /**
         * 在闭括号之后要求有一个空格
         * @see https://stylelint.io/user-guide/rules/block-closing-brace-space-after/
         */
        // "block-closing-brace-space-after": "never",

        /**
         * 在闭括号之前要求有一个空格
         * @see https://stylelint.io/user-guide/rules/block-closing-brace-space-before/
         */
        // "block-closing-brace-space-before": "never",

        /**
         * 在开括号之后要求有一个换行
         * @see https://stylelint.io/user-guide/rules/block-opening-brace-newline-after/
         */
        "block-opening-brace-newline-after": "always",

        /**
         * 在开括号之前要求有一个换行
         * @see https://stylelint.io/user-guide/rules/block-opening-brace-newline-before/
         */
        // "block-opening-brace-newline-before": "never-multi-line",

        /**
         * 在开括号之后要求有一个空格
         * @see https://stylelint.io/user-guide/rules/block-opening-brace-space-after/
         */
        // "block-opening-brace-space-after": "always",

        /**
         * 在开括号之前要求有一个空格
         * @see https://stylelint.io/user-guide/rules/block-opening-brace-space-before/
         */
        "block-opening-brace-space-before": "always",

        /**
         * 属性选择器的方括号内禁止空格
         * @see https://stylelint.io/user-guide/rules/selector-attribute-brackets-space-inside/
         */
        "selector-attribute-brackets-space-inside": "never",

        /**
         * 属性选择器的操作符之后禁止空格
         * @see https://stylelint.io/user-guide/rules/selector-attribute-operator-space-after/
         */
        "selector-attribute-operator-space-after": "never",

        /**
         * 属性选择器的操作符之前禁止空格
         * @see https://stylelint.io/user-guide/rules/selector-attribute-operator-space-before/
         */
        "selector-attribute-operator-space-before": "never",

        /**
         * 属性选择器的引号
         * @see https://stylelint.io/user-guide/rules/selector-attribute-quotes/
         */
        "selector-attribute-quotes": "always",

        /**
         *  关系选择器之后要求有一个空格
         * @see https://stylelint.io/user-guide/rules/selector-combinator-space-after/
         */
        "selector-combinator-space-after": "always",

        /**
         *  关系选择器之前要求有一个空格
         * @see https://stylelint.io/user-guide/rules/selector-combinator-space-before/
         */
        "selector-combinator-space-before": "always",

        /**
         *  禁止包含选择符出现非空格字符
         * @see https://stylelint.io/user-guide/rules/selector-descendant-combinator-no-non-space/
         */
        "selector-descendant-combinator-no-non-space": true,

        /**
         * 伪类选择器的大小写
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-class-case/
         */
        "selector-pseudo-class-case": "lower",

        /**
         * 在伪类选择器的括号内禁止有空格。
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-class-parentheses-space-inside/
         */
        "selector-pseudo-class-parentheses-space-inside": "never",

        /**
         * 伪元素选择器的大小写
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-element-case/
         */
        "selector-pseudo-element-case": "lower",

        /**
         * 伪元素选择器使用双冒号
         * @see https://stylelint.io/user-guide/rules/selector-pseudo-element-colon-notation/
         */
        "selector-pseudo-element-colon-notation": "double",

        /**
         * 类型选择器的大小写
         * @see https://stylelint.io/user-guide/rules/selector-type-case/
         */
        "selector-type-case": "lower",

        /**
         * 选择器列表的逗号之后有一个换行符
         * @see https://stylelint.io/user-guide/rules/selector-list-comma-newline-after/
         */
        "selector-list-comma-newline-after": "always-multi-line",

        /**
         * 选择器列表的逗号之前禁止换行符
         * @see https://stylelint.io/user-guide/rules/selector-list-comma-newline-before/
         */
        "selector-list-comma-newline-before": "never-multi-line",

        /**
         * 单行模式，选择器列表的逗号后必须添加空格
         * @see https://stylelint.io/user-guide/rules/selector-list-comma-space-after/
         */
        "selector-list-comma-space-after": "always-single-line",

        /**
         * 选择器列表的逗号之前禁止空格
         * @see https://stylelint.io/user-guide/rules/selector-list-comma-space-before/
         */
        "selector-list-comma-space-before": "never",

        /**
         * 规则之前的空行
         * @see https://stylelint.io/user-guide/rules/rule-empty-line-before/
         */
        "rule-empty-line-before": ["always-multi-line", {except: ["after-single-line-comment", "first-nested"]}],

        /**
         * 在 media 特性中的冒号之后要求有一个空格
         * @see https://stylelint.io/user-guide/rules/media-feature-colon-space-after/
         */
        "media-feature-colon-space-after": "always",

        /**
         *  在 media 特性中的冒号之前禁止空格
         * @see https://stylelint.io/user-guide/rules/media-feature-colon-space-before/
         */
        "media-feature-colon-space-before": "never",

        /**
         *  media 特性名称的大小写
         * @see https://stylelint.io/user-guide/rules/media-feature-name-case/
         */
        "media-feature-name-case": "lower",

        /**
         * media 特性的括号内禁止有空格
         * @see https://stylelint.io/user-guide/rules/media-feature-parentheses-space-inside/
         */
        "media-feature-parentheses-space-inside": "never",

        /**
         * media 特性的范围操作符之后要求有一个空格
         * @see https://stylelint.io/user-guide/rules/media-feature-range-operator-space-after/
         */
        "media-feature-range-operator-space-after": "always",

        /**
         * media 特性的范围操作符之前要求有一个空格
         * @see https://stylelint.io/user-guide/rules/media-feature-range-operator-space-before/
         */
        "media-feature-range-operator-space-before": "always",

        /**
         * 媒体查询的逗号之后的换行
         * @see https://stylelint.io/user-guide/rules/media-query-list-comma-newline-after/
         */
        "media-query-list-comma-newline-after": "always-multi-line",

        /**
         * 媒体查询的逗号之前的换行
         * @see https://stylelint.io/user-guide/rules/media-query-list-comma-newline-before/
         */
        "media-query-list-comma-newline-before": "never-multi-line",

        /**
         * 媒体查询的逗号之后的空格
         * @see https://stylelint.io/user-guide/rules/media-query-list-comma-space-after/
         */
        "media-query-list-comma-space-after": "always-single-line",

        /**
         * 媒体查询的逗号之前的空格
         * @see https://stylelint.io/user-guide/rules/media-query-list-comma-space-before/
         */
        "media-query-list-comma-space-before": "never",

        /**
         * at 规则之前有空行
         * @see https://stylelint.io/user-guide/rules/at-rule-empty-line-before/
         */
        "at-rule-empty-line-before": "always",

        /**
         * at 规则的大小写
         * @see https://stylelint.io/user-guide/rules/at-rule-name-case/
         */
        "at-rule-name-case": "lower",

        /**
         * 多行模式下，at 规则之后有一个换行符
         * @see https://stylelint.io/user-guide/rules/at-rule-name-newline-after/
         */
        "at-rule-name-newline-after": "always-multi-line",

        /**
         * at 规则之后有一个空格
         * @see https://stylelint.io/user-guide/rules/at-rule-name-space-after/
         */
        "at-rule-name-space-after": "always",

        /**
         * at 规则的分号之后有一个换行符
         * @see https://stylelint.io/user-guide/rules/at-rule-semicolon-newline-after/
         */
        "at-rule-semicolon-newline-after": "always",

        /**
         * at 规则的分号之前的空格
         * @see https://stylelint.io/user-guide/rules/at-rule-semicolon-space-before/
         */
        "at-rule-semicolon-space-before": "never",

        /**
         * 注释之前有空行
         * @see https://stylelint.io/user-guide/rules/comment-empty-line-before/
         */
        "comment-empty-line-before": "always",

        /**
         * 注释标签内有空白
         * @see https://stylelint.io/user-guide/rules/comment-whitespace-inside/
         */
        "comment-whitespace-inside": "always",

        /**
         * 缩进
         * @see https://stylelint.io/user-guide/rules/indentation/
         */
        "indentation": 4,

        /**
         * 换行符
         * @see https://stylelint.io/user-guide/rules/linebreaks/
         */
        "linebreaks": "unix",

        /**
         * 空行数量
         * @see https://stylelint.io/user-guide/rules/max-empty-lines/
         */
        "max-empty-lines": 2,

        /**
         * 一行的最大字数
         * @see https://stylelint.io/user-guide/rules/max-line-length/
         */
        "max-line-length": 120,

        /**
         * 行尾空白符
         * @see https://stylelint.io/user-guide/rules/no-eol-whitespace/
         */
        "no-eol-whitespace": true,

        /**
         * 文件默认换行
         * @see https://stylelint.io/user-guide/rules/no-missing-end-of-source-newline/
         */
        "no-missing-end-of-source-newline": true,

        /**
         * 禁止第一行空行
         * @see https://stylelint.io/user-guide/rules/no-empty-first-line/
         */
        "no-empty-first-line": true
    }
};
