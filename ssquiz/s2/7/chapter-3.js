// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name": "પ્રકરણ - 3  અદાલતો શા માટે ?",
        "subject": "સામાજિક વિજ્ઞાન",
        "standard": "7",
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
            "q": "આપણા દેશમાં ક્યા પ્રકારની શાસન પદ્ધતિ છે ?",
            "a": [
                {
                    "option": "સમાજવાદી",
                    "correct": false
                },
                {
                    "option": "સરમુખત્યારશાહી",
                    "correct": false
                },
                {
                    "option": "લોકશાહી",
                    "correct": true
                },
                {
                    "option": "પ્રમુખશાહી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકશાહી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 2
            "q": "ન્યાયતંત્રને ઝડપી અને બિનખર્ચાળ બનાવવા માટે કોણ કામ કરે છે ?",
            "a": [
                {
                    "option": "લોકઅદાલતો",
                    "correct": true
                },
                {
                    "option": "ન્યાયસમિતિઓ",
                    "correct": false
                },
                {
                    "option": "ન્યાયાધીશો",
                    "correct": false
                },
                {
                    "option": "ન્યાયપંચાયતો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  લોકઅદાલતો</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 3
            "q": "બધી અદાલતોમાં સૌથી નાની અદાલત કઈ છે ?",
            "a": [
                {
                    "option": "ગ્રામ્ય અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": true
                },
                {
                    "option": "લોકઅદાલત",
                    "correct": false
                },
                {
                    "option": "મંડળ અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તાલુકા અદાલત</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 4
            "q": "ગુજરાત રાજ્યની વડી અદાલતની સ્થાપના ક્યારે થઈ ?",
            "a": [
                {
                    "option": "ઈ.સ.1960માં",
                    "correct": true
                },
                {
                    "option": "ઈ.સ.1951માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1965માં",
                    "correct": false
                },
                {
                    "option": "ઈ.સ.1955માં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ઈ.સ.1960માં</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 5
            "q": "ગુજરાત રાજ્યની વડી અદાલત ક્યા શહેરમાં આવેલી છે ?",
            "a": [
                {
                    "option": "ગાંધીનગર",
                    "correct": false
                },
                {
                    "option": "રાજકોટ",
                    "correct": false
                },
                {
                    "option": "સુરત",
                    "correct": false
                },
                {
                    "option": "અમદાવાદ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  અમદાવાદ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 6
            "q": "મકાન, જમીન કે અન્ય સંપત્તિ અંગેનો વિવાદ કેવો વિવાદ કહેવાય ?",
            "a": [
                {
                    "option": "સ્થાનિક",
                    "correct": false
                },
                {
                    "option": "મહેસૂલી",
                    "correct": false
                },
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  દીવાની</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 7
            "q": "ચોરી, લૂંટફાટ, મારામારી, ખૂન, શારીરિક ઈજા કે ઝઘડાનો વિવાદ કેવો વિવાદ કહેવાય ?",
            "a": [
                {
                    "option": "અદાલતી",
                    "correct": false
                },
                {
                    "option": "મૂળભૂત",
                    "correct": false
                },
                {
                    "option": "ફોજદારી",
                    "correct": true
                },
                {
                    "option": "દીવાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ફોજદારી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 8
            "q": "ન્યાયની દેવીનું નામ શું છે ?",
            "a": [
                {
                    "option": "આમટિન",
                    "correct": false
                },
                {
                    "option": "આસ્ટીન",
                    "correct": true
                },
                {
                    "option": "આર્મી",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આસ્ટીન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 9
            "q": "ન્યાયની દેવીને ક્યાં પાટો બાંધેલો છે ?",
            "a": [
                {
                    "option": "પગે",
                    "correct": false
                },
                {
                    "option": "આંખે",
                    "correct": true
                },
                {
                    "option": "મોઢે",
                    "correct": false
                },
                {
                    "option": "હાથે",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  આંખે</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 10
            "q": "ન્યાયની દેવીના બંન્ને હાથમાં શું છે ?",
            "a": [
                {
                    "option": "તીર-ફૂલ",
                    "correct": false
                },
                {
                    "option": "ભાલુ-તલવાર",
                    "correct": false
                },
                {
                    "option": "તલવાર-ત્રાજવું",
                    "correct": true
                },
                {
                    "option": "ઢાલ-તલવાર",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તલવાર-ત્રાજવું</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 11
            "q": "તાલુકા અદાલતને બીજી કઈ અદાલત પણ કહે છે ?",
            "a": [
                {
                    "option": "જીલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "ટ્રાયલ કોર્ટ",
                    "correct": true
                },
                {
                    "option": "ટ્રાય",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  ટ્રાયલ કોર્ટ</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 12
            "q": "પોલીસને ગુનાની પ્રથમ જાણ થાય ત્યારે તે પોલીસ-સ્ટેશનમાં શું નોંધે છે ?",
            "a": [
                {
                    "option": "FIR",
                    "correct": true
                },
                {
                    "option": "RIF",
                    "correct": false
                },
                {
                    "option": "DIG",
                    "correct": false
                },
                {
                    "option": "GEN",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  FIR</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 13
            "q": "ઘરમાં ચોરી થઈ હોય તો સૌપ્રથમ કઈ અદાલતમાં દાવો કરાય ?",
            "a": [
                {
                    "option": "તાલુકા દીવાની અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લા દીવાની અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લા ફોજદારી અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "લોકઅદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જિલ્લા ફોજદારી અદાલતમાં</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 14
            "q": "કોઈએ ઘર પચાવી પાડ્યું હોય તો સૌપ્રથમ કઈ અદાલતમાં દાવો કરાય ?",
            "a": [
                {
                    "option": "જિલ્લા દીવાની અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "તાલુકા દીવાની અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "જિલ્લા ફોજદારી અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "લોકઅદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  તાલુકા દીવાની અદાલતમાં</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 15
            "q": "તાલુકા અદાલતમાં ન્યાય ના મળ્યો હોય તો કઈ અદાલતમાં દાવો કરાય ?",
            "a": [
                {
                    "option": "લોકઅદાલતમાં",
                    "correct": false
                },
                {
                    "option": "ન્યાયપંચાયતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લા અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "એકેયેમાં નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ:  જિલ્લા અદાલતમાં</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 16
            "q": "તાલુકા અદાલતની ઉપર કઈ અદાલત કાર્ય કરે છે ?",
            "a": [
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": true
                },
                {
                    "option": "ગ્રામ અદાલત",
                    "correct": false
                },
                {
                    "option": "લોકઅદાલત",
                    "correct": false
                },
                {
                    "option": "મુખી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લા અદાલત</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 17
            "q": "આપણા દેશમાં ન્યાયતંત્રની વ્યવસ્થા કેવી છે ?",
            "a": [
                {
                    "option": "તૂટક",
                    "correct": false
                },
                {
                    "option": "સળંગ",
                    "correct": true
                },
                {
                    "option": "વાંકી",
                    "correct": false
                },
                {
                    "option": "આડી અવળી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સળંગ</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 18
            "q": "આપણા દેશનું ન્યાયતંત્ર કેવું છે ?",
            "a": [
                {
                    "option": "સ્વતંત્ર અને નિષ્પક્ષ",
                    "correct": true
                },
                {
                    "option": "બંધક અને એકપક્ષીય",
                    "correct": false
                },
                {
                    "option": "સ્વતંત્ર અને એકપક્ષીય",
                    "correct": false
                },
                {
                    "option": "બંધક અને નિષ્પક",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સ્વતંત્ર અને નિષ્પક્ષ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 19
            "q": "દેશના કાયદાનું પાલન ન કરનાર શું છે ?",
            "a": [
                {
                    "option": "સારો માણસ",
                    "correct": false
                },
                {
                    "option": "સુપુત્ર",
                    "correct": false
                },
                {
                    "option": "આદર્શ માણસ",
                    "correct": false
                },
                {
                    "option": "ગુનેગાર",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુનેગાર</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 20
            "q": "ગુનો કરનાર વ્યક્તિ બીજાનું શું છીનવે છે ?",
            "a": [
                {
                    "option": "હક",
                    "correct": true
                },
                {
                    "option": "ફરજ",
                    "correct": false
                },
                {
                    "option": "કામ",
                    "correct": false
                },
                {
                    "option": "કર્તવ્ય",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હક</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 21
            "q": "કઈ અદાલતના વડા જિલ્લાની બધી અદાલતોના વડા છે ?",
            "a": [
                {
                    "option": "તાલુકા",
                    "correct": false
                },
                {
                    "option": "જિલ્લા",
                    "correct": true
                },
                {
                    "option": "ગ્રામ",
                    "correct": false
                },
                {
                    "option": "મંડળ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લા</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 22
            "q": "રાજ્યની સૌથી મોટી અદાલત કઈ છે ?",
            "a": [
                {
                    "option": "સર્વોચ્ચ અદાલત",
                    "correct": false
                },
                {
                    "option": "વડી અદાલત",
                    "correct": true
                },
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડી અદાલત</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 23
            "q": "દેશની સૌથી મોટી અદાલત કઈ છે ?",
            "a": [
                {
                    "option": "સર્વોચ્ચ અદાલત",
                    "correct": true
                },
                {
                    "option": "વડી અદાલત",
                    "correct": false
                },
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સર્વોચ્ચ અદાલત</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 24
            "q": "કઈ અદાલતને નજીરી અદાલત કહે છે ?",
            "a": [
                {
                    "option": "સર્વોચ્ચ અદાલત",
                    "correct": false
                },
                {
                    "option": "વડી અદાલત",
                    "correct": true
                },
                {
                    "option": "જિલ્લા અદાલત",
                    "correct": false
                },
                {
                    "option": "તાલુકા અદાલત",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડી અદાલત</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 25
            "q": "રાજ્યની વડી અદાલતના ન્યાયાધીશને પ્રતિજ્ઞા કોણ લેવડાવે છે ?",
            "a": [
                {
                    "option": "રાષ્ટ્રપતિ",
                    "correct": false
                },
                {
                    "option": "રાજ્યપાલ",
                    "correct": true
                },
                {
                    "option": "લોકપાલ",
                    "correct": false
                },
                {
                    "option": "મુખ્યમંત્રી",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: રાજ્યપાલ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 26
            "q": "રાજયની વડી અદાલતને અંગ્રેજીમાં શું કહે છે ?",
            "a": [
                {
                    "option": "સુપ્રિમ કોર્ટ",
                    "correct": false
                },
                {
                    "option": "હાઇકોર્ટ",
                    "correct": true
                },
                {
                    "option": "હાઇટકોર્ટ",
                    "correct": false
                },
                {
                    "option": "હાયરકોર્ટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: હાઇકોર્ટ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 27
            "q": "અદાલતમાં દાવો કરનારને શું કહેવાય ?",
            "a": [
                {
                    "option": "ફરિયાદી",
                    "correct": true
                },
                {
                    "option": "વકીલ",
                    "correct": false
                },
                {
                    "option": "ફરજ",
                    "correct": false
                },
                {
                    "option": "અસીલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફરિયાદી</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 28
            "q": "ગુનો કરનારને પોલીસ પકડીને લઈ જાય તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "ધરપકડ",
                    "correct": true
                },
                {
                    "option": "વૉરન્ટ",
                    "correct": false
                },
                {
                    "option": "અપીલ",
                    "correct": false
                },
                {
                    "option": "અસીલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ધરપકડ</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 29
            "q": "તહોમતદારને-ગુનેગારને પકડી લાવવા માટે ન્યાયાધીશ હુકમ કરે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "ધરપકડ",
                    "correct": false
                },
                {
                    "option": "વૉરન્ટ",
                    "correct": true
                },
                {
                    "option": "અપીલ",
                    "correct": false
                },
                {
                    "option": "અટકાયત",
                    "correct": false
                } // no comma
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વૉરન્ટ/p>  થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 30
            "q": "બાર કાઉન્સિલ તરફથી વકીલાત કરવા માટેની સનદ ધરાવતો કાયદાનો નિષ્ણાત કયા નામે ઓળખાય છે ?",
            "a": [
                {
                    "option": "જજ",
                    "correct": false
                },
                {
                    "option": "ફરિયાદી",
                    "correct": false
                },
                {
                    "option": "વકીલ",
                    "correct": true
                },
                {
                    "option": "અસીલ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વકીલ</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 31
            "q": "નીચલી અદાલતના ચુકાદાનો ન્યાય મેળવવા માટે ઉપલી અદાલતમાં દાખલ કરવાની અરજીને શું કહે છે ?",
            "a": [
                {
                    "option": "અસીલ",
                    "correct": false
                },
                {
                    "option": "ફરિયાદ",
                    "correct": false
                },
                {
                    "option": "દાવો",
                    "correct": false
                },
                {
                    "option": "અપીલ",
                    "correct": true
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અપીલ</p>  આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 32
            "q": "પોતાના કેસ માટે વકીલ રોકનાર વ્યક્તિને શું કહે છે ?",
            "a": [
                {
                    "option": "અસીલ",
                    "correct": true
                },
                {
                    "option": "અપીલ",
                    "correct": false
                },
                {
                    "option": "એફ.આર.આઈ",
                    "correct": false
                },
                {
                    "option": "જુબાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અસીલ</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 33
            "q": "ન્યાયાધીશની રૂબરૂ કોઈનો જવાબ લેવામાં કે નોંધવામાં આવે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "જવાની",
                    "correct": false
                },
                {
                    "option": "જુબાની",
                    "correct": true
                },
                {
                    "option": "અટકાયત",
                    "correct": false
                },
                {
                    "option": "ભવાની",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જુબાની</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 34
            "q": "ગુનાહિત કૃત્ય કરનારને પોલીસ દ્વારા પકડવામાં આવે તેને શું કહેવાય ?",
            "a": [
                {
                    "option": "અસીલ",
                    "correct": false
                },
                {
                    "option": "વૉરન્ટ",
                    "correct": false
                },
                {
                    "option": "અપીલ",
                    "correct": false
                },
                {
                    "option": "અટકાયત",
                    "correct": true
                } // no comma
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: અટકાયત</p> સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 35
            "q": "'ફળિયામાં ઝઘડો થયો. માજીને વાગ્યું.' આ કેસ કેવા પ્રકારનો છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": true
                },
                {
                    "option": "દીવાની",
                    "correct": false
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદારી</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       },
        { // Question 36
            "q": "'ફળિયામાં ઝઘડો થયો. માજીને વાગ્યું.' આ કેસની કાર્યવાહી કઈ અદાલતમાં ચાલશે ?",
            "a": [
                {
                    "option": "તાલુકા અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લાની અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "વડી અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "સર્વોચ્ચ અદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લાની અદાલતમાં</p> વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 37
            "q": "'રમેશભાઈ ઉપર હુમલો થયો.' આ કેસ કેવા પ્રકારનો છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": true
                },
                {
                    "option": "દીવાની",
                    "correct": false
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદારી</p> થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 38
            "q": "'વાહનને અકસ્માત થયો.' આ કેસની કાર્યવાહી કઈ અદાલતમાં ચાલશે ?",
            "a": [
                {
                    "option": "તાલુકા અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લાની અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "વડી અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "સર્વોચ્ચ અદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: જિલ્લાની અદાલતમાં</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 39
            "q": "જિલ્લા અદાલતના ચુકાદાથી સંતોષ ન થાય તો કઈ અદાલતમાં કાર્યવાહી કરી શકીએ ?",
            "a": [
                {
                    "option": "તાલુકા અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "જિલ્લાની અદાલતમાં",
                    "correct": false
                },
                {
                    "option": "વડી અદાલતમાં",
                    "correct": true
                },
                {
                    "option": "સર્વોચ્ચ અદાલતમાં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વડી અદાલતમાં</p> થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
        { // Question 40
            "q": "'જમીનદારે હંસાબેનની જમીન પચાવી પાડી. તેના બદલામાં કોઈ નાણા આપ્યા ન હતા.'  આ કેસ કેવા પ્રકારનો છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": true
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દીવાની</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 41
            "q": "તાલુકા અદાલતમાં કયા દાવાઓ સાંભળવામાં આવે છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": true
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": false
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: દીવાની</p> આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 42
            "q": "જિલ્લા અદાલતમાં કયા દાવાઓ સાંભળવામાં આવે છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": false
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદારી-દીવાની બન્ને</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 43
            "q": "વડી અદાલતમાં કયા દાવા સાંભળવામાં આવે છે ?",
            "a": [
                {
                    "option": "ફોજદારી",
                    "correct": false
                },
                {
                    "option": "દીવાની",
                    "correct": false
                },
                {
                    "option": "ફોજદારી-દીવાની બન્ને",
                    "correct": true
                },
                {
                    "option": "એકેય નહીં",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ફોજદારી-દીવાની બન્ને</p>  થોડું ધ્યાન આપો.</p>" // no comma here
        },
        { // Question 43
            "q": "અદાલતમાં ન્યાયની દેવીના હાથમાં ત્રાજવું શાનું પ્રતિક છે ?",
            "a": [
                {
                    "option": "સમતોલ ન્યાય આપવાનું",
                    "correct": true
                },
                {
                    "option": "અસમતોલ ન્યાય આપવાનું",
                    "correct": false
                },
                {
                    "option": "અસંતોષ ન્યાય આપવાનું",
                    "correct": false
                },
                {
                    "option": "સંતોષ ન્યાય આપવાનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમતોલ ન્યાય આપવાનું</p>  સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
        { // Question 44
            "q": "અદાલતમાં ન્યાયની દેવીના હાથમાં તલવાર શાનું પ્રતિક છે ?",
            "a": [
                {
                    "option": "ગુનો સાબિત થાય તો સજા કરવાનું",
                    "correct": true
                },
                {
                    "option": "ગુનો સાબિત થાય તો છોડી મુકવાનું",
                    "correct": false
                },
                {
                    "option": "ગુનો સાબિત ન થાય તો સજા કરવાનું",
                    "correct": false
                },
                {
                    "option": "સમતોલ સજા આપવાનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગુનો સાબિત થાય તો સજા કરવાનું</p>  વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
        { // Question 45
            "q": "ન્યાયની દેવીની આંખે પાટા શું સૂચવે છે ?",
            "a": [
                {
                    "option": "પક્ષપાત રાખ્યા વિના સૌ માટે સમાન ન્યાય તોલવાનું",
                    "correct": true
                },
                {
                    "option": "પક્ષપાત રાખી સૌ માટે સમાન ન્યાય તોલવાનું",
                    "correct": false
                },
                {
                    "option": "પક્ષપાત રાખ્યા વિના સૌ માટે અસમાન ન્યાય તોલવાનું",
                    "correct": false
                },
                {
                    "option": "ભેદભાવ રાખી સૌ માટે અસમાન ન્યાય તોલવાનું",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પક્ષપાત રાખ્યા વિના સૌ માટે સમાન ન્યાય તોલવાનું</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 46
            "q": "અદાલતોનું ભારણ ઘટાડવા માટે કઈ અદાલતો કાર્ય કરે છે ?",
            "a": [
                {
                    "option": "લોક અદાલતો",
                    "correct": true
                },
                {
                    "option": "ન્યાય સમિતિની અદાલતો",
                    "correct": false
                },
                {
                    "option": "ગ્રામ અદાલતો",
                    "correct": false
                },
                {
                    "option": "રાજ્ય અદાલતો",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: લોક અદાલતો</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
	{ // Question 47
            "q": "લોક-અદાલતો બન્ને પક્ષો વચ્ચે શું કરાવે છે ?",
            "a": [
                {
                    "option": "સમાધાન",
                    "correct": true
                },
                {
                    "option": "ઝઘડા",
                    "correct": false
                },
                {
                    "option": "વેરઝેર",
                    "correct": false
                },
                {
                    "option": "લૂંટફાટ",
                    "correct": false
                } // no comma here
            ],
            "correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
            "incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સમાધાન</p>  વધુ પ્રયત્ન કરો.</p>" // no comma here
        } // no comma here
    ]
};
