// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 8  મધ્યયુગનું દિલ્લીદર્શન",
        "subject": "સામાજિક વિજ્ઞાન",
        "standard": "7",
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
            "q": "દિલ્લી અને દોલતાબાદ વચ્ચે રાજધાનીનું સ્થ્ળાંતર કોણે કર્યું હતું ?",
            "a": [
                {
                    "option": "મહંમદ તુઘલુક",
                    "correct": true
                },
                {
                    "option": "અલાઉદ્દીન ખલજી",
                    "correct": false
                },
                {
                    "option": "ગ્યાસુદ્દીન તુઘલુક",
                    "correct": false
                },
                {
                    "option": "જલાલુદ્દીન ખલજી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહંમદ તુઘલુક</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ગુલામ વંશનો ખરો સ્થાપક કોને માનવામાં આવે છે ?",
            "a": [
                {
                    "option": "ઇલ્તુત્મિશને",
                    "correct": true
                },
                {
                    "option": "અલ્તમશને",
                    "correct": false
                },
                {
                    "option": "શાહબુદ્દીન ઘોરીને",
                    "correct": false
                },
                {
                    "option": "કુત્બુદ્દીન ઐબકને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇલ્તુત્મિશને</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "ગુલામ વંશની સ્થાપના કોને કરી ?",
            "a": [
                {
                    "option": "ઇલ્તુત્મિશે",
                    "correct": false
                },
                {
                    "option": "અલ્તમશે",
                    "correct": false
                },
                {
                    "option": "કુત્બુદ્દીન ઐબકે",
                    "correct": true
                },
                {
                    "option": "શાહબુદ્દીન ઘોરીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુત્બુદ્દીન ઐબકે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "અફઘાનિસ્તાનના ખલ્જ નામના સ્થળે રહેતી તુર્ક જાતિને શું કહેવામાં આવતી હતી ?",
            "a": [
                {
                    "option": "ગુલામ",
                    "correct": false
                },
                {
                    "option": "તઘલખ",
                    "correct": false
                },
                {
                    "option": "ખલજી",
                    "correct": true
                },
                {
                    "option": "મુઘલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખલજી</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "દિલ્લીની ગાદી ઉપર ખલજી વંશની સ્થાપના કોણે કરી ?",
            "a": [
                {
                    "option": "નાસિરુદ્દીને",
                    "correct": false
                },
                {
                    "option": "ગ્યાસુદ્દીને",
                    "correct": false
                },
                {
                    "option": "અલાઉદ્દીને",
                    "correct": false
                },
                {
                    "option": "જલાલુદ્દીને",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જલાલુદ્દીને</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "દિલ્લીની ગાદી ઉપર આવનાર સૌ પ્રથમ મહિલા શાસક કોણ હતી ? ",
            "a": [
                {
                    "option": "નાયિકા દેવી",
                    "correct": false
                },
                {
                    "option": "રઝિયા બેગમ",
                    "correct": true
                },
                {
                    "option": "લક્ષ્મીબાઈ",
                    "correct": false
                },
                {
                    "option": "ઉદયમતી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રઝિયા બેગમ</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "દિલ્લી ઉપર ગુલામવંશ પછી ગાદી ઉપર કયો વંશ આવ્યો ?",
            "a": [
                {
                    "option": "ખલજી",
                    "correct": true
                },
                {
                    "option": "તુઘલુક",
                    "correct": false
                },
                {
                    "option": "લોદી",
                    "correct": false
                },
                {
                    "option": "બહમની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખલજી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "દિલ્લીની ગાદી ઉપર તુઘલુક વંશની સ્થાપના કોણે કરી?",
            "a": [
                {
                    "option": "ગ્યાસુદ્દીન તુઘલુકે",
                    "correct": true
                },
                {
                    "option": "મહંમદ તુઘલુકે",
                    "correct": false
                },
                {
                    "option": "ફિરોજશાહ તુઘલુકે",
                    "correct": false
                },
                {
                    "option": "અહમદ તુઘલુકે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગ્યાસુદ્દીન તુઘલુકે</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 9
            "q": "દિલ્લી ઉપર ખલજી વંશ પછી કયો વંશ ગાદી ઉપર આવ્યો ?",
            "a": [
                {
                    "option": "લોદી",
                    "correct": false
                },
                {
                    "option": "તુઘલુક",
                    "correct": true
                },
                {
                    "option": "ગુલામ",
                    "correct": false
                },
                {
                    "option": "બહમની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તુઘલુક</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "તુઘલુક સમયમાં ટપાલીને શું કહેતા ?",
            "a": [
                {
                    "option": "પોસ્ટમેન",
                    "correct": false
                },
                {
                    "option": "તલાટી",
                    "correct": false
                },
                {
                    "option": "હલકારો",
                    "correct": true
                },
                {
                    "option": "હલકો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હલકારો</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "તાંજિરનો હબસી મુસાફર કયા સુલતાનનાં સમયમાં ભારતની મુલાકતે આવ્યો હતો ?",
            "a": [
                {
                    "option": "અલાઉદ્દીનના",
                    "correct": false
                },
                {
                    "option": "ગ્યાસુદ્દીનના",
                    "correct": false
                },
                {
                    "option": "જલાલુદ્દીનના",
                    "correct": false
                },
                {
                    "option": "મહંમદ તુઘલુકના",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મહંમદ તુઘલુકના</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "'મહંમદ શાહના રાજ્યમાં પ્રકાશ અને અંધકાર બંન્ને એક સાથે જોવા મળે છે ' આવું વાક્ય કોણે લખ્યું હતું ?",
            "a": [
                {
                    "option": "ફાહિયાને",
                    "correct": false
                },
                {
                    "option": "હ્યુ-એન-ત્સાંગે",
                    "correct": false
                },
                {
                    "option": "ઈબ્નબતૂતાએ",
                    "correct": true
                },
                {
                    "option": "મેગસ્થેનિસે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઈબ્નબતૂતાએ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "કયો સુલતાન દેવગિરિમાંથી અઢળક ધન દિલ્લી લઈ ગયો હતો ?",
            "a": [
                {
                    "option": "મહંમદ તુઘલુક",
                    "correct": false
                },
                {
                    "option": "અલાઉદ્દીન ખલજી",
                    "correct": true
                },
                {
                    "option": "ગ્યાસુદ્દીન તુઘલુક",
                    "correct": false
                },
                {
                    "option": "જલાલુદ્દીન ખલજી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અલાઉદ્દીન ખલજી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "વિજયનગરની સ્થાપના કઈ નદીના કિનારે થઈ ?",
            "a": [
                {
                    "option": "કૃષ્ણા",
                    "correct": false
                },
                {
                    "option": "તુંગભદ્રા",
                    "correct": true
                },
                {
                    "option": "ભીમા",
                    "correct": false
                },
                {
                    "option": "હુગલી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તુંગભદ્રા</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "કયા રાજાને ફિરંગીઓ સાથે સારા સંબંધો હતા ?",
            "a": [
                {
                    "option": "હરિહરરાયને",
                    "correct": false
                },
                {
                    "option": "બુક્કારાયને",
                    "correct": false
                },
                {
                    "option": "કૃષ્ણદેવરાયને",
                    "correct": true
                },
                {
                    "option": "રામરાયને",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કૃષ્ણદેવરાયને</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 16
            "q": "કૃષ્ણદેવરાયે કયા ઈજનેરની મદદથી દક્ષિણ ભારતમાં નહેરોના બાંધકામ કરાવ્યા ?",
            "a": [
                {
                    "option": "જેમ્કો",
                    "correct": false
                },
                {
                    "option": "યોમ્કે",
                    "correct": true
                },
                {
                    "option": "સોમ્કે",
                    "correct": false
                },
                {
                    "option": "રોમ્કે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: યોમ્કે</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "હસન સુલતાન બનતાં તેણે પોતાના શાહી વંશનું નામ શું રાખ્યું ?",
            "a": [
                {
                    "option": "ખિરાજ",
                    "correct": false
                },
                {
                    "option": "સૈયદ",
                    "correct": false
                },
                {
                    "option": "ફિરિઝી",
                    "correct": false
                },
                {
                    "option": "બહમની",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બહમની</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 18
            "q": "દિલ્લીની ગાદી ઉપર સૈયદ વંશની સ્થાપના કોણે કરી",
            "a": [
                {
                    "option": "બહલોલે",
                    "correct": false
                },
                {
                    "option": "ફિરોજખાને",
                    "correct": false
                },
                {
                    "option": "ખિજ્રખાને",
                    "correct": true
                },
                {
                    "option": "ઇબ્રાહીમ લોદીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ખિજ્રખાને</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 19
            "q": "ઇ.સ. 1526માં કોણે દિલ્લી ઉપર આક્રમણ કર્યું ?",
            "a": [
                {
                    "option": "તૈમૂરે",
                    "correct": false
                },
                {
                    "option": "બાબરે",
                    "correct": true
                },
                {
                    "option": "ચિંગીઝખાને",
                    "correct": false
                },
                {
                    "option": "ઈબ્રાહીમ લોદીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાબરે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 20
            "q": "દિલ્લી સામ્રાજ્ય ઉપર મુઘલ સામ્રાજ્યની સ્થાપના કોણે કરી ?",
            "a": [
                {
                    "option": "બાબરે",
                    "correct": true
                },
                {
                    "option": "હુમાયુએ",
                    "correct": false
                },
                {
                    "option": "જહાંગીરે",
                    "correct": false
                },
                {
                    "option": "અકબરે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાબરે</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 21
            "q": "દિલ્લીની ગાદી ઉપર ખલજી વંશની સ્થાપના કોણે કરી?",
            "a": [
                {
                    "option": "અલાઉદ્દીન ખલજીએ",
                    "correct": false
                },
                {
                    "option": "ગ્યાસુદ્દીન ખલજીએ",
                    "correct": false
                },
                {
                    "option": "જલાલુદ્દીન ખલજીએ",
                    "correct": true
                },
                {
                    "option": "અમીર ખુસરુએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જલાલુદ્દીન ખલજીએ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "દિલ્લીની ગાદી ઉપર તુઘલુક વંશ પછી કયા વંશનું શાસન આવ્યું ?",
            "a": [
                {
                    "option": "ગુલામ વંશ",
                    "correct": false
                },
                {
                    "option": "સૈયદ વંશ",
                    "correct": true
                },
                {
                    "option": "તુઘલુક વંશ",
                    "correct": false
                },
                {
                    "option": "લોદી વંશ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૈયદ વંશ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 23
            "q": "દિલ્લીની ગાદી ઉપર સૈયદ વંશ પછી કયા વંશનું શાસન આવ્યું ?",
            "a": [
                {
                    "option": "ગુલામ વંશ",
                    "correct": false
                },
                {
                    "option": "સૈયદ વંશ",
                    "correct": false
                },
                {
                    "option": "તુઘલુક વંશ",
                    "correct": false
                },
                {
                    "option": "લોદી વંશ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લોદી વંશ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 24
            "q": "દિલ્લીની ગાદી ઉપર લોદી વંશની સ્થાપના કોણે કરી ?",
            "a": [
                {
                    "option": "બહલોલ લોદીએ",
                    "correct": true
                },
                {
                    "option": "સિકંદરે લોદીએ",
                    "correct": false
                },
                {
                    "option": "ઈબ્રાહીમ લોદીએ",
                    "correct": false
                },
                {
                    "option": "ગ્યાસુદ્દીન લોદીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બહલોલ લોદીએ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 25
            "q": "કુતુબમિનારનું બાંધકામ કોણે શરૂ કરાવ્યું હતું ?",
            "a": [
                {
                    "option": "ઇલ્તુત્મિશે",
                    "correct": false
                },
                {
                    "option": "અલ્તમશે",
                    "correct": false
                },
                {
                    "option": "કુત્બુદ્દીન ઐબકે",
                    "correct": true
                },
                {
                    "option": "શાહબુદ્દીન ઘોરીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કુત્બુદ્દીન ઐબકે</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 26
            "q": "કુતુબમિનારનું બાંધકામ કોણે પૂરું કરાવ્યું હતું ?",
            "a": [
                {
                    "option": "ઇલ્તુત્મિશે",
                    "correct": true
                },
                {
                    "option": "અલ્તમશે",
                    "correct": false
                },
                {
                    "option": "કુત્બુદ્દીન ઐબકે",
                    "correct": false
                },
                {
                    "option": "શાહબુદ્દીન ઘોરીએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઇલ્તુત્મિશે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "ભાવનિયંત્રણ માટે કોણે કડક કાયદા બનાવ્યા હતા ?",
            "a": [
                {
                    "option": "અલાઉદ્દીન ખલજીએ",
                    "correct": true
                },
                {
                    "option": "ગ્યાસુદ્દીન ખલજીએ",
                    "correct": false
                },
                {
                    "option": "જલાલુદ્દીન ખલજીએ",
                    "correct": false
                },
                {
                    "option": "અમીર ખુસરુએ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અલાઉદ્દીન ખલજીએ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 28
            "q": "ક્યા વંશના શાસન દરમ્યાન તૈમૂરે દિલ્હી લૂટ્યું ?",
            "a": [
                {
                    "option": "ગુલામ વંશના",
                    "correct": false
                },
                {
                    "option": "સૈયદ વંશના",
                    "correct": false
                },
                {
                    "option": "તુઘલુક વંશના",
                    "correct": true
                },
                {
                    "option": "લોદી વંશના",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: તુઘલુક વંશના</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 29
            "q": "સુલતાના રઝિયા પછી કોણ ગાદીએ આવેલો ?",
            "a": [
                {
                    "option": "નાસિરુદ્દીન",
                    "correct": true
                },
                {
                    "option": "ગિયાસુદ્દીન",
                    "correct": false
                },
                {
                    "option": "જલાલુદ્દીન",
                    "correct": false
                },
                {
                    "option": "અલાઉદ્દીન",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નાસિરુદ્દીન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        } // no comma here
    ]
};
