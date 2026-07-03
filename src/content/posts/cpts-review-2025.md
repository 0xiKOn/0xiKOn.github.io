---
title: "CPTS Review 2025"
pubDatetime: 2025-06-13T00:00:00Z
description: "My review of the HackTheBox Certified Penetration Testing Specialist (CPTS) certification: the exam, the path, and how I prepared."
tags: ["cpts", "certification", "review", "htb"]
featured: true
---

[View on Medium](https://medium.com/@Panzer262?source=post_page---byline--3be7eebc28cf---------------------------------------)

Hey guys! I’m pumped to join the club with my [HTB Certified Penetration Testing Specialist (CPTS)](https://academy.hackthebox.com/exams/3/) cert, and I wanted to jot down my story, while keeping it short. I’ll toss in some prep tips and the extra stuff that got me over the line!

![](/writeups/cpts/01.png)

### Why I Chased CPTS

I was just starting out, and heard about the Certified Ethical Hacker (CEH). Sounded cool. Online reviews on Reddit etc. made me dodge that overpriced, outdated bullet. I completed my eJPT exam in June of ‘23. After a break, I was itching to level up my skills.

Scrolling through all the reviews I had seen on YouTube, Reddit and so on, I was convinced that CPTS was the right way to go. The course takes about 41 days if you’re going full-time (according to HackTheBox), but I’ve seen some people complete it faster, while others might take a few months. Check out [this](https://www.brunorochamoura.com/posts/road-to-cpts/) highly accurate CPTS study time post. I knew the path would demand serious time and effort — those modules are packed with tons of reading. But the idea of diving into real-world simulated environments? That’s what pulled me in. Some of the reviews (summary below each) that got me hyped before jumping into the CPTS path were…

#### OSCP vs CPTS

In short, I was amazed at how CPTS stood out with a more structured, comprehensive course, and challenging labs, though it lacks videos. OSCP includes videos but Robbe found them robotic and slow. For jobs, OSCP is the better step due to recognition. I would also recommend doing the CPTS course first to become a strong hacker, then taking OSCP to break into the industry, noting CPTS covers most OSCP content.

OSCP’s Active Directory and privilege escalation modules are basic (e.g., Kerberos, Kerberoasting, ASREPRoast), while CPTS dives alot deeper, equipping users for real AD pentests. The OSCP exam is 24 hours, while CPTS is non-proctored and you get 10 days to complete the exam plus report. Lastly, The CPTS exam voucher is much cheaper than the OSCP. More on this later…

#### CPTS Guide

This guy was the first person to pass CPTS. **WILD!**

**Golden Tips** I took from this video:

* Take detailed notes with copy-paste commands during the course for exam use.
* Use Academy’s search feature for roadblocks.
* Screenshot and log the exact attack chain during the exam.
* Store all credentials in one spot to avoid mess.
* Attempt the “Attacking Enterprise Networks” module blind first.

#### How to pass CPTS

I watched InfoSec Pat’s videos before the course, and he recently came out with his own experience with tips and tricks. I believe CPTS will become the modern penetration testing standard in the years to come, which is one of the main reasons I went with it. Its **in-depth course** and **real world exam** are unmatched.

### My Experience: The Early Days

Over 18 months of part-time effort — balancing university studies and holiday breaks — I finally finished the Penetration Tester job-role path, compromised over 300 hosts, and crafted a polished, commercial-grade report. Here’s a detailed look at my path, shaped by personal experiences and insights for anyone starting out.

I kicked things off with TryHackMe, building a foundation with paths like “Intro to Cybersecurity” and “Jr. Penetration Tester.” At that point I had also done some easy CTF’s on THM but nothing compared to HTB boxes. I moved to Hack The Box Academy, machines, and seasons. With certs like eJPT, Sec+, and Linux+ under my belt, I was ready for CPTS. I went with the [Student Subscription Plan](https://academy.hackthebox.com/billing/monthly-billing) ($8/Month), which also included the 28 modules in the Penetration Tester path — covering everything from Nmap enumeration to AD attacks and web vulnerabilities — each with skills assessments. I used Arch Linux, which was great for learning Linux basics, but for pentesting, I’d recommend a distro with pre-installed tools to save time, as I had to manually install some tools not in Arch’s repositories.

The path was a challenge. Each module ended with its own mini-exam. When I got stuck, the [Hack The Box Forums](https://forum.hackthebox.com/) and Discord were lifesavers for hints. Most modules were great, but “Password Attacks” was a tough one — long and tricky. My tip? Do “Intro to AD” first, then tackle “Password Attacks.” I agree with this tier list.

![https://www.brunorochamoura.com/posts/road-to-cpts/tier-list.png](/writeups/cpts/02.png)

### The Exam: A Hands-On Challenge

The practical exam was a 10-day grind with breaks, and I snagged 12 out of 14 flags across two attempts. Pentesting a real-world AD network took me 7 days, requiring deep enumeration and exploitation. Some online reviews may mention specific flags, like the ninth flag, but a solid methodology kept me on track.

The exam started with the Rules of Engagement and a connection to the Hack The Box Exam VPN. One surprise was the environment’s few-day reset time. Pivoting and tunneling through networks is a must-have skill. Tools like Ligolo-ng or sshuttle saved me tons of time during the exam. Other techniques (like Meterpreter tunneling) are time-consuming and slow. It was the hardest exam I’ve ever faced, but its hands-on nature made it a true test of skill.

### The Report: Turning Feedback into Success

My first attempt taught me a **hard lesson**: technical skills need to pair with killer reporting. I passed the lab portion but flopped because my report wasn’t commercial-grade. The reviewer’s feedback was pure gold — they stressed clear vulnerability explanations, replicable steps, and professional formatting. They suggested a simple executive summary for non-technical readers, one table per finding on new pages, and tailored remediations. After three days of refining my 130-page report — adding step-by-step commands, high-res screenshots with captions, and formatted output — I resubmitted. The 13-business-day wait was worth it when I passed on the second try.

I stumbled across [SysReptor](https://github.com/Syslifters/HackTheBox-Reporting) two days into writing my report, which just shows why prepping ahead is key! Still, I found Hack The Box’s template report (available in the second last module) super convenient and easy to use for filling in the placeholders. It saved me a ton of time and kept things organized while I was pulling together my commercial-grade report. ChatGPT allowed me to enhance the writing quality in my report. It can make mistakes so be sure to double check before submitting in.

### Tools and Resources That Made the Difference

![Organised Directory](/writeups/cpts/03.png)

```bash
mkdir -p ACME IPT/{Admin,Deliverables,Evidence/{Findings,Scans/{Vuln,Service,Web,'AD Enumeration'},Notes,OSINT,Wireless,'Logging output','Misc Files'},Retest}
```

**Add to host file**

```bash
echo "127.0.0.1 example.com" | sudo tee -a /etc/hosts > /dev/null sudo sed -i '/10.129.234.214/ s/$/ subdomain.example.com/' /etc/hosts || echo "10.129.234.214 status.inlanefreight.local subdomain.example.com" | sudo tee -a /etc/hosts > /dev/null
```

**Tmux**

Tmux was a lifesaver for documenting every step. It saved hours of command outputs in one directory (configurable in its .conf file). The path recommends it, and I used this cheatsheet to prep: <https://tmuxcheatsheet.com/>. Use tools like Greenshot/Flameshot to capture screenshots as well.

**Note-taking (Obsidian & Notion)**

Detailed, navigable notes are key. I recommend making your own while studying CPTS material. Create a separate command cheatsheet for copy-paste commands with placeholders.

**For example:** *msfvenom -p windows/x64/meterpreter/reverse\_tcp LHOST= LPORT= -f exe > reverse\_shell.exe*

For note-taking, I started with [Notion](https://www.notion.com/), loved its flexibility to organize my pages. After completing the path, I switched to [Obsidian](https://obsidian.md/https://obsidian.md/) and imported my notes from Notion. Obsidian’s graph view and markdown links let me connect vulnerabilities and exploits into a knowledge base. It’s hevily customizable too!

**Youtube**

If you are just starting out and looking to improve your Penetration Testing skills, I would recommend watching this video by John Hammond. IppSec’s Unofficial CPTS Playlist is also a must watch.

**Additional HackTheBox Content**

The path has everything you need, but Hack The Box Machines are great for applying module skills. Check [this](https://academy.hackthebox.com/academy-relations) link to match machines to modules. The “Attacking Enterprise Networks” module in my opinion is a smaller version of the exam network, so repeat it to get comfy. Pro labs are long and lack writeups, so I’d stick with AEN. CrackMapExec is a must-have tool for your arsenal. I heard some people recommend doing the “Using CrackMapExec” module to prepare for the exam too.

### CPTS vs. OSCP and Others: Why It Stands Out

After eJPT, I considered PNPT (TCM Security) and eCPPT (INE). Both are practical and respected, but CPTS’s depth blew them away. It’s a goldmine for real-world skills, and completing it covers \~60% of the CBBH path, which has its own great material. Here’s a comparison chart (my own) for intermediate pentesting certs:

![CPTS vs PNPT vs OSCP vs eCPPT](/writeups/cpts/04.png)

Comparing CPTS to certifications like OSCP, I find CPTS shines for its depth and accessibility. OSCP is well-known, but CPTS covers a wider range — web apps, internal networks, and reporting — across 28 modules, vs OSCP’s lab-focused approach. While OSCP do has its fans, CPTS’s structured learning makes it a better fit for me — and it’s more budget-friendly too. The only downside with CPTS is that it lacks videos which other certs do have. But going down the road, I believe CPTS could become the new OSCP.

**Reflections and Advice**

This cert, powered by Hack The Box’s awesome platform, totally changed my view of ethical hacking. It was tough, but the skills in enumeration, exploitation, pivoting, and reporting are now locked in my toolkit. For anyone starting out, I’d recommend a pentesting-friendly distro like ParrotOS, solid note-taking with Obsidian, and diving into HTB’s ecosystem. Big thanks to Hack The Box for this opportunity — I’m stoked to be part of the CPTS community and can’t wait to put these skills to work in the field!
