var test = 
    [
        { // Question 1 - Multiple Choice, Single True Answer
            "id" : 1,
            "q": "Який з цих класів центрує зображення?",
            "a": [
                {"option": ".mx-auto та .d-block",      "correct": 1},
                {"option": ".img-fluid",     "correct": 0},
                {"option": ".img-thumbnail",      "correct": 0},
                {"option": ".rounded",     "correct": 0} // no comma here
            ]
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "id" : 2,
            "q": "Який з цих класів зробить фон жовтим?",
            "a": [
                {"option": "bg-danger",      "correct": 0},
                {"option": "bg-info",     "correct": 0},
                {"option": "bg-warning",      "correct": 1},
                {"option": "bg-secondary",     "correct": 0} // no comma here
            ]
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "id" : 3,
            "q": "Доповніть речення. Плагін Dropdown - ...",
            "a": [
                {"option": "спливні підказки, текстові елементи, які з'являються поряд із вказаним об'єктом після наведення курсору.",      "correct": 0},
                {"option": "випадні списки, побудовані без тегу select.",     "correct": 1},
                {"option": "аналог спливних підказок, але з більшими можливостями. У підказку можна додавати заголовок, до того ж блок з'являється після кліку на об'єкті.",      "correct": 0},
                {"option": "згортання блочних елементів",     "correct": 0} // no comma here
            ]
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "id" : 4,
            "q": "Доповніть речення. Плагін Collapse - ...",
            "a": [
                {"option": "спливні підказки, текстові елементи, які з'являються поряд із вказаним об'єктом після наведення курсору.",      "correct": 0},
                {"option": "випадні списки, побудовані без тегу select.",     "correct": 0},
                {"option": "аналог спливних підказок, але з більшими можливостями. У підказку можна додавати заголовок, до того ж блок з'являється після кліку на об'єкті.",      "correct": 0},
                {"option": "згортання блочних елементів",     "correct": 1} // no comma here
            ]
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "id" : 5,
            "q": "Доповніть речення. Плагін Popover - ...",
            "a": [
                {"option": "спливні підказки, текстові елементи, які з'являються поряд із вказаним об'єктом після наведення курсору.",      "correct": 0},
                {"option": "випадні списки, побудовані без тегу select.",     "correct": 0},
                {"option": "аналог спливних підказок, але з більшими можливостями. У підказку можна додавати заголовок, до того ж блок з'являється після кліку на об'єкті.",      "correct": 1},
                {"option": "згортання блочних елементів",     "correct": 0} // no comma here
            ]
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "id" : 6,
            "q": "Доповніть речення. Плагін Tooltip - ...",
            "a": [
                {"option": "спливні підказки, текстові елементи, які з'являються поряд із вказаним об'єктом після наведення курсору.",      "correct": 1},
                {"option": "випадні списки, побудовані без тегу select.",     "correct": 0},
                {"option": "аналог спливних підказок, але з більшими можливостями. У підказку можна додавати заголовок, до того ж блок з'являється після кліку на об'єкті.",      "correct": 0},
                {"option": "згортання блочних елементів",     "correct": 0} // no comma here
            ]
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "id" : 7,
            "q": "Колонки без встановленного атрибута «ширина» автоматично мають",
            "a": [
                {"option": "рівну ширину",      "correct": 1},
                {"option": "кожна має 1/12 загальної",     "correct": 0},
                {"option": "буде помилка. Цей атрибут є обов'язковим",      "correct": 0},
                {"option": "кожна має 1/6 загальної",     "correct": 0} // no comma here
            ]
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "id" : 8,
            "q": "Bootstrap підтримує такі форми управління:",
            "a": [
                {"option": "input, label,checkbox,radio, select",      "correct": 0},
                {"option": "form, textarea,checkbox,radio, select",     "correct": 0},
                {"option": "input, span,checkbox,radio, select",      "correct": 0},
                {"option": "input, textarea,checkbox,radio, select",     "correct": 1} // no comma here
            ]
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "id" : 9,
            "q": "Щоб створити popover, додайте до елемента атрибут ...",
            "a": [
                {"option": "data-toggle = 'popover'",      "correct": 1},
                {"option": "data-set = 'popover'",     "correct": 0},
                {"option": "data-source = 'popover'",      "correct": 0},
                {"option": "data-content= 'popover'",     "correct": 0} // no comma here
            ]
        },
        { // Question 1 - Multiple Choice, Single True Answer
            "id" : 10,
            "q": "Щознижче перечисленного не є коректним ? ",
            "a": [
                {"option": "<button type='button' class='btn btn-primary active'>Active Primary</button>",      "correct": 0},
                {"option": "<button type='button' class='btn btn-primary' disabled>Disabled Primary</button>",     "correct": 0},
                {"option": "<a href='#' class='btn btn-primary disabled'>Disabled Link</a>",      "correct": 0},
                {"option": "<a href='#' class='btn btn-primary' disabled>Disabled Link</a>",     "correct": 1} // no comma here
            ]
        },
    ]


new Vue({
    el: '#app',
    data: {
        test:[],
        bal:0,
        tr:0,
        score:0,
        id:1,
        k:1,
        q:"",
        res:false,
    },	 
    mounted: function(){
        this.test=test;
    },
    methods: {
        f:function(){
            if(this.k<=this.test.length && this.res==false) {
            this.score=this.score+this.tr;
            if (this.k<this.test.length) {this.k=this.k+1;}
            else {this.res=true; this.ff();} 
            }
        },
        ff:function(){
            document.getElementById("end").style.visibility="visible" ;
            document.getElementById("fm").style.visibility="hidden" ;
        }
        },
        
    computed:{
     testme: function(){
            return this.test.filter(element=>{
               return element.id == this.k;
            })
        },
    

        
    }
 
});    