# Software Studio 2023 Spring Assignment 2

## Mario Game

## Announcements

This is a project of the 2023 Spring Software studio class in National Tsing Hua University.
The program is written by daisyliu0225.

### Scoring

|  **Basic Component**  | **Score** | **Check** |
| :-------------------: | :-------: | :-------: |
| Complete Game Process |    5%     |     Y     |
|      Basic Rules      |    55%    |     Y     |
|      Animations       |    10%    |     Y     |
|     Sound Effects     |    10%    |     Y     |
|          UI           |    10%    |     Y     |

|   **Advanced Component**   | **Score** | **Check** |
| :------------------------: | :-------: | :-------: |
|      firebase deploy       |    5%     |     Y     |
|        Leaderboard         |    5%     |     N     |
| Offline multi-player game  |    5%     |     N     |
|  Online multi-player game  |    10%    |     N     |
| Others [name of functions] |   1-10%   |     N     |

---

## Basic Components Description

### World map

There is a world map in the game. 
Inside the world map, there are the following components.
- Player
- Enemy
  - goomba
  - turtle
- Question blocks
  - coin question block
  - shroom question block
The effects in the world map is animations and sound effects.

### Player

The player has to control the mario in the game.

- Make mario move.
  - left: mario goes left.
  - right: mario goes right.
  - up: mario jumps.
<br>
- Lose life
  - Mario will lose a life if he collides with the enemy and the collision spot is not higher than the enemy.
  - Mario will lose a life as well if he 

### Enemies

There are two enemies in the game. The two enemies'mechanism are a little different.

- Goomba

  - picture
  - mechanism

  1. If the player touches goombas, the player will lose a life.
  2. If the player hits goombas by head, the goomba will die.

     <br>

- Turtle
  - picture
  - mechanism
  1. If the player touches turtles, the player will lose a life.
  2. If the player hits turtles by head, the turtle will become "the rolling turtle", "the rolling turtle"'s speed is much faster and the player is not able to kill the rolling turtle.

### Question Blocks

There are two kinds of question blocks in the game. To know what is inside the question block, the player has to control mario and hit the block's bottom.

- Shroom block
- Coin block

### Animations

The animations ae used on player(mario) and the enemies.

- Player
- Enemies

### Sound effects

The sound effects are used on all parts in the game.

- bgm<br>
  Two bgm are used in the game.
  - The first bgm is used on the login/signup and scene select.
  - The second bgm is used on the playing scene.
    <br>
- sound effects<br>
  The sound effects are as the following.<br>

  #### Sound effects used on player<br>

  The sound effects used on the player will not stop the bgm. <br>

  - jump effect

    - sound effect code: jump<br>
    - The sound effect is used on when mario jumps.<br>

  - coin effect
    - sound effect code: coin<br>
    - The sound effect is used when the mario touches the coin. <br>
  - power up effect
    - sound effect code: PowerUp <br>
    - The sound effect is used when mario eats the mushroom <br>
  - power down effect
    - sound effect code: powerUpAppear<br>
    - The sound effect is used when mario loses the power up effect <br>
  - stomp effect
    - sound effect code: stomp <br>
    - The sound effect is used when mario stomps on the enemy's head. <br>

  #### Sound effects used on background

  The sound effects used on the background will stop the bgm. <br>

  - lose effect
    - sound effect code: Game Over<br>
    - The sound effect is used when the player loses all the life<br>
  - win effect
    - sound effect code: levelClear<br>
    - The sound effect is used when the player successfully gets through the level.<br>
  - lose one life
    - sound effect code: loseOneLife <br>
    - The sound effect is used when the player loses a life. <br>

### UI

## Advanced Component Description

### Login/Signup function
#### Signup function
#### Login function
## Firebase page link (if you deploy)

[your web page URL](https://softwarestudiomario.web.app/)

## Versions

| Version | Date       | Description                    |
| ------- | ---------- | ------------------------------ |
| 1       | 2024/05/11 | finished level and menu scenes |
| 2       | 2024/05/11 | level 1 background             |
| 3       | 2024/05/12 | mario can move                 |
| 4       | 2024/05/15 | jump using colliding box       |
| 5       | 2024/05/17 | physics finished               |
| 6       | 2024/05/17 | camera finished                |
| 7       | 2024/05/18 | enemies finished               |
| 8       | 2024/05/19 | question coin finished         |
| 9       | 2024/05/21 | animations                     |
| 10      | 2024/05/22 | shroom question box            |
| 11      | 2024/05/23 | firebase deploy/login          |

<p align="right">--daisyliu0225</p>
