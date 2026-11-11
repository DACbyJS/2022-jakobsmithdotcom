---
title: "WordPress Is Not Dead, but You Might Go Crazy Trying to Kill It"
date: "2026-11-02"
description: "An article clarifying the semantics of the WordPress and whether vibe-coding, code harnesses and agents will replace it."
category: "general"
tags: ["wordpress", "web design", "UX", "systems"]
author: "Jakob Smith"
---

## It Begins

My feeds are pummeling me with hot takes on WordPress and I'm fed up.

So here's a more nuanced take:  
- Software is a cycle, not a linear timeline.  
- No software is dead, if at least one person finds a part of it useful.  
- Some take what works to innovate a better solution, while others make what works, work better.

To me, this is comparable to saying, Rails is dead. 
  
## DHH DID NOT SAY RAILS IS DEAD.

He said "These abstractions don't make quite the same sense in the age of agents". Unfortunately for those of us in the WordPress camp, we don't have an owner with this level of charisma. Even so, the nonstop fire hose of "Software is Dead" hot takes prove that no matter your CEO's charisma buff, someone, somewhere will craft a salient straw-man argument to leverage a sales pitch with anyway.  

At the end of DHH's talk, he made a point I have pondered about WordPress's ecosystem often, "Convention over configuration leads directly to things like token efficiency."

- Is WordPress OOB conventional? Sort of.
- Once the average WordPress project gets underway does it become more coherent? Absolutely not.  
- When an experienced community builds an system of design and code around WordPress abstractions, does it become more conventional? Most of the time, yes.

This is why professional WordPress developers built and adopted structured stacks such as Roots, Themosis, or Lumberjack. These provide dependency management, application structure, templating, routing, ORMs and reusable conventions. Their plugin stack is paid software with years of patches and a growing internal repo of custom solutions extending idempotent filters and actions. They vetted managed hosts and monitoring tools built around that stack.  

Salient? No. But man, do they work well and take alot of smart people working together to build.  

## The Sales Formula

The over-used formula I see in "WordPress is dead" posts reduces a new experience with LLMs to an unscoped business conclusion around making you and your chosen code harness the largest dependency in your stack alongside a newer, smaller group of code practices.

WordPress or AI-gen out of the box is one thing. The system a team builds around it is another.

Some teams accumulate exceptions. Others develop consistent application structure, reusable components, documented workflows, and deliberate dependencies.

The better question for WordPress developers:

"Does WordPress alongside my chosen systems still solve my client's problems if the alternative was a "AI"-based system that the client wants to use without me?"

And even scarier:

"Will a chat harness be that system for my client?"

## In Conclusion

If agents benefit from conventions, why assume a conventional system is the only candidate for replacement? They may also be environments agents can work within best.

That doesn’t guarantee their survival, or justify every dependency. It means the comparison has to include the actual system and people, not just an idea of a WordPress somebody redacted.

Lastly, the standard cuts both ways: When we vibe-code our client's sites have we built something another developer-agent pair can understand, or have we prompted ourselves onto an island of undocumented dependencies which largely includes only ourselves and a novel technology we don't control?

