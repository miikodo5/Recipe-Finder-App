import { IComplexSearchRequest } from '../types/requests.dto';
import mainAxios from './mainAxios';

class RecipesService {
    public getRecipesComplexSearch(params?: IComplexSearchRequest): Promise<any> {
        return mainAxios.get('/recipes/complexSearch', params);
    }

    public async getRecipeById(id: number): Promise<any> {
        return mainAxios.get(`/recipes/${id}/information`);
    }
}

export const recipesService = new RecipesService();
