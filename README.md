# vtex-easy [pt-br]

# vtex-easy [pt-br]

Um pacote tipado e simplificado para trabalhar com uma abstração da API da VTEX e várias funções úteis para o dia a dia de um ecommerce.

# Sumário

- [Repository]()
    - [Orderform Repository]()

## Repository

O **repository** é uma abstração quase direta da API da **VTEX**, isso significa que esta abstração será a mais próxima dos métodos `GET`, `POST`, `PATCH`, `PUT` e `DELETE` que a API da VTEX possui.

Essa abstração depende de uma instancia [Axios](https://github.com/axios/axios) e um `orderformId` que devem ser passados no `constructor` do **Repository**.

Exemplo de como iniciar:

```jsx
import { Repository } from '@zure/vtex-easy';
import axios from 'axios';

// Criando uma instancia Axios
const baseURL = 'https://www.mywebsite.com';
const myAxios =  axios.create({ baseURL });

// Definindo meu OrderformId
const orderformId = '11aadb6ef1374e22b38cb589f1fd05c0';

// Criando minha instancia do repository
const repository = new Repository(myAxios, orderformId);
```

Em algumas ocasiões é necessário passar o **salesChannel** para a API. Para isso podemos passar um terceiro parâmetro do tipo `number` . Caso o mesmo não seja passado, o valor padrão será igual a `1`.

Exemplo:

```jsx
const repository = new Repository(myAxios, orderformId, 2);
```

> Em breve o Repository aceitará a instancia de outros pacotes semelhantes ao Axios
> 

### Orderform Repository

É uma abstração do **repository** para o [Shopping Cart](https://developers.vtex.com/vtex-rest-api/reference/shopping-cart) da API da **VTEX**. Facilitando a manipulação do **orderform**.

Você pode instanciar o **Orderform Repository** pela instancia do **Repository**, ou pela própria instancia do **Orderform Repository**.

Exemplo:

```jsx
import { Repository, OrderformRepository } from '@zure/vtex-easy';

// utilizando a instancia do repository
const repository = new Repository(...);
const orderform = repository.orderform;

// ou utilizando a instancia do Orderform Repository
const orderform = new OrderformRepository(myAxiosInstance, orderformId, salesChannel?)
```

> salesChannel é um parâmetro opcional
> 

### Resgatando o orderform

```jsx
const result = await orderform.get();
```

### Adicionando itens ao orderform

```jsx
const items = [{
	id: 1234, // SKU ID
	quantity: 1,
	seller: '1'
}];

const orderformUpdated = await orderform.add(items);
```

> Este método retorna o orderform atualizado
> 

### Atualizando os itens do orderform

```jsx
const itemsUpdate = [
	{
		quantity: 2,
		index: 1,
	},
	{
		quantity: 3,
		index: 0,
	}
];

const orderformUpdated = await orderform.update(itemsUpdate);
```

> Para saber mais sobre quais formatos de dados enviar, leia a documentação da VTEX
Este método retorna o orderform atualizado.
> 

### Limpando os itens do orderform

```jsx
const orderformUpdated = await orderform.clear();
```

### Atualizando o orderformId

```jsx
orderform.orderFormId = 'NOVO_VALOR';
```

### Atualizando o salesChannel

```jsx
orderform.salesChannel = 2;
```