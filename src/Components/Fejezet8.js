const fejezet8 = [
	{
		id: 1,
		question: "A tervezett kiadások egyenese",
		options: ["a. negatív meredekségű", "b. pozitív meredekségű, és meredekséget a fogyasztási határhajlandóság határozza meg", "c. függőleges egyenes", "d. 40 fokos egyenessel leírható függvény"],
		answer: "b. pozitív meredekségű, és meredekséget a fogyasztási határhajlandóság határozza meg",
	},
	{
		id: 2,
		question: "Ha a tervezett kiadások értéke nagyobb, mint az adott időszaki jövedelem, akkor a vállalatok növelni fogják a termelést, mert a tervezett készletek értéke",
		options: ["a. negatív", "b. pozitív", "c. nulla", "d. meghatározhatatlan"],
		answer: "a. negatív",
	},
	{
		id: 3,
		question: "A tervezett kiadások egyenese annál meredekebb a keynesi keresztben, minél",
		options: ["a. alacsonyabb a költségvetés hiánya", "b. alacsonyabb a háztartások fogyasztási határhajlandósága", "c. alacsonyabbak az adók", "d. alacsonyabb a háztartások megtakarítási határhajlandósága"],
		answer: "d. alacsonyabb a háztartások megtakarítási határhajlandósága",
	},
	{
		id: 4,
		question: "A tervezett kiadások egyenese annál magasabban helyezkedik el (metszéspontja a függőleges tengelyen annál magasabban van) a keynesi keresztben, minél",
		options: ["a. alacsonyabb a jövedelemadók kulcsa", "b. magasabb a reálkamatláb", "c. alacsonyabb a reálkamatláb", "d. kisebb az állami költségvetés hiánya (jövedelemtől nem függő bevételek és kiadások esetén)"],
		answer: "c. alacsonyabb a reálkamatláb",
	},
	{
		id: 5,
		question: "Ha a fogyasztási függvény a következő alakú C = 30 + 0,75(Y - T), akkor a kormányzati kiadások multiplikátorának értéke",
		options: ["a. 4", "b. 5", "c. 0,75", "d. 3"],
		answer: "a. 4",
	},
	{
		id: 6,
		question: "Az IS görbe negatív meredekségének az az oka, hogy",
		options: ["a. a reálkamatláb emelkedésével csökken a pénzkereslet, es ezért az aggregált kereslet is", "b. a reálkamatláb emelkedése miatt a jegybanknak expanzív monetáris politikát kell folytatnia, és ez növeli az aggregált keresletet", "c. a reálkamatláb emelkedése elsősorban a beruházási keresletet csökkenti, és emiatt csökken az egyensúlyi jövedelem", "d. valamennyi fentebbi válasz helyes"],
		answer: "c. a reálkamatláb emelkedése elsősorban a beruházási keresletet csökkenti, és emiatt csökken az egyensúlyi jövedelem",
	},
	{
		id: 7,
		question: "Az alábbi állitások közül melyik a helyes",
		options: ["a. az LM görbe negativ meredekségű, és az árszínvonal csökkenésének hatására lefelé tolódik", "b. az LM görbe pozitív meredekségű a pénzkinálat reálértékének egy adott szintje mellett", "c. az LM görbe a jövedelemszint és a kamatláb között fennálló kapcsolatot fejezi ki", "d. a b) és c) válaszok egyaránt helyesek"],
		answer: "d. a b) és c) válaszok egyaránt helyesek",
	},
	{
		id: 8,
		question: "Az LM görbe akkor tolódik el balra felfelé, ha",
		options: ["a. csökken az árszínvonal", "b. nő a nominális pénzkínálat", "c. csökken a reálpénzkínálat", "d. az a) és a c) válasz is helyes"],
		answer: "c. csökken a reálpénzkínálat",
	},
	{
		id: 9,
		question: "Az IS görbe akkor tolódik el jobbra felfelé, ha",
		options: ["a. a kormányzati vásárlások növekednek", "b. az adók csökkennek", "c. transzferkifizetések értéke nő", "d. mindegyik válasz helyes"],
		answer: "d. mindegyik válasz helyes",
	},
	{
		id: 10,
		question: "Ha az IS-LM modellben egyensúlyi helyzetből kiindulva a kormányzat növeli a költségvetési kiadásokat, és ezzel párhuzamosan a jegybank restriktív monetáris politikába kezd, akkor",
		options: ["a. a jövedelem és a kamatláb is emelkedik", "b. a jövedelem emelkedik, de a kamatláb kétféle irányba is megváltozhat", "c. a kamatláb biztosan emelkedik, de a jövedelem kétféle irányba is megváltozhat", "d. a kamatláb biztosan csökken, de a jövedelem kétféle irányba is megváltozhat"],
		answer: "c. a kamatláb biztosan emelkedik, de a jövedelem kétféle irányba is megváltozhat",
	},
	{
		id: 11,
		question: "Az IS-LM modellben változatlan reál pénzkinálat mellett az adók növelése rövid távon",
		options: ["a. csökkenti a fogyasztást és növeli a beruházást, és csökkenti az egyensúlyi jövedelmet", "b. csökkenti a munkanélküliek számát", "c. növeli a foglalkoztatottak számát", "d. csökkenti a fogyasztást, de nem csökkenti a beruházást"],
		answer: "a. csökkenti a fogyasztást és növeli a beruházást, és csökkenti az egyensúlyi jövedelmet",
	},
	{
		id: 12,
		question: "Ha a gazdaság nincs az IS-LM görbe metszéspontjában, akkor az egyensúlytalansági helyzet kiigazodása a következőképp történik meg:",
		options: ["a. az árupiacon és a pénzpiacon is a kamatláb igazodik ki", "b. az árupiacon a jövedelem igazodik ki, a pénzpiacon pedig a kamatláb", "c. az árupiacon a kamatláb igazodik ki, a pénzpiacon pedig a jövedelem", "d. mindkét piacon a jövedelem igazodik ki"],
		answer: "b. az árupiacon a jövedelem igazodik ki, a pénzpiacon pedig a kamatláb",
	},
	{
		id: 13,
		question: "Az alábbi állítások közül melyik a helyes",
		options: ["a. ha a fogyasztás növekedik, akkor a beruházás is növekedni fog", "b. a kormányzati vásárlás növekedése a beruházási kereslet növekedését vonja maga után", "c. a kormányzati vásárlás csökkenése a beruházási kereslet csökkenéséhez vezet", "d. ha a fogyasztás növekedik, akkor a beruházás csökkenni fog"],
		answer: "d. ha a fogyasztás növekedik, akkor a beruházás csökkenni fog",
	},
	{
		id: 14,
		question: "Az IS-LM modellből levezetett aggregált keresleti függény (AD) azért negatív meredekségű, mert",
		options: ["a. az árszínvonal növekedése folytán a reálpénzállomány nő", "b. az árszínvonal csökkenése folytán a reálpénzállomány csökken", "c. az árszínvonal növekedésének hatására a reálpénzállomány kínálata alacsonyabb lesz, melynek folytán az LM görbe felfelé tolódik, tehát nő a kamatláb és csökken az egyensúlyi jövedelem", "d. egyik válasz sem helyes"],
		answer: "c. az árszínvonal növekedésének hatására a reálpénzállomány kínálata alacsonyabb lesz, melynek folytán az LM görbe felfelé tolódik, tehát nő a kamatláb és csökken az egyensúlyi jövedelem",
	},
	{
		id: 15,
		question: "Az IS-LM rendszerből levezethető aggregált keresleti függvény (AD) jobbra-felfelé eltolódik",
		options: ["a. expanziv fiskális politika hatására", "b. restriktív fiskális politika hatására", "c. expanzív monetáris politika hatására", "d. a) és c) válaszok egyaránt helyesek"],
		answer: "d. a) és c) válaszok egyaránt helyesek",
	},
]

export default fejezet8;
