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
To choose the level, click on the buttons on the level scene.
- level scene
- ![level scene](readme/scene.png)

<br>

After choosing the level, the start scene pops out. After three seconds, it changes to the main scene.
- start scene
- ![start scene](readme/start_scene.png)
- main(game) scene
- ![game scene](readme/level1.png)

<br>

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
The info bar is always stuck on the camera. It shows the remaining lives, time, coins and also the score. <br>
The info mentioned has the same sequence as the picture below.
- info bar
- ![info bar](readme/info.png)

### Player

The player has to control the mario in the game.
- player pic
- ![player pic](readme/question/shroomfinish.png)

> [!IMPORTANT]
> Make mario move.<br>
  > **keyboard left**: mario goes left.<br>
  > **keyboard right**: mario goes right.<br>
  > **keyboard up**: mario jumps.<br>

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
   - After the game over scene, the game goes to the level scene.
   - To know how much lives left, look at the timer in the info bar.
   - ![info timer](readme/info/timer.png)
   - Game over scene
   - ![game over scene](readme/game_over.png)

<br>

  - Game win
    - To win the game, mario has to touch the flag.
    - ![flag](readme/flag.png)
    - After touching the flag, the game win scene pops out. The win sound effect plays.<br> After three seconds, the scene will change back to level scene.
    - game win scene
    - ![win scene](readme/game_win.png)

<br>

### Enemies

There are two enemies in the game. The two enemies' mechanisms are a little different.

- Goomba

  - picture
  - ![goomba pic](readme/enemies/goomba.png)
  - mechanism
  1. If the player touches goombas, the player will lose a life.
  2. If the player hits goombas by head, the goomba will die.

     <br>

- Turtle
  - picture
  - ![turtle pic](readme/enemies/turtle.png)
  - mechanism
  1. If the player touches turtles, the player will lose a life.
  2. If the player hits turtles by head, the turtle will become "the rolling turtle", "the rolling turtle"'s speed is much faster and the player is not able to kill the rolling turtle.
  - rolling turtle
  - ![rooling turtle](readme/enemies/roll.png)

<br>

### Question Blocks

There are two kinds of question blocks in the game. To know what is inside the question block, the player has to control mario and hit the block's bottom. <br>
The question blocks look the same, so only when hitting the block will the player know what is inside the block. <br>
- Shroom block
- Coin block

### Animations

The animations ae used on player(mario) and the enemies.

- Player
  - mario idle
  - ![mario idle](readme/animation/marioidle.png)
  - mario jump
  - ![mario jump](readme/animation/mariojump.png)
  - mario run
  - ![mario run](readme/animation/mariorun.png)
  - Big mario idle
  - ![big mario idle](readme/animation/bigmarioidle.png)
  - Big mario jump
  - ![big mario jump](readme/animation/bigmariojump.png)
  - Big mario run
  - ![big mario run](readme/animation/bigmariorun.png)<br>
- Enemies
  - Goomba
  - ![goomba walk](readme/animation/goombawalk.png)
  - Turtle
  - turtle walk
  - ![turtle walk](readme/animation/turtlewalk.png)
  - turtle roll
  - ![turtle roll](readme/animation/turtleroll.png)

<br>

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
The UI is the info bar.

## Advanced Component Description

### Login/Signup function
#### Signup function
- To sign up, click on the signup button on the menu scene.
- menu
- ![menu](readme/signup/menu.png)
- signup button
- ![signup button](readme/signup/signup.png)<br>
- After clicking on the signup button, the scene goes to the signup scene.
- ![signup scene](readme/signup/signup_panel.png)<br>
- Type in email and password and press confirm.
- ![confirm](readme/signup/confirm.png)
- If you wanted to cancel, then press cancel.
- ![cancel](readme/signup/cancel.png)<br>
- After pressing confirm, the scene goes to level scene.
- ![level](readme/scene.png)

<br>

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
