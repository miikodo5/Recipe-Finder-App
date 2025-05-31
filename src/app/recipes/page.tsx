export const revalidate = 60;

import { redirect } from 'next/navigation';
import { recipesService } from '@/shared/services/recipes.service';
import { IComplexSearchRequest } from '@/shared/types/requests.dto';
import RecipesCard from '@/shared/components/recipeCard';
import { Suspense } from 'react';
import Fallback from '@/shared/components/fallback';

export default async function RecipesPage({ params }: { params: any }) {
    const query: IComplexSearchRequest = {
        data: {
            query: params.query?.toString(),
            cuisine: params.cuisine?.toString(),
            maxReadyTime: Number(params.maxReadyTime),
        },
    };

    const result = await recipesService.getRecipesComplexSearch(query);

    if (result.code === 'ERR_BAD_REQUEST') {
        return <div className="mx-auto w-fit">Somthing went wrong</div>;
    }

    return (
        <Suspense fallback={<Fallback />}>
            <div>
                {result.data.results.map((data: any, index: any) => (
                    <RecipesCard data={data} index={index} />
                ))}
            </div>
        </Suspense>
    );
}
