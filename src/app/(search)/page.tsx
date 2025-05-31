'use client';
import { ISearch } from '@/shared/types/search';
import { CUISINES } from '@/shared/utils/cuisinesList';
import React, { useEffect, useState } from 'react';

export default function ComplexSearchPage() {
    const [isDisable, setIsDisable] = useState(true);
    const [data, setData] = useState<ISearch>({
        query: '',
        cuisine: '',
        maxReadyTime: 0,
    });

    useEffect(() => {
        if (data.cuisine === '' && data.maxReadyTime === 0 && data.query === '') {
            setIsDisable(true);
            return;
        }

        setIsDisable(false);
    }, [data]);
    const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
        const { name, value } = e.target;
        let v: any = value;
        if (name === 'maxReadyTime') {
            v = Number(value);
        }
        setData((prevData) => ({ ...prevData, [name]: v }));
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();

        const form = e.target;
    };
    return (
        <section className="w-1/2 m-auto mt-10 p-5 border-2 rounded-2xl">
            <form method="get" action={'recipes'} onChange={handleChange}>
                <div className="flex flex-col gap-3">
                    <input
                        className="px-2 py-1 outline-1 rounded-md"
                        type="text"
                        name="query"
                    />
                    <select className="px-2 py-1 outline-1 rounded-md" name="cuisine">
                        {CUISINES.map((cuisine, index) => (
                            <option
                                value={cuisine.value}
                                key={`${cuisine.value}-${index}`}
                            >
                                {cuisine.text}
                            </option>
                        ))}
                    </select>
                    <input
                        className="px-2 py-1 outline-1 rounded-md"
                        type="number"
                        name="maxReadyTime"
                        min={0}
                        defaultValue={0}
                    />
                    <button
                        className={`px-2 py-1 outline-1 rounded-md ${
                            isDisable
                                ? 'cursor-default bg-gray-300 text-white'
                                : 'cursor-pointer  bg-blue-400 text-black'
                        }`}
                        type="submit"
                        disabled={isDisable}
                    >
                        Next
                    </button>
                </div>
            </form>
        </section>
    );
}
