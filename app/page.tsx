import CopyValue from '@/components/CopyValue';

// const flowList = [
//     {
//         title: 'Website doorklikken',
//         values: [],
//     },
//     {
//         title: 'Account registreren',
//         values: [
//             [
//                 { title: 'Gebruikersnaam', value: 'test123123123' },
//                 { title: 'Gebruikersnaam', value: 'test123123123' },
//             ],
//             [
//                 { title: 'Straat', value: 'test123123123' },
//                 { title: 'Huisnummer', value: 'test123123123' },
//                 { title: 'Plaats', value: 'test123123123' },
//                 { title: 'Land', value: 'test123123123' },
//             ],
//         ],
//     },
// ];

const flowList = [
    {
        title: 'Niet ingelogd: Website doorklikken',
        values: [],
    },
    {
        title: 'Gebruiker A (Liza): Account registreren',
        values: [
            [{ title: 'E-mailadres', value: 'lisa.jansen@email.nl' }],
            [
                { title: 'Gebruikersnaam', value: 'lisajansen' },
                { title: 'Wachtwoord', value: 'password123' },
                { title: 'Herhaal wachtwoord', value: 'password123' },
            ],
            [
                { title: 'Voornaam', value: 'Lisa' },
                { title: 'Achternaam', value: 'Jansen' },
                { title: 'Adresregel  1', value: 'Kerkstraat 12' },
                { title: 'Postcode', value: '1234 AB' },
                { title: 'Plaats', value: 'Utrecht' },
                { title: 'Staat/Provincie', value: 'Utrecht' },
                { title: 'Land', value: 'Nederland' },
                { title: 'Telefoonnummer 1', value: '0612345678' },
                { title: 'Geboortedatum', value: '11-11-2001' },
                // { title: 'Beveiligingsvraag', value: 'Wat is de naam van je eerste huisdier?' },
                { title: 'Antwoord', value: 'Freddie' },
            ],
        ],
    },
    {
        title: 'Gebruiker A (Liza): Inloggen',
        values: [
            [
                { title: 'E-mail', value: 'lisa.jansen@email.nl' },
                { title: 'Wachtwoord', value: 'password123' },
            ],
        ],
    },
    {
        title: 'Gebruiker A (Liza): Profielpagina tonen',
        values: [],
    },
    {
        title: 'Gebruiker A (Liza): Verkopersaccount activeren',
        values: [
            [{ title: 'E-mailadres', value: 'lisa.jansen@email.nl' }],
            [
                { title: 'Banknaam', value: 'Rabobank' },
                { title: 'Rekeningnummer', value: 'NL12BANK0123456789' },
                { title: 'Creditcardnummer', value: '1234 5678 9012 3456' },
            ],
        ],
    },
    {
        title: 'Gebruiker A (Liza): Veiling A (Televisie) aanmaken',
        values: [
            [
                { title: 'Titel', value: 'Televisie' },
                {
                    title: 'Beschrijving',
                    value: 'Een grote van volgens mij Samsung, paar jaar lang gebruikt, maar heb nu een nieuwe TV',
                },
                { title: 'Rubriek', value: "Consumentenelektronica -> Beeld -> TV's " },
                { title: 'Startbod', value: '150' },
                { title: 'Conditie', value: 'Gebruikt, maar in goede staat' },
                { title: 'Veilingduur', value: '7 dagen' },
            ],
        ],
    },
    {
        title: 'SQL: Voeg 4 biedingen toe op Veiling A (Televisie) (stimulatie)',
        values: [],
    },
    {
        title: 'Gebruiker A (Liza): Telefoonnummer aanpassen',
        values: [
            [
                {
                    title: 'Nieuw telefoonnummer',
                    value: '06987654321',
                },
            ],
        ],
    },
    {
        title: 'SQL: Pas eindtijd van Veiling A (Televisie) aan naar 2 minuten',
        values: [],
    },
    {
        title: 'Gebruiker B (Mark): Naar profielpagina',
        values: [],
    },
    {
        title: 'Gebruiker B (Mark): Laten zien dat Veiling B (Schoenendoos) actief is zonder biedingen',
        values: [],
    },
    {
        title: 'Gebruiker B (Mark): Zoeken naar Veiling A (Televisie) via zoekfunctie',
        values: [],
    },
    {
        title: 'Gebruiker B (Mark): Biedt op Veiling A (Televisie) (hoogste bod)',
        values: [],
    },
    {
        title: 'Veiling A (Televisie) verloopt, tonen dat deze is verlopen',
        values: [],
    },
    {
        title: 'Mail: Verlopen Veiling A (Televisie) emails tonen in MailHog',
        values: [],
    },
    {
        title: 'Gebruiker B (Mark): Feedback geven via mail',
        values: [
            [
                { title: 'Tevredenheid', value: 'Positief' },
                { title: 'Commentaar', value: 'Aardige vrouw, mooie televisie' },
            ],
        ],
    },
    {
        title: 'SQL: Pas eindtijd van Veiling B (Schoenendoos) aan naar 1 minuut',
        values: [],
    },
    {
        title: 'Gebruiker A (Liza): Zoekt naar Veiling B (Schoenendoos) onder "bijna geëindigd"',
        values: [],
    },
    {
        title: 'Gebruiker A (Liza): Geen bod uitbrengen op Veiling B (Schoenendoos)',
        values: [],
    },
    {
        title: 'Veiling B (Schoenendoos) verloopt, tonen dat deze is verlopen',
        values: [],
    },
    {
        title: 'Mail: Verlopen Veiling B (Schoenendoos) emails tonen in MailHog',
        values: [],
    },
    {
        title: 'Gebruiker B (Mark): Uitloggen',
        values: [],
    },
    {
        title: 'Beheerder: Inloggen',
        values: [
            [
                { title: 'E-mail', value: 'Administrator@EenmaalAndermaal.nl' },
                { title: 'Wachtwoord', value: '1553CR3T!' },
            ],
        ],
    },
    {
        title: 'Beheerder: Site verkennen (geen biedknoppen etc.)',
        values: [],
    },
    {
        title: 'Beheer: Dashboard tonen',
        values: [],
    },
    {
        title: 'Beheerder: Veiling C (antieke prullenbak) blokkeren via veilingenbeheer',
        values: [[{ title: 'Reden', value: 'Gestolen producten mogen niet verkocht worden. ' }]],
    },
    {
        title: 'Mail: Mails over geblokkeerde veiling',
        values: [],
    },
    {
        title: 'Beheerder: Subrubriek aanmaken',
        values: [],
    },
    {
        title: 'Beheerder: Subrubriek controle voor het aanmaken',
        values: [[{ title: 'Rubriek controle naam', value: 'Interieur' }]],
    },
    {
        title: 'Beheerder: Subrubriek toevoegen aan Huis en Tuin',
        values: [[{ title: 'Naam', value: 'Interieur' }]],
    },
    {
        title: 'Beheerder: Logboek bekijken',
        values: [],
    },
];

export default function Home() {
    return (
        <div className="max-w-[800px] w-full mx-auto">
            <div className="py-5 mb-10 border-b border-slate-300">
                <h1 className="text-3xl font-bold">Demo tool</h1>
            </div>

            {/* Checklist */}
            <div className="mb-10">
                <h2 className="mb-2 text-2xl font-semibold">Pre-conditie checklist</h2>
                <div className="flex items-center gap-1">
                    <input type="checkbox" id="1" />
                    <label htmlFor="1">Browsers openen (Brave, Edge)</label>
                </div>
                <div className="flex items-center gap-1">
                    <input type="checkbox" id="2" />
                    <label htmlFor="2">MailHog ingelogd in de browsers</label>
                </div>
                <div className="flex items-center gap-1">
                    <input type="checkbox" id="3" />
                    <label htmlFor="3">MailHog geleegd</label>
                </div>

                {/* Gebruiker B (Mark) */}
                <div>
                    <div className="flex items-center gap-1">
                        <input type="checkbox" id="4" />
                        <label htmlFor="4">Gebruiker B (Mark)</label>
                    </div>

                    <div className="ml-5">
                        <div className="flex items-center gap-1">
                            <input type="checkbox" id="5" />
                            <label htmlFor="5">Is Verkoper</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input type="checkbox" id="6" />
                            <label htmlFor="6">
                                Heeft veiling (Veiling B (Schoenendoos): Schoenendoos)
                            </label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input type="checkbox" id="7" />
                            <label htmlFor="7">Ingelogd in Browser edge</label>
                        </div>
                    </div>
                </div>

                {/* Veiling C */}
                <div>
                    <div className="flex items-center gap-1">
                        <input type="checkbox" id="4" />
                        <label htmlFor="4">Veiling C (Antieke Prullenbak)</label>
                    </div>
                </div>

                {/* Gebruiker C */}
                {/* <div>
                    <div className="flex items-center gap-1">
                        <input type="checkbox" id="8" />
                        <label htmlFor="8">Gebruiker C</label>
                    </div>

                    <div className="ml-5">
                        <div className="flex items-center gap-1">
                            <input type="checkbox" id="9" />
                            <label htmlFor="9">Is Verkoper</label>
                        </div>
                        <div className="flex items-center gap-1">
                            <input type="checkbox" id="10" />
                            <label htmlFor="10">Heeft veiling (Veiling C: Prullenbak)</label>
                        </div>
                        <div className="ml-5">
                            <div className="flex items-center gap-1">
                                <input type="checkbox" id="11" />
                                <label htmlFor="11">Heeft hoogste bod</label>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>

            <div>
                <h2 className="mb-2 text-2xl font-semibold">Flow</h2>

                {flowList.map((step, index) => (
                    <div key={index} className="mt-5">
                        <h3 className="font-medium">
                            {index + 1}. {step.title}
                        </h3>
                        {step.values.length > 0 && (
                            <div className="mt-1 space-y-4">
                                {step.values.map((group, groupIndex) => (
                                    <div key={groupIndex} className="">
                                        {group.map((item, itemIndex) => (
                                            <CopyValue
                                                key={itemIndex}
                                                title={item.title}
                                                value={item.value}
                                            />
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
