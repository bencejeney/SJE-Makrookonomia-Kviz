const fejezet3 = [
	{
		id: 1,
		question: "A termelési függvény egy olyan matematikai összefüggés, mely",
		options: ["a. meghatározza a termelés inputjai és termelt termékmennyiség közti kapcsolatot", "b. meghatározza a termelési tényezők ára és a termelési tényezők kereslete közti kapcsolatot", "c. meghatározza a termelés inputjainak határterméke és a termelési tényezők ára közti kapcsolatot", "d. mindig állandó mérethozadékhoz vezet"],
		answer: "a. meghatározza a termelés inputjai és termelt termékmennyiség közti kapcsolatot",
	},
	{
		id: 2,
		question: "Egy nemzetgazdaság aggregált jövedelmének értéke megegyezik",
		options: ["a. a foglalkoztatottak által realizált pénzösszeg nagyságával", "b. az aggregált kibocsátással", "c. a termelők által profitként realizált pénzösszeg nagyságával", "d. a tőketulajdonosok által realizált bérleti díj nagyságával"],
		answer: "b. az aggregált kibocsátással",
	},
	{
		id: 3,
		question: "Állandó mérethozadékról akkor beszélünk, ha",
		options: ["a. a termelt termékmennyiség időben változatlan marad", "b. a munka határterméke megegyezik a tőke határtermékével", "c. a termelt termékmennyiség megduplázódik, ha az összes termelési tényező megduplázódik", "d. a tőke és a munka határterméke nem változik"],
		answer: "c. a termelt termékmennyiség megduplázódik, ha az összes termelési tényező megduplázódik",
	},
	{
		id: 4,
		question: "Egy profitmaximalizáló vállalat addig használ fel pótlólagos munkatényezőt, amíg",
		options: ["a. a munka határterméke meg nem egyezik a tőke határtermékével", "b. a munka határterméke meg nem egyezik a reálbérrel", "c. a határbevétel nullává nem válik", "d. a reálbér egyenlő nem lesz a tőke bérleti dijával"],
		answer: "b. a munka határterméke meg nem egyezik a reálbérrel",
	},
	{
		id: 5,
		question: "A társadalmi megtakarításra vonatkozóan HAMIS az alábbi állítások közül:",
		options: ["a. a társadalmi szintű megtakarítások értéke megegyezik a beruházás egyensúlyi kamatláb mellett felvett értékével", "b. a társadalmi szintű megtakarítás az output azon része, amelyik a fogyasztói kereslet és a kormányzati vásárlások teljesítése után megmarad", "c. a társadalmi szintű megtakarítás a magán megtakarítás és az állami megtakarítás összege", "d. a társadalmi szintű megtakarítás a bankok megtakarítási betétállományának az összege"],
		answer: "d. a társadalmi szintű megtakarítás a bankok megtakarítási betétállományának az összege",
	},
	{
		id: 6,
		question: "Az állami megtakarítás meghatározható",
		options: ["a. T+TR-G", "b. T-TR-G", "c. T+TR+G", "d. a fenti összefüggések közül egyikkel sem"],
		answer: "b. T-TR-G",
	},
	{
		id: 7,
		question: "Amennyiben a fogyasztási függvény C=150 + 0,5(Y - T), a rendelkezésre álló jövedelem 1500, és Y=2000, akkor a fogyasztói határhajlandóság értéke:",
		options: ["a. 0,5", "b. 0,8", "c. 0,9", "d. 1"],
		answer: "a. 0,5",
	},
	{
		id: 8,
		question: "A fogyasztási hajlandóság",
		options: ["a. megmutatja, hogy a fogyasztók megtakarításuk hány százalékát fordítják fogyasztásra", "b. megmutatja, hogy a fogyasztók jövedelmük növekményének hány százalékát fordítják fogyasztásra", "c. megmutatja, hogy a GDP egységnyi növekménye a fogyasztás mekkora emelkedését eredményezi", "d. egyik sem a fentiek közül"],
		answer: "b. megmutatja, hogy a fogyasztók jövedelmük növekményének hány százalékát fordítják fogyasztásra",
	},
	{
		id: 9,
		question: "A klasszikus modellben az árupiaci egyensúly melyik változó alkalmazkodásán keresztül valósul meg?",
		options: ["a. a kibocsátás tipikus egységének ára", "b. a kibocsátás mennyisége", "c. a reálkamatláb", "d. a nominális kamatláb"],
		answer: "c. a reálkamatláb",
	},
	{
		id: 10,
		question: "A klasszikus modellben a reálkamatláb emelkedéséhez vezet",
		options: ["a. ha a technológia változása folytán nő a beruházási kereslet", "b. az adók növelése vagy a kormányzati vásárlások csökkentése", "c. ha a fogyasztók jövőbeni jövedelmük visszaesésétől tartva növelik a megtakarításaikat", "d. mindegyik a fentiek közül"],
		answer: "a. ha a technológia változása folytán nő a beruházási kereslet",
	},
	{
		id: 11,
		question: "A klasszikus modellben (a gazdaságban hosszú távon), ha a megtakarítás nem függ a reálkamatlábtól és az állam csökkenti a személyes jövedelmeket terhelő adókat, akkor",
		options: ["a. nő a fogyasztás, csökken a magán megtakarítás és a társadalmi (nemzeti) megtakarítás", "b. nő a fogyasztás, a magán megtakarítás és a beruházás egyensúlyi értéke", "c. csökken az egyensúlyi reálkamatláb", "d. nő a fogyasztás és a magán megtakarítás, de csökken a társadalmi (nemzeti) megtakarítás"],
		answer: "d. nő a fogyasztás és a magán megtakarítás, de csökken a társadalmi (nemzeti) megtakarítás",
	},
	{
		id: 12,
		question: "Amennyiben az Y=F(K;L) termelési függvényről tudjuk, hogy állandó mérethozadékú, akkor az alábbi állitások közül NEM igaz, hogy",
		options: ["a. zY=F(zK;zL)", "b. Y/L=F(K/L;1)", "c. Y+1=F(K+1;L+1)", "d. Y=MPK.K+MPL.L"],
		answer: "c. Y+1=F(K+1;L+1)",
	},
	{
		id: 13,
		question: "Tegyük fel, hogy az általunk vizsgált gazdaságban érvényesülnek a hosszú távú klasszikus modell feltevései, és a két termelési tényező a tőke és a munka. Amennyiben ebben a gazdaságban egy járvány elpusztítja a lakosság jelentős részét, akkor",
		options: ["a. a földbérleti dij jelentősen csökken", "b. a földbérleti dij jelentősen emelkedik", "c. a földbérleti díj nem változik", "d. nem állapítható meg egyértelműen, hogy ez milyen hatással van a földbérleti díjra"],
		answer: "a. a földbérleti dij jelentősen csökken",
	},
	{
		id: 14,
		question: "Ha egy hosszú távú (klasszikus) modellben, ahol a termelési tényező a munka és a tőke, ceteris paribus növekszik a munkakínálat, akkor ennek következtében",
		options: ["a. nő a munka termelékenysége", "b. emelkedik az árszínvonal", "c. csökken a reálbér", "d. mindegyik fenti válasz helyes"],
		answer: "c. csökken a reálbér",
	},
]

export default fejezet3;
