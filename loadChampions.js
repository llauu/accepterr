
const champions = ["Aatrox", 
                    "Ahri", 
                    "Akali", 
                    "Akshan", 
                    "Alistar", 
                    "Amumu", 
                    "Anivia", 
                    "Annie", 
                    "Aphelios", 
                    "Ashe", 
                    "Aurelion Sol", 
                    "Azir", 
                    "Bardo", 
                    "Bel'veth", 
                    "Blitzcrank", 
                    "Brand", 
                    "Braum", 
                    "Briar", 
                    "Caitlyn", 
                    "Camille", 
                    "Cassiopeia", 
                    "Cho'Gath", 
                    "Corki", 
                    "Darius", 
                    "Diana", 
                    "Dr. Mundo", 
                    "Draven", 
                    "Ekko", 
                    "Elise", 
                    "Evelynn", 
                    "Ezreal", 
                    "Fiddlesticks", 
                    "Fiora", 
                    "Fizz", 
                    "Galio", 
                    "Gangplank", 
                    "Garen", 
                    "Gnar", 
                    "Gragas", 
                    "Graves", 
                    "Gwen", 
                    "Hecarim", 
                    "Heimerdinger", 
                    "Hwei", 
                    "Illaoi", 
                    "Irelia", 
                    "Ivern", 
                    "Janna", 
                    "Jarvan IV", 
                    "Jax", 
                    "Jayce", 
                    "Jhin", 
                    "Jinx", 
                    "K'Sante", 
                    "Kai'Sa", 
                    "Kalista", 
                    "Karma", 
                    "Karthus", 
                    "Kassadin", 
                    "Katarina", 
                    "Kayle", 
                    "Kayn", 
                    "Kennen", 
                    "Kha'Zix", 
                    "Kindred", 
                    "Kled", 
                    "Kog'Maw", 
                    "LeBlanc", 
                    "Lee Sin", 
                    "Leona", 
                    "Lillia", 
                    "Lissandra", 
                    "Lucian", 
                    "Lulu", 
                    "Lux", 
                    "Maestro Yi", 
                    "Malphite", 
                    "Malzahar", 
                    "Maokai", 
                    "Milio", 
                    "Miss Fortune", 
                    "Mordekaiser", 
                    "Morgana", 
                    "Naafiri", 
                    "Nami", 
                    "Nasus", 
                    "Nautilus", 
                    "Neeko", 
                    "Nidalee", 
                    "Nilah", 
                    "Nocturne", 
                    "Nunu y Willump", 
                    "Olaf", 
                    "Orianna", 
                    "Ornn", 
                    "Pantheon", 
                    "Poppy", 
                    "Pyke", 
                    "Qiyana", 
                    "Quinn", 
                    "Rakan", 
                    "Rammus", 
                    "Rek'Sai", 
                    "Rell", 
                    "Renata Glasc", 
                    "Renekton", 
                    "Rengar", 
                    "Riven", 
                    "Rumble", 
                    "Ryze", 
                    "Samira", 
                    "Sejuani", 
                    "Senna", 
                    "Seraphine", 
                    "Sett", 
                    "Shaco", 
                    "Shen", 
                    "Shyvana", 
                    "Singed", 
                    "Sion",
                    "Sivir", 
                    "Skarner", 
                    "Smolder", 
                    "Sona", 
                    "Soraka", 
                    "Swain", 
                    "Sylas", 
                    "Syndra", 
                    "Tahm Kench", 
                    "Taliyah", 
                    "Talon",
                    "Taric", 
                    "Teemo", 
                    "Thresh", 
                    "Tristana", 
                    "Trundle", 
                    "Tryndamere",
                    "Twisted Fate", 
                    "Twitch", 
                    "Udyr", 
                    "Urgot", 
                    "Varus", 
                    "Vayne", 
                    "Veigar", 
                    "Vel'Koz", 
                    "Vex", 
                    "Vi", 
                    "Viego",
                    "Viktor", 
                    "Vladimir", 
                    "Volibear", 
                    "Warwick", 
                    "Wukong", 
                    "Xayah", 
                    "Xerath", 
                    "Xin Zhao", 
                    "Yasuo", 
                    "Yone", 
                    "Yorick",
                    "Yuumi",
                    "Zac", 
                    "Zed", 
                    "Zeri", 
                    "Ziggs", 
                    "Zilean", 
                    "Zoe", 
                    "Zyra"
                ];


const $selChampBan = document.getElementById("sel-champ-ban");
const $selChampPick = document.getElementById("sel-champ-pick");

champions.forEach((champ) => {
    const $optionBan = document.createElement("option");
    const $selChampBanTxt = document.createTextNode(champ);
    
    const $optionPick = document.createElement("option");
    const $selChampPickTxt = document.createTextNode(champ);

    $optionBan.setAttribute("value", champ.toLowerCase());
    $optionBan.setAttribute("text", champ);
    
    $optionPick.setAttribute("value", champ.toLowerCase());
    $optionPick.setAttribute("text", champ);

    $optionBan.appendChild($selChampBanTxt);
    $optionPick.appendChild($selChampPickTxt);


    $selChampBan.appendChild($optionBan);
    $selChampPick.appendChild($optionPick);
});