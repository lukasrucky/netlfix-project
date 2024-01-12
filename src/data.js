import _355 from "./images/_355.png"
import beckham from "./images/beckham.png"
import boj from "./images/boj.png"
import hra_na_olihen from "./images/hra-na-olihen.png"
import hraci from "./images/hraci.png"
import jsou_svetla_ktera_nevidime from "./images/jsou-svetla-ktera-nevidime.png"
import lets_dance from "./images/lets-dance.png"
import narcos from "./images/narcos.png"
import never_back_down from "./images/never-back-down.png"
import nocni_agent from "./images/nocni-agent.png"
import nyad from "./images/nyad.png"
import papirovy_dum from "./images/papirovy-dum.png"
import partacky from "./images/partacky.png"
import pernikovy_tata from "./images/pernikovy-tata.png"
import posledni_vystrel from "./images/posledni-vystrel.png"
import revenant from "./images/revenant.png"
import sikovny_krejci from "./images/sikovny-krejci.png"
import sly from "./images/sly.png"
import tela from "./images/tela.png"
import ty from "./images/ty.png"
import underground from "./images/underground.png"
import uveznena_ve_vlastnim_tele from "./images/uveznena-ve-vlastnim-tele.png"
import vikingove from "./images/vikingove.png"
import vis_a_vis from "./images/vis-a-vis.png"
import vlk_z_wall_street from "./images/vlk-z-wall-street.png"
import za_carou from "./images/za-carou.png"
import zivot_na_nasi_planete from "./images/zivot-na-nasi-planete.png"
import laska_a_jine_zavislosti from "./images/laska-a-jine-zavislosti.png"
import mimi_sef from "./images/mimi-sef.png"
import shaft from "./images/shaft.png"
import grinch from "./images/grinch.png"
import shrek_treti from "./images/shrek-treti.png"
import princezna_z_cukrarny from "./images/princezna-z-cukrarny.png"
import vanoce_na_spadnuti from "./images/vanoce-na-spadnuti.png"
import zranitelna_srdce from "./images/zranitelna-srdce.png"
import nekde_mezi from "./images/nekde-mezi.png"
import nic_neni_jak_se_zda from "./images/nic-neni-jak-se-zda.png"

const AllMovies = [
    {
        id: 1,
        image: boj,
        title: "Boj",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Tom Lone a John Crawford pracují pro FBI. Oba se účastní akce, při které se jim podaří zneškodnit zabijáka z organizace jakuza – Sólistu. Poté oba muži s rodinami chystají party. Někdo jim však jde po krku. Tomův dům je přepaden a Tom s celou rodinou nemilosrdně zastřelen.",
        category: ["Oblíbené", "akční"]
    },
    {
        id: 2,
        image: lets_dance,
        title: "Lets dance",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Nora (Jenna Dewan) je studentka elitní umělecké akademie a právě hledá partnera pro své taneční vystoupení. Když se do její školy dostane na veřejně prospěšné práce divoký Tyler (Channing Tatum), je rozhodnuto.",
        category: ["oblíbené", "romantický"]
    },
    {
        id: 3,
        image: posledni_vystrel,
        title: "Poslední výstřel",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Válečný veterán a rančer Jim Hanson žije v Arizoně nedaleko mexických hranic. Jednoho dne se řízením osudu stane ochráncem jedenáctiletého přistěhovalce. Chlapec se snaží se svou matkou uprchnout do Států před zabijáky z kartelu.",
        category: ["oblíbené", "akční"]
    },
    {
        id: 4,
        image: never_back_down,
        title: "Never back down",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Teenager Jake Tyler (Sean Faris) se s rodiči a bratrem právě přistěhoval do Orlanda a nastoupil do zdejší školy. Tam však narazí na vyhlášeného rváče Ryana a rozhodne se, že se mu postaví. Nejprve však musí u skutečného mistra zvládnout bojová umění…",
        category: ["Akční", "Oblíbené"]
    },
    {
        id: 5,
        image: partacky,
        title: "Partačky",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Dvě zkušené zlodějky a nejlepší kamarádky už nebaví utíkat. Přijmou proto do týmu ráznou Sam, aby jim pomohla s posledním úkolem, který se od těch předchozích dost liší.",
        category: ["Komedie", "Nově přidané"]
    },
    {
        id: 6,
        image: _355,
        title: "355",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Agentka CIA Mase Brownová (Jessica Chastain) je na smrtící misi. Přísně utajovaná zbraň se dostala do rukou nepovolaných žoldáků, a tak vymyslí plán. Spojí své síly s mezinárodní konkurencí! První je německá agentka - drsňačka Marie (Diane Kruger), další je bývalá  spojenkyně MI6 a špičková počítačová specialistka Khadihjah (Lupita Nyong'o) a do třetice je to zkušená kolumbijská psycholožka Graciela (Penèlope Cruz).",
        category: ["Oblíbené", "Akční"]
    },
    {
        id: 7,
        image: papirovy_dum,
        title: "Papírový dům",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Osm zlodějů vezme rukojmí a zamkne se v Královské španělské tiskárně cenin, hlava zločinců manipuluje s policií, aby postupovala podle jeho plánu.",
        category: ["Oblíbené", "Seriál"]
    },
    {
        id: 8,
        image: uveznena_ve_vlastnim_tele,
        title: "Uvězněna ve vlastním těle",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Oblíbené", "Akční", "Nově přidané"]
    },
    {
        id: 9,
        image: za_carou,
        title: "Za čarou",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Akční"]
    },
    {
        id: 10,
        image: underground,
        title: "Underground - Tajné operace",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Akční", "Komedie"]
    },
    {
        id: 12,
        image: revenant,
        title: "Revenant",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Akční"]
    },
    {
        id: 13,
        image: vis_a_vis,
        title: "VIS a VIS",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Oblíbené"]
    },
    {
        id: 14,
        image: hraci,
        title: "Hráči",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Oblíbené", "Seriál"]
    },
    {
        id: 15,
        image: vikingove,
        title: "Vikingové",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Akční", "Seriál"]
    },
    {
        id: 16,
        image: pernikovy_tata,
        title: "Perníkový táta",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Oblíbené", "Seriál"]
    },
    {
        id: 28,
        image: tela,
        title: "Těla",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Oblíbené", "Nově přidané"]
    },
    {
        id: 17,
        image: zivot_na_nasi_planete,
        title: "Život na naši planetě",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Seriál","Nově přidané"]
    },
    {
        id: 18,
        image: sly,
        title: "Sly",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Oblíbené", "Seriál", "Nově přidané"]
    },
    {
        id: 19,
        image: beckham,
        title: "Beckham",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Seriál"]
    },
    {
        id: 20,
        image: jsou_svetla_ktera_nevidime,
        title: "Jsou světla která nevidíme",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Akční", "Nově přidané"]
    },
    {
        id: 21,
        image: sikovny_krejci,
        title: "Šikovný krejčí",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Romantický", "Seriál", "Nově přidané"]
    },
    {
        id: 22,
        image: narcos,
        title: "Narcos",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Oblíbené", "Seriál"]
    },
    {
        id: 23,
        image: vlk_z_wall_street,
        title: "Vlk z Wall Street",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Akční"]
    },
    {
        id: 24,
        image: ty,
        title: "Ty",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Romantický","Seriál"]
    },
    {
        id: 25,
        image: nocni_agent,
        title: "Noční agent",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Akční", "Seriál"]
    },
    {
        id: 26,
        image: nyad,
        title: "Nyad",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Oblíbené", "Nově přidané"]
    },
    {
        id: 27,
        image: hra_na_olihen,
        title: "Hra na oliheň",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Akční", "Seriál"]
    },
    {
        id: 28,
        image: laska_a_jine_zavislosti,
        title: "Láska a jiné závislosti",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Akční", "Seriál"]
    },
    {
        id: 29,
        image: mimi_sef,
        title: "Mimi šéf",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Akční", "Komedie"]
    },
    {
        id: 30,
        image: shaft,
        title: "Shaft",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Akční", "Komedie"]
    },
    {
        id: 31,
        image: grinch,
        title: "Grinch",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Komedie"]
    },
    {
        id: 32,
        image: shrek_treti,
        title: "Shrek třetí",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Akční", "Komedie"]
    },
    {
        id: 33,
        image: princezna_z_cukrarny,
        title: "Princezna z cukrárny",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Romantický"]
    },
    {
        id: 34,
        image: vanoce_na_spadnuti,
        title: "Hra na oliheň",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Romantický"]
    },
    {
        id: 35,
        image: zranitelna_srdce,
        title: "Hra na oliheň",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Romantický"]
    },
    {
        id: 36,
        image: nekde_mezi,
        title: "Někde mezi",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Romantický"]
    },
    {
        id: 37,
        image: nic_neni_jak_se_zda,
        title: "Nic není jak se zdá",
        age: "+13",
        tags: "Vtipný * Napínavý * Rodina",
        description: "Milá zdravotní sestra zkouší zjistit, jak pacientka v bezvědomí přišla ke svým zraněním. Podle všeho za nimi stojí kruté nepřátelství, nevěra, zrada a taky vražda.",
        category: ["Romantický"]
    },
]

export default AllMovies