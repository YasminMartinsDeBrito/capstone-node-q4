# capstone-node-q4



<!-- Cars -->
Para o usuario é possivel ter acesso sobre veiculos, poder cadastrar, ver , atualizar e deletar veiculos
# Cadastro de carros
## POST localhost:3000/cars/register - Rota responsável pelo CADASTRO do carro.
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
## GET localhost:3000/cars - Rota responsável pela BUSCA DO CARRO DiSPONIVEL PARA ALUGAR.
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
## GET localhost:3000/cars/:carId - Rota responsável pela BUSCA PELO UM UNICO CARRO 
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

## PATCH localhost:3000/cars/:carId - rota responsável pela ATUALIZAÇÃO de todas as informações do carro.
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
## DELETE localhost:3000/cars/:carId - Rota responsável por DELETAR O CARRO.
#### Requisição sem corpo:
##### OBS - NECESSITA DE AUTORIZAÇÃO VIA TOKEN
#### Corpo da resposta:
```json
  {
    "message": "Car has been deleted."
  }
```
