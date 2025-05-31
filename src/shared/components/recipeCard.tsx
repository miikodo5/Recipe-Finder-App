'use client';

import { redirect } from 'next/navigation';

export default function RecipesCard({ data, index }: { data: any; index: any }) {
    return (
        <div
            key={index}
            className="mt-10 mx-auto w-fit p-4 bg-amber-200 flex flex-col  items-center gap-4 border rounded-2xl cursor-pointer"
            onClick={() => {
                redirect(`recipes/${data.id}`);
            }}
        >
            <p className="text-lg font-bold">{data.title}</p>
            <img
                alt="Recipe"
                className="object-cover rounded-xl w-[300px] lg:w-[200px]"
                src={data.image}
            />
        </div>
    );
}
