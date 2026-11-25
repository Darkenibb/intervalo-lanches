const products = [
  { id: 'coxinha', name: 'Coxinha', details: 'Frango desfiado', cents: 650 },
  { id: 'suco', name: 'Suco de laranja', details: 'Copo de 300 ml', cents: 500 },
  { id: 'pao', name: 'Pão de queijo', details: 'Porção individual', cents: 400 },
  { id: 'sanduiche', name: 'Sanduíche natural', details: 'Frango, alface e tomate', cents: 850 },
  { id: 'bolo', name: 'Bolo de cenoura', details: 'Fatia com cobertura de chocolate', cents: 550 },
  { id: 'agua', name: 'Água mineral', details: 'Garrafa de 500 ml', cents: 300 },
  { id: 'dupla', name: 'Dupla de queijo', details: 'Dois pães de queijo', cents: 650 },
  { id: 'combo', name: 'Combo do recreio', details: 'Coxinha e suco de laranja', cents: 950 },
];
const cart = new Map();
const format = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const money = cents => format.format(cents / 100);
const normalize = value => value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();
const get = id => document.getElementById(id);
const search = get('search');
const reserve = get('reserve');
const receipt = get('receipt');

function renderProducts() {
  const query = normalize(search.value);
  const matches = products.filter(product => normalize(product.name + ' ' + product.details).includes(query));
  get('results').textContent = matches.length ? `${matches.length} produto(s)` : 'Nenhum produto encontrado.';
  get('products').innerHTML = matches.map(product => `
    <article>
      <h3>${product.name}</h3><p>${product.details}</p><strong>${money(product.cents)}</strong>
      <button type="button" data-add="${product.id}" aria-label="Adicionar ${product.name}">Adicionar</button>
    </article>`).join('');
}

function renderCart() {
  let count = 0;
  let total = 0;
  const rows = products.filter(product => cart.has(product.id)).map(product => {
    const quantity = cart.get(product.id);
    count += quantity;
    total += quantity * product.cents;
    return `<li><strong>${product.name}</strong> · ${money(quantity * product.cents)}
      <div class="controls">
        <button type="button" data-remove="${product.id}" aria-label="Retirar uma unidade de ${product.name}">−</button>
        <span>${quantity}</span>
        <button type="button" data-add="${product.id}" aria-label="Adicionar uma unidade de ${product.name}">+</button>
      </div></li>`;
  });
  get('items').innerHTML = rows.join('') || '<li>Seu carrinho está vazio.</li>';
  get('count').textContent = count;
  get('total').textContent = money(total);
  reserve.disabled = count === 0;
}

document.addEventListener('click', event => {
  const button = event.target.closest('button[data-add], button[data-remove]');
  if (!button) return;
  const id = button.dataset.add || button.dataset.remove;
  const quantity = (cart.get(id) || 0) + (button.dataset.add ? 1 : -1);
  const wasInCart = get('items').contains(button);
  if (quantity > 0) cart.set(id, quantity);
  else cart.delete(id);
  renderCart();
  receipt.textContent = '';
  if (wasInCart) {
    const selector = button.dataset.add ? 'data-add' : 'data-remove';
    const next = get('items').querySelector(`button[${selector}="${id}"], button[data-add]`);
    const same = get('items').querySelector(`button[${selector}="${id}"]`);
    (same || next || document.querySelector('.cart-link')).focus();
  }
});

reserve.addEventListener('click', () => {
  const total = get('total').textContent;
  cart.clear();
  renderCart();
  document.querySelector('.cart-link').focus();
  receipt.textContent = `Pré-reserva simulada. Total de ${total}. Nenhum pedido foi enviado.`;
});

search.addEventListener('input', renderProducts);
renderProducts();
renderCart();
