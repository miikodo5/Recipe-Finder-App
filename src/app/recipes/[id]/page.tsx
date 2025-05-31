import Fallback from '@/shared/components/fallback';
import { recipesService } from '@/shared/services/recipes.service';
import { Suspense } from 'react';

export default async function RecipePage({ params }: { params: { id: number } }) {
    const { id } = params;
    const result = await recipesService.getRecipeById(id);
    if (result.code === 'ERR_BAD_REQUEST') {
        return <div className="mx-auto w-fit">Somthing went wrong</div>;
    }
    console.log(result);
    return (
        <div>
            <p>id: {id}</p>
            <Suspense fallback={<Fallback />}>
                <div className="flex flex-col gap-2 border-2 w-fit mx-auto">
                    <div className="flex flex-col  gap-2">
                        <p>{result.data.title}</p>
                        <img
                            alt="Recipe"
                            className="object-cover rounded-xl w-[300px] lg:w-[200px]"
                            src={result.data.image}
                        />
                    </div>
                    <p className="text-lg font-bold">List of ingredients:</p>
                    <ul className="list-inside list-decimal">
                        {result.data.extendedIngredients.map((i: any, index: any) => (
                            <li key={index}>
                                <p>{i.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </Suspense>
        </div>
    );
}
