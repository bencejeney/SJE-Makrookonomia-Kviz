const fejezet4 = [
	{
		id: 1,
		question: "A tőkeállomány nagyságában bekövetkezett változás egyenlő",
		options: ["a. beruházás - amortizáció", "b. beruházás + amortizáció", "c. beruházás x amortizáció", "d. beruházás / amortizáció"],
		answer: "a. beruházás - amortizáció",
	},
	{
		id: 2,
		question: "Solow-féle növekedési modellben stacionárius állapot mellett a népesség növekedésétől és a technológiai haladástól eltekintve,",
		options: ["a. az egy főre jutó tőkeállomány mennyisége időben nem változik", "b. az egy főre jutó beruházás értéke megegyezik az egy főre jutó amortizáció nagyságával", "c. az egy főre jutó megtakarítás értéke megegyezik az egy főre jutó amortizáció nagyságával", "d. mindegyik válasz helyes"],
		answer: "d. mindegyik válasz helyes",
	},
	{
		id: 3,
		question: "Amennyiben y = k^(1/2), s = 0,4, valamint az amortizációs ráta 8=10%, az egy főre jutó tőkeállomány stacionárius állapotnak megfelelő értéke",
		options: ["a. 2", "b. 4", "c. 8", "d. 16"],
		answer: "d. 16",
	},
	{
		id: 4,
		question: "Amennyiben a technológiai változástól eltekintünk, a tőkefelhalmozás aranyszabály szerinti szintje kgold^* azt a stacioner állapotot jellemzi, amely mellett maximális:",
		options: ["a. az egy főre jutó fogyasztás növekedési üteme", "b. az egy főre jutó kibocsátás növekedési üteme", "c. az egy főre jutó fogyasztás szintje", "d. az egy főre jutó kibocsátás szintje"],
		answer: "c. az egy főre jutó fogyasztás szintje",
	},
	{
		id: 5,
		question: "Amennyiben y=k^(1/5), δ = 5%, valamint a tőkefelhalmozás aranyszabály szerinti értéke kgold^*=100, az a megtakarítási hányad, amely megfelel a tőkefelhalmozás aranyszabályának:",
		options: ["a. 5%", "b. 10%", "c. 20%", "d. 50%"],
		answer: "c. 20%",
	},
	{
		id: 6,
		question: "Egy Solow-modellben, ahol a népesség növekedési üteme n, az egy főre jutó tőkeállomány változása megegyezik az alábbi kifejezés értékével:",
		options: ["a. s.f(k) + (δ + n)k", "b. s.f(k) - (δ + n)k", "c. s.f(k) + (δ - n)k", "d. s.f(k) - (δ - n)k"],
		answer: "b. s.f(k) - (δ + n)k",
	},
	{
		id: 7,
		question: "A népesség növekedési ütemében (n) bekövetkezett növekedés:",
		options: ["a. növeli a stacionárius állapotnak megfelelő egy főre jutó tőkeállomány értékét", "b. nincs hatással a stacionárius állapotnak megfelelő egy főre jutó tőkeállomány értékére", "c. csökkenti a stacionárius állapotnak megfelelő egy főre jutó tőkeállomány értékét", "d. amennyiben δ<n csökkenti az egy főre jutó tőkeállomány stacionárius állapotnak megfelelő értékét, amennyiben δ>n, növeli azt"],
		answer: "c. csökkenti a stacionárius állapotnak megfelelő egy főre jutó tőkeállomány értékét",
	},
	{
		id: 8,
		question: "Ha y=k^(1/2), s = 0,4, δ = 0,2, akkor a stacioner egyensúlyi egy főre jutó tőkeállomány",
		options: ["a. 2", "b. 4", "c. 8", "d. 16"],
		answer: "b. 4",
	},
	{
		id: 9,
		question: "Ha y=k^(1/2) , s = 0,4, δ = 0,2, akkor a stacioner egyensúlyi egy főre jutó beruházás",
		options: ["a. 0,8", "b. 1,6", "c. 2", "d. 8"],
		answer: "a. 0,8",
	},
	{
		id: 10,
		question: "A stacioner egyensúlyi egy főre eső tőkeállomány megnő, ha",
		options: ["a. az egy főre eső beruházások szintje süllyed", "b. az amortizáció üteme emelkedik", "c. a megtakaritási ráta emelkedik", "d. mindegyik fent emlitett esetben"],
		answer: "c. a megtakaritási ráta emelkedik",
	},
	{
		id: 11,
		question: "Egy stacionárius egyensúlyban lévő gazdaságban megnövelik a megtakarítási rátát. Az új egyensúly beálltakor",
		options: ["a. az egy főre jutó kibocsátás nagyobb ütemben fog nőni, mint korábban", "b. az egy főre jutó kibocsátás nagyobb lesz", "c. az egy főre jutó tőkeállomány nem változik", "d. mindegyik fenti válasz helyes"],
		answer: "b. az egy főre jutó kibocsátás nagyobb lesz",
	},
	{
		id: 12,
		question: "A Solow-modell stacionárius egyensúlyi állapotában az életszínvonal folyamatos növekedése - ha van - ................ köszönhető",
		options: ["a. a magas megtakarítási hányadnak", "b. az alacsony amortizációs rátának", "c. a technológiai haladásnak", "d. a magas egy főre jutó tőkeállománynak"],
		answer: "c. a technológiai haladásnak",
	},
	{
		id: 13,
		question: "A Solow-modellben a kibocsátás egyensúlyi növekedési üteme",
		options: ["a. 0", "b. g", "c. n", "d. n+g"],
		answer: "d. n+g",
	},
	{
		id: 14,
		question: "A Solow-modell eredményei alapján egy nemzetgazdaság életszínvonalának folyamatos emelkedése:",
		options: ["a. a technológiai haladásnak köszönhető, amely az egy főre jutó kibocsátás növekedésének fenntarthatóságához vezet", "b. a magas megtakarítási hányadnak köszönhető, amely magas fenntartható növekedési ütemhez vezet", "c. a népesség magas növekedési ütemének köszönhető, amely nagyobb munkaerő-állományhoz vezet", "d. mindegyik válasz helyes"],
		answer: "a. a technológiai haladásnak köszönhető, amely az egy főre jutó kibocsátás növekedésének fenntarthatóságához vezet",
	},
	{
		id: 15,
		question: "A technológiai haladást elősegítő tényező lehet:",
		options: ["a. a szabadalmi rendszer", "b. a kutatás-fejlesztési tevékenységekkel kapcsolatos adókedvezmény", "c. a kutatások állami támogatása", "d. mindegyik fenti válasz helyes"],
		answer: "d. mindegyik fenti válasz helyes",
	},
]

export default fejezet4;
