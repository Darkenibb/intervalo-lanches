const catalogo = [
  {
    id: '1',
    name: 'X-Tudão Especial',
    cents: 2890,
    category: 'destaque',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPu_9IVit8Xz5IfLoG9kMqjeydefzrfvvzHjgBzm4mTQ&s',
  },
  {
    id: '2',
    name: 'X-Bacon',
    cents: 2290,
    category: 'destaque',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYrc01qZMMPwUERS7uY1u1WzluZGBa_dNUYzafvoFmfw&s=10',
  },
  {
    id: '3',
    name: 'Cachorro-quente Especial',
    cents: 1500,
    category: 'destaque',
    image: 'https://alegrafoods.com.br/wp-content/uploads/2020/09/hot-dogs-pwy2hz8-620x350.jpg',
  },
  {
    id: '4',
    name: 'Mini Pizza',
    cents: 1690,
    category: 'destaque',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUQkmOMIGSbaPpKb3UkU00boKy95wRxU3IpnBzgLC_eX7OqTeSnGy9-xc&s=10',
  },
  {
    id: '5',
    name: 'Milk Shake',
    cents: 1600,
    category: 'destaque',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTegPgBXWJ8_-XI86YQ83_NRjo4t-4EKCkGyz8jsudK7g&s=10',
  },
  {
    id: '6',
    name: 'Brownie Recheado',
    cents: 1200,
    category: 'destaque',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhYubpBpyeITLZwt43ckCQkt9WfxUOdpYAjeSLs9ykg&s=10',
  },
  {
    id: '7',
    name: 'Cookies de Chocolate',
    cents: 800,
    category: 'destaque',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSoPzFJW8j12FVHg5dbcRrhqtsJO7FPR4oaZvCjx-zHU4p6lElW2xsViAO&s=10',
  },
  {
    id: '8',
    name: 'Refrigerante Lata',
    cents: 600,
    category: 'destaque',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr75BfWgiZzFJPFsARm_dUjcFqg8NtJxcA5KeciQxUgw&s=10',
  },
  {
    id: '9',
    name: 'Combo 1: Hambúrguer + Batata + Refri',
    cents: 3190,
    category: 'combos-dia',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=550',
  },
  {
    id: '10',
    name: 'Combo 2: X-Burguer + Refrigerante',
    cents: 2390,
    category: 'combos-dia',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=550',
  },
  {
    id: '11',
    name: 'Combo 3: Cachorro-quente + Suco',
    cents: 1990,
    category: 'combos-dia',
    image:
      'https://thumbs.dreamstime.com/b/super-hot-dog-e-suco-de-laranja-cachorro-quente-233412983.jpg',
  },
  {
    id: '12',
    name: 'Combo 4: Mini Pizza + Refrigerante',
    cents: 2150,
    category: 'combos-dia',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9PCrhjZE3ssWD7zHSB_Zmh1IVDrhw8mwDfMClFuDNM6DQ2zvNOACkipY&s=10',
  },
  {
    id: '13',
    name: 'Combo 5: Doce + Bebida',
    cents: 1590,
    category: 'combos-dia',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqyAnP5ZU_29BpULXq4HreObiUDnxCpPoovryYNlPJ3vVLYbCd8a7c734&s=10',
  },
  {
    id: '14',
    name: 'Hambúrguer',
    cents: 1600,
    category: 'lanches',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=550',
  },
  {
    id: '15',
    name: 'X-Burguer',
    cents: 1900,
    category: 'lanches',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=550',
  },
  {
    id: '16',
    name: 'X-Salada',
    cents: 2100,
    category: 'lanches',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=550',
  },
  {
    id: '17',
    name: 'X-Bacon',
    cents: 2290,
    category: 'lanches',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=550',
  },
  {
    id: '18',
    name: 'X-Tudão',
    cents: 2890,
    category: 'lanches',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=550',
  },
  {
    id: '19',
    name: 'Cachorro-quente',
    cents: 1400,
    category: 'lanches',
    image: 'https://www.receiteria.com.br/wp-content/uploads/hot-dog-classico-capa-730x480.jpeg',
  },
  {
    id: '20',
    name: 'Misto Quente',
    cents: 1000,
    category: 'lanches',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=550',
  },
  {
    id: '21',
    name: 'Sanduíche Natural',
    cents: 1200,
    category: 'lanches',
    image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?w=550',
  },
  {
    id: '22',
    name: 'Pão de Queijo',
    cents: 500,
    category: 'lanches',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJM65GpNukStRCxeOTB6yCv0tYTRKEx2Ew3Z_NhjDdjCtBbXQ5J1b6gv4&s=10',
  },
  {
    id: '23',
    name: 'Mini Pizza',
    cents: 1690,
    category: 'lanches',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=550',
  },
  {
    id: '24',
    name: 'Brigadeiro',
    cents: 400,
    category: 'doces',
    image:
      'https://static.itdg.com.br/images/640-400/a373f494abb2c3360b9966f5abe130e2/brigadeiro-.jpg',
  },
  {
    id: '25',
    name: 'Beijinho',
    cents: 400,
    category: 'doces',
    image:
      'https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop_new/public/srh_recipes/b15e459e68c9d6e975f16333da9aff65.jpeg?itok=94ZOdlLR',
  },
  {
    id: '26',
    name: 'Brownie',
    cents: 1200,
    category: 'doces',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHROvjvCNfXHwsdbxFaw1wQyVfeo-SK1bKaQmbkA4anuPYLAr71ZLnYTpp4hJbC2NFKCVyq3ZufBRI1vplIwNo_eC5Ni5A2I1vafGlmo8&s=10',
  },
  {
    id: '27',
    name: 'Donut',
    cents: 900,
    category: 'doces',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpb-2TBMRxUby6k395XC4sgg5Ll3euLw7Ku398KFnXVk5tbzvT9V-i5EGU&s=10',
  },
  {
    id: '28',
    name: 'Cupcake',
    cents: 850,
    category: 'doces',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=550',
  },
  {
    id: '29',
    name: 'Fatia de Bolo',
    cents: 1000,
    category: 'doces',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=550',
  },
  {
    id: '30',
    name: 'Bombom',
    cents: 350,
    category: 'doces',
    image:
      'https://www.drogariaminasbrasil.com.br/media/webp/catalog/product/cache/74c1057f7991b4edb2bc7bdaa94de933/image/34251d41/bombom-lacta-sonho-de-valsa-unidade-21-5g_jpg.webp',
  },
  {
    id: '31',
    name: 'Paçoca',
    cents: 250,
    category: 'doces',
    image:
      'https://images.tcdn.com.br/img/img_prod/1151460/pacoca_rolha_carijos_25_2_6bd3648883c77a4f71f641bbc7ade4d6.jpg',
  },
  {
    id: '32',
    name: 'Cookies',
    cents: 800,
    category: 'doces',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=550',
  },
  {
    id: '33',
    name: 'Refrigerantes',
    cents: 600,
    category: 'bebidas',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=550',
  },
  {
    id: '34',
    name: 'Sucos Naturais',
    cents: 850,
    category: 'bebidas',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZa6O1q5O0Yl_74kpBeV2PQ5MOGZ2KyDpfO51kEghOBJOMm4gF1vsy28A&s=10',
  },
  {
    id: '35',
    name: 'Água Mineral',
    cents: 400,
    category: 'bebidas',
    image:
      'https://carrefourbrfood.vtexassets.com/arquivos/ids/18904684/agua-mineral-sem-gas-crystal-500ml-1.jpg?v=637590231133730000',
  },
  {
    id: '36',
    name: 'Água com Gás',
    cents: 450,
    category: 'bebidas',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRpEBOQ_xz_1SnPOvILAb2keV1YWfSaf4lQ0DQnxcXlUg_WAMnaciMpWU&s=10',
  },
  {
    id: '37',
    name: 'Chá Gelado',
    cents: 700,
    category: 'bebidas',
    image: 'https://www.oficinadeervas.com.br/images/produtos/20220216_95114_Chas%20compostos.jpg',
  },
  {
    id: '38',
    name: 'Achocolatado',
    cents: 650,
    category: 'bebidas',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsV-voTcMDlCEHSWeCAe08D7xJV8_sZfqcpC8-FJeOaWVN3EOPf3i5Sbc&s=10',
  },
  {
    id: '39',
    name: 'Milk Shake',
    cents: 1600,
    category: 'bebidas',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWE_0LEkmSdYbxbe5XTKwer0UyBbQ0qq1lU2TGm1_h17WIgdQCOZXs6U5x&s=10',
  },
  {
    id: '40',
    name: 'Energético',
    cents: 1200,
    category: 'bebidas',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZsRVI6_psvapJEauQJU4cXad6S3b8qWt2iI8NPNAnFJrxo8uK5HtaK0&s=10',
  },
  {
    id: '41',
    name: 'X-Burguer + Refrigerante',
    cents: 2390,
    category: 'combos',
    image:
      'https://www.agendadascidades.com.br/uploads/images/2022/01/combo-x-burguer-guaraba-lata-350ml.png',
  },
  {
    id: '42',
    name: 'Cachorro-quente + Suco',
    cents: 1990,
    category: 'combos',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPNLnlKGVYQmHmKpkjnqxbYwj5XH37wpAFYNyv2AxI7OTnhB-7wABp13Q&s=10',
  },
  {
    id: '43',
    name: 'Hambúrguer + Batata + Refrigerante',
    cents: 3190,
    category: 'combos',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUrnbc2WondOwRmHOaRcMYI4lZ4DEUCijRausZUth3G-wrZUgaJEX7R1RO&s=10',
  },
  {
    id: '44',
    name: 'Mini Pizza + Refrigerante',
    cents: 2150,
    category: 'combos',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSg7nt4W46Hw3a2enAxPdNa-26vEQ6ULPybQkgLa5f_g&s',
  },
  {
    id: '45',
    name: 'Combo Doce + Bebida',
    cents: 1590,
    category: 'combos',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqyAnP5ZU_29BpULXq4HreObiUDnxCpPoovryYNlPJ3vVLYbCd8a7c734&s=10',
  },
];
