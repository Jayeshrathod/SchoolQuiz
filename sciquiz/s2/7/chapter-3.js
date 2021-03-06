// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
	"info": {
		"name": "પ્રકરણ-3 પદાર્થોનું અલગીકરણ",
		"subject": "વિજ્ઞાન અને ટેક્નોલોજી",
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
			"q": "કઠોળમાંથી કાંકરા દૂર કરવા માટે કઈ પદ્ધતિનો ઉપયોગ થાય છે ?",
			"a": [
				{
					"option": "વીણવું",
					"correct": true
                },
				{
					"option": "ઊપણવું",
					"correct": false
                },
				{
					"option": "નિસ્યંદન",
					"correct": false
                },
				{
					"option": "ચુંબક પદ્ધતિ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: વીણવું</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 2
			"q": "ઘઉંના લોટમાંથી થૂલું દૂર કરવા માટે કયું સાધન વપરાય છે ?",
			"a": [
				{
					"option": "સૂપડું",
					"correct": false
                },
				{
					"option": "ગાળણપત્ર",
					"correct": false
                },
				{
					"option": "ચાળણી",
					"correct": true
                },
				{
					"option": "ગળણી",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચાળણી</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 3
			"q": "ચાળવાની ક્રિયાથી મિશ્રણના ઘટકો છૂટા પાડવા મિશ્રણ કેવું હોવું જોઈએ ?",
			"a": [
				{
					"option": "સરખા કદના ઘન પદાર્થોનું મિશ્રણ",
					"correct": false
                },
				{
					"option": "સરખા કદના ન હોય તેવા ઘન પદાર્થોનું મિશ્રણ",
					"correct": true
                },
				{
					"option": "સરખા કદના હોય પરંતુ રંગ અને આકારથી જુદ પડે તેવા ઘન પદાર્થોનું મિશ્રણ",
					"correct": false
                },
				{
					"option": "ઘન અને પ્રવાહી પદાર્થોનું મિશ્રણ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સરખા કદના ન હોય તેવા ઘન પદાર્થોનું મિશ્રણ</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 4
			"q": "ચણામાંથી ફોતરાં અલગ કરવા માટે કઈ પદ્ધતિ વપરાય છે ?",
			"a": [
				{
					"option": "વીણવું",
					"correct": false
                },
				{
					"option": "ઊપણવું",
					"correct": true
                },
				{
					"option": "નિસ્યંદન",
					"correct": false
                },
				{
					"option": "ચાળવું",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઊપણવું</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 5
			"q": "અનાજ ઊપણવા માટે કયું સાધન વપરાય છે ?",
			"a": [
				{
					"option": "સૂપડું",
					"correct": true
                },
				{
					"option": "ચુંબક",
					"correct": false
                },
				{
					"option": "ચાળણી",
					"correct": false
                },
				{
					"option": "ગળણી",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: સૂપડું</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 6
			"q": "નિતારણની પદ્ધતિથી મિશ્રણના કયા ઘટકો દૂર કરી શકાય છે ?",
			"a": [
				{
					"option": "પાણીમાંના દ્રાવ્ય પદાર્થો",
					"correct": false
                },
				{
					"option": "ઊર્ધ્વપાતી પદાર્થો",
					"correct": false
                },
				{
					"option": "પાણી કરતાં ભારે અદ્રાવ્ય ઘન પદાર્થો",
					"correct": true
                },
				{
					"option": "પાણી કરતાં હલકા અદ્રાવ્ય ઘન પદાર્થો",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પાણી કરતાં ભારે અદ્રાવ્ય ઘન પદાર્થો</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 7
			"q": "સીંગતેલ અને પાણીના મિશ્રણને અલગ કરવા કઈ પદ્ધતિ વપરાય છે ?",
			"a": [
				{
					"option": "ગાળવું",
					"correct": false
                },
				{
					"option": "બાષ્પીભવન",
					"correct": false
                },
				{
					"option": "ઊર્ધ્વપાતન",
					"correct": false
                },
				{
					"option": "પૃથ્થકરણ ગળણી",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૃથ્થકરણ ગળણી</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 8
			"q": "છાસમાંથી વધારાના પાણીનો ભાગ દૂર કરવા કઈ પદ્ધતિનો ઉપયોગ થાય છે ?",
			"a": [
				{
					"option": "બાષ્પીભવન",
					"correct": false
                },
				{
					"option": "નિસ્યંદન",
					"correct": false
                },
				{
					"option": "નિતારવું",
					"correct": true
                },
				{
					"option": "ગાળવું",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નિતારવું</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 9
			"q": "એકબીજામાં ન ભળે તેવા બે પ્રવાહી પદાર્થોના મિશ્રણને છૂટા પાડવા માટે કયું સાધન વપરાય છે ?",
			"a": [
				{
					"option": "ચાળણી",
					"correct": false
                },
				{
					"option": "ગાળણપત્ર",
					"correct": false
                },
				{
					"option": "પૃથ્થકરણ ગળણી",
					"correct": true
                },
				{
					"option": "ચુંબક",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૃથ્થકરણ ગળણી</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 10
			"q": "કઈ પદ્ધતિ નિતારણ પદ્ધતિનો જ એક પ્રકાર છે ?",
			"a": [
				{
					"option": "બાષ્પીભવન",
					"correct": false
                },
				{
					"option": "ઊર્ધ્વપાતન",
					"correct": false
                },
				{
					"option": "પૃથ્થકરણ પદ્ધતિ",
					"correct": true
                },
				{
					"option": "વિભાગીય નિસ્યંદન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પૃથ્થકરણ પદ્ધતિ</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 11
			"q": "પાણીમાંથી અદ્રાવ્ય ઘન પદાર્થો દૂર કરવા કઈ પદ્ધતિ વપરાય છે ?",
			"a": [
				{
					"option": "ગાળવું",
					"correct": true
                },
				{
					"option": "ઊર્ધ્વપાતન",
					"correct": false
                },
				{
					"option": "નિસ્યંદન",
					"correct": false
                },
				{
					"option": "ઊપણવું",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સરસ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ગાળવું</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 12
			"q": "ચાની ભૂકી અને લોખંડના ભૂકાને અલગ કરવા કઈ પદ્ધતિ વપરાય છે ?",
			"a": [
				{
					"option": "ગાળવું",
					"correct": false
                },
				{
					"option": "નિસ્યંદન",
					"correct": false
                },
				{
					"option": "નિતારવું",
					"correct": false
                },
				{
					"option": "ચુંબક પદ્ધતિ",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ચુંબક પદ્ધતિ</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 13
			"q": "આયોડિન અને રેતીના મિશ્રણને અલગ કરવા માટે કઈ પદ્ધતિ વપરાય છે ?",
			"a": [
				{
					"option": "ગાળવું",
					"correct": false
                },
				{
					"option": "બાષ્પીભવન",
					"correct": false
                },
				{
					"option": "ઊર્ધ્વપાતન",
					"correct": true
                },
				{
					"option": "નિસ્યંદન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> વાહ ! તમને તો સરસ આવડે છે.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઊર્ધ્વપાતન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 14
			"q": "નીચેનામાંથી કયા મિશ્રણના ઘટકો છૂટા પાડવા ઊર્ધ્વપાતનની પદ્ધતિ વપરાય છે ?",
			"a": [
				{
					"option": "મીઠું અને ખાંડ",
					"correct": false
                },
				{
					"option": "મીઠું અને નવસાર",
					"correct": true
                },
				{
					"option": "રેતી અને લોખંડનો ભૂકો",
					"correct": false
                },
				{
					"option": "મીઠાનું દ્રાવણ",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આમને આમ આગળ વધો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: મીઠું અને નવસાર</p>   થોડી મહેનતની જરૂર છે.</p>" // no comma here
        },
		{ // Question 15
			"q": "નીચેનામાંથી કયો ઊર્ધ્વપાતી પદાર્થ છે ?",
			"a": [
				{
					"option": "મીઠું",
					"correct": false
                },
				{
					"option": "કપૂર",
					"correct": true
                },
				{
					"option": "રેતી",
					"correct": false
                },
				{
					"option": "લોખંડનો ભૂકો",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> શાબાશ</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: કપૂર</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
        },
		{ // Question 16
			"q": "સોડાવૉટર એ કયા પ્રકારનું મિશ્રણ છે ?",
			"a": [
				{
					"option": "પ્રવાહીનું પ્રવાહીમાં",
					"correct": false
                },
				{
					"option": "ઘનનું પ્રવાહીમાં",
					"correct": false
                },
				{
					"option": "પ્રવાહીનું ઘનમાં",
					"correct": false
                },
				{
					"option": "પ્રવાહીનું વાયુમાં",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> ખૂબ જ સુંદર</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: પ્રવાહીનું વાયુમાં</p>   આગળ સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 17
			"q": "ઘન પદાર્થને ગરમ કરતાં સીધું વાયુ સ્વરૂપમાં રૂપાંતર થાય તે કઈ ક્રિયા કહેવાય ?",
			"a": [
				{
					"option": "નિસ્યંદન",
					"correct": false
                },
				{
					"option": "બાષ્પીભવન",
					"correct": false
                },
				{
					"option": "ઊર્ધ્વપાતન",
					"correct": true
                },
				{
					"option": "ઉત્કલન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> આવી જ મહેનત ચાલું રાખો, સફળતા તમને મળશે જ.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: ઊર્ધ્વપાતન</p>   વધુ પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 18
			"q": "પ્રવાહીમાં ઓગળેલા ઘન પદાર્થને છૂટો પાડવા કઈ પદ્ધતિનો ઉપયોગ થાય છે ?",
			"a": [
				{
					"option": "ગાળવું",
					"correct": false
                },
				{
					"option": "નિતારવું",
					"correct": false
                },
				{
					"option": "બાષ્પીભવન",
					"correct": true
                },
				{
					"option": "ઊર્ધ્વપાતન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> તમે તો હોંશિયાર છો.</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાષ્પીભવન</p>   થોડું ધ્યાન આપો.</p>" // no comma here
        },
		{ // Question 19
			"q": "દરિયાના પાણીમાંથી મીઠું મેળવવા કઈ પદ્ધતિનો ઉપયોગ થાય છે ?",
			"a": [
				{
					"option": "બાષ્પીભવન",
					"correct": true
                },
				{
					"option": "ઊર્ધ્વપાતન",
					"correct": false
                },
				{
					"option": "નિતારણ",
					"correct": false
                },
				{
					"option": "નિસ્યંદન",
					"correct": false
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> અભિનંદન</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: બાષ્પીભવન</p>   સાચો જવાબ આપવા પ્રયત્ન કરો.</p>" // no comma here
        },
		{ // Question 20
			"q": "દરિયાના પાણીમાંથી શુદ્ધ પાણી મેળવવા કઈ પદ્ધતિનો ઉપયોગ થાય છે ?",
			"a": [
				{
					"option": "બાષ્પીભવન",
					"correct": false
                },
				{
					"option": "ઊર્ધ્વપાતન",
					"correct": false
                },
				{
					"option": "ગાળવું",
					"correct": false
                },
				{
					"option": "નિસ્યંદન",
					"correct": true
                } // no comma here
            ],
			"correct": "<p><span>તમારો જવાબ સાચો છે.</span> સફળ થવા માટે શુભેચ્છા</p>",
			"incorrect": "<p><span>તમારો જવાબ ખોટો છે.</span><p>સાચો જવાબ: નિસ્યંદન</p>   વધુ વાંચનનો મહાવરો રાખો.</p>" // no comma here
       } // no comma here
    ]
};