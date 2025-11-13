/**
 * Converte texto em snake_case para formato normal com primeira letra maiúscula
 * @param text - Texto em snake_case
 * @returns Texto formatado com espaços e capitalização
 * 
 * @example
 * snakeCaseToNormal('muito_baixo') // 'Muito Baixo'
 * snakeCaseToNormal('medio') // 'Medio'
 * snakeCaseToNormal('interacao_avaliativa') // 'Interacao Avaliativa'
 */
export function snakeCaseToNormal(text: string): string {
    return text
        .split('_')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
};