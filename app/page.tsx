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
        title: 'Stap 1: Inloggen als Alice (reiziger)',
        values: [
            [
                { title: 'Gebruikersnaam', value: 'alice' },
                { title: 'Wachtwoord', value: 'wachtwoord123' },
            ],
        ],
    },
    {
        title: 'Stap 2: Inloggen als Bob (medewerker)',
        values: [
            [
                { title: 'Gebruikersnaam', value: 'bob' },
                { title: 'Wachtwoord', value: 'bobpass' },
            ],
        ],
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
