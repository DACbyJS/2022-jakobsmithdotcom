---
title: "WordPress Is Not Dead, but You Might Go Crazy Trying to Kill It"
date: "2026-11-02"
description: "An article clarifying the semantics of describing a WordPress site and whether vibe-coding, code harnesses and agents will replace it or improve it."
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
- Free software will always have a high rate of adoption and a low barrier to entry, but its lasting value depends on the communities that maintain, adapt, and build around it.

## DHH DID NOT SAY RAILS IS DEAD and When is Software Ready for Tokenomics?

To me, "WordPress is Dead" is comparable to saying, "Rails is Dead".

DDH did not say in a [recent talk](https://www.youtube.com/watch?v=vDjW_dRyKXY) that "Rails is Dead" even though I've seen some folks claim he did and that he's joined the prompt zombies, just check out the comment section of this video.

DHH actually said while pointing to Rails conventions:

> "These abstractions don't make quite the same sense in the age of agents".

Unfortunately for those of us in the WordPress camp, we [don't have an owner with this level of charisma](https://demaree.me/p/the-unworthy-ungrateful-manchildren-of-tech/) which is why I don't have a quote to point too from him in 2026. Even so, the nonstop fire hose of "Software is Dead" hot takes proves that no matter your CEO's charisma buff, someone, somewhere will craft a salient straw-man argument to leverage a sales pitch with anyway.

DHH's conclusion strikes at the heart of the matter though, in both Rails and WordPress ecosystems longevity in AI-times:
We built web software for a specific set of constraints for many years, and then in [December 2025](https://phoson.lat/research/agent-harness-state-of-the-art), those constraints radically changed and we need to address the foundations of our assumptions.

At the end of DHH's talk, he made a point about Rails that could translate into the next chapter of a sector of WordPress's ecosystem,

> "Convention over configuration leads directly to things like token efficiency."

So is WordPress's convention better than its configuration and will it be ready for the [coming wave of tokenomics](https://cloud.google.com/blog/topics/developers-practitioners/guide-to-ai-tokenomics-eleven-principles-for-token-efficient-software-engineering)?

## Is WordPress out of the box conventional? Sort of.

WordPress is a blog software. Its origins remain visible: standard posts are chronological entries with parameterized authors, while pages and custom post types support other kinds of content. ([Learn WordPress](https://learn.wordpress.org/lesson-plan/custom-post-types/))

When you're building a website around authors and dated content, WordPress supplies excellent publishing conventions: contributor roles, drafts, scheduling, revisions, categories, and tags. The software is free to use and modify, with localization support built in. This is why almost every organization on Earth uses it for [their news, blog or publishing web software](https://wplift.com/famous-brands-using-wordpress-as-their-cms/).

It also provides an accessibility foundation and security tools, with no guarantee on adoption.

The code out-of-the-box supports these conventions well and is looked after by 1000s of talented developers and designers.

Automattic even provides out-of-the-box hosting services that make the software a platform and this reduces the technical burden on end users while scoping their ability to extend it with custom code.

But the next step beyond blogging is where the controversy begins: the freedom to extend WordPress into almost anything.

- [WooCommerce](https://woocommerce.com/) is an extension that adds products and commerce, using its own data-access abstractions over WordPress post types and custom tables.
- [Gravity Forms](https://www.gravityforms.com/) is an extension that adds forms, storing form definitions and submissions in dedicated database tables that mirror some post conventions rather than treating everything as transformation of a blog post.
- [HumanKind Funeral Suite](https://github.com/HumanKind-nz/hk-funeral-suite) registers custom post types for caskets, cremation urns, headstones, and memorial keepsakes. I just wanted to drive the point home. 🪦

These extensions can share WordPress's foundation without sharing the same application architecture or storage model. WooCommerce and Gravity Forms demonstrate that distinction: one exposes replaceable data stores, while the other documents dedicated tables for forms and entries. ([WooCommerce data stores](https://developer.woocommerce.com/docs/best-practices/data-management/data-stores/), [Gravity Forms database structure](https://docs.gravityforms.com/database-storage-structure-reference/))

At that point, we're far beyond blogging, but not necessarily outside WordPress's scope: its own documentation explicitly presents it as an application framework, with APIs for custom content types, user management, routing, and more. ([WordPress developer features](https://wordpress.org/about/features/))

My concern isn't extension itself. It's whether those extensions form a coherent system, or leave the next developer explaining to an agent why they didn't implement them and what the agent should or should not do next.

This makes the process of an agent caching your WordPress codebase less efficient and this is where I see the first challenge for the WordPress ecosystem.

## Once the average WordPress project gets underway does it become more coherent? Absolutely not.

## When an experienced community builds an system of design and code around WordPress abstractions, does it become more conventional? [Most of the time, yes.](https://daviderik.com/blog/what-makes-a-wordpress-website-maintainable-long-term/)

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
