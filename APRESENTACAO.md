# Intervalo Lanches — estudo de caso

O **Intervalo Lanches** é uma adaptação do Fast Lanches para a cantina da escola. Mantivemos os produtos e os preços do cardápio, mudamos o visual e criamos uma simulação de pré-reserva para retirada no recreio.

## Situação 1 — três alunos editam o `index.html`

Se dois ou mais alunos alterarem o mesmo trecho de formas diferentes, o Git pode gerar um **conflito**. Por exemplo, um aluno muda o título da oferta enquanto outro apaga a mesma linha.

Quando isso acontece, o Git indica o arquivo e marca o trecho com `<<<<<<<`, `=======` e `>>>>>>>`. A equipe abre o arquivo, decide o que manter ou combinar, remove as marcações e testa a página antes de concluir o merge.

Para reduzir a chance de conflitos, a equipe pode combinar quem vai editar cada parte, fazer commits pequenos e trabalhar em **branches**. Cada branch permite fazer mudanças separadamente. O **pull request** mostra essas mudanças para a equipe revisar antes de juntá-las.

## Situação 2 — a escola pede uma oferta da semana

A equipe cria uma branch a partir da `main` atualizada, por exemplo, `feat/ofertas-da-semana`. Assim, pode trabalhar na oferta enquanto o cardápio principal continua disponível.

Na branch, a equipe adiciona a oferta **Cachorro-quente + Suco por R$ 19,90**. Depois, verifica se ela aparece no celular e se o botão adiciona o combo correto ao carrinho pelo preço anunciado.

Por fim, a equipe envia a branch ao GitHub e abre um **pull request** para revisar a mudança. Depois da aprovação, faz o **merge**, que integra a oferta à `main`. No Intervalo Lanches, esse destaque foi incluído na branch `feat/intervalo-lanches`.

## Situação 3 — os botões ficam sobrepostos no celular

O **CSS Master** ajusta o visual com CSS. Se for preciso mexer na estrutura da página, o **Designer Front-End** ajuda com o HTML.

No Intervalo Lanches, usamos **Grid** para reduzir o número de colunas do cardápio em telas menores e **Flexbox** para deixar os botões passarem para a próxima linha quando faltar espaço.

Para conferir, a equipe pode testar em larguras de **320, 375, 768 e 1280 pixels** e também em um celular real. O objetivo é verificar se a página cabe na tela sem rolar para os lados e se a busca, os botões, o carrinho e a finalização funcionam.
