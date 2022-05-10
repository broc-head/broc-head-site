---
title: 'Customizing my Zsh Shell'
date: '2021-10-19'
---

My First Coding Journey Blog Post:
I love minimal. Until now as a developer, my IDEs and shells have sported the vanilla OS look-and-feel of things, and it has suited me well. As long as my code matches the tutorial, I feel safe.

Somewhere along my **journey**, I appended a line to my _.zshrc_ file that seemed to do nothing else but print an error message at the top of every new Terminal window. It was not much in the way, so the solution passively eluded me.

This week, I accidentally encountered custom zsh scripting via some bonus content in a [course taught by Bibhash Roy about Git that I return to a lot, on Teachable](https://stackskills.com/p/git-complete-mastery-github-100-hands-on-2016-git-guide) (--not an ad, but the course is helpful.) Bibhash codes and colorizes a custom Bash interface which I have not used before, so it was up to google for me to learn the syntax for zsh…(bash looks less fun).

My searches repeatedly led me to oh-my-zsh, a robust theme-and-plugin tool for zsh. After a couple hours spent scrolling through and refreshing source ~/.zshrc with theme after theme (especially after installing certain fonts to fully employ a Powerlevel10k theme), I decided I was doing too much and did not need to use this tool. I didn't need hundreds of themes to choose from, I just needed 1! My own theme. My resolve felt true because Bibhash showed me it could be done with one line of code.

agnoster theme - <Image alt={`Agnoster Theme`} src={`https://en.wikipedia.org/wiki/Z_shell#/media/File:Zsh-agnoster.png`} width={240} height={140}/> 

Early iterations involved one line ascii art 【ツ】, but I was able to settle with a compact output that I think gives me the most basic relevant information I want in a fresh line: a timestamp, current single directory, and a common $ to round it home. This resource for randomizing the background color of the shell provided me a lot of early help.

The train was rolling. I also wanted to display my current Git branch and status. Thankfully git-prompt.sh exists and I was able to use its suggested output for zsh to frame the code I would modify for my end result. Most of my time was spent here studying the code, learning how I could modify it to print out the emojis ✏️ and 🌱 as indicators of changes to my code base instead of its default * or +.

I was in the mindset of creating projects earlier in the week (scrolling through Reddit) and found this nifty color palette resource by Csaba Kissi. Palette 37 guided my color vision to produce:

a printscrn of my 'finished' autumnal theme for zsh with emoji git indicatorsMy end script for my .zshrc file is: (code..does medium have a standard code format?)

setopt PROMPT_SUBST ; PS1='%F{222}%D{%L:%M:%S}%f 🌾 %B%F{203}%1~%b%f%F{197}$(__git_ps1 " %s") %B\$%f%b '

The next step will be to add another plugin that can suggest an autocompletion for the command I am typing.

🌾 is just there for good health, representing another idea I want to build out in the future. Someday I will zsh script a functional emoji to indicate the weather, or maybe even the time all in one. Someday soon!
`
🌾 🌾 🌾