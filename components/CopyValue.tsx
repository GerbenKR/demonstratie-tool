'use client';

import { useState } from 'react';

type CopyValueProps = {
    title: string;
    value: string;
};

export default function CopyValue({ title, value }: CopyValueProps) {
    const [copied, setCopied] = useState(false);
    const [alreadyCopied, setAlreadyCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setAlreadyCopied(true);
            setTimeout(() => setCopied(false), 1000);
        } catch (err) {
            console.error('Fout bij kopiëren:', err);
        }
    };

    return (
        <div className="grid grid-cols-4 rounded overflow-hidden">
            <div
                className={`col-span-1 p-2 text-sm  duration-100 ${
                    alreadyCopied ? 'bg-green-300' : 'bg-slate-100'
                }`}>
                {title}
            </div>
            <div
                className={`col-span-3 p-2 font-mono flex justify-between items-center duration-100 text-sm ${
                    copied ? 'bg-green-500 text-white' : 'bg-slate-200'
                }`}
                onClick={handleCopy}>
                {value}
            </div>
        </div>
    );
}
