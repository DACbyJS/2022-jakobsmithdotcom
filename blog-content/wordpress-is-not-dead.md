---
title: "WordPress Is Not Dead, but You Might Go Crazy Trying to Kill It"
date: "2026-11-02"
description: "An article clarifying the semantics of describing a WordPress site and whether vibe-coding, code harnesses and agents will replace it."
category: "general"
tags: ["wordpress", "web design", "UX", "systems"]
author: "Jakob Smith"
---

## It Begins

My feeds are pummeling me with hot takes on WordPress and I'm fed up.

So here's a more nuanced take:

- Software is a cyclical ecosystem, not a linear timeline.
- No software is dead, if at least one entity finds a part of it useful.
- Some take what works to innovate a better solution, while others make what works, work better.

## DHH DID NOT SAY RAILS IS DEAD.

To me, "WordPress is Dead" is comparable to saying, "Rails is dead".

DDH did not say in a [recent talk](https://www.youtube.com/watch?v=vDjW_dRyKXY) that "Rails is Dead"

DHH actually said "These abstractions don't make quite the same sense in the age of agents".

Unfortunately for those of us in the WordPress camp, we [don't have an owner with this level of charisma](https://demaree.me/p/the-unworthy-ungrateful-manchildren-of-tech/). Even so, the nonstop fire hose of "Software is Dead" hot takes proves that no matter your CEO's charisma buff, someone, somewhere will craft a salient straw-man argument to leverage a sales pitch with anyway.

## Is WordPress ready for Tokenomics?

At the end of DHH's talk, he made a point about Rails that could translate into a sector of WordPress's ecosystem, "Convention over configuration leads directly to things like token efficiency."

So is WordPress convention over configuration ready and the [coming wave of tokenomics](https://cloud.google.com/blog/topics/developers-practitioners/guide-to-ai-tokenomics-eleven-principles-for-token-efficient-software-engineering)?

- Is WordPress out-of-the-box conventional? [Sort of.](https://simplystatic.com/tutorials/is-wordpress-a-headless-cms/)
- Once the average WordPress project gets underway does it become more coherent? [Absolutely not.](https://dev.co/rise-and-fall-of-wordpress)
- When an experienced community builds an system of design and code around WordPress abstractions, does it become more conventional? [Most of the time, yes.](https://daviderik.com/blog/what-makes-a-wordpress-website-maintainable-long-term/)

This is why professional WordPress developers built and adopted structured stacks such as [Roots](https://roots.io/), [Themosis](https://framework.themosis.com/), or [Lumberjack](https://lumberjack.rareloop.com/). These provide dependency management, application structure, templating, routing, ORMs and reusable conventions. Professional devs plugin stacks are paid software with years of patches and a growing internal repo of custom solutions extending idempotent filters and actions. They vetted managed hosts, asset offloaders, video streaming software, and monitoring tools built around each quirk of the WordPress stack.

Salient? No. 
> But man, do those systems work well and take alot of time and smart people working together to build.

## The Sales Formula and Playing Devil's Avocado

The over-used formula I see in "WordPress is dead" posts reduces a new experience with LLMs to an unscoped business conclusion around making you and your chosen code harness the largest dependency in your stack alongside a newer, smaller group of code practices.

WordPress or AI-gen out of the box is one thing. The system a team builds around it is another.

Some teams accumulate exceptions. Others develop consistent application structure, reusable components, documented workflows, and deliberate dependencies.

**The better question for WordPress developers:**

"Does WordPress alongside my chosen systems still solve my client's problems if the alternative was a "AI"-based system that the client wants to use without me?"

**And even scarier:**

"Will a chat harness be that system for my client?"

**And the most terrifying:**

"Once agentic conventions appear and are widely adopted around a website build system, can I migrate my clients over in a way that saves my livelihood?"

## No Need to Be an Island, If Your Client Doesn't Have a Lifeboat

If agents benefit from conventions, why assume a conventional system is the only candidate for replacement? They may also be environments agents can work within best.

That doesn’t guarantee their survival, or justify every dependency. It means the comparison has to include the actual system and people, not just an idea of a WordPress somebody redacted.

Lastly, the standard cuts both ways: When we vibe-code our client's sites have we built something another developer-agent pair can understand, or have we prompted ourselves onto an island of undocumented dependencies which largely includes only ourselves and a novel technology we don't control?
