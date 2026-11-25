# Intervalo Lanches

Site demonstrativo de cantina escolar, desenvolvido a partir do projeto Fast Lanches. A proposta é ajudar os alunos a escolher o lanche antes do intervalo e simular uma pré-reserva para retirada, reduzindo o tempo necessário para decidir na fila.

## Como abrir

Extraia o ZIP e abra `dist/index.html` em um navegador. Para que o carrinho funcione entre páginas de forma consistente, sirva a pasta `dist` com um servidor local.

```sh
python -m http.server 8000 --directory dist
```

Acesse http://localhost:8000. As fotos originais do cardápio dependem de internet. A foto de abertura está incluída no projeto.

## Funcionalidades

- Cardápio com os produtos, categorias e preços do Fast Lanches.
- Busca por nome, com ou sem acentos, e filtros por categoria.
- Destaques do dia e da semana com adição direta ao carrinho.
- Carrinho com controle de quantidades e total em reais.
- Perfil local opcional e pré-reserva simulada com apelido fictício. A seleção de Pix, cartão ou pagamento na retirada faz parte da demonstração.

O projeto usa HTML, CSS responsivo com Grid e Flexbox, JavaScript e `localStorage`. O carrinho reaproveita o formato de dados do Fast Lanches no mesmo navegador e origem. A demonstração não cobra, envia pedidos ou autentica usuários.

## Problemas enfrentados

- **Adaptar o cardápio original.** Os produtos do Fast Lanches estavam espalhados pelas gavetas do menu. Reunimos os dados em `dist/js/catalogo.js`, preservando nomes, categorias e preços e permitindo a busca por nome com ou sem acentos.
- **Manter o carrinho entre páginas.** Os itens precisavam continuar disponíveis ao sair do cardápio e abrir a finalização. O carrinho usa `localStorage` e reaproveita o formato de dados do projeto original. Testamos a adição de itens, a mudança de quantidades e o recálculo do total.
- **Adaptar o layout para celular.** O cardápio, os filtros e os controles do carrinho precisavam caber em telas estreitas. Usamos CSS Grid para ajustar as colunas e Flexbox para permitir a quebra de linha dos controles. A validação visual no celular ficou pendente porque a prévia do ambiente de teste não abriu.
- **Adaptar a finalização para a cantina.** Substituímos os dados de entrega por um apelido fictício para retirada. O fluxo foi testado como pré-reserva simulada, com seleção da forma de pagamento.

As situações-problema do enunciado sobre conflito em `index.html`, integração de uma oferta urgente e botões sobrepostos estão explicadas em [APRESENTACAO.md](APRESENTACAO.md).

## Integrantes

| Função | Integrante |
| --- | --- |
| Designer Front-End | Kayo |
| CSS Master | Kayo |
| JavaScript Ninja | Kayo |
| Guardião do Git | Kayo |

## Branches

- `main` contém a versão integrada.
- `feat/intervalo-lanches` registra a adaptação do Fast Lanches, o novo layout e o fluxo de pedido.
- `docs/intervalo-lanches` registra a documentação e a apresentação atualizadas.

O bundle também inclui o histórico da primeira versão do estudo de caso. As duas branches acima são as da revisão do Intervalo Lanches. Consulte [as respostas e o roteiro](APRESENTACAO.md).

Foto de abertura via [Unsplash](https://images.unsplash.com/photo-1568901346375-23c9450c58cd).
