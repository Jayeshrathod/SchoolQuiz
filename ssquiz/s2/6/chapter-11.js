// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
	 "name":    "પ્રકરણ - 11  હક અને ફરજ (સિક્કાની બંને બાજુ)",
        "subject": "સામાજિક વિજ્ઞાન",
        "standard": "6",
	"semester": "2",
        "main":    "",
        "results": "<h5>વધુ વાંચન કરો</h5>",
         "level1":  "(ગ્રેડ A) ખૂબ સારુ પરિણામ <p><strong class='inst'>સૂચન:</strong> પણ મહેનત જરૂર કરવી.</p>",
        "level2":  "(ગ્રેડ B) સારુ પરિણામ <p><strong class='inst'>સૂચન:</strong> મહેનત કરવાની જરૂર છે.</p>",
        "level3":  "(ગ્રેડ C) સાધારણ પરિણામ <p><strong class='inst'>સૂચન:</strong> ઘરે મહેનત કરવાની જરૂર છે.</p>",
        "level4":  "(ગ્રેડ D) નબળુ પરિણામ <p><strong class='inst'>સૂચન:</strong> શીખવામાં ધ્યાન આપો.</span></p>",
        "level5":  "(ગ્રેડ E) ખૂબ જ નબળુ પરિણામ <p><strong class='inst'>સૂચન:</strong> શીખવામાં ધ્યાન આપવાની ખૂબ જ જરૂર છે.</p>" // no comma here
    },
    "questions": [
        { // Question 1
           "q": "બંધારણે નાગરિકના સંપૂર્ણ સર્વાંગી વિકાસ માટે શું આપેલું છે ?",
            "a": [
                {"option": "પ્રલોભનો",      "correct": false},
                {"option": "નાણા",     "correct": false},
                {"option": "ઉદ્યોગો",      "correct": false},
                {"option": "મૂળભૂત હકો",     "correct": true} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મૂળભૂત હકો</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "શિક્ષણનો અધિકાર કેટલા વર્ષના વયજૂથ માટે અમલમાં આવ્યો છે ?",
            "a": [
                {"option": "18 થી 23 વર્ષના",      "correct": false},
                {"option": "6 થી 14 વર્ષના",     "correct": true},
                {"option": "1 થી 5 વર્ષના",      "correct": false},
                {"option": "35 થી 40 વર્ષના",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 6 થી 14 વર્ષના</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "કેટલા વર્ષ પૂર્ણ થાય પછી મતદાનનો અધિકાર મળે છે ?",
            "a": [
                {"option": "21 વર્ષ",      "correct": false},
                {"option": "14 વર્ષ",     "correct": false},
                {"option": "18 વર્ષ",      "correct": true},
                {"option": "20 વર્ષ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: 18 વર્ષ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ભારતનો નાગરિક વિવિધ મંડળોની રચના કયા હકથી કરી શકે છે ?",
            "a": [
                {"option": "સાંસ્કૃતિક હક",      "correct": false},
                {"option": "શોષણ સામેનો હક",     "correct": false},
                {"option": "સ્વાતંત્ર્યનો હક",      "correct": true},
                {"option": "શૈક્ષણિક હક",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્વાતંત્ર્યનો હક</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ભારતના નાગરિકને કોઈ પણ ધર્મ પાળવાનો અધિકાર ક્યા હકથી મળ્યો છે ?",
            "a": [
                {"option": "ધર્મ-સ્વાતંત્ર્યનો હક",      "correct": true},
                {"option": "શોષણ સામેનો હક",     "correct": false},
                {"option": "વાણી-સ્વાતંત્ર્યનો હક",      "correct": false},
                {"option": "સમાનતાનો હક",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધર્મ-સ્વાતંત્ર્યનો હક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        }, 
	{ // Question 6
            "q": "મૂળભૂત હકોના રક્ષણ માટે દેશના નાગરિકોને કયો હક આપવામાં આવ્યો છે ?",
            "a": [
                {"option": "સમાનતાનો હક",      "correct": false},
                {"option": "સ્વાતંત્ર્યનો હક",     "correct": false},
                {"option": "શોષણ સામેનો હક",      "correct": false},
                {"option": "બંધારણીય ઇલાજનો હક",     "correct": true} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બંધારણીય ઇલાજનો હક</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ભારતના તમામ નાગરિકો કેવા છે ?",
            "a": [
                {"option": "સમાન",      "correct": true},
                {"option": "અસમાન",     "correct": false},
                {"option": "ગરીબ",      "correct": false},
                {"option": "તવંગર",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમાન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "આપણે આપણી ફરજોનું બરાબર પાલન કરીએ તો દરેક જણ શું ભોગવી શકે ?",
            "a": [
                {"option": "આરામ",      "correct": false},
                {"option": "હક",     "correct": true},
                {"option": "આનંદ",      "correct": false},
                {"option": "ગરીબી",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હક</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
           "q": "ભારતના નાગરિકને કોઈ પણ સંસ્થાની સ્થાપના કરવાનો અધિકાર કયા હકથી મળ્યો છે ?",
            "a": [
                {"option": "સમાનતાના હક",      "correct": false},
                {"option": "સાંસ્કૃતિક અને શૈક્ષણિક હક",     "correct": true},
                {"option": "શોષણ સામેના હક",      "correct": false},
                {"option": "બંધારણીય ઇલાજના હક",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સાંસ્કૃતિક અને શૈક્ષણિક હક</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "'જમીનદાર ખેડૂત પાસે પૂરૂં કામ કરાવી ખેડૂતને ઓછી મજૂરી આપતા હતા.'આ બાબત ખેડૂતનો કયો હક છીનવી લે છે ? ",
            "a": [
                {"option": "સમાનતાનો હક",      "correct": false},
                {"option": "સ્વાતંત્ર્યનો હક",     "correct": false},
                {"option": "શોષણ સામેનો હક",      "correct": true},
                {"option": "બંધારણીય ઇલાજનો હક",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શોષણ સામેનો હક</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "રમેશભાઈને હિન્દુ ધર્મનો પ્રચાર કરવાનો અધિકાર કયા હકથી મળ્યો છે ?",
            "a": [
                {"option": "ધર્મ-સ્વાતંત્ર્યના હક",      "correct": true},
                {"option": "શોષણ સામેના હક",     "correct": false},
                {"option": "વાણી-સ્વાતંત્ર્યના હક",      "correct": false},
                {"option": "સમાનતાના હક",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધર્મ-સ્વાતંત્ર્યના હક</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "'ભરતભાઇ મજૂર પાસે બળજબરીથી કામ કરાવતા હતા.' આ બનાવ મજૂરનો કયા હકને છીનવી લે છે ?",
            "a": [
                {"option": "ધર્મ-સ્વાતંત્ર્યનો હક",      "correct": false},
                {"option": "શોષણ સામેનો હક",     "correct": true},
                {"option": "વાણી-સ્વાતંત્ર્યનો હક",      "correct": false},
                {"option": "સમાનતાનો હક",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શોષણ સામેનો હક</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "હાલમાં કોઈ પણ જાતિના સ્ત્રી કે પુરુષને દરેક ક્ષેત્રે સરખી તક કયા હકના કારણે મળે છે ?",
            "a": [
                {"option": "ધર્મ-સ્વાતંત્ર્યના હક",      "correct": false},
                {"option": "શોષણ સામેના હક",     "correct": false},
                {"option": "વાણી-સ્વાતંત્ર્યના હક",      "correct": false},
                {"option": "સમાનતાના હક",     "correct": true} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમાનતાના હક</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
           "q": "હાલમાં ભારતનો કોઈ પણ નાગરિક કોઈ પણ સરકારી કચેરી કે સરકાર દ્વારા અનુદાનિત કચેરીમાંથી સરળતાથી માહિતી કયા હકથી મેળવી શકે છે ?",
            "a": [
                {"option": "સમાનતાના હક",      "correct": false},
                {"option": "માહિતી મેળવવાના હક",     "correct": true},
                {"option": "શોષણ સામેના હક",      "correct": false},
                {"option": "બંધારણીય ઇલાજના હક",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માહિતી મેળવવાના હક</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "નીચેનામાંથી કયો હક નથી ?",
            "a": [
                {"option": "પર્યાવરણનું જતનનો",      "correct": true},
                {"option": "સમાનતાનો",     "correct": false},
                {"option": "ધાર્મિક સ્વાતંત્ર્યનો",      "correct": false},
                {"option": "બંધારણીય ઇલાજનો",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પર્યાવરણનું જતનનો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        }, 
	{ // Question 16
            "q": "નીચેનામાંથી કઈ ફરજ નથી ?",
            "a": [
                {"option": "રાષ્ટ્ર્ગીતનો આદર કરવાની",      "correct": false},
                {"option": "એકતા અખંડિતતાનું રક્ષણ કરવાની",     "correct": false},
                {"option": "માહિતી મેળવવાની",      "correct": true},
                {"option": "જાહેર મિલકતોનું રક્ષણ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: માહિતી મેળવવાની</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
           "q": "અખબાર સરકારની ટીકા ટીપ્પણી કયા હકના કારણે કરી શકે છે ?",
            "a": [
                {"option": "સમાનતાના હક",      "correct": false},
                {"option": "લેખન-વાણી સ્વાતંત્ર્યના હક",     "correct": true},
                {"option": "શોષણ સામેના હક",      "correct": false},
                {"option": "બંધારણીય ઇલાજના હક",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લેખન-વાણી સ્વાતંત્ર્યનો હક</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "'રામજીભાઈ પોતાના સગીર વયના છોકરાને ઘરે મજૂરી કરાવે છે.' આમાં હક કોણ ગુમાવે છે ?",
            "a": [
                {"option": "છોકરો",      "correct": true},
                {"option": "રામજીભાઈ",     "correct": false},
                {"option": "છોકરો અને રામજીભાઈ બન્ને",      "correct": false},
                {"option": "આપેલા ત્રણેય",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: છોકરો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
	{ // Question 19
            "q": "'રામજીભાઈ પોતાના સગીર વયના છોકરાને ઘરે મજૂરી કરાવે છે.' આમાં ફરજ કોણે ગુમાવી છે ?",
            "a": [
                {"option": "છોકરાએ",      "correct": false},
                {"option": "રામજીભાઈએ",     "correct": true},
                {"option": "છોકરા અને રામજીભાઈ બન્નેએ",      "correct": false},
                {"option": "આપેલા ત્રણેય",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રામજીભાઈએ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "'સવિતાબાને મંદિરમાં કેટલાક લોકો દર્શન કરવા દેતા નથી.' આમાં હક કોણે ગુમાવ્યો ?",
            "a": [
                {"option": "દર્શન ન કરવા દેનાર લોકોએ",      "correct": false},
                {"option": "સવિતાબાએ",     "correct": true},
                {"option": "સવિતાબા અને દર્શન ન કરવા દેનાર લોકો બન્નેએ",      "correct": false},
                {"option": "એકેય નહીં",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સવિતાબાએ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 21
            "q": "'સવિતાબાને મંદિરમાં કેટલાક લોકો દર્શન કરવા દેતા નથી.' આમાં ફરજ કોણે ગુમાવી ?",
            "a": [
                {"option": "દર્શન ન કરવા દેનાર લોકોએ",      "correct": true},
                {"option": "સવિતાબાએ",     "correct": false},
                {"option": "સવિતાબા અને દર્શન ન કરવા દેનાર લોકો બન્નેએ",      "correct": false},
                {"option": "એકેય નહીં",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દર્શન ન કરવા દેનાર લોકોએ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "'મનિન્દરસિંહને ખાનગી શાળામાં પ્રવેશ મળતો નથી' આમાં હક કોણે ગુમાવ્યો ? ",
            "a": [
                {"option": "મનિન્દરસિંહે",      "correct": true},
                {"option": "શાળાના આચાર્યશ્રીએ",     "correct": false},
                {"option": "મનિન્દરસિંહ અને શાળાના આચાર્યશ્રી બન્નેએ",      "correct": false},
                {"option": "એકેય નહીં",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મનિન્દરસિંહે</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 23
            "q": "'મનિન્દરસિંહને ખાનગી શાળામાં પ્રવેશ મળતો નથી' આમાં ફરજ કોણે ગુમાવી ? ",
            "a": [
                {"option": "મનિન્દરસિંહે",      "correct": false},
                {"option": "શાળાના આચાર્યશ્રીએ",     "correct": true},
                {"option": "મનિન્દરસિંહ અને શાળાના આચાર્યશ્રી બન્નેએ",      "correct": false},
                {"option": "એકેય નહીં",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: શાળાના આચાર્યશ્રીએ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        }, 
	{ // Question 24
            "q": "'જોસેફની અરજીનો મામલતદાર નિકાલ કરતા નથી' આમાં હક કોણે ગુમાવ્યો ?",
            "a": [
                {"option": "મામલતદારે",      "correct": false},
                {"option": "જોસેફ મામલતદાર બન્નેએ",     "correct": false},
                {"option": "જોસેફે",      "correct": true},
                {"option": "આપેલા ત્રણેય",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જોસેફે</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 25
            "q": "'જોસેફની અરજીનો મામલતદાર નિકાલ કરતા નથી' આમાં ફરજ કોણે ગુમાવી ?",
            "a": [
                {"option": "મામલતદારે",      "correct": true},
                {"option": "જોસેફ મામલતદાર બન્નેએ",     "correct": false},
                {"option": "જોસેફે",      "correct": false},
                {"option": "આપેલા ત્રણેય",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મામલતદારે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 26
            "q": "'પેસ્તનજીના પાડોશી રમેશભાઈ જોરથી ટેપ વગાડે છે.' આમાં હક કોણે ગુમાવ્યો ?",
            "a": [
                {"option": "પેસ્તનજીએ",      "correct": true},
                {"option": "રમેશભાઈએ",     "correct": false},
                {"option": "પેસ્તનજી અને રમેશભાઈ બન્નેએ",      "correct": false},
                {"option": "આપેલા ત્રણેય",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પેસ્તનજીએ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 27
           "q": "'પેસ્તનજીના પાડોશી રમેશભાઈ જોરથી ટેપ વગાડે છે.' આમાં ફરજ કોણે ગુમાવી ?",
            "a": [
                {"option": "પેસ્તનજીએ",      "correct": false},
                {"option": "રમેશભાઈએ",     "correct": true},
                {"option": "પેસ્તનજી અને રમેશભાઈ બન્નેએ",      "correct": false},
                {"option": "આપેલા ત્રણેય",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રમેશભાઈએ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 28
            "q": "'ભરત રમેશને શાંતિથી ભણવા દેતો નથી.' આમાં હક કોણે ગુમાવ્યો ?",
            "a": [
                {"option": "ભરતે",      "correct": false},
                {"option": "રમેશે",     "correct": true},
                {"option": "રવિએ",      "correct": false},
                {"option": "ભરત અને રમેશ બન્નેએ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રમેશે</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 29
            "q": "'ભરત રમેશને શાંતિથી ભણવા દેતો નથી.' આમાં ફરજ કોણે ગુમાવી ?",
            "a": [
                {"option": "ભરતે",      "correct": true},
                {"option": "રમેશે",     "correct": false},
                {"option": "રવિએ",      "correct": false},
                {"option": "ભરત અને રમેશ બન્નેએ",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ભરતે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 30
            "q": "વેરો ભરવાથી જ શાનો હક મળી શકે ?",
            "a": [
                {"option": "રમવાનો",      "correct": false},
                {"option": "જમવાનો",     "correct": false},
                {"option": "જાહેર સુવિધાનો",      "correct": true},
                {"option": "ફરવાનો",     "correct": false} // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જાહેર સુવિધાનો</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        } // no comma here 
    ]
};




