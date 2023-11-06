# Dependencies
import requests
import sys
import random
import time

# Variables
Self_Args = sys.argv[1:]

# Main
if not Self_Args:
    print("python index.py <webhook_link>")
    sys.exit()

if not Self_Args[0]:
    print("Invalid webhook_link.")
    sys.exit()

while True:
    group_id = random.randint(300000, 380000)

    response = requests.get(f"https://groups.roblox.com/v1/groups/{group_id}")
    if response.status_code != 200:
        print(f"[ORGF][Invalid] https://www.roblox.com/groups/group.aspx?gid={group_id}")
        continue

    body = response.json()

    if not body["owner"] and body["publicEntryAllowed"]:
        # Verifica si el nombre del grupo contiene "Invalid"
        if "Invalid" in body["name"]:
            # Imprime un mensaje indicando que el grupo está bloqueado
            print(f"[ORGF][Blocked] https://www.roblox.com/groups/group.aspx?gid={group_id} | Name: {body['name']} | Members: {body['memberCount']}")
        else:
            # Envía un mensaje a Discord con el grupo válido
            requests.post("https://discord.com/api/webhooks/1169722670833750016/j2cjvJ1E3ipQdtIau60IPRc6R9DFrfUCVg48QjJSbi1SZ0fIsebnt-t7eMlMJIDt2PG2", data={"content": f"[ORGF][Valid] https://www.roblox.com/groups/group.aspx?gid={group_id} | Name: {body['name']} | Members: {body['memberCount']}"})
            # Imprime un mensaje con el grupo válido
            print(f"[ORGF][Valid] https://www.roblox.com/groups/group.aspx?gid={group_id} | Name: {body['name']} | Members: {body['memberCount']}")
    else:
        # Imprime un mensaje con el grupo inválido
        print(f"[ORGF][Invalid] https://www.roblox.com/groups/group.aspx?gid={group_id} | Name: {body['name']} | Members: {body['memberCount']}")

    time.sleep(1)
