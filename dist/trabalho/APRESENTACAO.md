# SOS Cantina Tech

## Situação 1 — conflito em index.html

1. Os alunos trabalharam em paralelo. Se alteraram de formas incompatíveis o mesmo trecho de `index.html`, a integração exige uma decisão manual. Um push também pode ser rejeitado quando o remoto já tem commits novos, mesmo que a integração desses commits seja automática.
2. Ao fazer merge, o Git compara as duas versões com o ancestral comum. Se não conseguir combinar mudanças incompatíveis, informa os arquivos em conflito e em geral marca os trechos com `<<<<<<<`, `=======` e `>>>>>>>`. Use `git status` para listar os conflitos, combine as mudanças, teste e finalize o merge.
3. Dividir responsabilidades por arquivo ou seção, combinar mudanças no HTML compartilhado e integrar alterações pequenas com frequência. Atualizar a branch com a `main` antes da revisão facilita detectar conflitos cedo.
4. As branches isolam mudanças e mantêm a `main` utilizável. O pull request permite revisar e testar a combinação. Ainda pode haver conflito na hora de integrar.

## Situação 2 — promoções da semana

1. Criar uma branch a partir da `main` atualizada para preservar a versão em funcionamento durante o desenvolvimento.
2. Usar `feat/promocoes-semana`.
3. Implementar e testar a seção, enviar a branch ao GitHub, abrir um pull request para `main`, revisar o layout e a adição da oferta ao carrinho e fazer o merge. Neste projeto, o histórico inclui a integração local da branch.

## Situação 3 — botões sobrepostos no celular

1. A área responsável é o CSS responsivo. O CSS Master deve verificar as regras de layout e o Designer Front-End pode ajudar a ajustar a estrutura, se necessário.
2. Usar a configuração de viewport, Grid com colunas fluidas, Flexbox com quebra de linha, espaçamento e media queries. Controles do carrinho precisam caber em telas estreitas e ter área de toque confortável.
3. Testar em larguras de 320, 375, 768 e 1280 pixels e em um celular real. Conferir busca, adição e remoção de itens, total e pré-reserva. Verificar se os botões continuam tocáveis, sem sobreposição nem rolagem horizontal.

## Roteiro de 5 minutos

| Tempo | Demonstração |
| --- | --- |
| 0:00–0:40 | Apresente o problema da fila e a proposta da DevLanches. Mostre a tela inicial. |
| 0:40–1:55 | Mostre as promoções do dia e da semana. Busque “pao”, adicione pão de queijo e um combo, altere as quantidades e confira o total. Simule a pré-reserva. |
| 1:55–2:40 | Abra a visualização em largura de celular. Demonstre os controles do carrinho e a organização do cardápio. |
| 2:40–3:55 | Mostre `git branch -a` e `git log --oneline --graph --all`. Identifique as quatro branches e os commits de integração. |
| 3:55–5:00 | Explique o cenário de conflito em `index.html`, a entrega da promoção semanal via branch e a solução de layout responsivo. Encerre explicando que a pré-reserva é demonstrativa. |

Foto do sanduíche via [Unsplash](https://images.unsplash.com/photo-1528735602780-2552fd46c7af).
