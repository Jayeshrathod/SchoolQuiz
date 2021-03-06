// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 8  આપણે ગુજરાતી",
        "subject": "સામાજિક વિજ્ઞાન",
        "standard": "6",
        "semester": "2",
        "main": "",
        "results": "<h5>વધુ વાંચન કરો</h5>",
        "level1": "(ગ્રેડ A) ખૂબ સારુ પરિણામ <p><strong class='inst'>સૂચન:</strong> પણ મહેનત જરૂર કરવી.</p>",
        "level2": "(ગ્રેડ B) સારુ પરિણામ <p><strong class='inst'>સૂચન:</strong> મહેનત કરવાની જરૂર છે.</p>",
        "level3": "(ગ્રેડ C) સાધારણ પરિણામ <p><strong class='inst'>સૂચન:</strong> ઘરે મહેનત કરવાની જરૂર છે.</p>",
        "level4": "(ગ્રેડ D) નબળુ પરિણામ <p><strong class='inst'>સૂચન:</strong> શીખવામાં ધ્યાન આપો.</span></p>",
        "level5": "(ગ્રેડ E) ખૂબ જ નબળુ પરિણામ <p><strong class='inst'>સૂચન:</strong> શીખવામાં ધ્યાન આપવાની ખૂબ જ જરૂર છે.</p>" // no comma here
    },
    "questions": [
        { // Question 1
            "q": "ગુજરાતમાં કેટલી  બોલીઓ છે ?",
            "a": [
                {
                    "option": "7",
                    "correct": false
                },
                {
                    "option": "6",
                    "correct": false
                },
                {
                    "option": "8",
                    "correct": true
                },
                {
                    "option": "5",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  8</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "આજે ગુજરાતમાં કયું ખાણું ખૂબ જ જાણીતું છે ?",
            "a": [
                {
                    "option": "કચ્છી",
                    "correct": false
                },
                {
                    "option": "કાઠિયાવાડી",
                    "correct": true
                },
                {
                    "option": "પંજાબી",
                    "correct": false
                },
                {
                    "option": "મદ્રાસી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાઠિયાવાડી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ઉત્તર ગુજરાતમાં કઈ બોલી બોલાય છે ?",
            "a": [
                {
                    "option": "વસાવી",
                    "correct": false
                },
                {
                    "option": "ચરોતરી",
                    "correct": false
                },
                {
                    "option": "ગૂર્જરી",
                    "correct": false
                },
                {
                    "option": "તળપદી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તળપદી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "મધ્યગુજરાતમાં કઈ બોલી બોલાય છે ?",
            "a": [
                {
                    "option": "ચરોતરી",
                    "correct": true
                },
                {
                    "option": "ગૂર્જરી",
                    "correct": false
                },
                {
                    "option": "તળપદી",
                    "correct": false
                },
                {
                    "option": "રાઠવી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ચરોતરી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ગુજરાતમાં તહેવારોની શરૂઆત ક્યારથી થાય છે ?",
            "a": [
                {
                    "option": "અખાત્રીજથી",
                    "correct": true
                },
                {
                    "option": "દિવાળીથી",
                    "correct": false
                },
                {
                    "option": "નવરાત્રિથી",
                    "correct": false
                },
                {
                    "option": "હોળીથી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અખાત્રીજથી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "ક્યા ઉત્સવની ઉજવણી માટે ગુજરાત વિશ્વભરમાં પ્રસિદ્ધ છે ?",
            "a": [
                {
                    "option": "નાતાલ",
                    "correct": false
                },
                {
                    "option": "નવરાત્રિ",
                    "correct": true
                },
                {
                    "option": "હોળી",
                    "correct": false
                },
                {
                    "option": "ઉત્તરાયણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  નવરાત્રિ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ગુજરાતમાં શામળાજી ખાતે ક્યો મેળો ભરાય છે ?",
            "a": [
                {
                    "option": "ભાદરવી પૂનમનો",
                    "correct": false
                },
                {
                    "option": "શિવરાત્રીનો",
                    "correct": false
                },
                {
                    "option": "કાર્તિકી પૂનમનો",
                    "correct": true
                },
                {
                    "option": "આષાઢી પૂનમનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાર્તિકી પૂનમનો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ગુજરાતમાં શિવરાત્રીનો મેળો ક્યા સ્થળે ભરાય છે ?",
            "a": [
                {
                    "option": "અંબાજી",
                    "correct": false
                },
                {
                    "option": "શામળાજી",
                    "correct": false
                },
                {
                    "option": "મોઢેરા",
                    "correct": false
                },
                {
                    "option": "ભવનાથ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભવનાથ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ભરવાડોનું કયું નૃત્ય તેમની આગવી ઓળખ ધરાવે છે ?",
            "a": [
                {
                    "option": "ઘેર",
                    "correct": false
                },
                {
                    "option": "હૂડો",
                    "correct": true
                },
                {
                    "option": "ટીમલી",
                    "correct": false
                },
                {
                    "option": "હોળી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હૂડો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "કચ્છ વિસ્તારના કેટલાક લોકો શામાં રહે છે ?",
            "a": [
                {
                    "option": "ગુફામાં",
                    "correct": false
                },
                {
                    "option": "ઝાડ પર",
                    "correct": false
                },
                {
                    "option": "ભૂંગામાં",
                    "correct": true
                },
                {
                    "option": "એકેયમાં નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભૂંગામાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "દક્ષિણ ગુજરાતમાં લોકો કઈ બોલી બોલે છે ?",
            "a": [
                {
                    "option": "મરાઠી",
                    "correct": false
                },
                {
                    "option": "સુરતી",
                    "correct": true
                },
                {
                    "option": "કાઠિયાવાડી",
                    "correct": false
                },
                {
                    "option": "ચરોતરી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  સુરતી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "ગુજરાતના પૂર્વ વિસ્તારની વનવાસી સ્ત્રીઓ શું ભીડે છે ?",
            "a": [
                {
                    "option": "હાથ",
                    "correct": false
                },
                {
                    "option": "લાત",
                    "correct": false
                },
                {
                    "option": "કાછડો",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાછડો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "ગુજરાતમાં આદિવાસી વિસ્તારમાં ચોક્કસ દિવસોએ દર અઠવાડિયે મેળા ભરાય છે, તેને શું કહેવામાં આવે છે ? ",
            "a": [
                {
                    "option": "ભાટ",
                    "correct": false
                },
                {
                    "option": "વાટ",
                    "correct": false
                },
                {
                    "option": "લાટ",
                    "correct": false
                },
                {
                    "option": "હાટ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  હાટ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "સૌરાષ્ટ્રમાં કઈ બોલી બોલાય છે ?",
            "a": [
                {
                    "option": "ચરોતરી",
                    "correct": false
                },
                {
                    "option": "ગુર્જરી",
                    "correct": false
                },
                {
                    "option": "કાઠિયાવાડી",
                    "correct": true
                },
                {
                    "option": "કચ્છી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કાઠિયાવાડી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "કચ્છમાં કઈ બોલી બોલાય છે ?",
            "a": [
                {
                    "option": "ચરોતરી",
                    "correct": false
                },
                {
                    "option": "ગુર્જરી",
                    "correct": false
                },
                {
                    "option": "કાઠિયાવાડી",
                    "correct": false
                },
                {
                    "option": "કચ્છી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  કચ્છી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "ગુજરાતીઓ વર્ષોથી વિશ્વમાં કઈ પ્રજા તરીકે જાણીતા છે ?",
            "a": [
                {
                    "option": "ખેડુત",
                    "correct": false
                },
                {
                    "option": "ભાડૂઆતી",
                    "correct": false
                },
                {
                    "option": "વેપારી",
                    "correct": true
                },
                {
                    "option": "ઉદ્યોગપતિ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  વેપારી</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "ભારતમાં ગુજરાતનું ભોજન શાના તરીકે પ્રખ્યાત છે ?",
            "a": [
                {
                    "option": "મરાઠી થાળી",
                    "correct": false
                },
                {
                    "option": "ગુજરાતી થાળી",
                    "correct": true
                },
                {
                    "option": "પંજાબી થાળી",
                    "correct": false
                },
                {
                    "option": "બંગાળી થાળી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ગુજરાતી થાળી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "દરિયાકિનારે વસતા લોકો ખોરાકમાં શાનો ઉપયોગ કરે છે ?",
            "a": [
                {
                    "option": "દાળ-ભાત",
                    "correct": false
                },
                {
                    "option": "દાળ-શાક",
                    "correct": false
                },
                {
                    "option": "કઢી-માછલી",
                    "correct": false
                },
                {
                    "option": "ભાત-માછલી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ભાત-માછલી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "ગરબા ક્યા તહેવારમાં ગવાય છે ?",
            "a": [
                {
                    "option": "ઉત્તરાયણ",
                    "correct": false
                },
                {
                    "option": "દિવાળી",
                    "correct": false
                },
                {
                    "option": "નવરાત્રિ",
                    "correct": true
                },
                {
                    "option": "હોળી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નવરાત્રિ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "ગુજરાતની પ્રજાને શું પ્રિય છે ?",
            "a": [
                {
                    "option": "ઝઘડો",
                    "correct": false
                },
                {
                    "option": "મિત્રતા",
                    "correct": false
                },
                {
                    "option": "ઉત્સવ",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્સવ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "ગુજરાતના સૌરાષ્ટ્રમાં મોટા પ્રમાણમાં શું ખવાય છે ? ",
            "a": [
                {
                    "option": "બાજરાનો રોટલો-શાકભાજી ",
                    "correct": true
                },
                {
                    "option": "ઘઉંની રોટલી-શાકભાજી",
                    "correct": false
                },
                {
                    "option": "ભાત-શાકભાજી",
                    "correct": false
                },
                {
                    "option": "ફાફડા-જલેબી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાજરાનો રોટલો-શાકભાજી</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "આજે કયું ખાણું ખૂબ જ જાણીતું બન્યું છે ?",
            "a": [
                {
                    "option": "સુરતી",
                    "correct": false
                },
                {
                    "option": "કાઠિયાવાડી",
                    "correct": true
                },
                {
                    "option": "સોરઠી",
                    "correct": false
                },
                {
                    "option": "કચ્છી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કાઠિયાવાડી</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "સુરતનું શું પ્રખ્યાત છે ?",
            "a": [
                {
                    "option": "ફાફડા-જલેબી",
                    "correct": false
                },
                {
                    "option": "ઊંધિયું-જલેબી",
                    "correct": false
                },
                {
                    "option": "ઊંધિયું-ઘારી",
                    "correct": true
                },
                {
                    "option": "ઘારી-ફાફડા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઊંધિયું-ઘારી</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "રંગોની પીચકારી એકબીજા ઉપર કયા તહેવારમાં છાંટવામાં આવે છે ?",
            "a": [
                {
                    "option": "નવરાત્રિ",
                    "correct": false
                },
                {
                    "option": "દિવાળી",
                    "correct": false
                },
                {
                    "option": "હોળી-ધૂળેટી",
                    "correct": true
                },
                {
                    "option": "જન્માષ્ટમી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હોળી-ધૂળેટી</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 25
            "q": "કૃષ્ણ ભગવાનના જન્મની યાદમાં કયો તહેવાર ઉજવવામાં આવે છે ?",
            "a": [
                {
                    "option": "નવરાત્રિ",
                    "correct": false
                },
                {
                    "option": "દિવાળી",
                    "correct": false
                },
                {
                    "option": "હોળી-ધૂળેટી",
                    "correct": false
                },
                {
                    "option": "જન્માષ્ટમી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જન્માષ્ટમી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "ભાઈને બહેન કયા તહેવારમાં રાખડી બાંધે છે ?",
            "a": [
                {
                    "option": "જન્માષ્ટમી",
                    "correct": false
                },
                {
                    "option": "રક્ષાબંધન",
                    "correct": true
                },
                {
                    "option": "પર્યુષણ",
                    "correct": false
                },
                {
                    "option": "ઉત્તરાયણ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રક્ષાબંધન</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "કયા તહેવારમાં આકાશમાં રંગબેરંગી પતંગો ઉડાડવામાં આવે છે ?",
            "a": [
                {
                    "option": "જન્માષ્ટમી",
                    "correct": false
                },
                {
                    "option": "રક્ષાબંધન",
                    "correct": false
                },
                {
                    "option": "પર્યુષણ",
                    "correct": false
                },
                {
                    "option": "ઉત્તરાયણ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તરાયણ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 28
            "q": "પારસીઓનું નવું વર્ષ કયા તહેવાર તરીકે ઉજવાય છે ?",
            "a": [
                {
                    "option": "નાતાલ",
                    "correct": false
                },
                {
                    "option": "પતેતી",
                    "correct": true
                },
                {
                    "option": "ગુરુનાનક જયંતિ",
                    "correct": false
                },
                {
                    "option": "બકરી ઈદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પતેતી</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 29
            "q": "ખ્રિસ્તીઓનું નવું વર્ષ કયા તહેવાર તરીકે ઉજવવામાં આવે છે ?",
            "a": [
                {
                    "option": "નાતાલ",
                    "correct": true
                },
                {
                    "option": "પતેતી",
                    "correct": false
                },
                {
                    "option": "ગુરુનાનક જયંતિ",
                    "correct": false
                },
                {
                    "option": "બકરી ઈદ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાતાલ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 30
            "q": "ગુજરાતના સમજોમાં કયા દેશોના સમાજની ઘણી નવીન ટેક્નોલોજી અને આધુનિકતા લોકોએ અપનાવી છે ?",
            "a": [
                {
                    "option": "પૂર્વના દેશોના",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમી દેશોના",
                    "correct": true
                },
                {
                    "option": "દક્ષિણી દેશોના",
                    "correct": false
                },
                {
                    "option": "ઉત્તરી દેશોના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પશ્ચિમી દેશોના</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "આદિવાસીઓનું નૃત્ય કયું છે ?",
            "a": [
                {
                    "option": "ઘેર",
                    "correct": false
                },
                {
                    "option": "આપેલા ત્રણેય",
                    "correct": true
                },
                {
                    "option": "ટીમલી",
                    "correct": false
                },
                {
                    "option": "હોળી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: આપેલા ત્રણેય</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "નીચેનામાંથી મુસ્લિમ ધર્મના લોકોનો કયો તહેવાર છે ?",
            "a": [
                {
                    "option": "નાતાલ",
                    "correct": false
                },
                {
                    "option": "પર્યુષણ",
                    "correct": false
                },
                {
                    "option": "ગુરુનાનક જયંતિ",
                    "correct": false
                },
                {
                    "option": "મહોર્રમ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહોર્રમ</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "નીચેનામાંથી શીખ ધર્મના લોકોનો કયો તહેવાર છે ?",
            "a": [
                {
                    "option": "નાતાલ",
                    "correct": false
                },
                {
                    "option": "પર્યુષણ",
                    "correct": false
                },
                {
                    "option": "ગુરુનાનક જયંતિ",
                    "correct": true
                },
                {
                    "option": "મહોર્રમ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુરુનાનક જયંતિ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        } // no comma here
    ]
};
