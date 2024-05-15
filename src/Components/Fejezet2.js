const fejezet2 = [
	{
		id: 1,
		question: "Inflációs időszakban:",
		options: ["a. a nominális GDP a reál-GDP növekedési ütemének megfelelően növekszik", "b. a nominális GDP a reál-GDP növekedési üteménél nagyobb ütemben növekszik", "c. a nominális GDP a reál-GDP növekedési üteménél kisebb ütemben növekszik", "d. nem lehet következtetéseket levonni a nominális és reál-GDP relatív növekedési ütemével kapcsolatosan"],
		answer: "b. a nominális GDP a reál-GDP növekedési üteménél nagyobb ütemben növekszik",
	},
	{
		id: 2,
		question: "A négyszektoros jövedelemáramlási modellben teljesül az alábbi ex-post jövedelemáramlási azonosság:",
		options: ["a. Y=C+I+G+IM+X", "b. Y+I=C+G+X-IM", "c. Y=C+I+G+X-IM", "d. Y-IM=C+I+G+Х"],
		answer: "c. Y=C+I+G+X-IM",
	},
	{
		id: 3,
		question: "Egy adott vállalat hozzáadott értéke",
		options: ["a. megegyezik az eladásainak összértékével", "b. megegyezik eladásainak és a felhasznált félkész termékek költségeinek különbségével", "c. megegyezik a profitjának értékével", "d. hosszú távon kizárólag nulla lehet"],
		answer: "b. megegyezik eladásainak és a felhasznált félkész termékek költségeinek különbségével"
	},
	{
		id: 4,
		question: "A GDP-deflátor az alábbi módon definiálható:",
		options: ["a. nominális GDP x reál GDP", "b. reál GDP / nominális GDP", "c. nominális GDP / reál GDP", "d. nominális GDP + reál GDP"],
		answer: "c. nominális GDP / reál GDP"
	},
	{
		id: 5,
		question: "Okun törvénye kapcsolatot állít fel:",
		options: ["a. a reál GDP százalékos változása és a munkanéküliségi ráta változása", "b. a nominális GDP százalékos változása és a munkaerő-állomány változása", "c. a reál GDP értekének abszolút változása és a munkanélküliségi rátaszázalékos változása között", "d. a reál GDP értékének abszolút változása és a a GDP-deflátor értékének százalékos változása között"],
		answer: "a. a reál GDP százalékos változása és a munkanéküliségi ráta változása"
	},
	{
		id: 6,
		question: "Amennyiben egy szlovákiai állampolgárt egy magyarországi vállalat foglalkoztat, akkor az a jövedelem, melyet az állampolgár realizál:",
		options: ["a. része Szlovákia GDP-jének és Magyarorszag GNP-jének", "b. része Szlovákia GDP-jének és Magyarország GDP-jének", "c. része Szlovákia GNP-jének és Magyarország GNP-jének", "d. része Szlovákia GNP-jének és Magyarország GDP-jének"],
		answer: "d. része Szlovákia GNP-jének és Magyarország GDP-jének"
	},
	{
		id: 7,
		question: "A bruttó hazai termék",
		options: ["a. megegyezik a vállalatok összes termelési értékével", "b. megegyezik a hazai gazdasági termelők összes jövedelmével, akár hazai, akár külföldi eredetű a jövedelem", "c. az ország területén adott időszakban megtermelt termékek és szolgáltatások összértéke", "d. megegyezik a hazai gazdasági szereplők hazai eredetű jövedelmével"],
		answer: "c. az ország területén adott időszakban megtermelt termékek és szolgáltatások összértéke"
	},
	{
		id: 8,
		question: "A nemzetgazdaságban keletkezett aggregált jövedelem értéke megegyezik",
		options: ["a. a foglalkoztatottak teljes bértömegével", "b. a termelés különböző fázisaiban keletkezett hozzáadott érték összegével", "c. az időszak alatt lebonyolított pénzbeli tranzakciók összértékével", "d. a termelők által realizált profit nagyságával"],
		answer: "b. a termelés különböző fázisaiban keletkezett hozzáadott érték összegével"
	},
	{
		id: 9,
		question: "A GDP kiszámításánál alkalmazott bruttó beruházás tartalmazza",
		options: ["a. a készletek növekedését", "b. a részvények vásárlását", "c. a háztartások autóvásárlását", "d. a használt gépek vásárlását, ha azok nem importból származnak"],
		answer: "a. a készletek növekedését"
	},
	{
		id: 10,
		question: "Tegyük fel, hogy a GDP-deflátor értéke emelkedik, miközben a reál GDP értéke csökken. Ekkor",
		options: ["a. a nominális GDP-nek emelkednie kell", "b. a nominális GDP-nek csökkennie kell", "c. a nominális GDP-nek változatlannak kell maradnia", "d. a nominális GDP értéke nőhet, csökkenhet és változatlan is maradhat"],
		answer: "d. a nominális GDP értéke nőhet, csökkenhet és változatlan is maradhat"
	},
	{
		id: 11,
		question: "A GDP-deflátor",
		options: ["a. értéke biztosan emelkedik, ha a reál GDP nő", "b. is egyfajta inflációs mérőszám", "c. mindig kisebb áremelkedést mutat, mint a fogyasztói árindex", "d. a kibocsátás bázisidőszakban rögzített egységének értékváltozását mutatja"],
		answer: "b. is egyfajta inflációs mérőszám"
	},
	{
		id: 12,
		question: "A fogyasztói árindex",
		options: ["a. a tárgy-és bázisidőszak fogyasztási volumenadatainak hányadosa", "b. mindig nagyobb inflációt mutat, mint a GDP-deflátor", "c. szisztematikusan alulbecsüli a reprezentatív háztartás megélhetési költségeinek emelkedését", "d. egy rögzített összetételű jószágkosár beszerzési költségének változásátmutatja"],
		answer: "d. egy rögzített összetételű jószágkosár beszerzési költségének változásátmutatja"
	},
	{
		id: 13,
		question: "A részvételi arány (aktivitási ráta)",
		options: ["a. a foglalkoztatottak számának és a munkaerő-állománynak (aktív népesség) a hányadosa", "b. a munkaerő-állománynak és a felnőtt (munkaképes korú) lakosságnak a hányadosa", "c. a munkaerő-állománynak és a teljes lakosságnak a hányadosa", "d. a foglalkoztatottak számának és a felnőtt lakosságnak a hányadosa"],
		answer: "b. a munkaerő-állománynak és a felnőtt (munkaképes korú) lakosságnak a hányadosa"
	},
	{
		id: 14,
		question: "A munkanélküliségi ráta a munkanélküliek számának és",
		options: ["a. a teljes lakosság számának a hányadosa", "b. a felnőtt lakosság számának a hányadosa", "c. a munkaerő-állománynak a hányadosa", "d. a foglalkoztatottak számának hányadosa"],
		answer: "c. a munkaerő-állománynak a hányadosa"
	},
	{
		id: 15,
		question: "Amennyiben Okun törvénye érvényesül és a reál GDP egyik évről a másikra 4 százalékponttal emelkedik, akkor ezzel egy időben a munkanélküliségi ráta egyik évről a másikra",
		options: ["a. 2 százalékponttal csökken", "b. 4 százalékponttal csökken", "c. 1 százalékponttal csökken", "d. 0,5 százalékponttal csökken"],
		answer: "d. 0,5 százalékponttal csökken"
	},
]

export default fejezet2;
