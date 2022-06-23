# capstone-node-q4

##baseURL: https://aluguel-auto.herokuapp.com/

<!-- Users -->
Para Ultilizar a plataforma é necessario fazer o cadastro de um usuario. 
# Cadastro de Usuario
## POST baseURL/user/register - Rota responsável pelo CADASTRO do user.
#### Necessita de AUTORIZAÇÃO por token
#### Corpo da requisição:
```json
{
  	"name":"pamela",
	"email":"pamela@mail.com",
	"password":"123456",
	"cpf":"12183734133",
	"license":true,
	"licenseCategory":"B"
}

```
#### Corpo da resposta:
```json
{
	"licenseCategory": "B",
	"license": true,
	"email": "pamela@mail.com",
	"name": "pamela",
	"userId": "4705a047-f064-4408-b060-972447872ef7"
}
```
# Login de Usuario
## POST baseURL/user/login - Rota responsável pelo LOGIN do user.
#### Necessita de AUTORIZAÇÃO por token
#### Corpo da requisição:
```json
{
	"email": "pamela@mail.com",
	"password": "123456"
}

```
#### Corpo da resposta:
```json
{
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NzA1YTA0Ny1mMDY0LTQ0MDgtYjA2MC05NzI0NDc4NzJlZjciLCJuYW1lIjoicGFtZWxhIiwiZW1haWwiOiJwYW1lbGFAbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRlQ0Q5eVlxYVNEV1lqTDZSTnJId0MuSEplc2RJM0N2U0ZVcVovdUVMdzJUVE1xQmZOQk5hVyIsImNwZiI6IjEyMTgzNzM0MTMzIiwibGljZW5zZSI6dHJ1ZSwibGljZW5zZUNhdGVnb3J5IjoiQiIsImlhdCI6MTY1NTk0MzAxNCwiZXhwIjoxNjU1OTQ2NjE0fQ.aYIBsE3C0R56joLvYnNYcQefyGMJw_rwyqO5l6yVEgQ"

}
```
# Listagem de Usuario por ID
## GET baseURL/user/<userID> - Rota responsável pela LISTAGEM de  um user.
#### Necessita de AUTORIZAÇÃO por token
#### Corpo da resposta:
```json
{
	"licenseCategory": "B",
	"license": true,
	"email": "pamela@mail.com",
	"name": "pamela",
	"userId": "9e8e1cc3-ff44-4e35-af22-3eb23f0a2d59"
}
```
# Listagem de todos os Usuario 
## GET baseURL/users - Rota responsável pela LISTAGEM de todos os userios.
#### Necessita de AUTORIZAÇÃO por token
#### Corpo da resposta:
```json
{
	"users": [
		{
			"userId": "d88a57ae-f569-4956-8a6a-1a3f38c433e2",
			"name": "Willian Gustavo",
			"email": "willian_ksksfsddasdad@hotmail.com",
			"cpf": "12335678910",
			"license": false,
			"licenseCategory": "AB"
		},
		{
			"userId": "9e8e1cc3-ff44-4e35-af22-3eb23f0a2d59",
			"name": "pamela",
			"email": "pamela@mail.com",
			"cpf": "12183733833",
			"license": true,
			"licenseCategory": "B"
		},
		]
}
```
# Update de Usuario
## PACTH baseURL/user/<userID> - Rota responsável pelo update do user.
#### Necessita de AUTORIZAÇÃO por token
#### Corpo da requisição:
```json
{
	"name":"Pamela M",
	"email":"pamela@mail.com",
	"cpf":"12183734133",
	"license":true,
	"licenseCategory":"B"
}

```
#### Corpo da resposta:
```json
{

  "licenseCategory": "B",
  "license": true,
  "email": "pamela@mail.com",
  "name": "Pamela M",
  "userId": "b500c63e-21c9-4044-b188-a6e84810d3c8"


}
```
<!-- Cars -->
Para o usuario é possivel ter acesso sobre veiculos, poder cadastrar, ver , atualizar e deletar veiculos
# Cadastro de carros
## POST baseURL/cars/register - Rota responsável pelo CADASTRO do carro.
#### Necessita de AUTORIZAÇÃO por token
#### Corpo da requisição:
```json
  {
	"model":"gol",
	"brand":"wolkswagen",
	"plate":"Abc3212",
	"color":"white",
	"transmission":"gasolina",
	"year":"2001",
	"mileage":"148222",
	"dailyPrice":50.40,
	"available":false
}
```
#### Corpo da resposta:
```json
  {
	"model":"gol",
	"brand":"wolkswagen",
	"plate":"Abc3212",
	"color":"white",
	"transmission":"gasolina",
	"year":"2001",
	"mileage":"148222",
	"dailyPrice":50.40,
	"available":false
}
```
<!-- ## POST /api/users/signin - Rota responsável pelo LOGIN do usuário.
#### Não necessita de AUTORIZAÇÃO por token -
#### Corpo da requisição:
```json
  {
    "email": "example@gmail.com",
    "password": "1234"
  }
```
#### Corpo da resposta:
```json
  {
    "token": "370e63d575bfsdfsfesasdfa2346c1bfb973b0b61047dae3"
  }
``` -->
## GET baseURL/cars - Rota responsável pela BUSCA DO CARRO DiSPONIVEL PARA ALUGAR.
#### Rota necessita de AUTORIZAÇÃO por token -
#### Requisição sem corpo:
##### OBS - NECESSITA DE AUTORIZAÇÃO VIA TOKEN
#### Corpo da resposta:
```json
 {
	"model":"gol",
	"brand":"wolkswagen",
	"plate":"Abc3212",
	"color":"white",
	"transmission":"gasolina",
	"year":"2001",
	"mileage":"148222",
	"dailyPrice":50.40,
	"available":false
},
{
	"model":"uno",
	"brand":"fiat",
	"plate":"dvc3222",
	"color":"black",
	"transmission":"alcool",
	"year":"2012",
	"mileage":"108022",
	"dailyPrice":80.00,
	"available":true
},
{
	"model":"golf GTI",
	"brand":"wolkswagen",
	"plate":"GTI2022",
	"color":"blue",
	"transmission":"flex",
	"year":"2022",
	"mileage":"000500",
	"dailyPrice":130.50,
	"available":true
}
```
## GET baseURL/cars/:carId - Rota responsável pela BUSCA PELO UM UNICO CARRO 
#### Rota necessita de AUTORIZAÇÃO por token -
#### Requisição sem corpo:
##### OBS - NECESSITA DE AUTORIZAÇÃO VIA TOKEN
#### Corpo da resposta:
```json
  {
	"model":"gol",
	"brand":"wolkswagen",
	"plate":"Abc3212",
	"color":"white",
	"transmission":"gasolina",
	"year":"2001",
	"mileage":"148222",
	"dailyPrice":50.40,
	"available":false
}
```

## PATCH baseURL/cars/:carId - rota responsável pela ATUALIZAÇÃO de todas as informações do carro.
#### Rota necessita de AUTORIZAÇÃO por token -
#### Corpo da requisição:
##### É possível alterar todas as propriedades do carro.
```json
  {
	"model":"gol",
	"brand":"wolsvage",
	"plate":"Abc3212",
	"color":"white",
	"transmission":"gasolina",
	"year":"2001",
	"mileage":"148222",
	"dailyPrice":50.40,
	"available":false
}
```
#### Corpo da resposta:
```json
  {
	"model":"Gol G2",
	"brand":"wolkswagen",
	"plate":"ABC3212",
	"color":"White",
	"transmission":"Gasolina",
	"year":"2002",
	"mileage":"149222",
	"dailyPrice":50.40,
	"available":true
}
```
## DELETE baseURL/cars/:carId - Rota responsável por DELETAR O CARRO.
#### Requisição sem corpo:
##### OBS - NECESSITA DE AUTORIZAÇÃO VIA TOKEN
#### Corpo da resposta:
```json
  {
    "message": "Car has been deleted."
  }
```

<!-- Rent -->
Para o usuario é possivel criar rents, corfirmar ou concluir, alem disso é possivel aterar as datas e listar por id do carro ou usuario.
# Cadastro de Renst
## POST baseURL/rent/create - Rota responsável pelo CADASTRO de uma rent .
#### Necessita de AUTORIZAÇÃO por token
#### Corpo da requisição:
```json
  	{
		"start_date":"6/26/2015",
		"end_date":"6/22/2016",
		"carId":"95599a13-8f3e-4d21-a1e6-d7dbb22d6f55"
	}
```
#### Corpo da resposta:
```json
  {
	"message": {
		"car": {
			"available": true,
			"dailyPrice": 50,
			"mileage": "148222",
			"year": "2010",
			"transmission": "Etanol",
			"color": "Red",
			"plate": "ABC3SAS2",
			"brand": "wolsvage",
			"model": "Golf",
			"carId": "95599a13-8f3e-4d21-a1e6-d7dbb22d6f55"
		},
		"user": {
			"licenseCategory": "B",
			"license": true,
			"email": "pamela@mail.com",
			"name": "pamela",
			"userId": "4705a047-f064-4408-b060-972447872ef7"
		},
		"completed": false,
		"ownerConfirmation": false,
		"end_date": "2016-06-22T03:00:00.000Z",
		"start_date": "2015-06-26T03:00:00.000Z",
		"rentId": "7f368ef6-03cf-4c3a-840b-3010fd39d046"
	}
}
```
# Confirmação de Rents
## POST baseURL/rent/confitmation/<rentID> - Rota responsável pela COMFIRMAÇÃO de uma rent .
#### Necessita de AUTORIZAÇÃO por token
#### Somente o usuario proprietario do carro que esta vinculado con o rent podera acessar essa rota
#### Corpo da requisição:
```json
	{	
		"ownerConfirmation":true
	}	
```
#### Corpo da resposta:
```json
  {
	"message": {
		"ownerConfirmation": true,
		"completed": true
	}
}
```
# Finalização de Rents
## POST baseURL/rent/completed/<rentID> - Rota responsável por Finalizar uma rent .
#### Necessita de AUTORIZAÇÃO por token
#### Somente o usuario criador da rent podera acessar essa rota.
#### Corpo da requisição:
```json
	{
		"completed":true
	}	
```
#### Corpo da resposta:
```json
  {
	"message": {
		"completed": true
	}
}
```
# Listagem de Rents por User
## GET baseURL/rent/user/<userID> - Rota responsável por Listar rents associadas a um usuario.
#### Necessita de AUTORIZAÇÃO por token
#### Corpo da resposta:
```json
  [
	{
		"rating": [],
		"car": {
			"available": true,
			"dailyPrice": 50,
			"mileage": "148222",
			"year": "2010",
			"transmission": "Etanol",
			"color": "Red",
			"plate": "ABC3SA12",
			"brand": "wolsvage",
			"model": "Golf",
			"carId": "0e9a8051-e837-4e26-afb9-971345d2d655"
		},
		"user": {
			"licenseCategory": "B",
			"license": true,
			"email": "willian@mail.com",
			"name": "pamela",
			"userId": "0a19c8dd-d77c-4b98-bc02-fd119b903f47"
		},
		"completed": false,
		"ownerConfirmation": false,
		"end_date": "2016-06-22T03:00:00.000Z",
		"start_date": "2015-06-26T03:00:00.000Z",
		"rentId": "bc1a8470-08fb-4ffe-a18d-d3f6dd46eb2b"
	}
]
```

# Listagem de Rents por car
## GET baseURL/rent/car/<carID> - Rota responsável por Listar rents associadas a um carro.
#### Necessita de AUTORIZAÇÃO por token
#### Corpo da resposta:
```json
  [
	{
		"rating": [],
		"car": {
			"available": true,
			"dailyPrice": 50,
			"mileage": "148222",
			"year": "2010",
			"transmission": "Etanol",
			"color": "Red",
			"plate": "ABC3SA12",
			"brand": "wolsvage",
			"model": "Golf",
			"carId": "0e9a8051-e837-4e26-afb9-971345d2d655"
		},
		"user": {
			"licenseCategory": "B",
			"license": true,
			"email": "willian@mail.com",
			"name": "pamela",
			"userId": "0a19c8dd-d77c-4b98-bc02-fd119b903f47"
		},
		"completed": false,
		"ownerConfirmation": false,
		"end_date": "2016-06-22T03:00:00.000Z",
		"start_date": "2015-06-26T03:00:00.000Z",
		"rentId": "bc1a8470-08fb-4ffe-a18d-d3f6dd46eb2b"
	}
]
```
# Upedate de Renst
## PATCH baseURL/rent/<rentID> - Rota responsável pela alteração de datas de uma rent .
#### Necessita de AUTORIZAÇÃO por token
#### Somente o usuario criador da rent podera acessar essa rota.
#### Corpo da requisição:
```json
  	{
		"start_date":"2022-06-22T03:00:00.000Z",
		"end_date":"2022-06-25T03:00:00.000Z"
	}
```
<!-- Rating -->
Para o usuario é possivel fazer avaliações dentro da plataforma.
# Cadastro de Rating
## POST baseURL/ratings/create - Rota responsável pelo CADASTRO de rating.
#### Necessita de AUTORIZAÇÃO por token
#### Corpo da requisição:
```json
{
	"rating":5,
	"comment":"Muito Bom",
	"evaluator":"Marco",
	"rentId":"7f368ef6-03cf-4c3a-840b-3010fd39d046"
} 

```
#### Corpo da resposta:
```json
{	
	"rating":5,
	"comment":"Muito Bom",
	"evaluator":"Marco",
	"rentId":"7f368ef6-03cf-4c3a-840b-3010fd39d046"
}
```
# Listagen de Rating por User
## GET baseURL/ratings/user<userID> - Rota responsável pela LISTAGEM de rating pro usuarios.
#### Necessita de AUTORIZAÇÃO por token

#### Corpo da resposta:
```json
[
	{
		"user": {
			"licenseCategory": "B",
			"license": true,
			"cpf": "12183734133",
			"email": "pamela@mail.com",
			"name": "pamela"
		},
		"ratingId": "17f2adff-1ab1-4cd2-8e03-42ded3b40575",
		"evaluator": "Marco",
		"comment": "Muito Bom",
		"rating": 5
	},
	{
		"user": {
			"licenseCategory": "B",
			"license": true,
			"cpf": "12183734133",
			"email": "pamela@mail.com",
			"name": "pamela"
		},
		"ratingId": "c5456926-1a95-40b8-9e58-7fb549a3e9c0",
		"evaluator": "Marco",
		"comment": "Muito Bom",
		"rating": 5
	}
]
```
# Listagen de Rating por Carro
## GET baseURL/ratings/car<carID> - Rota responsável pela LISTAGEM de rating pro carros.
#### Necessita de AUTORIZAÇÃO por token
#### Corpo da resposta:
```json
[
	{
		"user": {
			"licenseCategory": "B",
			"license": true,
			"cpf": "12183734133",
			"email": "pamela@mail.com",
			"name": "pamela"
		},
		"ratingId": "17f2adff-1ab1-4cd2-8e03-42ded3b40575",
		"evaluator": "Marco",
		"comment": "Muito Bom",
		"rating": 5
	},
	{
		"user": {
			"licenseCategory": "B",
			"license": true,
			"cpf": "12183734133",
			"email": "pamela@mail.com",
			"name": "pamela"
		},
		"ratingId": "c5456926-1a95-40b8-9e58-7fb549a3e9c0",
		"evaluator": "Marco",
		"comment": "Muito Bom",
		"rating": 5
	}
]
```
# Update de Rating
## PACTH baseURL/ratings/<ratingID> - Rota responsável pelo UPDATE de rating.
#### Necessita de AUTORIZAÇÃO por token
#### Corpo da requisição:
```json
{
	"rating":4,
	"comment":"Bom"
}  

```
#### Corpo da resposta:
```json
{
	"status": 200,
	"message": {
		"rating": 4,
		"comment": "Bom"
	}
}
```
