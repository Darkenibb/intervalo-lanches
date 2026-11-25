const chaveCarrinho = 'carrinhoFastLanches';
const chavePerfil = 'intervaloLanchesPerfil';
const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const preco = cents => moeda.format(cents / 100);
const elemento = id => document.getElementById(id);
const textoBusca = texto => texto.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();
const pagina = document.body.dataset.page;

function ler(chave, padrao) {
  try {
    return JSON.parse(localStorage.getItem(chave)) ?? padrao;
  } catch {
    return padrao;
  }
}

const salvos = ler(chaveCarrinho, []);
let carrinho = Array.isArray(salvos)
  ? salvos.filter(item => item && typeof item.nome === 'string' && Number.isFinite(item.preco) && item.preco >= 0)
  : [];

function criar(tag, texto, classe) {
  const no = document.createElement(tag);
  if (texto) no.textContent = texto;
  if (classe) no.className = classe;
  return no;
}

function atualizarContador() {
  elemento('contador').textContent = carrinho.length;
}

function salvarCarrinho() {
  localStorage.setItem(chaveCarrinho, JSON.stringify(carrinho));
  atualizarContador();
}

function adicionar(produto) {
  carrinho.push({ nome: produto.name, preco: produto.cents / 100, imagem: produto.image });
  salvarCarrinho();
}

function totalCarrinho() {
  return carrinho.reduce((total, item) => total + Math.round(item.preco * 100), 0);
}

function montarCatalogo() {
  const categorias = [
    ['destaque', 'Destaques'], ['todos', 'Todos'], ['combos-dia', 'Combos do dia'],
    ['lanches', 'Lanches'], ['doces', 'Doces'], ['bebidas', 'Bebidas'], ['combos', 'Combos'],
  ];
  const busca = elemento('busca');
  const produtos = elemento('produtos');
  const filtros = elemento('categorias');
  const notificacao = elemento('notificacao');
  let categoria = 'destaque';
  let temporizador;

  function incluir(produto) {
    adicionar(produto);
    notificacao.textContent = produto.name + ' adicionado ao carrinho.';
    clearTimeout(temporizador);
    temporizador = setTimeout(() => { notificacao.textContent = ''; }, 2600);
  }

  function atualizar() {
    const termo = textoBusca(busca.value);
    const nomes = new Set();
    const filtrados = catalogo.filter(produto => {
      if (!termo && categoria !== 'todos') return produto.category === categoria;
      const chave = produto.name + produto.cents;
      if (nomes.has(chave) || !textoBusca(produto.name).includes(termo)) return false;
      nomes.add(chave);
      return true;
    });
    elemento('quantidade-resultados').textContent = filtrados.length
      ? filtrados.length + (filtrados.length === 1 ? ' produto' : ' produtos')
      : 'Nenhum produto encontrado.';
    for (const botao of filtros.children) {
      botao.setAttribute('aria-pressed', String((termo ? 'todos' : categoria) === botao.dataset.category));
    }
    produtos.replaceChildren(...filtrados.map(produto => {
      const card = criar('article', '', 'product');
      const foto = criar('img');
      foto.src = produto.image;
      foto.alt = '';
      foto.loading = 'lazy';
      foto.addEventListener('error', () => { foto.hidden = true; }, { once: true });
      const conteudo = criar('div', '', 'product-copy');
      const rodape = criar('div', '', 'product-end');
      const botao = criar('button', 'Adicionar');
      botao.type = 'button';
      botao.setAttribute('aria-label', 'Adicionar ' + produto.name);
      botao.addEventListener('click', () => incluir(produto));
      rodape.append(criar('strong', preco(produto.cents)), botao);
      conteudo.append(criar('h3', produto.name), rodape);
      card.append(foto, conteudo);
      return card;
    }));
  }

  for (const [id, nome] of categorias) {
    const botao = criar('button', nome);
    botao.type = 'button';
    botao.dataset.category = id;
    botao.addEventListener('click', () => {
      categoria = id;
      busca.value = '';
      atualizar();
    });
    filtros.append(botao);
  }
  for (const [oferta, nome] of [['dia', 'X-Burguer + Refrigerante'], ['semana', 'Cachorro-quente + Suco']]) {
    const produto = catalogo.find(item => item.category === 'combos' && item.name === nome);
    document.querySelector('[data-offer="' + oferta + '"]').addEventListener('click', () => incluir(produto));
  }
  busca.addEventListener('input', atualizar);
  atualizar();
}

function montarResumo(editavel) {
  const lista = elemento('itens');
  const finalizar = elemento('finalizar');
  lista.replaceChildren();
  const grupos = new Map();
  for (const item of carrinho) {
    const chave = JSON.stringify([item.nome, item.preco]);
    const grupo = grupos.get(chave) || { item, quantidade: 0 };
    grupo.quantidade++;
    grupos.set(chave, grupo);
  }
  for (const { item, quantidade } of grupos.values()) {
    const linha = criar('div', '', 'item');
    linha.append(criar('strong', item.nome + ' × ' + quantidade));
    const subtotal = criar('span', preco(Math.round(item.preco * 100) * quantidade));
    linha.append(subtotal);
    if (editavel) {
      const controles = criar('div', '', 'controls');
      for (const [rotulo, acao, nome] of [
        ['−', () => carrinho.splice(carrinho.findIndex(produto => produto.nome === item.nome && produto.preco === item.preco), 1), 'Retirar'],
        ['+', () => carrinho.push(item), 'Adicionar'],
      ]) {
        const botao = criar('button', rotulo, 'secondary');
        botao.type = 'button';
        botao.setAttribute('aria-label', nome + ' uma unidade de ' + item.nome);
        botao.addEventListener('click', () => {
          acao();
          salvarCarrinho();
          montarResumo(true);
          const proximo = Array.from(lista.querySelectorAll('button')).find(visitado => visitado.getAttribute('aria-label') === botao.getAttribute('aria-label'));
          (proximo || lista.querySelector('button') || document.querySelector('.summary a:last-child')).focus();
        });
        controles.append(botao);
      }
      linha.append(controles);
    }
    lista.append(linha);
  }
  if (!carrinho.length) lista.append(criar('p', 'Seu carrinho está vazio.', 'muted'));
  elemento('total').textContent = preco(totalCarrinho());
  if (finalizar) {
    finalizar.hidden = !carrinho.length;
    elemento('limpar').disabled = !carrinho.length;
  } else {
    elemento('confirmar').disabled = !carrinho.length;
  }
}

atualizarContador();

if (pagina === 'index.html') montarCatalogo();

if (pagina === 'carrinho.html') {
  montarResumo(true);
  elemento('limpar').addEventListener('click', () => {
    carrinho = [];
    salvarCarrinho();
    montarResumo(true);
    document.querySelector('.summary a:last-child').focus();
  });
}

if (pagina === 'pagamento.html' || pagina === 'login.html') {
  const apelido = elemento('apelido');
  const perfil = ler(chavePerfil, '');
  apelido.value = typeof perfil === 'string' ? perfil : '';
  apelido.addEventListener('input', () => apelido.setCustomValidity(''));
  const formulario = elemento(pagina === 'pagamento.html' ? 'pedido' : 'perfil');
  formulario.addEventListener('submit', evento => {
    evento.preventDefault();
    const nome = apelido.value.trim();
    if (!nome) {
      apelido.setCustomValidity('Digite um apelido para continuar.');
      apelido.reportValidity();
      return;
    }
    if (pagina === 'login.html') {
      localStorage.setItem(chavePerfil, JSON.stringify(nome));
      elemento('perfil-status').textContent = 'Apelido salvo neste navegador.';
      return;
    }
    if (!carrinho.length) return;
    const metodo = new FormData(formulario).get('metodo');
    elemento('confirmacao').textContent = 'Pré-reserva simulada para ' + nome + '. Total de '
      + preco(totalCarrinho()) + '. Pagamento simulado: ' + metodo + '.';
    carrinho = [];
    salvarCarrinho();
    montarResumo(false);
  });
  if (pagina === 'pagamento.html') montarResumo(false);
  else elemento('sair').addEventListener('click', () => {
    localStorage.removeItem(chavePerfil);
    apelido.value = '';
    apelido.setCustomValidity('');
    elemento('perfil-status').textContent = 'Apelido apagado.';
    apelido.focus();
  });
}
