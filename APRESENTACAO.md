# Intervalo Lanches — estudo de caso

O Intervalo Lanches adapta o site Fast Lanches para o cenário da cantina escolar. Usa o cardápio e os preços do projeto enviado, com uma nova identidade visual e uma simulação de retirada no intervalo.

## Situação 1 — três alunos editam index.html

1. Se os três alunos mudam de formas incompatíveis o mesmo trecho do cabeçalho, das ofertas ou do cardápio, pode ocorrer um conflito na integração. Um push também pode ser rejeitado se a branch remota já recebeu outros commits.
2. O Git compara as duas versões com o ancestral comum. Quando não consegue combinar as edições, indica o arquivo em conflito e normalmente marca os trechos com `<<<<<<<`, `=======` e `>>>>>>>`.
3. Combine antes quem altera cada trecho. No Intervalo Lanches, o HTML organiza as telas, o CSS define o visual e `js/catalogo.js` concentra os dados dos produtos. Integre mudanças em commits pequenos e revise o resultado.
4. As branches permitem trabalhar separadamente e revisar cada contribuição via pull request. Ao resolver um conflito, preserve a navegação e teste a adição de ofertas antes de concluir o merge.

## Situação 2 — criar o destaque semanal

1. Crie uma branch a partir da `main` atualizada para manter a versão do cardápio em funcionamento durante a mudança.
2. Um nome adequado seria `feat/ofertas-da-semana`. Nesta revisão, o destaque do Cachorro-quente + Suco foi integrado em `feat/intervalo-lanches`.
3. Envie a branch e abra um pull request para `main`. Verifique se o botão adiciona o combo correto por R$ 19,90 e se a oferta aparece no celular. Depois da revisão, faça o merge.

## Situação 3 — botões sobrepostos no celular

1. O CSS Master é responsável pelo layout responsivo, com ajuda do Designer Front-End se for necessário alterar a estrutura HTML.
2. O Intervalo Lanches usa Grid para reorganizar o cardápio e as colunas do carrinho. Flexbox permite que a navegação, os filtros e os controles de quantidade quebrem linha em telas estreitas.
3. Para validar, teste em 320, 375, 768 e 1280 pixels. Confira se há rolagem horizontal, se os botões são tocáveis e se a busca, o carrinho e a finalização funcionam. Repita em um celular real.


