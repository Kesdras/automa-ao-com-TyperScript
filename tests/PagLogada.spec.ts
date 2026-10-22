import {test, expect} from '../fixtures/auth.fixture'

test.describe('acesso area protegida - painel', ()=> {
    test('Deve acessar painel com usuario já logado', 
        async ({paginaAutenticada   })=> {
        // validar se  esta na pagina de painel
        await expect(paginaAutenticada).toHaveURL(/painel\.html/);
        // verificar existencia de titulo h1 
        const h1Painel = paginaAutenticada.locator('#panelTitle');
        await expect(h1Painel).toBeVisible();
        // Verificar preseça do bt loggout
        const btSair = paginaAutenticada.locator('#logoutButton');
        await expect(btSair).toBeVisible()
    });
});