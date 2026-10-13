import { describe, it, expect } from 'vitest';
import { listaCasosTeste, simularExecucaoTeste, rodarAutomacao } from './08-avancado';

describe('Testes Unitários - Módulo Avançado (Arrays, Objetos e Assincronismo)', () => {

  it('Deve conter uma lista válida de casos de teste em formato de objeto', () => {
    expect(listaCasosTeste.length).toBe(3);
    expect(listaCasosTeste[0]).toHaveProperty('titulo', 'Login válido');
    expect(listaCasosTeste[0].status).toBe('Passou');
  });

  it('Deve resolver a Promise com sucesso para um caso de teste concluído', async () => {
    const casoTeste = listaCasosTeste[0]; // Status: Passou
    const resposta = await simularExecucaoTeste(casoTeste);
    expect(resposta).toContain('Login válido');
  });

  it('Deve rejeitar a Promise se o caso de teste estiver pendente', async () => {
    const casoPendente = listaCasosTeste[1]; // Status: Pendente
    await expect(simularExecucaoTeste(casoPendente)).rejects.toContain('está pendente');
  });

  it('Deve executar a automação de ponta a ponta com async/await', async () => {
    const resultado = await rodarAutomacao(listaCasosTeste[2]); // Filtro de busca
    expect(resultado).toBe('O teste "Filtro de busca" foi executado com sucesso!');
  });

});