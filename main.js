# Importamos el módulo requests para hacer peticiones HTTP
import requests

# Definimos la variable webhook con la URL del webhook de Discord
webhook = 'https://discord.com/api/webhooks/1167933381196140544/v4T2b9Nye_bTQqn53_ob1bbigDh9hY-UIOciZizyR6J_0MJWoYgnz4ODKEwgplRbIo8x'

# Definimos una función que devuelve un generador de IDs de grupos que existen
def get_group_ids():
    # Usamos una variable para guardar el ID inicial de los grupos
    start_id = 300000
    # Usamos una variable para guardar el ID máximo de los grupos
    MAX_GROUP_ID = 900000
    # Usamos un bucle while para iterar sobre los posibles IDs de los grupos
    while True:
        # Hacemos una petición GET al API de Roblox para obtener los datos del grupo
        try:
            group = requests.get(f'https://groups.roproxy.com/v1/groups/{start_id}')
            # Convertimos la respuesta en un diccionario de Python
            group_data = group.json()
        except Exception as error:
            # Imprimimos el error en caso de que ocurra alguno
            print(error)
        else:
            # Comprobamos si el grupo existe
            if group_data['id'] != None:
                # Devolvemos el ID del grupo
                yield start_id
        # Incrementamos el ID inicial
        start_id += 1
        # Terminamos el bucle si el ID inicial supera el límite de los grupos
        if start_id > MAX_GROUP_ID:
            break

# Definimos una función que busca grupos abiertos
def find_open_groups():
    # Usamos una tupla para guardar los IDs de los grupos abiertos
    open_groups = ()
    # Usamos un bucle for para iterar sobre los IDs de los grupos que existen
    for i in get_group_ids():
        # Hacemos una petición GET al API de Roblox para obtener los datos del grupo
        try:
            group = requests.get(f'https://groups.roproxy.com/v1/groups/{i}')
            # Convertimos la respuesta en un diccionario de Python
            group_data = group.json()
        except Exception as error:
            # Imprimimos el error en caso de que ocurra alguno
            print(error)
        else:
            # Comprobamos si el grupo es público y no tiene dueño
            if group_data['publicEntryAllowed'] == True and group_data['owner'] == None:
                # Imprimimos el enlace al grupo en la consola
                print(f'Found an open group: https://www.roblox.com/groups/{i}')
                # Añadimos el ID del grupo a la tupla de grupos abiertos
                open_groups = open_groups + (i,)
    # Imprimimos el resumen de los grupos encontrados
    print(f'Found {len(open_groups)} open groups in the range of {min(open_groups)} to {max(open_groups)}')

    # Llamamos a la función para enviar el mensaje al webhook de Discord
    send_to_discord(open_groups)

# Definimos una función que envía un mensaje al webhook de Discord con los enlaces a los grupos abiertos
def send_to_discord(open_groups):
    # Usamos una variable local para guardar el contenido del mensaje
    message = 'Found the following open groups:\n'
    # Usamos un bucle for para iterar sobre los IDs de los grupos abiertos
    for i in open_groups:
        # Añadimos el enlace al grupo al contenido del mensaje
        message += f'https://www.roblox.com/groups/{i}\n'
    # Hacemos una petición POST al webhook de Discord para enviar el mensaje con el contenido
    requests.post(webhook, data={
        'content': message
    })

# Llamamos a la función
find_open_groups()
# Importamos el módulo requests para hacer peticiones HTTP
import requests

# Definimos la variable webhook con la URL del webhook de Discord
webhook = 'https://discord.com/api/webhooks/1167933381196140544/v4T2b9Nye_bTQqn53_ob1bbigDh9hY-UIOciZizyR6J_0MJWoYgnz4ODKEwgplRbIo8x'

# Definimos una función que devuelve un generador de IDs de grupos que existen
def get_group_ids():
    # Usamos una variable para guardar el ID inicial de los grupos
    start_id = 300000
    # Usamos una variable para guardar el ID máximo de los grupos
    MAX_GROUP_ID = 900000
    # Usamos un bucle while para iterar sobre los posibles IDs de los grupos
    while True:
        # Hacemos una petición GET al API de Roblox para obtener los datos del grupo
        try:
            group = requests.get(f'https://groups.roproxy.com/v1/groups/{start_id}')
            # Convertimos la respuesta en un diccionario de Python
            group_data = group.json()
        except Exception as error:
            # Imprimimos el error en caso de que ocurra alguno
            print(error)
        else:
            # Comprobamos si el grupo existe
            if group_data['id'] != None:
                # Devolvemos el ID del grupo
                yield start_id
        # Incrementamos el ID inicial
        start_id += 1
        # Terminamos el bucle si el ID inicial supera el límite de los grupos
        if start_id > MAX_GROUP_ID:
            break

# Definimos una función que busca grupos abiertos
def find_open_groups():
    # Usamos una tupla para guardar los IDs de los grupos abiertos
    open_groups = ()
    # Usamos un bucle for para iterar sobre los IDs de los grupos que existen
    for i in get_group_ids():
        # Hacemos una petición GET al API de Roblox para obtener los datos del grupo
        try:
            group = requests.get(f'https://groups.roproxy.com/v1/groups/{i}')
            # Convertimos la respuesta en un diccionario de Python
            group_data = group.json()
        except Exception as error:
            # Imprimimos el error en caso de que ocurra alguno
            print(error)
        else:
            # Comprobamos si el grupo es público y no tiene dueño
            if group_data['publicEntryAllowed'] == True and group_data['owner'] == None:
                # Imprimimos el enlace al grupo en la consola
                print(f'Found an open group: https://www.roblox.com/groups/{i}')
                # Añadimos el ID del grupo a la tupla de grupos abiertos
                open_groups = open_groups + (i,)
    # Imprimimos el resumen de los grupos encontrados
    print(f'Found {len(open_groups)} open groups in the range of {min(open_groups)} to {max(open_groups)}')

    # Llamamos a la función para enviar el mensaje al webhook de Discord
    send_to_discord(open_groups)

# Definimos una función que envía un mensaje al webhook de Discord con los enlaces a los grupos abiertos
def send_to_discord(open_groups):
    # Usamos una variable local para guardar el contenido del mensaje
    message = 'Found the following open groups:\n'
    # Usamos un bucle for para iterar sobre los IDs de los grupos abiertos
    for i in open_groups:
        # Añadimos el enlace al grupo al contenido del mensaje
        message += f'https://www.roblox.com/groups/{i}\n'
    # Hacemos una petición POST al webhook de Discord para enviar el mensaje con el contenido
    requests.post(webhook, data={
        'content': message
    })

# Llamamos a la función
find_open_groups()
