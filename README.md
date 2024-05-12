# [Link naar de game.](http://curleyds.github.io/PRG04-2022-2023)

# Inleveropdracht

In week 1 kies je een van onderstaande templates. Je gaat hier tijdens de lessen en in je zelfstudietijd aan werken. 

- De templates dienen om jou een realistisch doel te geven om naartoe te werken.
- Het is ***niet*** verplicht dat je alle onderdelen van deze templates in je game hebt verwerkt.
- Het is ***wel*** verplicht dat je de onderwerpen uit de lessen in je game hebt verwerkt. Zie voor de beoordeling de cursushandleiding!

### Space Shooter
- Eindeloos scrollende achtergrond
- Speler kan alle kanten op bewegen
- Collision detection met vijanden, powerups, obstakels
- Speler kan schieten. Kogels kunnen opgaan.
- Speler heeft bommen die het hele scherm in een keer leeg maken.
- Vijanden kunnen schieten
- Life bar gaat omlaag bij aanraking met vijand
- Variatie in achtergond door planeten, sterren te laten voorbijkomen waar je niet mee kan botsen

## Opdracht 

De eerste stap bij Objectgeoriënteerd programmeren is het bedenken van classes. Noteer voor je eigen 
game de classes die je nodig hebt. Vervolgens bepaal je per class de eigenschappen (variabelen) en het gedrag (functies).

Een handig hulpmiddel hierbij is het volgende stappenplan:
1. Schrijf de regels van je spel uit en onderstreep de zelfstandige naamwoorden.

- Eindeloos scrollende *achtergrond*
- *Speler* kan alle kanten op bewegen
- *Collision detection* met *vijanden*, *powerups*, *obstakels*
- *Speler* kan schieten. *Kogels* kunnen opgaan.
- *Speler* heeft *bommen* die het hele *scherm* in een keer leeg maken.
- *Vijanden* kunnen schieten
- *Life bar* gaat omlaag bij aanraking met *vijand*
- Variatie in *achtergond* door *planeten*, *sterren* te laten voorbijkomen waar je niet mee kan botsen

2. Bepaal welke zelfstandige naamwoorden een class kunnen zijn. Is het een zelfstandignaamwoord waarvoor je iets wilt opslaan? Of voer het iets uit in je spel?

- speler = Player class
- vijanden = Enemy class
- powerups/obstakels = Object class
- kogels/bommen/planeten/sterren = Projectile class

3. Er zullen zelfstandignaamwoorden afvallen, omdat ze geen class hoeven te zijn of omdat ze een eigenschap zijn van een ander zelfstandignaamwoord.

4. De zelfstandignaamwoorden die overblijven zijn de classes.

5. Noteer de eigenschappen bij de classes. Waar moet deze class over zichzelf onthouden?

Player class:
- Ammo
- Bombs
- Life bar

Enemy class:
- Collision
- Damage

Object class:
- Collision

Projectile class:
- Collision
- Damage

6. Rond de zelfstandignaamwoorden staan werkwoorden. Dit is vaak het bijbehorende gedrag.

- Eindeloos scrollende achtergrond
- Speler kan alle kanten op *bewegen*
- *Collision detection* met vijanden, powerups, obstakels
- Speler kan *schieten*. Kogels kunnen *opgaan*.
- Speler heeft bommen die het hele scherm in een keer *leeg maken*.
- Vijanden kunnen *schieten*
- Life bar gaat omlaag bij *aanraking* met vijand
- Variatie in achtergond door planeten, sterren te laten *voorbijkomen* waar je niet mee kan *botsen*

Bijbehorend gedrag:

Player class:
- bewegen = movement
- schieten = shoot
- leeg maken = ultimate move
- aanraking = collision detection

Enemy class:
- schieten = shoot
- aanraking = collision detection

Object class:
- aanraking = collision detection

Projectile class:
- schieten = shoot
- aanraking = collision detection

## Game Assets

- [Excalibur startproject](https://github.com/HR-CMGT/prg4-startproject-2023), gebruik dit als basis voor je game.
- [Open Game Art](https://opengameart.org) en [Kenney Assets](https://www.kenney.nl/assets)
- [Midjourney](https://enchanting-trader-463.notion.site/Midjourney-AI-Guide-41eca43809dd4d8fa676e648436fc29c)
- [Font Loader](https://fontfaceobserver.com)
- [Game Icons](https://game-icons.net)
- [Game Sounds](https://www.zapsplat.com) en [Game Music](https://www.bensound.com)
- [Generate your own game Sounds](https://sfxr.me), [FreeSound](https://freesound.org)
