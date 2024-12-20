## Final Documentation LMSC-261

Michael Heller 

[click here to view project](https://glitch.com/edit/#!/aerial-responsible-meteoroid?path=index.html%3A5%3A8)
For this project, I aimed to create a video/space I could view in VR that went along with a song.  I chose a song that will release in January called "I Can't Escape".  I looked into A-Frame after you mentioned it in class and I began to see what it was all about.  I found glitch.com that allows you to write code in A-Frame and view the VR space real-time while you edit.  I really enjoyed that part of this because I was able to immediately know when something was wrong.  After some digging online and checking out the A-Frame documentationm I found a couple of really great documents that explain A-Frame and the HTML behind it. I found the first one on GitHub, I'll link it [here](https://joshmarinacci.github.io/xr-workshop-assets/cheatsheet.html) 

This GitHub page lays out the basics of A-Frame really nicely, and I was able to start putting walls into the space.  I found a free-to-use brick texture to use [here](https://cat-sopelka.itch.io/dungeon-brick-wall) for the walls and deployed them into the world through <a-box>.  

I also spent a lot of time going through the A-Frame Docs, linked [here](https://aframe.io/docs/1.6.0/introduction/)   I found that it was well laid out and clear.  As I began peicing together the code for the walls, I still wasn't fully understanding how it worked so I pasted my code into ChatGPT and asked it why I wasn't able to get the right dimensions for the walls.  ChatGPT turned out to be rather unhelpful through this whole process and spit out alot of broken code.  It did, however, help me understand what everything was individually through its expalanations; even when the code itself was wrong, it explained what it was doing which I would then reference the A-Frame documentation and take bits and peices from everywhere to figure out exactly what I was doing.  


After making the walls, I decided I wanted some movement in the scene. 
ChatGPT brought up that I could use a site called Piskel to create sprites for free.  I started experiementing with sprite sheets but could not get them to work in A-Frame.  I decided to create sprites and then animate them in A-Frame to get some movement in the scene.  I made a few ghost sprites and used the animation function to tell them coordinates to fly to and how fast.  

Then I wanted to add lyrics on screen in time with the music.  This was a tough thing to figure out at first, but ChatGPT expalined it pefectly and gave me a few lines of working code to start with.  I slowly peiced together the lyrics, chose one of the built-in fonts and colored the words red to fit the dark theme.  The lyrics had to be added by listening to the song and seeing how many seconds had passed exactly when the word was starting.  This took a lot of trial and error but eventually I got them all lined up with the song.  

Now that the lyrics were in, I wanted to add a video.  I tried using it as the source (src) like my other assets, I tried pre-loading the asset, I tried multiple video formats and still the video would not play in the scene.  I eventually got it to display the first frame but decided to put the album art on that screen instead.  I liked how it looked so I kept it.  I then created a second box and colored it gray to put it directly behind the screen so it would appear as a screen.  For some reason, when I added the album art asset, the screen and lyrics starting following the camera.  I LOVED that as an effect so I made sure to not change anything in those assets.  

After finishing up all of that, I decided the room was missing one thing:  a giant twitching face in the wall.  I went back to Piskel and drew up 2 eyeball and 1 mouth sprites.  I then set them to appear on the wall behind the lyrics that you start by facing and I animated them to move.  At first I had them moving alot slower but as I experiemented I found that I liked how they looked when I made the animation loop, the distance traveled short, and the duration short.  This created a creepy shaking effect.

Overall, I am really excited because I feel I have a much deeper understanding of coding after this project.  I spent alot of time reading through the A-Frame documnetation, which I hadn't done with a programming language before.  I feel like I could tackle many other coding languages now and I would know what questions to ask to get started and how to find different ways to troubleshoot.  

I made this project with my best friend in mind, he got me into VR in the first place so I'll definately be sending it to him!  

I had so many screenshots (168 I think!) from ChatGPT that I can't seem to create a PDF that will open with all of them.  Even when I compressed the PDF, it was 62 MB and GitHub would let me upload it.  Here is a link to the Doc with all ChatGPT screenshots, it should be accessable without permissions: [Google Doc](https://docs.google.com/document/d/1BmvncPWBStz5k4cJaih0P1UUB0PLl1mckCOOavndL28/edit?usp=sharing) 
