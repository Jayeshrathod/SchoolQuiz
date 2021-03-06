// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 9 ઈ.સ. 1857નો સ્વાતંત્ર્ય સંગ્રામ",
        "subject": "સામાજિક વિજ્ઞાન",
        "standard": "8",
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
            "q": "સૌપ્રથમ કયા સ્થળની પલટને નવી રાઈફલો સ્વીકારવાનો ઇન્કાર કર્યો ? ",
            "a": [
                {
                    "option": "કાનપુરની",
                    "correct": false
                },
                {
                    "option": "જબલપુરની",
                    "correct": false
                },
                {
                    "option": "બરાકપુરની",
                    "correct": true
                },
                {
                    "option": "જગદીશપુરની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બરાકપુરની</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ઇ.સ. 1857માં સ્વાતંત્ર્યસંગ્રામ શરૂ કરવા માટે કયો દિવસ નક્કી કરવામાં આવ્યો હતો ?",
            "a": [
                {
                    "option": "20 મે",
                    "correct": false
                },
                {
                    "option": "31 મે",
                    "correct": true
                },
                {
                    "option": "1 જૂન",
                    "correct": false
                },
                {
                    "option": "10 જુલાઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 31 મે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ઇ.સ. 1857માં ભારતના લશ્કરમાં નવી રાઇફલ દાખલ કરવામાં આવી તેનું નામ શું હતું ?",
            "a": [
                {
                    "option": "એની રાઈફલ",
                    "correct": false
                },
                {
                    "option": "એટલી રાઈફલ",
                    "correct": false
                },
                {
                    "option": "એનફિલ્ડ રાઇફલ",
                    "correct": true
                },
                {
                    "option": "ફિલ્ડ રાઇફલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: એનફિલ્ડ રાઇફલ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "નવી રાઇફલમાં વપરાતી કારતૂસમાં શાની ચરબીનો ઉપયોગ થયો હતો ?",
            "a": [
                {
                    "option": "ગાય-બકરી",
                    "correct": false
                },
                {
                    "option": "ડુક્કર-બકરી",
                    "correct": false
                },
                {
                    "option": "ગાય-ડુક્કર",
                    "correct": true
                },
                {
                    "option": "ગાય-કૂતરા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગાય-ડુક્કર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ઇ.સ. 1857 સ્વાતંત્ર્યસંગ્રામના પ્રથમ શહીદ કોણ હતા ?",
            "a": [
                {
                    "option": "નાનાસાહેબ પેશ્વા",
                    "correct": false
                },
                {
                    "option": "તાત્યા ટોપે",
                    "correct": false
                },
                {
                    "option": "મંગળપાંડે",
                    "correct": true
                },
                {
                    "option": "ઝાંસીની રાણી લક્ષ્મીબાઈ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મંગળપાંડે</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "બિહારમાં સ્વાતંત્ર્યસંગ્રામની નેતાગીરી કોણે લીધી ?",
            "a": [
                {
                    "option": "કુંવરસિંહે",
                    "correct": true
                },
                {
                    "option": "નાનાસાહેબ પેશ્વાએ",
                    "correct": false
                },
                {
                    "option": "જગદીશસિંહે",
                    "correct": false
                },
                {
                    "option": "બહાદુરશાહ ઝફરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુંવરસિંહે</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "દિલ્લીના સ્વાતંત્ર્યસંગ્રામના નેતા કોણ હતા ? ",
            "a": [
                {
                    "option": "જગદીશસિંહ",
                    "correct": false
                },
                {
                    "option": "કુંવરસિંહ",
                    "correct": false
                },
                {
                    "option": "બહાદુરશાહ ઝફર",
                    "correct": true
                },
                {
                    "option": "નાનાસાહેબ પેશ્વા",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બહાદુરશાહ ઝફર</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "કાનપુરના સ્વાતંત્ર્યસંગ્રામના નેતા કોણ હતા ? ",
            "a": [
                {
                    "option": "નાનાસાહેબ પેશ્વા",
                    "correct": true
                },
                {
                    "option": "જગદીશસિંહ",
                    "correct": false
                },
                {
                    "option": "કુંવરસિંહ",
                    "correct": false
                },
                {
                    "option": "બહાદુરશાહ ઝફર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાનાસાહેબ પેશ્વા</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "કાનપુરની મુક્તિ માટેની સેનાનું સેનાપતિપદ કોણે કુનેહપૂર્વક સંભાળ્યું હતું ? ",
            "a": [
                {
                    "option": "મંગળપાંડે",
                    "correct": false
                },
                {
                    "option": "તાત્યા ટોપે",
                    "correct": true
                },
                {
                    "option": "નાનાસાહેબ પેશ્વા",
                    "correct": false
                },
                {
                    "option": "કુંવરસિંહ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તાત્યા ટોપે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "સ્વાતંત્ર્યસંગ્રામ શરૂ થતાં મેરઠના સિપાઈઓએ સૌપ્રથમ કયા શહેરનો કબજો લીધો ?",
            "a": [
                {
                    "option": "કાનપુર",
                    "correct": false
                },
                {
                    "option": "લખનૌ",
                    "correct": false
                },
                {
                    "option": "અલાહાબાદ",
                    "correct": false
                },
                {
                    "option": "દિલ્લી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દિલ્લી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "સ્વાતંત્ર્યસંગ્રામના કયા નેતાએ પોતે જ પોતાની તલવારથી હાથને કોણીમાંથી કાપીને ગંગામાં પધરાવી દીધો હતો ?",
            "a": [
                {
                    "option": "નાનાસાહેબ પેશ્વાએ",
                    "correct": false
                },
                {
                    "option": "તાત્યા ટોપેએ",
                    "correct": false
                },
                {
                    "option": "કુંવરસિંહે",
                    "correct": true
                },
                {
                    "option": "બહાદુરશાહ ઝફરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુંવરસિંહે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "કયા રાજ્યનો દત્તક પુત્રનો ગાદી ઉપરનો હક અંગ્રેજોએ સ્વીકાર્યો ન હતો ?",
            "a": [
                {
                    "option": "ઝાંસીનો",
                    "correct": true
                },
                {
                    "option": "અયોધ્યાનો",
                    "correct": false
                },
                {
                    "option": "હૈદરાબાદનો",
                    "correct": false
                },
                {
                    "option": "કાનપુરનો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઝાંસીનો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "જૂન, 1858માં ગુજરાતમાં સ્વાતંત્ર્યસંગ્રામનો આરંભ કોણે કર્યો હતો ?",
            "a": [
                {
                    "option": "ખેડા જિલ્લામાં ગરબડદાસે",
                    "correct": false
                },
                {
                    "option": "અમદાવાદની 7મી લશ્કરી ટુકડીએ",
                    "correct": true
                },
                {
                    "option": "ઉમરપુરના જોધા માણેકે",
                    "correct": false
                },
                {
                    "option": "નાંદોદની ભારતીય સૈનિકોની ટુકડીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અમદાવાદની 7મી લશ્કરી ટુકડીએ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "સ્વાતંત્ર્યસંગ્રામના કયા અગ્રગણ્ય નેતા ગુજરાતમાં આશરે 15 દિવસ સુધી રહ્યા હતા ?",
            "a": [
                {
                    "option": "જગદીશસિંહ",
                    "correct": false
                },
                {
                    "option": "નાનાસાહેબ પેશ્વા",
                    "correct": false
                },
                {
                    "option": "કુંવરસિંહ",
                    "correct": false
                },
                {
                    "option": "તાત્યા ટોપે",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તાત્યા ટોપે</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "ઇ.સ. 1857 સ્વાતંત્ર્યસંગ્રામની શરૂઆત ક્યારે થઈ હતી ?",
            "a": [
                {
                    "option": "12 જાન્યુઆરીએ",
                    "correct": false
                },
                {
                    "option": "10 મેએ",
                    "correct": true
                },
                {
                    "option": "10 નવેમ્બરે",
                    "correct": false
                },
                {
                    "option": "15 ઑગસ્ટે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 10 મેએ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "કાનપુરમાં સ્વાતંત્ર્યસંગ્રામ ક્યારે શરૂ થયો ?",
            "a": [
                {
                    "option": "4 જૂન,1857ના રોજ",
                    "correct": false
                },
                {
                    "option": "10 મે,1857ના રોજ",
                    "correct": true
                },
                {
                    "option": "31 મે,1857ના રોજ",
                    "correct": false
                },
                {
                    "option": "4 મે,1857ના રોજ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 10 મે,1857ના રોજ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "અંગ્રેજ લશ્કરના તોપમારાથી બેટ દ્વારકાના કિલ્લાને બચાવવા કોણે અદ્વિતિય કામ કર્યું ?",
            "a": [
                {
                    "option": "દાહોદી સ્ત્રીઓએ",
                    "correct": false
                },
                {
                    "option": "રાણી લક્ષ્મીબાઈએ",
                    "correct": false
                },
                {
                    "option": "સંથાલ લોકોએ",
                    "correct": false
                },
                {
                    "option": "વાઘેર સ્ત્રીઓએ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વાઘેર સ્ત્રીઓએ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "ઇ.સ. 1857 સ્વાતંત્ર્યસંગ્રામ નિષ્ફળ ગયો એ માટે કયું કારણ ખરું નથી ?",
            "a": [
                {
                    "option": "કેન્દ્રીય સંગઠનનો અભાવ.",
                    "correct": false
                },
                {
                    "option": "હિંદિ સિપાઇઓમાં દેશદાઝનો અભાવ.",
                    "correct": true
                },
                {
                    "option": "શરૂઆત નિશ્ચિત તારીખ કરતાં વહેલી થઈ.",
                    "correct": false
                },
                {
                    "option": "રાષ્ટ્રીય ભાવના ન હતી.",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હિંદિ સિપાઇઓમાં દેશદાઝનો અભાવ.</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "પંચમહાલમાં કયા લોકોનો સંગ્રામ લગભગ એક વર્ષ સુધી ચાલુ રહ્યો ?",
            "a": [
                {
                    "option": "વાઘેર",
                    "correct": false
                },
                {
                    "option": "નાગર",
                    "correct": false
                },
                {
                    "option": "નાયકડા",
                    "correct": true
                },
                {
                    "option": "સંથાલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાયકડા</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "તાત્યા ટોપેએ જીવનનાં અંતિમ વર્ષો ક્યાં ગાળ્યાં હોવાનું મનાય છે ?",
            "a": [
                {
                    "option": "અમદાવાદ",
                    "correct": false
                },
                {
                    "option": "સુરત",
                    "correct": false
                },
                {
                    "option": "વલસાડ",
                    "correct": false
                },
                {
                    "option": "નવસારી",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નવસારી</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here 
       },
        { // Question 21
            "q": "હિંદી સિપાહીને માસિક કેટલા રૂપિયા પગાર આપવામાં આવતો હતો ?",
            "a": [
                {
                    "option": "151",
                    "correct": false
                },
                {
                    "option": "6",
                    "correct": false
                },
                {
                    "option": "7",
                    "correct": true
                },
                {
                    "option": "150",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 7</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "લશ્કરમાં ભારતીય અને અંગ્રેજ સૈનિકોનું પ્રમાણ લગભગ કેટલું હતું ?",
            "a": [
                {
                    "option": "5:1",
                    "correct": false
                },
                {
                    "option": "7:1",
                    "correct": false
                },
                {
                    "option": "6:1",
                    "correct": true
                },
                {
                    "option": "1:6",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 6:1</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "અંગ્રેજ સિપાહીને માસિક કેટલા રૂપિયા પગાર આપવામાં આવતો હતો ?",
            "a": [
                {
                    "option": "151",
                    "correct": false
                },
                {
                    "option": "6",
                    "correct": false
                },
                {
                    "option": "7",
                    "correct": false
                },
                {
                    "option": "150",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 150</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "બ્રિટિશ શાસન સમયે કોઇ ભારતીય સમુદ્ર ઓળંગવાની મનાઈનું પાલન ન કરે તો તેને તેના સમાજના લોકો દ્વારા શું સજા કરવામાં આવતી ?",
            "a": [
                {
                    "option": "દેશનિકાલની સજા",
                    "correct": false
                },
                {
                    "option": "જ્ઞાતિ બહાર મુકવાની સજા",
                    "correct": true
                },
                {
                    "option": "ઘર બહાર કાઢી મુકવાની સજા",
                    "correct": false
                },
                {
                    "option": "ખાવા ન આપવાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જ્ઞાતિ બહાર મુકવાની સજા</sup>સે.</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        }, // no comma here 
    ]
};
