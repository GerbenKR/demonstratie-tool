import CopyValue from '@/components/CopyValue';

// {
//         title: 'Gebruiker A (Liza): Inloggen',
//         values: [
//             [
//                 { title: 'E-mail', value: 'lisa.jansen@email.nl' },
//                 { title: 'Wachtwoord', value: 'password123' },
//             ],
//         ],
// },
const flowList = [
    {
        title: 'Gebruiker A (Mark): inloggen',
        values: [
            [
                { title: 'E-mail', value: 'mark.boer@email.nl' },
                { title: 'Wachtwoord', value: 'password123' },
            ],
        ],
    },
    {
        title: 'Gebruiker A (Mark): Verkopersaccount activeren',
        values: [[{ title: 'E-mail', value: 'mark.boer@email.nl' }]],
    },
    {
        title: 'Gebruiker A (Mark): Veiling aanmaken (Televisie)',
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
        title: 'SQL tonen: query aangemaakte veiling',
        values: [],
    },

    {
        title: 'SQL: Eindtijd aanpassen naar 1 minuut (Televisie)',
        values: [],
    },

    {
        title: 'ACTIE: Switchen naar browser met Sophie account',
        values: [],
    },
    {
        title: 'Gebruiker B (Sophie): zoekt op "Televisie"',
        values: [[{ title: 'Zoek term:', value: 'Televisie' }]],
    },
    {
        title: 'Gebruiker B (Sophie): gaat naar Televisie veiling',
        values: [],
    },
    {
        title: 'Gebruiker B (Sophie): gaat bieden (wordt hoogste bod)',
        values: [],
    },

    {
        title: 'VEILING VERLOOPT',
        values: [],
    },

    {
        title: 'Mail: mails tonen over velopen veiling',
        values: [],
    },

    {
        title: 'JESPER NEEMT OVER',
        values: [],
    },

    {
        title: 'Gebruiker B (Sophie): uitloggen',
        values: [],
    },

    {
        title: 'Beheer: inloggen',
        values: [
            [
                { title: 'E-mail', value: 'Administrator@EenmaalAndermaal.nl' },
                { title: 'Wachtwoord', value: '1553CR3T!' },
            ],
        ],
    },

    {
        title: 'BEHEER HANDLEIDING',
        values: [],
    },

    {
        title: 'Beheer: pagina tonen',
        values: [],
    },

    {
        title: 'Beheer: subrubriek aanmaken',
        values: [[{ title: 'Rubriek controle naam', value: 'Interieur' }]],
    },
    {
        title: 'Beheer: veiling blokkeren',
        values: [],
    },

    {
        title: 'Mail: geblokeerd mails tonen',
        values: [],
    },
    {
        title: 'Beheer: logboek',
        values: [],
    },
];

export default function Home() {
    return (
        <div className="max-w-[800px] w-full mx-auto">
            <div className="py-5 mb-10 border-b border-slate-300">
                <h1 className="text-3xl font-bold">Demo tool V2</h1>
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
