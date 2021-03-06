// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 5  આપણું ઘર પૃથ્વી",
        "subject": "સામાજિક વિજ્ઞાન",
        "standard": "6",
        "semester": "1",
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
            "q": "સૌથી પહેલા ભારતીય અંતરિક્ષયાત્રી કોણ હતા ?",
            "a": [
                {
                    "option": "સુનિતા વિલિયમ્સ",
                    "correct": false
                },
                {
                    "option": "કલ્પના ચાવલા",
                    "correct": false
                },
                {
                    "option": "રાકેશ શર્મા",
                    "correct": true
                },
                {
                    "option": "નીલ આર્મસ્ટ્રૉંગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાકેશ શર્મા</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "સૌથી પહેલા ભારતીય મહિલા અંતરિક્ષયાત્રી કોણ હતા ?",
            "a": [
                {
                    "option": "સુનિતા વિલિયમ્સ",
                    "correct": false
                },
                {
                    "option": "કલ્પના ચાવલા",
                    "correct": true
                },
                {
                    "option": "રાકેશ શર્મા",
                    "correct": false
                },
                {
                    "option": "નીલ આર્મસ્ટ્રૉંગ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કલ્પના ચાવલા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "પૃથ્વીનો આકાર કેવો છે ?",
            "a": [
                {
                    "option": "દડા જેવો ગોળ",
                    "correct": false
                },
                {
                    "option": "નારંગી જેવો ગોળ",
                    "correct": true
                },
                {
                    "option": "ચોરસ",
                    "correct": false
                },
                {
                    "option": "લંબચોરસ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નારંગી જેવો ગોળ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "પૃથ્વીની સપાટી ઉપર બરાબર મધ્યમાં દોરેલી કાલ્પનિક આડી રેખાને શું કહે છે ?",
            "a": [
                {
                    "option": "મકરવૃત્ત",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": false
                },
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": true
                },
                {
                    "option": "અયનવૃત્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિષુવવૃત્ત</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "વિષુવવૃત્તથી 23.5<sup>0</sup> ઉત્તરે આવેલી કાલ્પનિક આડી રેખાને શું કહે છે ?",
            "a": [
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": true
                },
                {
                    "option": "મકરવૃત્ત",
                    "correct": false
                },
                {
                    "option": "અયનવૃત્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કર્કવૃત્ત</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "વિષુવવૃત્તથી 23.5<sup>0</sup> દક્ષિણે આવેલી કાલ્પનિક આડી રેખાને શું કહે છે ?",
            "a": [
                {
                    "option": "અયનવૃત્ત",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": false
                },
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "મકરવૃત્ત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મકરવૃત્ત</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "પૃથ્વીના ગોળા ઉપર દોરેલી કાલ્પનિક આડી રેખાઓને શું કહે છે ?",
            "a": [
                {
                    "option": "રેખાંશવૃત્તો",
                    "correct": false
                },
                {
                    "option": "અયનવૃત્તો",
                    "correct": false
                },
                {
                    "option": "અક્ષાંશવૃત્તો",
                    "correct": true
                },
                {
                    "option": "ત્રણેય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અક્ષાંશવૃત્તો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "પૃથ્વીના ગોળા ઉપર દોરેલી કાલ્પનિક ઊભી રેખાઓને શું કહે છે ?",
            "a": [
                {
                    "option": "રેખાંશવૃત્તો",
                    "correct": true
                },
                {
                    "option": "અયનવૃત્તો",
                    "correct": false
                },
                {
                    "option": "અક્ષાંશવૃત્તો",
                    "correct": false
                },
                {
                    "option": "ત્રણેય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રેખાંશવૃત્તો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "પૃથ્વી તાપમાન, પ્રકાશ, ગરમી અને ઠંડીના આધારે જુદાજુદા વિભાગોમાં વહેંચાઈ જાય છે, તેને શું કહે છે ?",
            "a": [
                {
                    "option": "મહાસાગરો",
                    "correct": false
                },
                {
                    "option": "ખંડો",
                    "correct": false
                },
                {
                    "option": "કટીંગો",
                    "correct": false
                },
                {
                    "option": "કટિબંધો",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કટિબંધો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "કટિબંધ કેટલાં છે ?",
            "a": [
                {
                    "option": "1",
                    "correct": false
                },
                {
                    "option": "2",
                    "correct": false
                },
                {
                    "option": "3",
                    "correct": true
                },
                {
                    "option": "4",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 3</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "પૃથ્વી  પર વધુ પાણી ધરાવતા ભાગોને શું કહે છે ?",
            "a": [
                {
                    "option": "મહાસાગરો",
                    "correct": true
                },
                {
                    "option": "ખંડો",
                    "correct": false
                },
                {
                    "option": "કટીંગો",
                    "correct": false
                },
                {
                    "option": "કટિબંધો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહાસાગરો </p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "પૃથ્વી પર વધુ જમીન ધરાવતા ભાગોને શું કહે છે ?",
            "a": [
                {
                    "option": "કટીંગો",
                    "correct": false
                },
                {
                    "option": "કટિબંધો",
                    "correct": false
                },
                {
                    "option": "ખંડો",
                    "correct": true
                },
                {
                    "option": "મહાસાગરો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખંડો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "પૃથ્વી પર કેટલા ખંડો આવેલાં છે ?",
            "a": [
                {
                    "option": "4",
                    "correct": false
                },
                {
                    "option": "5",
                    "correct": false
                },
                {
                    "option": "6",
                    "correct": false
                },
                {
                    "option": "7",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 7</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "પૃથ્વી પર કેટલા મહાસાગરો આવેલાં છે ?",
            "a": [
                {
                    "option": "3",
                    "correct": false
                },
                {
                    "option": "4",
                    "correct": true
                },
                {
                    "option": "5",
                    "correct": false
                },
                {
                    "option": "6",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 4</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "આમાંથી કયું નામ મહાસાગરનું નથી ?",
            "a": [
                {
                    "option": "ઍટલૅન્ટીક",
                    "correct": false
                },
                {
                    "option": "આર્કટિક",
                    "correct": false
                },
                {
                    "option": "ઍન્ટાર્કટિકા",
                    "correct": true
                },
                {
                    "option": "પૅસિફિક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઍન્ટાર્કટિકા</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": " 0<sup>0</sup> થી 23.5<sup>0</sup> ઉત્તર અને દક્ષિણ અક્ષાંશ વચ્ચે ક્યો કટિબંધ આવેલો છે ?",
            "a": [
                {
                    "option": "સમશીતોષ્ણ કટિબંધ",
                    "correct": false
                },
                {
                    "option": "શીત કટિબંધ",
                    "correct": false
                },
                {
                    "option": "ઉષ્ણ કટિબંધ",
                    "correct": true
                },
                {
                    "option": "સમ કટિબંધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉષ્ણ કટિબંધ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": " 66.5<sup>0</sup> થી 90<sup>0</sup> ઉત્તર અને દક્ષિણ અક્ષાંશ વચ્ચે ક્યો કટિબંધ આવેલો છે ?",
            "a": [
                {
                    "option": "સમશીતોષ્ણ કટિબંધ",
                    "correct": false
                },
                {
                    "option": "શીત કટિબંધ",
                    "correct": true
                },
                {
                    "option": "ઉષ્ણ કટિબંધ",
                    "correct": false
                },
                {
                    "option": "સમ કટિબંધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શીત કટિબંધ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "23.5<sup>0</sup> થી 66.5<sup>0</sup> ઉત્તર અને દક્ષિણ અક્ષાંશ વચ્ચે ક્યો કટિબંધ આવેલો છે ?",
            "a": [
                {
                    "option": "સમશીતોષ્ણ કટિબંધ",
                    "correct": true
                },
                {
                    "option": "શીત કટિબંધ",
                    "correct": false
                },
                {
                    "option": "ઉષ્ણ કટિબંધ",
                    "correct": false
                },
                {
                    "option": "સમ કટિબંધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમશીતોષ્ણ કટિબંધ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "કયો ખંડ દક્ષિણ ધ્રુવ સુધી વિસ્તરેલો છે ?",
            "a": [
                {
                    "option": "આફ્રિકા",
                    "correct": false
                },
                {
                    "option": "એશિયા",
                    "correct": false
                },
                {
                    "option": "ઍન્ટાર્કટિકા",
                    "correct": true
                },
                {
                    "option": "ઑસ્ટ્રેલિયા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઍન્ટાર્કટિકા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },

        { // Question 20
            "q": "સૂર્યનાં કિરણો થોડા ત્રાંસાં પડે તેને ક્યો કટિબંધ કહેવાય ?",
            "a": [
                {
                    "option": "સમશીતોષ્ણ કટિબંધ",
                    "correct": true
                },
                {
                    "option": "શીત કટિબંધ",
                    "correct": false
                },
                {
                    "option": "ઉષ્ણ કટિબંધ",
                    "correct": false
                },
                {
                    "option": "સમ કટિબંધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમશીતોષ્ણ કટિબંધ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 21
            "q": "સૂર્યનાં કિરણો વધુ ત્રાંસાં પડે તેને ક્યો કટિબંધ કહેવાય ?",
            "a": [
                {
                    "option": "સમશીતોષ્ણ કટિબંધ",
                    "correct": false
                },
                {
                    "option": "શીત કટિબંધ",
                    "correct": true
                },
                {
                    "option": "ઉષ્ણ કટિબંધ",
                    "correct": false
                },
                {
                    "option": "સમ કટિબંધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શીત કટિબંધ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 22
            "q": "સૂર્યનાં કિરણો સીધા પડે તેને ક્યો કટિબંધ કહેવાય ?",
            "a": [
                {
                    "option": "સમશીતોષ્ણ કટિબંધ",
                    "correct": false
                },
                {
                    "option": "શીત કટિબંધ",
                    "correct": false
                },
                {
                    "option": "ઉષ્ણ કટિબંધ",
                    "correct": true
                },
                {
                    "option": "સમ કટિબંધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉષ્ણ કટિબંધ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "કયો ભૂમિખંડ હિમાચ્છાદિત છે ?",
            "a": [
                {
                    "option": "આફ્રિકા",
                    "correct": false
                },
                {
                    "option": "એશિયા",
                    "correct": false
                },
                {
                    "option": "ઍન્ટાર્કટિકા",
                    "correct": true
                },
                {
                    "option": "ઑસ્ટ્રેલિયા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઍન્ટાર્કટિકા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "આપણે કયા ખંડમાં રહીએ છીએ ?",
            "a": [
                {
                    "option": "આફ્રિકા",
                    "correct": false
                },
                {
                    "option": "એશિયા",
                    "correct": true
                },
                {
                    "option": "ઍન્ટાર્કટિકા",
                    "correct": false
                },
                {
                    "option": "ઑસ્ટ્રેલિયા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: એશિયા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },

        { // Question 25
            "q": "વિષુવવૃત્તથી 66.5<sup>0</sup> ઉત્તરે આવેલી કાલ્પનિક આડી રેખાને શું કહે છે ?",
            "a": [
                {
                    "option": "મકરવૃત્ત",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": false
                },
                {
                    "option": "ઉત્તર ધ્રુવવૃત્ત",
                    "correct": true
                },
                {
                    "option": "દક્ષિણ ધ્રુવવૃત્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તર ધ્રુવવૃત્ત</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       },
        { // Question 26
            "q": "વિષુવવૃત્તથી 66.5<sup>0</sup> દક્ષિણે આવેલી કાલ્પનિક આડી રેખાને શું કહે છે ?",
            "a": [
                {
                    "option": "મકરવૃત્ત",
                    "correct": false
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": false
                },
                {
                    "option": "ઉત્તર ધ્રુવવૃત્ત",
                    "correct": false
                },
                {
                    "option": "દક્ષિણ ધ્રુવવૃત્ત",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દક્ષિણ ધ્રુવવૃત્ત</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       },
        { // Question 27
            "q": "વિષુવવૃત્તથી ઉત્તરે આવેલાં પૃથ્વીના અડધા ભાગને શું કહેવાય છે ?",
            "a": [
                {
                    "option": "ઉત્તર ગોળાર્ધ",
                    "correct": true
                },
                {
                    "option": "દક્ષિણ ગોળાર્ધ",
                    "correct": false
                },
                {
                    "option": "પૂર્વ ગોળાર્ધ",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ ગોળાર્ધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉત્તર ગોળાર્ધ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       },
        { // Question 28
            "q": "વિષુવવૃત્તથી દક્ષિણે આવેલાં પૃથ્વીના અડધા ભાગને શું કહેવાય છે ?",
            "a": [
                {
                    "option": "ઉત્તર ગોળાર્ધ",
                    "correct": false
                },
                {
                    "option": "દક્ષિણ ગોળાર્ધ",
                    "correct": true
                },
                {
                    "option": "પૂર્વ ગોળાર્ધ",
                    "correct": false
                },
                {
                    "option": "પશ્ચિમ ગોળાર્ધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દક્ષિણ ગોળાર્ધ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       },
        { // Question 29
            "q": "વિષુવવૃત્ત પૃથ્વીના ગોળાના કેટલા ભાગ કરે છે ?",
            "a": [
                {
                    "option": "4",
                    "correct": false
                },
                {
                    "option": "2",
                    "correct": true
                },
                {
                    "option": "6",
                    "correct": false
                },
                {
                    "option": "5",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 2</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       },
        { // Question 30
            "q": "કોઈ પણ દેશની માલિકી ન ધરાવતો અને માનવ વસવાટ ન ધરાવતો ભૂમિખંડ ક્યો છે ?",
            "a": [
                {
                    "option": "આફ્રિકા",
                    "correct": false
                },
                {
                    "option": "એશિયા",
                    "correct": false
                },
                {
                    "option": "ઍન્ટાર્કટિકા",
                    "correct": true
                },
                {
                    "option": "ઑસ્ટ્રેલિયા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઍન્ટાર્કટિકા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 31
            "q": "સૌથી વધુ ઠંડી કયા કટિબંધમાં પડે છે ?",
            "a": [
                {
                    "option": "સમશીતોષ્ણ કટિબંધ",
                    "correct": false
                },
                {
                    "option": "ઉષ્ણ કટિબંધ",
                    "correct": false
                },
                {
                    "option": "શીત કટિબંધ",
                    "correct": true
                },
                {
                    "option": "સમ કટિબંધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શીત કટિબંધ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "સૌથી વધુ ગરમી કયા કટિબંધમાં પડે છે ?",
            "a": [
                {
                    "option": "સમશીતોષ્ણ કટિબંધ",
                    "correct": false
                },
                {
                    "option": "શીત કટિબંધ",
                    "correct": false
                },
                {
                    "option": "ઉષ્ણ કટિબંધ",
                    "correct": true
                },
                {
                    "option": "સમ કટિબંધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઉષ્ણ કટિબંધ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 33
            "q": "ક્યા કટિબંધમાં ગરમી-ઠંડી સરખી રહે છે ?",
            "a": [
                {
                    "option": "સમશીતોષ્ણ કટિબંધ",
                    "correct": true
                },
                {
                    "option": "શીત કટિબંધ",
                    "correct": false
                },
                {
                    "option": "ઉષ્ણ કટિબંધ",
                    "correct": false
                },
                {
                    "option": "સમ કટિબંધ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમશીતોષ્ણ કટિબંધ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 34
            "q": "0<sup>0</sup> અક્ષાંશવૃત્તને શું કહે છે ?",
            "a": [
                {
                    "option": "વિષુવવૃત્ત",
                    "correct": true
                },
                {
                    "option": "કર્કવૃત્ત",
                    "correct": false
                },
                {
                    "option": "મકરવૃત્ત",
                    "correct": false
                },
                {
                    "option": "અયનવૃત્ત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વિષુવવૃત્ત</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        } // no comma here 
    ]
};
