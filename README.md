# Inleveropdracht

In week 1 kies je een van onderstaande templates. Je gaat hier tijdens de lessen en in je zelfstudietijd aan werken. 

- De templates dienen om jou een realistisch doel te geven om naartoe te werken.
- Het is ***niet*** verplicht dat je alle onderdelen van deze templates in je game hebt verwerkt.
- Het is ***wel*** verplicht dat je de onderwerpen uit de lessen in je game hebt verwerkt. Zie voor de beoordeling de cursushandleiding!

### Top-down RPG
- Rondlopen met camera op player
- Niet door gebouwen of bomen heen kunnen lopen
- "Praten" met characters
- Inventory, object zoals een sleutel kunnen meenemen en gebruiken
- Tilemap voor omgeving, of custom colliders op een achtergrondplaat

## Opdracht 

De eerste stap bij Objectgeoriënteerd programmeren is het bedenken van classes. Noteer voor je eigen 
game de classes die je nodig hebt. Vervolgens bepaal je per class de eigenschappen (variabelen) en het gedrag (functies).

Een handig hulpmiddel hierbij is het volgende stappenplan:
1. Schrijf de regels van je spel uit en onderstreep de zelfstandige naamwoorden.
- Rondlopen met *camera* op *player*
- Niet door *gebouwen* of *bomen* heen kunnen lopen
- "Praten" met *characters*
- *Inventory*, object zoals een *sleutel* kunnen meenemen en gebruiken
- *Tilemap* voor *omgeving*, of *custom colliders* op een *achtergrondplaat*

2. Bepaal welke zelfstandige naamwoorden een class kunnen zijn. Is het een zelfstandignaamwoord waarvoor je iets wilt opslaan? Of voer het iets uit in je spel?
- camera = Camera class
- player = Player class
- gebouwen & bomen = Object class
- characters = Character class
- Inventory = Inventory class
- sleutel = Item class
- Tilemap/omgeving = World/Map class

3. Er zullen zelfstandignaamwoorden afvallen, omdat ze geen class hoeven te zijn of omdat ze een eigenschap zijn van een ander zelfstandignaamwoord.
4. De zelfstandignaamwoorden die overblijven zijn de classes.

5. Noteer de eigenschappen bij de classes. Waar moet deze class over zichzelf onthouden?
Camera class:
- Rondlopen op player

Player class:
- Praten met characters
- Inventory, object zoals een sleutel kunnen meenemen en gebruiken

Object class:
- Niet door gebouwen of bomen heen kunnen lopen

Character class:
- Praten met characters

Inventory class:
- Inventory, object zoals een sleutel kunnen meenemen en gebruiken

Item class:
- Inventory, object zoals een sleutel kunnen meenemen en gebruiken

World/map class:
- Rondlopen met camera op player
- Niet door gebouwen of bomen heen kunnen lopen
- Tilemap voor omgeving, of custom colliders op een achtergrondplaat

6. Rond de zelfstandignaamwoorden staan werkwoorden. Dit is vaak het bijbehorende gedrag.
- *Rondlopen* met camera op player
- Niet *door* gebouwen of bomen *heen kunnen lopen*
- *"Praten"* met characters
- Inventory, object zoals een sleutel kunnen *meenemen* en *gebruiken*
- Tilemap voor omgeving, of custom colliders op een achtergrondplaat

Bijbehorend gedrag:
Camera class:
- Rondlopen = volgen

Player class:
- Rondlopen = bewegen
- Praten = interactie
- meenemen = toevoegen aan inventory
- gebruiken = gebruiken van item

Object class:
- door heen kunnen lopen = onbeweeglijk voorwerp

Character class:
- Praten = interactie

Inventory class:
- meenemen = toevoegen aan inventory
- gebruiken = gebruiken van item

Item class:
- meenemen = toevoegen aan inventory
- gebruiken = gebruiken van item

World/map class:
- Rondlopen = positie/coördineren

## Game Assets

- [Excalibur startproject](https://github.com/HR-CMGT/prg4-startproject-2023), gebruik dit als basis voor je game.
- [Open Game Art](https://opengameart.org) en [Kenney Assets](https://www.kenney.nl/assets)
- [Midjourney](https://enchanting-trader-463.notion.site/Midjourney-AI-Guide-41eca43809dd4d8fa676e648436fc29c)
- [Font Loader](https://fontfaceobserver.com)
- [Game Icons](https://game-icons.net)
- [Game Sounds](https://www.zapsplat.com) en [Game Music](https://www.bensound.com)
- [Generate your own game Sounds](https://sfxr.me), [FreeSound](https://freesound.org)