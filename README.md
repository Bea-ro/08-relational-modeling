> API de arte con modelos relacionados (obras, autores y movimientos artísticos)

## Skills

### Javascript, MongoDB, Express, React, Node (MERN)
- Tres modelos relacionados a través de **populate**.
- Peticiones para añadir, editar o eliminar el campo correspondiente al modelo relacionado.


## Endpoints relativos a https://localhost:4001/api

Prueba página no encontrada: https://localhost:4001/api/autor

### MODELO AUTORES: 

| HTTP Request | Endpoint      | Descripción       |
|--------------|---------------|-------------------|
| GET          | /autores      | Todos los autores |
| GET          | /autores/:id  | Autor por id      |
| POST         | /autores      | Crear autor       |
| PUT          | /autores/:id  | Editar autor      |
| DELETE       | /autores/:id  | Borrar autor      |

### MODELO OBRAS: 

| HTTP Request | Endpoint    | Descripción     |
|--------------|-------------|-----------------|
| GET          | /obras      | Todas las obras |
| GET          | /obras/:id  | Obra por id     |
| POST         | /obras      | Crear obra      |
| PUT          | /obras/:id  | Editar obra     |
| DELETE       | /obras/:id  | Borrar obra     |

### MODELO MOVIMIENTOS: 

| HTTP Request | Endpoint          | Descripción           |
|--------------|-------------------|-----------------------|
| GET          | /movimientos      | Todos los movimientos |
| GET          | /movimientos/:id  | Movimiento por id     |
| POST         | /movimientos      | Crear movimiento      |
| PUT          | /movimientos/:id  | Editar movimiento     |
| DELETE       | /movimientos/:id  | Borrar movimiento     |
 
### MODELO RELACIONAL:

| HTTP Req. | Endpoint          | Descripción                                               |
|-----------|-------------------|-----------------------------------------------------------|
| GET       | /autores/:id      | Recuperar autor y traer los datos de sus obras            |
| GET       | /obras/:id        | Recuperar obra y los datos de su autor                    |
| PUT       | /autores/:id/obra | Añadir o quitar obra a un autor                           |
| PUT       | /obras/:id/autor  | Cambiar o eliminar el campo autor de una obra             |
| GET       | /movimientos/:id  | Recuperar movimiento y traer datos de sus obras y autores |


### SEED:
Se ha añadido archivo seed.js para practicar la creación de una seed (previa a la relación entre modelos), así como tener datos para probar las requests. 
