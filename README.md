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
- Info bar
- Player
- Enemy
  - goomba
  - turtle
- Question blocks
  - coin question block
  - shroom question block
<br>
The effects in the world map are animations and sound effects.

### Info bar
The info bar is always stuck on the camera. It shows the remaining lives, time, coins and also the score.<br>
The info mentioned has the same sequence as the picture below.
- info bar
- ![info bar](readme/info.png)

### Player

The player has to control the mario in the game.
- player pic
- ![player pic](readme/question/shroomfinish.png)

- Make mario move.
  - left: mario goes left.
  - right: mario goes right.
  - up: mario jumps.

<br>

- Life
  - To know how much lives left, look at the life in the info bar.
  - ![info life](readme/info/life.png)
  - Initially, mario will have 5 lives. Mario will have the last chance to get through the level when life is 0.
  - Lose life
    - Mario will lose a life if he collides with the enemy and the collision spot is not higher than the enemy.
    - Mario will lose a life as well if he falls outside the map. (i.e. falls into hole)
  - There are no way to gain life in the game.
  - The life will reset if the player loses or successfully get through the game.
<br>

 - Game over
   - After mario loses all the life, the game over scene pops out. The player can try the level again. Everything on the info will be reset.
   - Also, if the time runs out, the game over scene will also pop out.
   - To know how much lives left, look at the timer in the info bar.
   - ![info timer](readme/info/timer.png)
   - Game over scene
   - ![game over scene](readme/game_over.png)

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

There are two kinds of question blocks in the game. To know what is inside the question block, the player has to control mario and hit the block's bottom. <br>
The question blocks look the same, so only when hitting the block will the player know what is inside the block. <br>
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
